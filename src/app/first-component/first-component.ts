import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIconModule],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent {

   priority: string = '';
   task: string = '';
   taskError:boolean = false;
   prirorityError:boolean = false;
   showmodal:boolean = false;
   editTaskData: any = null
   tasks: any[]=[];
   searchtext: string='';
   filteredTasks: any[] = [];
 
 addTask(){

    this.taskError = false;
    this.prirorityError = false;
  if(!this.task){
    this.taskError = true;
  }
  if(!this.priority){
    this.prirorityError = true;
  }

  if(this.taskError || this.prirorityError){
    return;
  }

  const newTask={
    id:this.generateUniqueId(),
    name:this.task,
    status:this.priority
   };

    this.tasks.push(newTask);
    this.filteredTasks = [...this.tasks];
    this.task = '';
    this.priority = '';
 }
  generateUniqueId(): number {
    return Date.now() + Math.floor(Math.random() * 1000);
  }

  edittask(task:any){

    this.editTaskData={...task};
    this.showmodal=true;

  }
  Deletetask(id:number){

    this.tasks = this.tasks.filter(t=>t.id !==id);
    this.filteredTasks = [...this.tasks];
    this.filteredTasks = [...this.tasks];
    if(this.editTaskData.id){
      this.showmodal=false;
    }
  }

  updateTask(){

    const index = this.tasks.findIndex(t=>t.id===this.editTaskData.id);
    //console.log("index",index);
    if(index !== -1){
      this.tasks[index]= this.editTaskData;
      this.filteredTasks = [...this.tasks];
    }
    this.closeModal();
  }

  closeModal(){
    this.showmodal = false;
    this.editTaskData = null;
  }

  searchtask(){
  
    if(!this.searchtext){
      this.filteredTasks = [...this.tasks];
      return;
    }

     this.filteredTasks = this.tasks.filter(t =>
    t.name.toLowerCase().includes(this.searchtext.toLowerCase())
  );

  }
  clearSearch() {
  this.searchtext = '';
  this.filteredTasks = [...this.tasks];
}

}
