import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  result: boolean = true;
  emailInput: string;
  nameInput: string;
  errorName: string = '';
  errorEmail: string = '';

  constructor() {
  }

  nameValidation(name: string) {
    const namePattern = /^[a-zA-Z ]{2,30}$/;
    return namePattern.test(name);
  }

  emailValidation(email: string) {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(email);
  }

  formValidation() {
    this.result = true;
    this.errorName = '';
    if (this.nameInput === undefined || this.nameInput === '') {
      this.result = false;
      this.errorName = 'Name required!'
    } else if (!this.nameValidation(this.nameInput)) {
      this.result = false;
      this.errorName = ' Invalid Name!'
    }

    if (this.emailInput === undefined || this.emailInput === '') {
      this.errorEmail = ' Email required!';
    } else if (!this.emailValidation(this.emailInput)) {
      this.result = false;
      this.errorEmail = ' Invalid Email!';
    } else {
      this.errorEmail = '';
    }
  }

  onSubmit() {
    this.formValidation()
  }

  ngOnInit() {
  }
}


