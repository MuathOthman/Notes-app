import {Component, Input, OnInit} from '@angular/core';
import {NotesService} from "../notes.service";
import {CategoriesModel} from "../Shared/categories.model";

@Component({
  selector: 'app-editsetion',
  templateUrl: './editsetion.component.html',
  styleUrls: ['./editsetion.component.css']
})
export class EditsetionComponent implements OnInit{
  selectedNotes!: CategoriesModel;
  constructor(public categoriesList: NotesService) {}

  ngOnInit() {
    this.categoriesList.selectedNote.subscribe((notes: CategoriesModel) => {
      this.selectedNotes = notes;
      this.categoriesList.selectedNoteValue = notes;
      console.log(notes)
    });
  }
}
