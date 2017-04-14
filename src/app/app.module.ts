// Core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// App Routes
import { APP_ROUTING } from './app.routes';
// App Services
import { AssetsService } from './services/assets.service';
// Third party modules
import { ChartsModule } from 'ng2-charts';
// App modules
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AssetsListComponent } from './components/assets-list/assets-list.component';
import { AssetDetailsComponent } from './components/asset-details/asset-details.component';
import { ChartsComponent } from './components/charts/charts.component';
import { CommentsComponent } from './components/comments/comments.component';
// App pipes
import { FilterPipe } from './pipes/filter.pipe';
import { ObjectIteratePipe } from './pipes/object-iterate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AssetsListComponent,
    AssetDetailsComponent,
    ChartsComponent,
    CommentsComponent,
    FilterPipe,
    ObjectIteratePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    APP_ROUTING
  ],
  providers: [
    AssetsService,
    {provide: LOCALE_ID, useValue: "en-Us"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
