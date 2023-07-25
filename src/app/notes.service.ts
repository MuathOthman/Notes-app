import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {CategoriesModel} from "./Shared/categories.model";

@Injectable({
  providedIn: 'root'
})
export class NotesService{
  index!:number;
  selectedNoteValue!: CategoriesModel;
  selectedNote = new EventEmitter<CategoriesModel>();

  constructor() { }

  public categories: CategoriesModel[] = [
    new CategoriesModel('June12', 'Semmame'),
    new CategoriesModel('June13', 'Some text here'),
  ]

  getCategories(){
    return this.categories;
  }

}
