# Angular Lab Experiment – Knowing the Editor

## 🎯 Problem Statement
This lab aims to help learners **understand the Angular development environment** by creating a **simple username-password login page** with validation.  
The experiment covers **setting up Angular 17 from scratch**, understanding project structure, TypeScript basics, and creating a working form with **real-time validation**.

---

## 🛠️ Tech Stack
- **Node.js & npm** → JavaScript runtime and package manager  
- **Angular CLI (v17)** → Official tool to create/manage Angular projects  
- **TypeScript** → Adds types to JavaScript for safer and scalable code  
- **Visual Studio Code (VS Code)** → Code editor  
- **HTML & CSS** → UI and styling  

---

## ⚙️ Setup Instructions

### 1️⃣ Create a fresh Angular project
```bash
npx @angular/cli@17 new 01.1-knowing-the-editor --routing=false --style=css
cd 01.1-knowing-the-editor
ng serve --open
```

### 2️⃣ Update AppComponent

#### `src/app/app.component.ts`
```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  password = '';
  message = '';

  onSubmit() {
    const usernameValid = this.username.trim().length > 5;
    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(this.password);

    if (usernameValid && passwordValid) {
      this.message = 'Successfully completed';
    } else {
      this.message = 'Error: Invalid username or password';
    }
  }
}
```

✅ **Validation rules**:  
- Username → Not empty & more than 5 letters  
- Password → Not empty, ≥ 8 characters, includes lowercase, uppercase, number, special character  

#### `src/app/app.component.html`
```html
<div class="login-box">
  <h2>Login</h2>
  <form (ngSubmit)="onSubmit()">
    <input
      type="text"
      placeholder="Username"
      [(ngModel)]="username"
      name="username"
    />
    <input
      type="password"
      placeholder="Password"
      [(ngModel)]="password"
      name="password"
    />
    <button type="submit">Submit</button>
  </form>
  <p>{{ message }}</p>
</div>
```

#### `src/app/app.component.css`
```css
.login-box {
  width: 250px;
  margin: 100px auto;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

input {
  width: 90%;
  padding: 8px;
  margin: 6px 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

button {
  width: 95%;
  padding: 8px;
  margin-top: 8px;
  cursor: pointer;
}
```

### 3️⃣ Run the project
```bash
ng serve --open
```
- Open `http://localhost:4200` in a browser  
- Enter a **username > 5 characters** and a **password matching the rules** → click Submit → `Successfully completed`  
- Otherwise → `Error: Invalid username or password`

---

## ✅ Features
- Minimal standalone Angular 17 app  
- Username & password validation via TypeScript  
- Simple, centralized form layout with minimal CSS  
- Real-time validation on submit  

---

## 📂 Angular Project Structure (Simplified)

### 📁 Folders
- `.angular/` → Angular build/cache (don’t edit)  
- `.vscode/` → VS Code settings  
- `node_modules/` → Installed libraries (auto-created)  
- `src/` → Main folder for app code  

### 📝 Source Files (`src/`)
- `app/` → Main app components (`.ts`, `.html`, `.css`)  
- `app.component.ts` → Logic and data of the app  
- `app.component.html` → UI shown in browser  
- `app.component.css` → Component styles  
- `app.component.spec.ts` → Test file (optional)  
- `app.config.ts` → App setup/bootstrapping  
- `assets/` → Images, icons, files  
- `favicon.ico` → Browser tab icon  
- `index.html` → Root HTML file  
- `main.ts` → Entry point  
- `styles.css` → Global styles  

### ⚙️ Project Config Files
- `angular.json` → Build/serve settings  
- `package.json` → Dependencies & scripts  
- `package-lock.json` → Locks exact versions  
- `tsconfig.json` → TypeScript settings  
- `tsconfig.app.json` → TS settings for app  
- `tsconfig.spec.json` → TS settings for tests  
- `.editorconfig` → Coding style rules  
- `.gitignore` → Files Git should ignore  
- `README.md` → Project guide and setup instructions  

---

## 🔹 Version 1: Detailed (Professional)
- Explains **Angular 17 setup from scratch**, project structure, TypeScript validation, and form creation  
- Shows minimal CSS layout and centralized login form  
- Focuses on real-world validation patterns and standalone component usage  

## 🔹 Version 2: Simple (Student-Friendly)
- Run `npx @angular/cli@17 new 01.1-knowing-the-editor --routing=false --style=css`  
- Go inside project folder → `cd 01.1-knowing-the-editor`  
- Edit `app.component.ts` → add login logic  
- Edit `app.component.html` → add inputs + submit button  
- Edit `app.component.css` → minimal styling to center form  
- Run `ng serve --open` → check browser and test login

---

## 📌 Notes
- Teaches both **Angular setup** and **form validation**  
- Uses **standalone components** and minimal code  
- Helps understand **TypeScript, Angular forms, and DOM updates**  

