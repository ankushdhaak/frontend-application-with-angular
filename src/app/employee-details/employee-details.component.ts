import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  
  employee:Employee =new Employee();

  constructor( private route:ActivatedRoute,private employeeService:EmployeeService ) { }

  ngOnInit(): void {
    this.getEmployeeById();
  }
  
  getEmployeeById(id?:number){
    this.employeeService.getEmployeeById().subscribe(Data=>  {
      this.employee=Data;
    })
  }
  


  

}
