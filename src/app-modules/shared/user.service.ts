export class UserService {
   static isAuthenticated(){
        return localStorage.getItem('token') !== null?true:false;
    }

  static  isAdmin(){
        return localStorage.getItem("role")==='admin'?true:false;
    }
  static  isUser(){
        return localStorage.getItem("role")==='user'?true:false;
    }
}