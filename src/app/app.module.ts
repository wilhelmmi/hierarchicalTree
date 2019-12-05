import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeModule } from 'angular-tree-component';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TreeModule.forRoot(),
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
