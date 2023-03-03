import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mynewApp';
  httpHeader: any;
  auth_token: any = "OxBONbQaVU6zYG3G0QeN";
  GetPersonDetails: any;
  addperson: any= FormGroup;
  postData = {
    "name": "Akshay Gadhiya",
    "username": "Janice123",
    "email": "janice.romero@example.com",
  };

  constructor(private http: HttpClient, private formBuilder: FormBuilder){
    this.httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    });
  }

  ngOnInit(): void {
    this.http
    .get('https://zeigsuns.bredex.de/', {headers: this.httpHeader})
    .subscribe((res: any) => {
      this.GetPersonDetails = res;
        console.log(res);
    });

    this.addperson = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  createNewPerson(){
    console.log(this.addperson.value);

    this.http
    .post('https://zeigsuns.bredex.de/', this.addperson.value, {headers: this.httpHeader})
    .subscribe((res: any) => {
      this.GetPersonDetails = res;
        console.log(res);
        this.ngOnInit();
    });
  }
}
