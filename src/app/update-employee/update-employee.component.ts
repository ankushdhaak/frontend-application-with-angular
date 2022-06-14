import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee=new Employee();

  constructor( private router:Router,private empployeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeById();
  }
  
  getEmployeeById(){
    this.empployeeService.getEmployeeById().subscribe(Data=>  {
      this.employee=Data;
    })
  }
  updateEmployee(id?: number){
    console.log(this.employee);
    this.empployeeService.updateEmployeeById(this.employee).subscribe();
    this.router.navigate(['employees']);
    
  }

}
