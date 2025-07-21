import { Component, inject, OnInit} from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { APIResponseModel, employeeList, EmployeeModel } from '../../model/employees.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee implements OnInit {
  employeeService = inject(EmployeeService)
  employeeList: employeeList[] = []

 @ViewChild('popupForm') popupForm!: ElementRef;
  @ViewChild("newModal") newModel!: ElementRef
  employeeObj: EmployeeModel = new EmployeeModel();

  deptList$: Observable<any[]> = new Observable<any[]>;
  roleList$: Observable<any[]> = new Observable<any[]>;
 


  ngOnInit(): void {
    this.getEmployee()
    this.deptList$ = this.employeeService.getdept();
    this.roleList$ = this.employeeService.getrole();
  }
  getEmployee() {
    this.employeeService.getAllemployee().subscribe({
      next: (response: APIResponseModel) => {
        this.employeeList = response.data
      },
      error: () => {

      }
    })
  }


  openModel() {
    if (this.newModel) {
      this.newModel.nativeElement.style.display = "block"
    }
  }
  closeModel() {
    if (this.newModel) {
      this.newModel.nativeElement.style.display = "none"
    }
  }
  openModal(item:any) {
    this.employeeObj=item
    if (this.popupForm) {
      this.popupForm.nativeElement.style.display = "block"
    }
  }

  closeModal() {
     if (this.popupForm) {
      this.popupForm.nativeElement.style.display = "none"
    }
  }

  saveUser() {
    console.log('User saved:', this.employeeObj);
    this.closeModal();
  }
  
  onSaveEmployee() {
    this.employeeService.onSavenewEmployee(this.employeeObj).subscribe({
      next: (res: any) => {
        if (res.result) {
          this.getEmployee();
          alert("Employee Created Success")
          this.closeModel()
        } else {
          alert(res.message)
        }

      },
      error: () => {

      }
    })
  }
  onDeleteEmployee(id: number): void {
  if (!id) {
    alert("Invalid employee ID");
    return;
  }

  if (confirm("Are you sure you want to delete this employee?")) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (res: APIResponseModel) => {
        if (res.result) {
          alert("Employee deleted successfully");
          this.getEmployee(); 
        } else {
          alert(res.message || "Failed to delete employee.");
        }
      },
      error: (err) => {
        console.error("Delete error:", err);
        alert("Something went wrong while deleting.");
      }
    });
  }
}

updateEmployee(){
     this.employeeService.OnUpdateEmployee(this.employeeObj).subscribe({
    next: (res: APIResponseModel) => {
      if (res.result) {
        alert('Employee updated successfully');
        this.getEmployee();
        this.closeModal();
      } else {
        alert(res.message || 'Update failed');
      }
    },
    error: (err) => {
      console.error('Update error:', err);
      alert('Something went wrong');
    }
  });
}
}
