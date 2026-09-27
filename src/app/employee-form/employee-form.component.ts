import { Component } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { OnInit } from '@angular/core';
import { employee } from '../../models/employee';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class EmployeeFormComponent implements OnInit {
  constructor(public employeeService: EmployeeService) {}
  employees: employee[] = [];
  employeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    department: new FormControl(''),
  });
  expenses = new FormArray([]);

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }
  onSubmit() {
    console.log(this.employeeForm.value);
  }
}
