import { Component } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss']
})
export class UserdashboardComponent {
  posts: any[] = [
    {
      name: "Akshay Gadhiya",
      img_url: "any",
      location: "Ulm",
      content: "Hello, Akshay Here..."
    },
    {
      name: "Yogesh Vakde",
      img_url: "any",
      location: "Ulm",
      content: "Hello, Yogesh Here..."
    }
  ];
}
