import { Component } from '@angular/core';
import {NotesService} from "../../notes.service";

@Component({
  selector: 'app-createcategories',
  templateUrl: './createcategories.component.html',
  styleUrls: ['./createcategories.component.css']
})
export class CreatecategoriesComponent {
  editMode: boolean = false;
  constructor(public notes: NotesService) {}

  list = this.notes.categories

  enableEdit(){
    this.editMode = true;
  }

  description(data:any){
    this.editMode = false;
    const found:number = this.list.indexOf(this.notes.selectedNoteValue)
    console.log('SelectedNote: ' + this.notes.selectedNoteValue)
    console.log('Index number: ' + found)
    console.log(this.notes.categories)
    //this.list[found] = {
    //  name:'',
    //  description: data
    //}
    this.notes.categories[found] = {
      name: this.notes.selectedNoteValue.name,
      description: data
    }

  }

}
