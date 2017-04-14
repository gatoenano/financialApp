// Core modules
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent implements OnInit {
  // current asset id
  @Input() currentAssetId:number;

  showTextArea:boolean;
  addComment:string;
  modifyComment:Array<boolean> = [];
  deleteComment:string;
  assetComments:Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.loadComments();
  }
  ngOnChanges() {
    this.loadComments();
  }
  // saves the comment
  saveComment() {
    this.assetComments.unshift({assetId: this.currentAssetId, comment: this.addComment, comment_date: new Date()});
    this.saveDataToLocalStorage();
  }
  // saves the data on comment change
  changeComment() {
    this.saveDataToLocalStorage();
  }
  // saves the data to the localStorage
  saveDataToLocalStorage() {
      localStorage.setItem(`localAssetsComments-${this.currentAssetId}`, JSON.stringify(this.assetComments));
  }
  // load comments at init
  loadComments() {
    if(localStorage.getItem(`localAssetsComments-${this.currentAssetId}`)) {
      this.assetComments = JSON.parse(localStorage.getItem(`localAssetsComments-${this.currentAssetId}`));
    }
  }
  // removes a comment
  removeComment(index:number) {
    this.assetComments.splice(index, 1);
    this.saveDataToLocalStorage();
  }
}
