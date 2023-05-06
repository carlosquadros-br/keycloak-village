import { Component, OnInit } from '@angular/core';
import { UserData } from './data/user-data';
import { FormGroup, FormControl } from '@angular/forms';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private readonly keycloak: KeycloakService) {
    console.log('AppComponent.constructor()');
  }

  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });

  getControlsValueOfLoginForm = () => {
    const { name, password } = this.loginForm.controls;
    return {

      name: name.value,
      password: password.value,
    };
  }

  ngOnInit(): void {
    console.log('AppComponent.ngOnInit()');
  }

  title = 'web-application';
  text = 'This is a test for the company';
  user: UserData = {
    id: 1,
    name: '',
    password: '',
  };

  get textAsArray() {
    return this.text.split('');
  }

  onSubmit() {
    const { name, password } = this.getControlsValueOfLoginForm();
  }

  onLogout(){
    console.log(this.keycloak)
     this.keycloak.logout();
  }
}
