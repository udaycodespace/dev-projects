# 02 – Implementing Components

## 📌 Problem Statement
Implement an Angular 17 **module-based** project that demonstrates component-based development: a banner image on top and three components arranged in a single responsive row — **My Story**, **Profile**, and **Personal Info**. The goal: clean layout, modular design, and practical component patterns suitable for labs and portfolio demos.

---

## ⚙️ Tech Stack
- **Framework**: Angular 17 (module-based with `--standalone=false`)  
- **Language**: TypeScript, HTML, CSS  
- **Tooling**: Angular CLI (npx @angular/cli@17), Node.js, npm  
- **Editor**: Visual Studio Code (recommended extensions: Angular Language Service, ESLint, Prettier)

---

## 🛠️ Step-by-Step Setup & Commands

```bash
# 1) Create a module-based Angular project so AppModule is generated
npx @angular/cli@17 new experiment2 --standalone=false --routing=false --style=css
cd experiment2

# 2) Generate components (explicit full command + shorthand)
# Full:
ng generate component banner
ng generate component comp1
ng generate component comp2
ng generate component comp3

# Shorthand (equivalent):
ng g c banner
ng g c comp1
ng g c comp2
ng g c comp3

# 3) (Optional) Generate any additional component by name:
ng generate component <component-name>
# Example:
ng generate component hello

# 4) Add assets:
# Put images into src/assets/
# src/assets/banner.jpg
# src/assets/uday.jpg

# 5) Serve the app locally
ng serve -o
```

> ✅ **Note:** The explicit command `ng generate component <component-name>` was added because the CLI usage is essential and you specifically asked for it. The shorthand `ng g c <name>` does the same thing and is commonly used by developers to save time.

---

## 📂 Project Structure (recommended)
```
src/
 ├── app/
 │   ├── banner/
 │   │   ├── banner.component.ts
 │   │   ├── banner.component.html
 │   │   ├── banner.component.css
 │   ├── comp1/
 │   │   ├── comp1.component.ts
 │   │   ├── comp1.component.html
 │   │   ├── comp1.component.css
 │   ├── comp2/
 │   ├── comp3/
 │   ├── app.component.html
 │   ├── app.component.css
 │   └── app.module.ts
 ├── assets/
 │   ├── banner.jpg
 │   └── uday.jpg
 └── styles.css
```

---

## 🖼️ Layout Implementation (copy-paste ready)

### `src/app/app.component.html`
```html
<app-banner></app-banner>

<main class="container">
  <section class="grid">
    <app-comp1></app-comp1>
    <app-comp2></app-comp2>
    <app-comp3></app-comp3>
  </section>
</main>
```

### `src/app/app.component.css`
```css
.container {
  max-width: 1100px;
  margin: 24px auto;
  padding: 0 16px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

@media (max-width: 900px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .grid { grid-template-columns: 1fr; }
}

app-comp1, app-comp2, app-comp3 {
  display: block;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
```

---

## 🎨 Component Implementation (copy-paste for each file)

### Banner Component
**`src/app/banner/banner.component.html`**
```html
<header class="banner">
  <img src="assets/banner.jpg" alt="Banner" class="banner-img">
</header>
```

**`src/app/banner/banner.component.css`**
```css
.banner {
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
}

.banner-img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
```

### Comp1 – My Story
**`src/app/comp1/comp1.component.html`**
```html
<h2>My Story</h2>
<ul class="list">
  <li>Passionate about Data Science.</li>
  <li>Loves AI/ML projects.</li>
  <li>Exploring innovative solutions.</li>
  <li>Enjoys learning new technologies.</li>
</ul>
```

**`src/app/comp1/comp1.component.css`**
```css
h2 { margin: 0 0 10px; font-size: 18px; }
.list { margin: 0; padding-left: 18px; }
.list li { margin: 6px 0; }
```

### Comp2 – Profile
**`src/app/comp2/comp2.component.html`**
```html
<h2>Profile</h2>
<div class="profile-box">
  <img src="assets/uday.jpg" alt="SOMAPURAM UDAY" class="avatar">
  <div class="caption">SOMAPURAM UDAY</div>
</div>
```

**`src/app/comp2/comp2.component.css`**
```css
h2 { margin: 0 0 10px; font-size: 18px; }

.profile-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #e5e7eb;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
}

.caption {
  margin-top: 10px;
  font-weight: 600;
}
```

