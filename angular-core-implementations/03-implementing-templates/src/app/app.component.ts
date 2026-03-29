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
