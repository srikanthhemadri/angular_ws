import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { routing }  from './app.routing';
import { AppComponent } from './app.component';
import { ViewComponent } from './View/view.component';
import { ViewFilterPipe } from './View/view-filter.pipe';
import { DialogComponent } from './DialogBox/dialog.component';
import { DialogService } from './DialogBox/dialog.service';
import { identifierModuleUrl } from '@angular/compiler';
import { MedsDataService } from './data.service';
import { EditComponent } from './Edit/edit.component';
import { AddComponent } from './Add/add.component';

@NgModule({
  declarations: [
    AppComponent, 
    ViewComponent,
    ViewFilterPipe,
    DialogComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [MedsDataService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
