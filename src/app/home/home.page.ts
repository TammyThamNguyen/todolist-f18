import { Component } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  title:string ='Todo List';
  fruits:Array<string> = [];
  taskInput : string ='';
  listTitle = 'Todo List';
  constructor(public dataService: DataService){

  }


addTask(){
  if (this.taskInput.length>0){
    this.fruits.push(this.taskInput);
    this.taskInput ='';
    this.dataService.storeList(this.fruits)//save data
    .then( (response ) => {
      //sucess
    })
    .catch( (error) => {
      console.log( error);
    });
  }
}

readTasks(){
  this.dataService.loadList()
  .then( ( response ) => {
    if (response !== null){
      this.fruits = <Array<string>>response;
    }
  })
  .catch( ( error ) => {
    console.log(error);
  })
}
}
