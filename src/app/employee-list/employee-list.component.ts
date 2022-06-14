import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee?: Employee[];

  constructor(private employeeService: EmployeeService ,private router: Router ) { }

  ngOnInit(): void {
    this.getAllEmployees();

 
   }
   getAllEmployees(){
    this.employeeService.getAllEmployee().subscribe(Data =>{
      this.employee=Data;
     })

   }
   updateEmployeeRecord(id?:number){
     console.log("id", id);
     this.router.navigate(['update-employee']);
   this.employeeService.getId(id);
   }

   deleteEmployeeRecord(id?:number){
     this.employeeService.deleteEmployeeById(id).subscribe();
     this.router.navigate(['employees']);
     window.location.reload();

   }
   detailsEmployeeRecord(id?:number){
     this.router.navigate(['employee-details',id]);
     this.employeeService.getId(id);

   }
  }

