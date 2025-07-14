import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { APIResponseModel } from '../model/employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  onLogin(obj: any) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/EmployeeLeave/Login", obj)
  }
  getAllemployee(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetEmployees")
  }
  getdept() {
    return this.http.get("https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetDepartments").pipe(
      map((res: any) => res.data)
    )
  }
  getrole() {
    return this.http.get("https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetAllRoles").pipe(
      map((res: any) => res.data)
    )
  }
  onSavenewEmployee(obj: any) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/EmployeeLeave/CreateEmployee", obj)
  }
  onAddleave(obj: any) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/EmployeeLeave/AddLeave", obj)
  }
  getAllLeaveByEmpId(EmpId: number): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetAllLeavesByEmployeeId?id=" + EmpId)
  }


}
