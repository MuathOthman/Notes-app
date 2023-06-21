import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {CategoriesModel} from "./Shared/categories.model";

@Injectable({
  providedIn: 'root'
})
export class NotesService{
  selectedNoteValue!: CategoriesModel;
  selectedNote = new EventEmitter<CategoriesModel>();

  constructor() { }

  public categories: CategoriesModel[] = [
    new CategoriesModel('Jordan🇯🇴', 'habibi')
  ]

  getCategories(){
    return this.categories;
  }

}
