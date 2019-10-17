import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { arrayData } from './array-form.model';
// import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent implements OnInit {

  public regForm: FormGroup;
  items:FormArray;
  arrayData: any;
  constructor(private fb: FormBuilder) { }
  displayedColumns: string[] = ['Name', 'Hobbie', 'FavoriteDestination', 'FavoriteFood'];
  test: boolean;
  dataSource: arrayData[];
ngOnInit() {
    this.regForm = this.fb.group({
      Name: new FormControl('', Validators.required),
      Hobbie: new FormControl('', [Validators.required]),
      FavoriteDestination:new FormControl('', [Validators.required]),
       FavoriteFood: new FormControl('', Validators.required),
       items: this.fb.array([])
  })
  this.addForm();
}
get itemforms() {
  return this.regForm.get('items') as FormArray
  }
  addForm() {
    
      const item = this.fb.group({ 
          Name: [],
          Hobbie: [],
          FavoriteDestination: [],
          FavoriteFood: []
        })
      
        this.itemforms.push(item);
        console.log("item----",item);
        console.log("itemforms",this.itemforms);
        return this.regForm.get('items') as FormArray
}

deleteForm(i) {
  this.itemforms.removeAt(i)
  console.log("going to be deleted",i);
  if(this.test){
    this.dataSource=this.regForm.value.items;
  }

}
showForm(){
  console.log(this.regForm.value);
  this.dataSource =this.regForm.value.items;
  this.test=true;
}
 }
