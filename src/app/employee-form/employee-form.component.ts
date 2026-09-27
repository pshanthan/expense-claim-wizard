import { Component } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
  imports: [],
  standalone: true,
})
export class EmployeeFormComponent implements OnInit{
  constructor(public employeeService: EmployeeService) {}
  ngOnInit(){
    getEmployees(){
        this.employeeService.getEmployees().subscribe()
    }
  }
}
