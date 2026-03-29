# 03: Implementing Templates 

## 📌 Problem Statement
In Angular applications, templates play a vital role in defining the structure and behavior of components.  
This experiment focuses on implementing a **registration form template** using Angular **template-driven forms**, where we validate user inputs, apply styling for feedback, and manage data binding efficiently.

---

## ⚙️ Tech Stack
- **Angular 17**
- **TypeScript**
- **HTML5, CSS3**
- **Node.js & npm**

---

## 🚀 Project Setup

```bash
# Step 1: Create new Angular project
npx @angular/cli@17 new 03-implementing-templates --routing=false --style=css

# Step 2: Navigate into project folder
cd 03-implementing-templates

# Step 3: Run the development server
ng serve -o
```

---

## 📝 Implementation

### app.component.css
```css
input[type=text],[type=email], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.form, .form-data {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 400px;
  margin: 30px auto;
}

input.ng-invalid.ng-touched {
  border: red 1px solid;
}

small {
  color: red;
}
```

---

### app.component.html
```html
<div class="form">
  <h2 id="registration">Registration Form</h2>

  <form (ngSubmit)="onSubmit()" #myForm="ngForm">
    <div ngModelGroup="personDetails" #personalDetail="ngModelGroup">
      <label for="fname">First Name</label>
      <input type="text" id="fname" placeholder="Your name.." name="firstname" ngModel required #fname="ngModel" />
      <small *ngIf="myForm.submitted && fname.invalid">First Name is required</small>

      <label for="lname">Last Name</label>
      <input type="text" id="lname" placeholder="Your last name.." name="lastname" ngModel required #lname="ngModel" />
      <small *ngIf="myForm.submitted && lname.invalid">Last Name is required</small>

      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Your email.." ngModel required email #emailCtrl="ngModel" />
      <small *ngIf="myForm.submitted && emailCtrl.invalid">Valid email is required</small>

      <div>
        <small *ngIf="myForm.submitted && personalDetail.invalid">
          Some of the required fields do not have valid values.
        </small>
      </div>

      <button type="button" (click)="setDefaultValues()">Set Default Values</button>
    </div>

    <label for="country">Country</label>
    <select id="country" name="country" ngModel [ngModel]="defaultCountry" required #countryCtrl="ngModel">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
      <option value="india">India</option>
      <option value="uk">UK</option>
    </select>
    <small *ngIf="myForm.submitted && countryCtrl.invalid">Please select a country</small>

    <label>Gender:</label>
    <input type="radio" name="gender" ngModel required hidden #genderCtrl="ngModel" />

    <span *ngFor="let g of gender">
      <input type="radio" name="gender" [value]="g.value" ngModel [checked]="g.value === defaultGender" />
      <label>{{ g.value }}</label>
    </span>
    <small *ngIf="myForm.submitted && genderCtrl.invalid">Please select a gender</small>

    <br /><br />
    <label>Hobbies <i>(Optional)</i></label>
    <div class="form-inline">
      <label><input type="checkbox" value="sports" name="hobbies" ngModel /> Sports</label>
      <label><input type="checkbox" value="movies" name="hobbies" ngModel /> Movies</label>
      <label><input type="checkbox" value="music" name="hobbies" ngModel /> Music</label>
    </div>

    <input type="submit" value="Submit" />
  </form>
</div>

<div class="form-data">
  <h3>Form Data</h3>
  <p>First Name: <b>{{ firstname }}</b></p>
  <p>Last Name: <b>{{ lastname }}</b></p>
  <p>Email: <b>{{ email }}</b></p>
  <p>Country: <b>{{ country }}</b></p>
  <p>Gender: <b>{{ gen }}</b></p>
</div>
```

---

### app.component.ts
```ts
import { Component, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';

  defaultCountry = 'india';
  defaultGender = 'Female';

  firstname: string="";
  lastname: string="";
  email: string="";
  gen: string="";
  country: string="";

  gender = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'Other' }
  ];

  @ViewChild('myForm') form!: NgForm;

  onSubmit() {
    if (!this.form.valid) {
      alert('Some of the required fields are missing or invalid!');
      return;
    }

    this.firstname = this.form.value.personDetails.firstname;
    this.lastname = this.form.value.personDetails.lastname;
    this.email = this.form.value.personDetails.email;
    this.gen = this.form.value.gender;
    this.country = this.form.value.country;

    this.form.resetForm({
      country: this.defaultCountry,
      gender: this.defaultGender
    });
  }

  setDefaultValues() {
    this.form.form.patchValue({
      personDetails: {
        firstname: 'John',
        lastname: 'Smith',
        email: 'abc@example.com'
      }
    });
  }
}
```

---

### main.ts
```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent);
```

---

## 📖 Theory

### What is a Template?
- A template in Angular is the HTML code associated with a component.  
- It determines how the component is displayed in the browser.

### Template Binding Features
- **Interpolation (`{{ }}`):** Embed component data into HTML.  
- **Property Binding (`[ ]`):** Bind DOM element properties to component properties.  
- **Event Binding (`( )`):** Handle user actions like clicks or key presses.  
- **Two-Way Binding (`[( )]`):** Sync data between template and component instantly.  

### Types of Templates
- **Inline Template:** Written directly inside the `@Component` decorator using the `template` property.  
- **External Template:** Written in a separate `.html` file and linked via `templateUrl`.  

### Template Compilation
- Angular compiles templates into JavaScript for rendering.  
- It uses **Ahead-of-Time (AOT)** or **Just-in-Time (JIT)** compilation.  

---

## 📝 Syntax

### Inline Template
```ts
@Component({
  selector: 'app-inline',
  template: `<h1>{{ title }}</h1><p>This is inline template</p>`
})
export class InlineComponent {
  title = 'Hello Angular';
}
```

### External Template
```ts
@Component({
  selector: 'app-external',
  templateUrl: './external.component.html'
})
export class ExternalComponent {
  title = 'External Template Example';
}
```

---

## ✅ Advantages
- Clear separation of logic (in TS) and UI (in HTML).  
- Easy to reuse and maintain.  
- Supports powerful data binding features.  
- Allows modular development with multiple components.  

---

## ❌ Disadvantages
- Steeper learning curve for beginners.  
- Large applications may require strict structure and best practices.  
- Debugging template errors can sometimes be difficult.  

---

## 🌍 Real-Life Examples
- Login forms with validation and dynamic error messages.  
- Dashboards where charts and tables update in real-time.  
- E-commerce product pages with dynamic filtering and cart updates.  
- Chat applications where new messages render instantly.  
