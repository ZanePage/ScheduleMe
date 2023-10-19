import { Component, OnInit } from '@angular/core';

import { Biz } from '../biz';
import { TempDataService } from '../temp-data.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {
  bizez: Biz[] = [];

  constructor(private dataService: TempDataService) { }

  ngOnInit(): void {
    this.dataService.getBiz().subscribe(biz => this.bizez = biz);
  }
}
