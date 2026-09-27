import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { employee } from './models/employee';
@Injectable({ providedIn: 'root' })
export class EmployeeService {
  getEmployees(): Observable<employee[]> {
    return of([{ id: 1, name: 'jack', department: 'Information Services' }]);
  }
}
