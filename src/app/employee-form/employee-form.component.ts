import { Component } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { OnInit } from '@angular/core';
import { employee } from '../../models/employee';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
  imports: [CommonModule],
  standalone: true,
})
export class EmployeeFormComponent implements OnInit {
  constructor(public employeeService: EmployeeService) {}
  employees: employee[] = [];
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }
}
