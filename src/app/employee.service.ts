import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // get all employee
//  http://localhost:9090/api/v1/employees
  baseUrl="http://localhost:9090/api/v1/employees";
  id?:number;

  constructor(private httpclint: HttpClient) { }
  //get all employee
  getAllEmployee(): Observable<Employee[]>{
    return this.httpclint.get<Employee[]>(`${this.baseUrl}`);
  }

  // save one employee
  addEmployee(employee?:Employee): Observable<Object>{
    return this.httpclint.post<Object>(`${this.baseUrl}`, employee)
  }
  getId(getId?:number){
  this.id=getId;
}


  //get one employee by id
   getEmployeeById():Observable<Object>{
   return  this.httpclint.get<Object>(`${this.baseUrl}/${this.id}`);
 }
 // update employee by id

  updateEmployeeById(employee?:Employee):Observable<object>{
    return this.httpclint.put<object>(`${this.baseUrl}/${this.id}`,employee);
  }

  // Delete the employee by id

  deleteEmployeeById(id?:number):Observable<object>{
    return this.httpclint.delete<object>(`${this.baseUrl}/${id}`);
  }
}
