# 🔗 Angular Lab Experiment – Adding Services

## 🎯 Problem Statement
In Angular, components are designed for **UI and presentation logic**.  
However, when you mix data management and state handling directly into components, the code becomes **messy, tightly coupled, and difficult to reuse**.  

This experiment demonstrates how to use **Angular Services** to manage shared state between components:

- **Student Component** → Adds students and their activities.  
- **Faculty Component** → Views the list of students added.  
- Both communicate via a shared **StudentsService**, which acts as the **single source of truth**.  

---

## ⚙️ Tech Stack
- Angular 17  
- TypeScript  
- HTML / CSS  

---

## 🚀 Step-by-Step Setup

### 1️⃣ Create Angular Project
```bash
npx -p @angular/cli@17 ng new 06-adding-services --routing=true --style=css --no-standalone
cd 06-adding-services
code .
```

### 2️⃣ Generate Components and Service
```bash
ng g c faculty
ng g c student
ng g c exp
ng g s students
```

### 3️⃣ Update AppModule  
📄 `src/app/app.module.ts`
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';
import { ExpComponent } from './exp/exp.component';

@NgModule({
  declarations: [
    AppComponent,
    FacultyComponent,
    StudentComponent,
    ExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### 4️⃣ Configure Routing  
📄 `src/app/app-routing.module.ts`
```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ExpComponent } from './exp/exp.component';

const routes: Routes = [
  { path: 'ff', component: FacultyComponent },
  { path: 'ss', component: StudentComponent },
  { path: '', redirectTo: '/ff', pathMatch: 'full' },
  { path: '**', component: ExpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

### 5️⃣ App Shell (Navigation + Router)
📄 `src/app/app.component.html`
```html
<nav>
  <div style="background-color: green; font-size: 40px;">
    <a routerLink="/ff">Faculty Component</a>&nbsp;&nbsp;
    <a routerLink="/ss">Student Component</a>
  </div>
</nav>
<router-outlet></router-outlet>
```

---

### 6️⃣ Students Service (Shared State)
📄 `src/app/students.service.ts`
```ts
import { Injectable } from '@angular/core';
type Student = { name: string; acty: string };

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private stulist: Student[] = [];

  addStudent(stuname: string, activity: string): void {
    if (!stuname?.trim() || !activity?.trim()) return;
    this.stulist.push({ name: stuname.trim(), acty: activity.trim() });
  }

  getAllStudents(): Student[] {
    return this.stulist;
  }
}
```

---

### 7️⃣ Student Component (Add Students)
📄 `src/app/student/student.component.html`
```html
<h2>Add Student</h2>
<label>Student name</label>
<input type="text" placeholder="Enter student name" #stuname /><br />
<label>Event Name</label>
<input type="text" placeholder="Enter activity name" #activity /><br /><br />
<button (click)="addStudent(stuname.value, activity.value)">
  Add student
</button>
<p *ngIf="stulist.length">Current count: {{ stulist.length }}</p>
```

📄 `src/app/student/student.component.ts`
```ts
import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  stulist: { name: string; acty: string }[] = [];

  constructor(private studentService: StudentsService) {}

  ngOnInit(): void {
    this.stulist = this.studentService.getAllStudents();
  }

  addStudent(stuname: string, activity: string): void {
    this.studentService.addStudent(stuname, activity);
    alert('Student added Successfully');
    this.stulist = this.studentService.getAllStudents(); // refresh
  }
}
```

---

### 8️⃣ Faculty Component (View Students)
📄 `src/app/faculty/faculty.component.html`
```html
<ul>
  <li *ngFor="let item of stulist">{{ item.name }} {{ item.acty }}</li>
</ul>
```

📄 `src/app/faculty/faculty.component.ts`
```ts
import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  stulist: { name: string; acty: string }[] = [];

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.stulist = this.studentsService.getAllStudents();
  }
}
```

---

### 9️⃣ Fallback Component (Invalid Routes)
📄 `src/app/exp/exp.component.html`
```html
<h3>Page not found</h3>
<p>Use the navigation links above.</p>
```

---

### 🔟 Run the App
```bash
ng serve --open
```
- Default opens Faculty (`/ff → empty list`).  
- Switch to Student (`/ss`) and add students.  
- Go back to Faculty to see the list shared via the service.  

---

# 📚 Understanding Angular Services (Version-1)

### 🔹 What is a Service?
- A class with logic/data that can be reused across components.  
- Promotes **Separation of Concerns**: UI in components, logic in services.  

### 🔹 Why Use Services?
- Shared State: Sync data between components.  
- Reusability: One service can serve multiple components.  
- Maintainability: Clean separation of UI and business logic.  

### 🔹 How Do They Work? (Dependency Injection)
- Angular creates one instance (**singleton by default**).  
- Components declare dependencies in their constructor.  
- Angular’s Injector provides the required service instance.  

**Syntax:**
```ts
constructor(private myService: MyService) {}
```

✅ Advantages  
- Shared state across components.  
- Cleaner, modular architecture.  
- Easy to test.  
- Encourages DRY (Don’t Repeat Yourself).  

⚠️ Disadvantages  
- Overusing services can cause tight coupling.  
- Large services become “God classes” if not modularized.  
- Must design carefully to avoid state conflicts.  

---

# 📚 Understanding Angular Services (Version-2 – Beginner Friendly)

### 🔹 What is a Service?
A **Service** is just a simple **TypeScript class** that holds **data or logic**.  
Instead of writing all logic in components, we put it in services.  
👉 This makes our code **neat and reusable**.  

### 🔹 Why use Services?
- Share data between components.  
- Reduce code duplication.  
- Keep UI (components) and logic (services) separate.  

### 🔹 How do Services work? (Dependency Injection)
Angular automatically creates **one copy** of the service (singleton).  
When a component needs it, Angular **injects** it using the constructor.  

**Example:**
```ts
constructor(private myService: MyService) {}
```

### ✅ Advantages
- Shared state across components.  
- Cleaner, modular code.  
- Easy to test and maintain.  
- Encourages reusability.  

### ⚠️ Disadvantages
- If services grow too big, they become hard to manage.  
- Overusing them can create tight coupling.  
- Must be designed carefully to avoid confusion.  

### 📝 Notes
- By default, services are **singletons** (`providedIn: 'root'`).  
- Keep services **small and focused**.  
- Best use cases: **state management, API calls, utilities, business logic**.  
- Without services, components would become **overloaded and messy**.  

---

💡 You can say:  
> "Services let components share data and logic.  
They are injected using Angular's dependency injection system, making apps clean and reusable."
