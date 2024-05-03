import { Injectable } from '@angular/core';
import { UserLocal } from '../_interfaces/user-local';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
  ) { }

  getLocalInfo() : UserLocal {
    const userInfo = JSON.parse(String(localStorage.getItem("user_data")));
    return userInfo
  }
}
