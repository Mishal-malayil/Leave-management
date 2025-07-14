import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-leave',
  imports: [ReactiveFormsModule,DatePipe],
  templateUrl: './leave.html',
  styleUrl: './leave.css'
})
export class Leave implements OnInit {
     @ViewChild("newModal") newModel!:ElementRef
     employeeService=inject(EmployeeService)

    leaveForm:FormGroup= new FormGroup({
        
       
  leaveId: new FormControl(0),
  employeeId: new FormControl(0),
  fromDate: new FormControl(''),
  toDate: new FormControl(''),
  noOfDays: new FormControl(''),
  leaveType: new FormControl(''),
  details: new FormControl(''),
  isApproved: new FormControl(false),
  approvedDate: new FormControl(null)


    })
     leaveList: any []=[];

    constructor(){
      const loggedData =localStorage.getItem('LeaveUser');
      if(loggedData != null){
         const loggedParseData = JSON.parse(loggedData)
         this.leaveForm.controls['employeeId'].setValue(loggedParseData.employeeId)
      }
    }

    ngOnInit(): void {
      this.leaveLoads()
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

   leaveLoads(){
    const EmbId=  this.leaveForm.controls['employeeId'].value;
    this.employeeService.getAllLeaveByEmpId(EmbId).subscribe({
      next:(result:any)=>{
          this.leaveList=result.data
      }
    })
   }

   onSave(){
        const formValue= this.leaveForm.value;
        this.employeeService.onAddleave(formValue).subscribe({
          next:()=>{

          }
        })
 }
}
