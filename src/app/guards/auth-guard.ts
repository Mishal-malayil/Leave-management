import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  debugger;
  console.log('authGuard');
  const router = inject(Router)
  
  const isloggedIn=localStorage.getItem('LeaveUser')
  if(isloggedIn != null){
    return true;
  }else{
    router.navigateByUrl('/login');
    return false;
  }
  
};
