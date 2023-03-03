import { Component, Input } from "@angular/core";

@Component({
  selector: "app-user-reviews",
  templateUrl: "./user-reviews.component.html",
  styleUrls: ["./user-reviews.component.css"]
})
export class UserReviewsComponent {
  
  @Input() review: any;
  constructor() {}
}