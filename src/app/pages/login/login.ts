import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../../model/employees.model';
import { EmployeeService } from '../../services/employee';
import { Router } from '@angular/router';





@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
     loginobj:LoginModel = new LoginModel();

     employeeservice = inject(EmployeeService);
     router=inject(Router)
     
    
     onLogin(){
          this.employeeservice.onLogin(this.loginobj).subscribe({
            next:(result:any)=>{
              if(result.result){
                alert("Login Success")
                localStorage.setItem('LeaveUser',JSON.stringify(result.data));
                this.router.navigateByUrl('/dashboard')
              }
              else{
                alert(result.message)
              }
            },
            error:()=>{
               alert("API Error")
            }
          })
     }
     
}
