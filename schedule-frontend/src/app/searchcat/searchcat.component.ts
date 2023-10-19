import { Component, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Biz } from '../biz';
import { TempDataService } from '../temp-data.service';

@Component({
  selector: 'app-searchcat',
  templateUrl: './searchcat.component.html',
  styleUrls: ['./searchcat.component.css']
})
export class SearchcatComponent implements OnChanges {
  bizez: Biz[] = [];
  public id: string;


  constructor(private dataService: TempDataService, private route: ActivatedRoute) {
    this.id = String(this.route.snapshot.paramMap.get('id'));
  }

  ngOnChanges(): void {
    this.dataService.getBiz().subscribe(biz => this.bizez = biz.filter(
      (biz: Biz) => biz.cat === this.id
    ));
  }

  
}
