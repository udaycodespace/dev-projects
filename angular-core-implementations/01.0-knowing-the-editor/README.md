# 🌐 Angular Lab Experiment – Knowing the Editor

## 🎯 Problem Statement
In this experiment, we aim to **understand the Angular development environment** and get familiar with the editor setup by creating a simple **Hello World** program.  
This lab will guide beginners step by step – from **installing required tools** to **running the first Angular application** – with clear explanations suitable even for those who are new to web development.  

---

## 🛠️ Tech Stack
- **Node.js & npm** → JavaScript runtime and package manager  
- **Angular CLI** → Official tool for creating and managing Angular projects  
- **TypeScript** → Superset of JavaScript used in Angular  
- **Visual Studio Code (VS Code)** → Editor for writing and managing code  

---

## ⚙️ Setup Instructions

### 1. Install Node.js and npm
Angular requires Node.js and npm.  
- Download from [Node.js official site](https://nodejs.org/)  
- Verify installation:  
```bash
node -v
npm -v
```  

### 2. Install Angular CLI (per-project, version-safe)
Instead of globally installing Angular, we use **npx** (ships with npm) to always get the correct version:  
```bash
npx @angular/cli@17 new 01-knowing-the-editor --routing=false --style=css
cd 01-knowing-the-editor
ng serve
```  

Now open `http://localhost:4200` in your browser.  

### 3. Install VS Code
- Download from [Visual Studio Code website](https://code.visualstudio.com/)  
- Install recommended extensions for Angular & TypeScript support.  

---

## 🌍 About Angular
Angular is a **TypeScript-based web application framework** maintained by **Google**.  

### Key Features
- **Component-based architecture** → Modular and reusable apps  
- **Two-way data binding** → Syncs data between UI and logic instantly  
- **Dependency Injection** → Handles services and shared state cleanly  
- **TypeScript advantage** → Type safety, intellisense, scalability  

### Why TypeScript instead of JavaScript?
- TypeScript = JavaScript + Types  
- Compiled to JavaScript before running in browsers  
- Benefits: Fewer runtime errors, better tooling, cleaner code  

---

## 👨‍💻 Version 1 – Detailed Explanation (Professional Style)

### 📂 Project Structure Overview
#### 📁 Folders
- **.angular/** → Internal cache for Angular builds  
- **.vscode/** → Editor-specific settings for VS Code  
- **node_modules/** → Installed dependencies  
- **src/** → Main application source code  

#### 📝 Inside `src/`
- **app/** → Contains main components (`.ts`, `.html`, `.css`)  
- **assets/** → Images, icons, static files  
- **favicon.ico** → Tab icon for browser  
- **index.html** → Root HTML entry point  
- **main.ts** → App entry script (bootstraps Angular)  
- **styles.css** → Global app styles  

#### ⚙️ Project Config Files
- **angular.json** → Angular CLI project/workspace settings  
- **package.json** → Dependencies and project metadata  
- **package-lock.json** → Dependency lock for consistency  
- **tsconfig.json** → TypeScript configuration  
- **tsconfig.app.json** → TS config specific to application code  
- **tsconfig.spec.json** → TS config for test files  
- **.editorconfig** → Coding style (indentation, spaces)  
- **.gitignore** → Excludes files from Git repo  
- **README.md** → Documentation for the project  

---

## 🎓 Version 2 – Beginner-Friendly Explanation

### 📁 Folders
- **.angular/** → Auto stuff for Angular, don’t touch  
- **.vscode/** → Settings for VS Code editor  
- **node_modules/** → All installed libraries  
- **src/** → Main place where we write code  

### 📝 Inside `src/`
- **app/** → App logic + UI files live here  
- **assets/** → Images and icons folder  
- **favicon.ico** → Small tab logo  
- **index.html** → Main HTML page  
- **main.ts** → First file that runs Angular  
- **styles.css** → Global styles for the app  

### ⚙️ Config Files
- **angular.json** → Project settings  
- **package.json** → Project libraries + scripts  
- **package-lock.json** → Fixes library versions  
- **tsconfig.json** → TypeScript rules  
- **tsconfig.app.json** → TypeScript rules for app  
- **tsconfig.spec.json** → TypeScript rules for tests  
- **.editorconfig** → Keeps code neat  
- **.gitignore** → Ignores unnecessary files  
- **README.md** → Guide about the project  

---

## 🖥️ Creating Hello World

1. Open `src/app/app.component.html`  
   Replace all content with:  
   ```html
   <h1>Hello, World!</h1>
   ```  

2. (Optional) Simplify `app.component.ts`:  
   ```ts
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-root',
     standalone: true,
     templateUrl: './app.component.html',
     styleUrl: './app.component.css'
   })
   export class AppComponent {}
   ```  

3. Run project:  
   ```bash
   ng serve --open
   ```  

Now visit `http://localhost:4200` → You’ll see:  

```
Hello, World!
```

---

## ✅ Summary
- Installed Node.js, npm, Angular CLI, and VS Code  
- Learned Angular basics and TypeScript importance  
- Understood project structure (focus on src folder)  
- Created a **Hello World** Angular app 🚀  