### Comp3 – Personal Info
**`src/app/comp3/comp3.component.html`**
```html
<h2>Personal Info</h2>
<ul class="info">
  <li><span class="label">Name:</span> SOMAPURAM UDAY</li>
  <li><span class="label">Age:</span> 23</li>
  <li><span class="label">Email:</span> <span class="nowrap">uday.somapuram@gmail.com</span></li>
  <li><span class="label">Phone:</span> +91-8522836109</li>
  <li><span class="label">Address:</span> GPREC, Kurnool</li>
</ul>
```

**`src/app/comp3/comp3.component.css`**
```css
h2 { margin: 0 0 10px; font-size: 18px; }

.info {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

.info li {
  margin: 6px 0;
  line-height: 1.5;
}

.label {
  font-weight: 600;
  color: #374151;
  margin-right: 6px;
}

.nowrap {
  white-space: nowrap; /* prevents breaking */
}
```

---

## 📦 App Module Setup (check declarations)
**`src/app/app.module.ts`**
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

---

## 🚀 Run & Verify
```bash
ng serve -o
# Open http://localhost:4200
```

Expected result: banner image at top, then three cards in a row with the content described above. If images don't appear, confirm they exist in `src/assets/` and paths are correct.

---

# 📖 Deep Dive (Components: 0 → 100%)

> This section is intentionally extensive — read it after you've implemented the experiment. It covers component theory from the ground up to advanced practical patterns, with examples and best practices.

### 1) What is a Component? (Short definition)
An Angular **component** is a class (TypeScript) decorated with `@Component` that associates a template and styles to produce a portion of UI. Components are the primary UI building blocks in Angular applications.

---

### 2) Anatomy of a Component (core parts)
- **Decorator (`@Component`)**: metadata (selector, templateUrl/template, styleUrls, changeDetection, providers, etc.).
- **Class**: component logic, properties, methods (TypeScript).
- **Template**: HTML that renders the view. Can be inline (`template`) or external (`templateUrl`).
- **Styles**: CSS/SCSS scoped to the component (styleUrls or inline `styles`).

---

### 3) Decorator options you should know
- `selector` — tag used in templates, e.g., `<app-example></app-example>`.
- `templateUrl` / `template` — path to HTML file or inline HTML string.
- `styleUrls` / `styles` — CSS files or inline CSS.
- `encapsulation` — View encapsulation modes (Emulated [default], None, ShadowDom).
- `changeDetection` — `Default` or `OnPush` (important for performance).
- `providers` — component-level service providers (rarely used; prefer modules/services).

---

### 4) Component Lifecycle (hooks & use-cases)
Lifecycle hooks let you tap into component events. Common hooks:

- `ngOnChanges(changes: SimpleChanges)` — called when input properties change.
- `ngOnInit()` — initialization after inputs set; ideal for fetching data or initial setup.
- `ngDoCheck()` — custom change detection (rarely required).
- `ngAfterContentInit()` — after content projection (ng-content) is initialized.
- `ngAfterContentChecked()` — after projected content is checked.
- `ngAfterViewInit()` — after component's view (and child views) initialized.
- `ngAfterViewChecked()` — after views are checked.
- `ngOnDestroy()` — cleanup before component is destroyed (unsubscribe, remove listeners).

---

### 5) Component Communication Patterns
- **Parent → Child**: `@Input()` properties
- **Child → Parent**: `@Output()` with `EventEmitter`
- **Sibling communication**: pass via parent, or shared service (RxJS Subjects)
- **ViewChild / ContentChild**: access child component or projected content directly

---

### 6) Content Projection (ng-content)
Allow consumers of a component to inject their own HTML into it.

---

### 7) Directives vs Components
- **Component** = directive + template. It's a directive with a template.
- **Structural Directive** = changes DOM layout (e.g., `*ngIf`, `*ngFor`).
- **Attribute Directive** = changes appearance/behavior (e.g., `ngClass`, `ngStyle`).

---

### 8) Change Detection Strategies
- **Default**: Angular runs change detection for the whole component tree on many events. Simple to use but can be expensive for large apps.
- **OnPush**: Only checks component when inputs change by reference, or an event originates from the component. Use with immutable patterns for performance.

---

