// src/app/students.service.ts
import { Injectable } from '@angular/core';

type Student = { name: string; acty: string };

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private stulist: Student[] = [];

  addStudent(stuname: string, activity: string): void {
    if (!stuname?.trim() || !activity?.trim()) return;
    this.stulist.push({ name: stuname.trim(), acty: activity.trim() });
  }

  getAllStudents(): Student[] {
    return this.stulist;
  }
}
