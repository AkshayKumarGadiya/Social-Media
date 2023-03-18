import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/assets/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'mynewApp';
  // httpHeader: any;
  // auth_token: any = environment.auth_token;
  // GetPersonDetails: any;
  // addperson: any= FormGroup;
  // rowsPerPage: number = 10;
  // actualPage: number = 1;
  // showprevnext: boolean = false;
  // endPaging: any;
  // showPersonDetails: any;
  // months: string[] = ["january", "february", "march", "april", "may", "june", "july", "August", "sepetember", "octomber", "november", "december"]
  
  // currentPos : number=2;
  // currentContent: string =this.months[this.currentPos];
  constructor(private http: HttpClient, private formBuilder: FormBuilder){
    // this.httpHeader = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${this.auth_token}`
    // });
  }

  ngOnInit(): void {
    // this.http
    // .get(environment.api, {headers: this.httpHeader})
    // .subscribe((res: any) => {
    //   this.GetPersonDetails = res;
    //   this.pagination();
    //     this.updateViewAfterPaginationClicked();
    //     // console.log(res);
    // });

    // this.addperson = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   username: ['', Validators.required],
    //   email: ['', Validators.required]
    // });
    // this.pagination();
  }
  // toggleContent(val: any){
  //   if(val < 0 && this.currentPos == 0){
  //     this.currentPos = 11;
  //     this.currentContent = this.months[this.currentPos]
  //   }else if(val > 0 && this.currentPos == 11){
  //     this.currentPos = 0;
  //     this.currentContent = this.months[this.currentPos]
  //   }else{
  //     this.currentPos=this.currentPos+val;
  //     this.currentContent = this.months[this.currentPos];
  //   }
  // }

  

  // createNewPerson(){
  //   // console.log(this.addperson.value);

  //   this.http
  //   .post(environment.api, this.addperson.value, {headers: this.httpHeader})
  //   .subscribe((res: any) => {
  //     this.GetPersonDetails = res;
  //       console.log(res);
  //       this.ngOnInit();
  //   });

  // }

  // pagination() {
  //   if (this.GetPersonDetails?.length % this.rowsPerPage != 0) {
  //     this.endPaging = Math.round(this.GetPersonDetails?.length / this.rowsPerPage)
  //   } else {
  //     this.endPaging = this.GetPersonDetails.length / this.rowsPerPage
  //   }
  // }
  // onPageChange(value: any) {
  //   this.showprevnext = false;
  //   this.actualPage = value;
  //   this.updateViewAfterPaginationClicked();
  // }
  // onChangeRowsPerPage(value: any) {
  //   this.rowsPerPage = value;
  //   this.pagination();
  //   this.actualPage = 1;
  //   this.updateViewAfterPaginationClicked();
  // }
  // updateViewAfterPaginationClicked() {
  //   var start = (this.actualPage - 1) * this.rowsPerPage;
  //   var end = this.actualPage * this.rowsPerPage - 1;
  //   this.showPersonDetails = this.GetPersonDetails?.slice(start, end);
  // }

  // prevnext(){
  //   this.showprevnext = true;
  // }
}