### 9) Modules vs Standalone Components (Angular 14+)
- **Module-based** (`AppModule`) is the traditional architecture (used in this lab). Components are declared in modules.
- **Standalone components** (Angular 14+) can be used without modules. You can opt-in via `standalone: true` in the component decorator.

---

### 10) Services, Dependency Injection & Providers
- **Services** provide shared logic/data. Register them via `providedIn: 'root'` (singleton) or component/providers (scoped).

---

### 11) Testing Components (unit + shallow)
- Use `ng test` (Karma + Jasmine) by default; many projects use Jest for faster runs.
- Test component creation, inputs/outputs, DOM rendering, and lifecycle behavior.

---

### 12) Performance & Best Practices
- Prefer `OnPush` for presentational components.  
- Detach expensive observers or unsubscribe in `ngOnDestroy`.  
- Lazy-load feature modules and routes.  
- Use trackBy with `*ngFor`.  
- Avoid heavy logic in templates.

---

### 13) Accessibility (a11y)
- Use semantic HTML (buttons, headings).  
- Provide `alt` text for images.  
- Manage focus for dialogs or dynamic content.  
- Use ARIA only when necessary.

---

### 14) Security Considerations
- Angular sanitizes HTML by default, but be careful with `innerHTML`.  
- Never trust user input for templates or URLs.  

---

### 15) Architecture Patterns & Advanced Topics
- **Smart vs Presentational components**: smart handles data + services; presentational receives inputs and emits events.  
- **State management**: NgRx / Akita for large apps; for small apps use services + BehaviorSubject.  

---

### 16) When *not* to create a component
- For single tiny elements that never reuse and add overhead (e.g., simple static span inside a single template). Use templates/partials until reuse is required.

---

### 17) Naming & File Conventions
- `kebab-case` filenames: `user-profile.component.ts`  
- Selector pattern: `app-<feature>` preferably `app-user-card`  

---

### 18) Migration note: Module-based → Standalone
- If you later adopt standalone components, migrate gradually. Replace modules with `standalone: true` components and import necessary Angular modules directly into the component.

---

### 19) Debugging Tips
- Use `Augury` (Chrome) for Angular inspection.  
- `console.log` in lifecycle hooks to trace rendering order.  
- Run `ng lint` and fix warnings early.

---

# 📖 Angular Components Overview

Angular Components are the fundamental building blocks of Angular applications.  
They encapsulate HTML (template), CSS (styles), and TypeScript (logic) to represent a reusable piece of UI.

📌 **What are Angular Components?**  
- A component is a self-contained block of UI.  
- They follow encapsulation, reusability, and maintainability principles.  
- Example: A profile card, navbar, or login form.

🧩 **Component Structure**  
- Template → Defines the view (HTML).  
- Styles → Defines how it looks (CSS).  
- Logic → Defines how it behaves (TypeScript).

🔄 **Component Lifecycle**  
- `ngOnInit()` → Initialization (good for fetching data).  
- `ngOnChanges()` → Runs when input values change.  
- `ngOnDestroy()` → Cleanup before component is removed.

🔗 **Data Binding**  
- Interpolation → `{{ title }}`  
- Property Binding → `[src]="imageUrl"`  
- Event Binding → `(click)="doSomething()"`  
- Two-way Binding → `[(ngModel)]="username"`

📬 **Input & Output Properties**  
- `@Input()` → Pass data from parent to child.  
- `@Output()` → Emit events from child to parent.

✅ **Advantages of Components**  
- Promote reusability and modularity.  
- Improve readability and maintainability.  
- Support encapsulation of styles and logic.  
- Make apps more scalable and testable.

⚠️ **Disadvantages of Components**  
- Steeper learning curve (bindings, lifecycle).  
- Too many components → can increase complexity.  
- Boilerplate code (multiple files per component).  
- Migration issues (Standalone vs Module confusion in Angular 17+).

🌍 **Real-World Applications of Components**  
- Navbar (common across all pages).  
- Profile Card (user dashboards, teams).  
- Login/Signup Form (authentication).  
- Banner/Carousel (homepages).  
- Chat Window (messaging apps).

🎯 **Conclusion**  
Angular Components are the heart of Angular development.  
They make applications modular, reusable, scalable, and maintainable.  
Learning to build, organize, and connect components is the first major milestone in mastering Angular.
