// src/app/student/student.component.ts
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
