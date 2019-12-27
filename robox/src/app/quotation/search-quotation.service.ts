import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class SearchQuotationService {

  SearchQuotation : FormGroup

  constructor(private fb : FormBuilder) { }

  createSearchQuotation() {
    this.SearchQuotation = this.fb.group({
      sources: ['', Validators.compose([])],
      enquries: ['', Validators.compose([])],
      sales: ['', Validators.compose([])],
      products: ['', Validators.compose([])],
      series: ['', Validators.compose([])],
      models: ['', Validators.compose([])],
      submodels: ['', Validators.compose([])],
      variants: ['', Validators.compose([])],
      fromdate: ['', Validators.compose([])],
      todate: ['', Validators.compose([])],
      quotationno: ['', Validators.compose([])],
      itemNo: ['', Validators.compose([])]
    })
    return this.SearchQuotation;
  } 

}
