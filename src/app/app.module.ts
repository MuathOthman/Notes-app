import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { EditsetionComponent } from './editsetion/editsetion.component';
import { TextboxComponent } from './textbox/textbox.component';
import { CategoriesComponent } from './sidebar/categories/categories.component';
import {NotesService} from "./notes.service";
import { CreatecategoriesComponent } from './editsetion/createcategories/createcategories.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchbarComponent,
    EditsetionComponent,
    TextboxComponent,
    CategoriesComponent,
    CreatecategoriesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
