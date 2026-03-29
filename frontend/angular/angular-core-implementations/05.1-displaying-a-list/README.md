# 05.1 – Displaying a List in Angular

## Problem Statement
Create a simple Angular application that displays a list of names using the `*ngFor` directive. The app should:
- Show a heading.
- Display names inside an unordered list (`<ul><li></li></ul>`).
- Use Angular's structural directive `*ngFor` to iterate over an array.

---

## Step 1: Create the Project
```bash
npx @angular/cli@17 new 05.1-displaying-a-list --routing=false --style=css --no-standalone
cd 05.1-displaying-a-list
```

---

## Step 2: app.component.ts
```ts
// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: string[] = ['Anil', 'Sam', 'Peter', 'Bruce'];
}
```

---

## Step 3: app.component.html
```html
<!-- src/app/app.component.html -->
<h1>For Loop in Angular (Simple Array)</h1>

<ul>
  <li *ngFor="let item of data">
    {{ item }}
  </li>
</ul>
```

---

## Step 4: app.module.ts
```ts
// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

---

## Step 5: Run the App
```bash
ng serve -o
```
**Output in browser:**
```
For Loop in Angular (Simple Array)

• Anil
• Sam
• Peter
• Bruce
```

---

## About `*ngFor`

### Definition
`*ngFor` is a structural directive in Angular used to iterate over a collection (array, list, or iterable) and render each item dynamically.

---

### General Syntax
```html
<li *ngFor="let item of items">
  {{ item }}
</li>
```
- `let item of items` → Creates a variable `item` for each element in the array `items`.

---

### Theory
- Part of **CommonModule**.
- Works by cloning the element for each item in the collection.
- Can also track indexes and unique identifiers:
```html
<li *ngFor="let user of users; let i = index; trackBy: trackByFn">
  {{ i }} - {{ user.name }}
</li>
```

---

### Advantages
- Automatically updates UI when data changes.
- Simplifies DOM creation for dynamic lists.
- Reduces repetitive code.

### Disadvantages
- Can impact performance for very large lists.
- Requires proper `trackBy` for optimization.

---

### Real-Life Example
1. E-commerce: Displaying products list.
2. Social media: Rendering comments or posts.
3. Education: Showing list of enrolled students.
