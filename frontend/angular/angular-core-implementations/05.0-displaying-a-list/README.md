# 05.0-displaying-a-list

# To-Do List Application (CRUD Version)

## Problem Statement
Students, in tomorrow's lab, you are required to implement a **To-Do List** simple application using Angular. The user should be able to:
- Create tasks
- View tasks in a table format
- Edit tasks
- Delete tasks

Apply CSS styling to your application.

---

## Project Setup
```bash
npx -p @angular/cli@17 ng new todo-crud --routing=true --style=css --no-standalone
cd todo-crud
ng serve
```

---

## src/app/app.module.ts
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

---

## src/app/app.component.ts
```typescript
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
```

---

## src/app/app.component.html
```html
<div class="container">
  <h1>To-Do List</h1>

  <div class="input-row">
    <input [(ngModel)]="newTask" placeholder="Enter new task" />
    <button (click)="addTask()">Add Task</button>
  </div>

  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Task</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let task of tasks; let i = index">
        <td>{{ i + 1 }}</td>

        <td>
          <span *ngIf="!task.editing">{{ task.description }}</span>
          <input *ngIf="task.editing" [(ngModel)]="task.draft" />
        </td>

        <td>
          <button *ngIf="!task.editing" (click)="editTask(i)">Edit</button>
          <button *ngIf="task.editing" (click)="saveTask(i)">Save</button>
          <button *ngIf="task.editing" (click)="cancelEdit(i)">Cancel</button>
          <button (click)="removeTask(i)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## src/app/app.component.css
```css
.container {
  width: 600px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}

.input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

input, button {
  padding: 6px 10px;
}

button {
  cursor: pointer;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #333;
  padding: 8px 10px;
  text-align: left;
}

th {
  background: #f2f2f2;
}
```

---

## Running the Application
```bash
ng serve
```
Then open **http://localhost:4200/** in your browser.

---

## What is CRUD?
CRUD stands for:
- **Create** – Add new tasks.
- **Read** – Display tasks.
- **Update** – Edit existing tasks.
- **Delete** – Remove tasks.

This application demonstrates all four CRUD operations in a simple to-do list format.

---

## `*ngFor` Explanation
- `*ngFor` is an Angular directive used to loop over arrays.
- Syntax: `*ngFor="let item of items; let i = index"`
- Here, it iterates over `tasks` and gives each task and its index.

### Advantages
- Simple iteration over lists
- Automatically updates the DOM when data changes

### Disadvantages
- Can be inefficient for very large lists (use trackBy to optimize)

### Real-Life Example
- Displaying a shopping cart list
- Rendering student attendance
- Listing tasks in this To-Do app

---

