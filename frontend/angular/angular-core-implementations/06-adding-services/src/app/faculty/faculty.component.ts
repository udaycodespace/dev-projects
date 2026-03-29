// src/app/faculty/faculty.component.ts
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
