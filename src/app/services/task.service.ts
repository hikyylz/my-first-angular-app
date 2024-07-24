import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';  // bunun nasıl gerçek zamanlı veri ile kullanıldığını IOS dev den biliyorum.
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks(): Observable<Task[]> {
    const tasksObservable = of(TASKS); // bu veri yapısı her değişikliğe uğradığında method yeniden return edecek.
    return tasksObservable;
  }
}
