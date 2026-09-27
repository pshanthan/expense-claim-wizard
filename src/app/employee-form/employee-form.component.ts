import { Component } from '@angular/core';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
  imports: [],
  standalone: true,
})
export class EmployeeFormComponent {
  constructor(public employeeService: EmployeeService) {}
}
