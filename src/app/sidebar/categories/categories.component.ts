import {Component, Input} from '@angular/core';
import {NotesService} from "../../notes.service";
import {CategoriesModel} from "../../Shared/categories.model";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Input() note!: CategoriesModel;


  constructor(private categoriesList: NotesService) {}

  list = this.categoriesList.getCategories()


  button(value:any){
    console.log(value)
    this.list.push(new CategoriesModel(value, ''))
    console.log(this.list)
  }

  selectedOne(data:CategoriesModel){
    this.categoriesList.selectedNote.emit(data)
    const found:number = this.list.indexOf(this.categoriesList.selectedNoteValue)
    console.log('SelectedNote: ' + this.categoriesList.selectedNoteValue)
    console.log('Index number: ' + found)
    console.log(this.categoriesList.categories)
    this.categoriesList.index = found
  }

}
