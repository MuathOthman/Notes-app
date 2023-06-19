import { Component } from '@angular/core';
import {NotesService} from "../../notes.service";

@Component({
  selector: 'app-createcategories',
  templateUrl: './createcategories.component.html',
  styleUrls: ['./createcategories.component.css']
})
export class CreatecategoriesComponent {
  constructor(private notes: NotesService) {}

  description(data:any){
    const found = this.notes.categories.findIndex(item => item.name === this.notes.selectedNote)
    console.log(found)
  }

}
