import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { APIResponseModel, EmployeeModel } from '../model/employees.model';

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
  GetAllLeaves(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetAllLeaves")
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
  GetLeavesForApprovalBySuperwiserId(EmpId: number): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetLeavesForApprovalBySuperwiserId?id=" + EmpId)
  }
 ApproveLeave(leaveId: number): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/EmployeeLeave/ApproveLeave?id=" + leaveId)
  }
  RejectLeave(leaveId: number): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/EmployeeLeave/RejectLeave?id=" + leaveId)
  }
 
  deleteEmployee(id: number) {
  return this.http.delete<APIResponseModel>(
    "https://freeapi.miniprojectideas.com/api/EmployeeLeave/DeleteEmployee?id="+id
  );
}
  OnUpdateEmployee(employee: EmployeeModel): Observable<APIResponseModel> {
    return this.http.put<APIResponseModel>(
      "https://freeapi.miniprojectideas.com/api/EmployeeLeave/UpdateEmployee",
      employee);
}

}


