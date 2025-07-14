import { Component, inject, OnInit} from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { APIResponseModel, employeeList, EmployeeModel } from '../../model/employees.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-employee',
  imports: [AsyncPipe,FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee  implements OnInit{
    employeeService= inject(EmployeeService)
    employeeList: employeeList[]=[]

    @ViewChild("newModal") newModel!:ElementRef
    employeeObj:EmployeeModel= new EmployeeModel();

    deptList$: Observable<any []>=new Observable <any[]>;
    roleList$:Observable<any []>=new Observable<any[]>;

    
    ngOnInit(): void {
     this.getEmployee()
     this.deptList$=this.employeeService.getdept();
     this.roleList$=this.employeeService.getrole();
   }
   getEmployee(){
    this.employeeService.getAllemployee().subscribe({
      next:(response:APIResponseModel)=>{
         this.employeeList= response.data
      },
      error:()=>{

      }
    })
   }
   openModel(){
    if(this.newModel){
      this.newModel.nativeElement.style.display="block"
    }
   }
   closeModel(){
    if(this.newModel){
      this.newModel.nativeElement.style.display="none"
    }
   }
   onSaveEmployee(){
     this.employeeService.onSavenewEmployee(this.employeeObj).subscribe({
      next:(res:any)=>{
        if(res.result){
          this.getEmployee();
          alert("Employee Created Success")
          this.closeModel()
        }else{
          alert(res.message)
        }
          
      },
      error:()=>{

      }
     })
   }
   
}
