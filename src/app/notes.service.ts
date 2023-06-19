import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {CategoriesModel} from "./Shared/categories.model";

@Injectable({
  providedIn: 'root'
})
export class NotesService{
  selectedNote = new EventEmitter<CategoriesModel>();

  constructor() { }

  public categories: CategoriesModel[] = []

  getCategories(){
    return this.categories;
  }

}
