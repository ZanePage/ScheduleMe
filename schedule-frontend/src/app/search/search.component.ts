import { Component } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})
export class SearchComponent {
  searchRes: string = "";
  constructor(private router: Router) { }

  filterResults(text: string) {
    if (!text) {
      this.searchRes = this.searchRes;
      this.router.navigate(['/search']);
    } else {
      this.searchRes = text.toLowerCase();
      this.router.navigate(['/search', this.searchRes])
    }
  }

}
