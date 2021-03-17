import { Component, OnInit } from '@angular/core';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accountDetails:any = {
    1000: { acno: 1000, name: "username", balance: 5000, password: "user1" },
    1001: { acno: 1001, name: "username", balance: 3000, password: "user2" },
    1002: { acno: 1002, name: "username", balance: 3000, password: "user3" },
    1003: { acno: 1003, name: "username", balance: 3000, password: "user4" }

  }
  // aim="welcome User" 
  acno = "";
  pwd = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getAccno(event: any) {
    this.acno = event.target.value;
    console.log(this.acno);
  }
  getPswd(event: any) {
    this.pwd = event.target.value;
    console.log(this.pwd);
  }
  login() {
    //alert("login works");

    var accNumber = this.acno;
    var pwd = this.pwd;
    let dataset = this.accountDetails;
    if (accNumber in dataset) {
      var pswd1 = dataset[accNumber].password;
      if (pswd1 == pwd) {
        alert("Login Successful");
        this.router.navigateByUrl("dashboard");
      }
      else {
        alert("Incorrect pasword");
      }
    }
    else {
      alert("No user exist with provided account number")
    }
    // let acno = document.querySelector("#acno").value;
    //     let pwd = document.querySelector("#pwd").value;
    //     let amount=document.querySelector("#amount").value;
    //     let user= Bank.authenticateuser(acno,pwd);
    //     let data=Bank.getAccountDetails()
    //     if(user==0){
    //         data[acno]["balance"] -=Number(amount)
    //         alert("available balance :" + data[acno]["balance"])
    //     }
    //     else if(user==1){
    //         alert("invalid user")
    //     }
    //     else{
    //         alert("invalid account number")
    //     }
  }}
  