import { DetailService } from './services/detail.service';
import { NodeService } from './services/node.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeModule } from 'angular-tree-component';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NodeDetailsComponent } from './node-details/node-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    HeaderComponent,
    FooterComponent,
    NodeDetailsComponent
  ],
  imports: [
    BrowserModule,
    TreeModule.forRoot(),
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [NodeService, DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
