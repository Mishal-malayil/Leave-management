export class LoginModel {
  emailId: string;
  password: string;

  constructor() {
    this.emailId = '';
    this.password = '';
  }
}

export interface APIResponseModel {
  message: string;
  result: boolean;
  data: any;
}
 
export interface employeeList{
empId: number;
    
      "employeeId": number;
      "employeeName": string;
      "deptId": number;
      "deptName": string;
      "contactNo": number;
      "emailId": string;
      "role": string;
    
}

export class EmployeeModel {
  employeeId: number;
  employeeName: string;
  contactNo: string;
  emailId: string;
  deptId: string;
  password: string;
  gender: string;
  role: string;
  
  

  constructor(){
    this.contactNo='',
    this.deptId='',
    this.emailId='',
    this.employeeId=0,
    this.employeeName='',
    this.password='',
    this.gender='',
    this.role=''
  }
}


