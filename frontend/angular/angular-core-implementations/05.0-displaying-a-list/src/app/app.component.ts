import { Component } from '@angular/core';


interface Task {
description: string;
editing?: boolean;
draft?: string;
}


@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
})
export class AppComponent {
newTask = '';
tasks: Task[] = [];


addTask(): void {
const desc = this.newTask.trim();
if (!desc) return;
this.tasks.push({ description: desc });
this.newTask = '';
}


editTask(index: number): void {
const task = this.tasks[index];
task.editing = true;
task.draft = task.description;
}


saveTask(index: number): void {
const task = this.tasks[index];
const desc = (task.draft ?? '').trim();
if (desc) {
task.description = desc;
}
task.editing = false;
delete task.draft;
}


cancelEdit(index: number): void {
const task = this.tasks[index];
task.editing = false;
delete task.draft;
}


removeTask(index: number): void {
this.tasks.splice(index, 1);
}
}