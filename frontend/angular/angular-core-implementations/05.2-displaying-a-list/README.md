# Angular For Loop in Table (task2)

## Problem Statement
Create an Angular project to display a list of users in a **table format** using the `*ngFor` directive. Each user has a name, age, and email.

---

## Steps & Code

### 1. Create Project
```bash
npx @angular/cli@17 new task2 --routing=false --style=css --no-standalone
cd task2
```

### 2. `src/index.html`
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>task2</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

### 3. `src/app/app.module.ts`
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 4. `src/app/app.component.ts`
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    { name: 'Anil', age: 25, email: 'xyz@test.com' },
    { name: 'Sam',  age: 19, email: 'xyz@test.com' },
    { name: 'Tony', age: 34, email: 'xyz@test.com' },
    { name: 'Kelly', age: 45, email: 'xyz@test.com' }
  ];
}
```

### 5. `src/app/app.component.html`
```html
<h1>For Loop in Angular</h1>

<table border="1" cellpadding="8">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let user of users">
      <td>{{ user.name }}</td>
      <td>{{ user.age }}</td>
      <td>{{ user.email }}</td>
    </tr>
  </tbody>
</table>
```

### 6. `src/app/app.component.css`
```css
h1 {
  color: #2c3e50;
  margin-bottom: 12px;
  text-align: center;
}

table {
  border-collapse: collapse;
  width: 60%;
  margin: auto;
}

th, td {
  padding: 8px;
  text-align: left;
}
```

---

## Running the Project
```bash
npm install
ng serve --open
```
The app will open at: **http://localhost:4200**

---

## What is `*ngFor`?
- An Angular **structural directive** used to loop over arrays or lists.
- It repeats an HTML block for each item in the collection.

### Syntax
```html
<tr *ngFor="let item of items">{{ item }}</tr>
```

---

## Advantages
- Simple and declarative syntax.
- Automatically updates the DOM on data changes.
- Works seamlessly with arrays of objects.

### Disadvantages
- Not ideal for huge datasets (can impact performance).
- Requires a `trackBy` function for optimized rendering in large lists.

---

## Real-Life Examples
- Displaying **employee details** in HR dashboards.
- Listing **products in an e-commerce website**.
- Rendering **student marksheets dynamically**.

---
