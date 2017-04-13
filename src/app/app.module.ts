// Core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// App Routes
import { APP_ROUTING } from './app.routes';
// App Services
import { AssetsListService } from './services/assets-list.service';
// App modules
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AssetsListComponent } from './components/assets-list/assets-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AssetsListComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    AssetsListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
