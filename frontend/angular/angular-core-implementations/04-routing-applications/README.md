# 04-Routing-Applications

## Problem Statement
This project demonstrates how to implement **Angular Routing** from scratch. It creates a Single Page Application (SPA) where navigation between multiple components (Personal Details, Academic Details, Future Goals) happens without reloading the entire page.

---

## Tech Stack
- **Framework:** Angular 17
- **Language:** TypeScript, HTML, CSS
- **Tools:** Angular CLI, Node.js

---

## Step-by-Step Setup

```bash
# 1. Create a New Angular Project with Routing
npx -p @angular/cli@17 ng new app4 --routing=true --style=css --no-standalone
cd app4

# 2. Generate Components
ng generate component personal-details
ng generate component academic-details
ng generate component future-goals

# 3. Run the Application
ng serve -o
```

This creates 3 components with `.ts`, `.html`, `.css` files.

---

## Code Snippets

### **1. Configure Routes – `src/app/app-routing.module.ts`**

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AcademicDetailsComponent } from './academic-details/academic-details.component';
import { FutureGoalsComponent } from './future-goals/future-goals.component';

const routes: Routes = [
  { path: 'personal', component: PersonalDetailsComponent },
  { path: 'academic', component: AcademicDetailsComponent },
  { path: 'future', component: FutureGoalsComponent },
  { path: '', redirectTo: '', pathMatch: 'full' } // default empty
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

### **2. Main Layout – `src/app/app.component.html`**

```html
<div class="app-container">
  <h1>Routing Application</h1>

  <nav>
    <a routerLink="/personal" routerLinkActive="active">Personal Details</a>
    <a routerLink="/academic" routerLinkActive="active">Academic Details</a>
    <a routerLink="/future" routerLinkActive="active">Future Goals</a>
  </nav>

  <router-outlet></router-outlet>
</div>
```

### **3. Personal Details – `src/app/personal-details/personal-details.component.html`**

```html
<div class="content-block">
  <h2>Personal Details</h2>
  <div class="content-inner">
    <p><strong>First Name:</strong> Uday</p>
    <p><strong>Last Name:</strong> Somapuram</p>
    <p><strong>Phone:</strong> +91-8522836109</p>
    <p><strong>Email:</strong> 229x1a2856@gprec.ac.in</p>
    <p><strong>Aadhar Number:</strong> XXXX-XXXX-XXXX</p>
    <p><strong>Blood Group:</strong> B+</p>
  </div>
</div>
```

### **4. Academic Details – `src/app/academic-details/academic-details.component.html`**

```html
<div class="content-block">
  <h2>Academic Details</h2>
  <div class="content-inner">
    <table>
      <tr>
        <th>Qualification</th>
        <th>CGPA / %</th>
        <th>School / College</th>
      </tr>
      <tr>
        <td>B.Tech (CSE)</td>
        <td>8.43* CGPA</td>
        <td>G. Pulla Reddy Engineering College</td>
      </tr>
      <tr>
        <td>Intermediate (MPC)</td>
        <td>94%</td>
        <td>Sri Chaitanya Junior Kalasala</td>
      </tr>
      <tr>
        <td>10th (CBSE)</td>
        <td>85.2%</td>
        <td>Montessori Indus English Medium High School</td>
      </tr>
    </table>
  </div>
</div>
```

### **5. Future Goals – `src/app/future-goals/future-goals.component.html`**

```html
<div class="content-block">
  <h2>Future Goals</h2>
  <div class="content-inner">
    <ul>
      <li>Complete B.Tech with good grades</li>
      <li>Crack GATE or other competitive exams</li>
      <li>Secure a job in Data Science / AI / ML</li>
      <li>Contribute to open-source projects</li>
      <li>Build scalable systems and impactful products</li>
    </ul>
  </div>
</div>
```

### **6. App Module – `src/app/app.module.ts`**

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AcademicDetailsComponent } from './academic-details/academic-details.component';
import { FutureGoalsComponent } from './future-goals/future-goals.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    AcademicDetailsComponent,
    FutureGoalsComponent
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

### **7. Optional CSS – `src/styles.css`**

```css
/* Main layout */
.app-container {
  text-align: center;
  margin-top: 20px;
  font-family: Arial, sans-serif;
}

/* Navigation links */
nav {
  margin: 20px 0;
}
nav a {
  margin: 0 15px;
  text-decoration: underline;
  color: blue;
  cursor: pointer;
}
nav a.active {
  font-weight: bold;
  color: darkblue;
}

/* Routed content */
.content-block {
  margin-top: 30px;
}
.content-inner {
  display: inline-block;
  text-align: left;
  line-height: 1.8;
}

/* Academic table */
table {
  border-collapse: collapse;
  margin: auto;
}
table, th, td {
  border: 1px solid black;
  padding: 10px 20px;
}
th {
  background-color: #f2f2f2;
}
```

---

## 📌 Routing in Angular 
### 🔹 Definition
Routing in Angular enables **single-page applications (SPA)** by allowing navigation between multiple views/components without reloading the entire page.

### 🔹 Theory
- Uses the Angular Router to map URLs to components.  
- `<router-outlet>` acts as a placeholder where routed components are rendered.  
- `routerLink` directive binds navigation links to defined routes.  
- Routes are declared in `app-routing.module.ts` and imported into `app.module.ts`.  

### 🔹 Simple Syntax
**HTML (navigation links + outlet):**
```html
<ul>
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="/about">About Us</a></li>
</ul>
<router-outlet></router-outlet>
```

**TypeScript (routes config):**
```ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];
```

### 🔹 Advantages
- ✅ No full page reload → faster navigation  
- ✅ Clean separation of views/components  
- ✅ Maintains application state during navigation  
- ✅ Easy to scale for large SPAs  

### 🔹 Disadvantages
- ❌ Initial learning curve for beginners  
- ❌ More setup compared to static navigation  
- ❌ Can get complex with nested/guarded routes  

### 🔹 Real-Life Example
E-commerce site:  
- `/products` → Product list  
- `/cart` → Shopping cart  
- `/checkout` → Payment page  

Navigation happens seamlessly inside the same SPA **without refreshing the browser**.

---

### Example

```html
<ul>
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="/about">About Us</a></li>
</ul>
<router-outlet></router-outlet>
```

```ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];
```
---

## License
This project is for **educational purposes only**.
