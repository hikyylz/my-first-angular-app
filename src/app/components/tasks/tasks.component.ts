import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { TaskItemComponent } from "../task-item/task-item.component"; // iki üst folder a gitme yolu.

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent implements OnInit{
  tasks: Task[] = [];
  constructor(private taskService: TaskService){

  }
  ngOnInit(): void{
    // methodun döndüğü veri yapısını bu klass daki tasks e atayarak kullanmamı sağlıyorum.
    this.taskService.getTasks().subscribe((tasks)=>(this.tasks = tasks))
  }
}
