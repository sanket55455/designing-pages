import { Component, OnInit } from '@angular/core';
import { SearchQuotationService } from './search-quotation.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss'],
  providers:[
    SearchQuotationService
  ]
})
export class QuotationComponent implements OnInit {

  searchQuotation : FormGroup;

  enquries: string[] = [
    'Open', 'Close', 'Retail', 'Lost',
  ];
  sources: string[] = [
    'Open', 'Close', 'Retail', 'Lost',
  ];
  products: string[] = [
    'Open', 'Close', 'Retail', 'Lost',
  ];
  items: string[] = [
    'Open', 'Close', 'Retail', 'Lost',
  ];
  models: string[] = [
    'Open', 'Close', 'Retail', 'Lost',
  ];
  submodels: string[] = [
    'Open', 'Close', 'Retail', 'Lost',
  ];
  variants: string[] = [
    'Open', 'Close', 'Retail', 'Lost',
  ];

  sales: string[] = [
    'Sales Person 1', 'Sales Person 2', 'Sales Person 3',
  ];

  max: Date | null;
  min: Date | null;
  today = new Date();
  tomorrow = new Date();
  



  constructor(private searchQuotationService: SearchQuotationService) { }

  ngOnInit() {
    this.searchQuotation = this.searchQuotationService.createSearchQuotation();
  }

}
