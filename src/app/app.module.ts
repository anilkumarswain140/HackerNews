import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import {HttpClientModule} from '@angular/common/http'
import { DomainPipe } from './shared/domain.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PostItemComponent,
    PostListComponent,
    DomainPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
