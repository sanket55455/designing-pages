import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class CreateQuotationService {

  quotationForm : FormGroup
  constructor(private fb : FormBuilder) { }

  createQuotation() {
    this.quotationForm = this.fb.group({
      tentativePurchaseDate: [{ value: '' }, Validators.compose([])],
      enquiryStatus: [ Validators.compose([])],
      salesPerson: [ Validators.compose([])],
      source: [ Validators.compose([])],
      purposeOfPurchase: [{ value: '' }, Validators.compose([])],
      enquiryDate: [{ value: '', disabled: true }, Validators.compose([])],
      quotationno: [{ value: '' }, Validators.compose([])],
      suppliertype:[{ value: '' }, Validators.compose([])],
      suppliername:[{ value: '', disabled: true }, Validators.compose([Validators.required])],
      invoicenumber:[{ value: '' }, Validators.compose([Validators.required])],
      supplytype:[{ value: '', disabled: true }],
      modeoftransport:[{ value: '', disabled: true }],
      transporter:[{ value: '', disabled: true }],
      invoicedate:[{ value: '', disabled: true }],
      invoicevalue:[{ value: '', disabled: true }],
      grndoneby:[{ value: '', disabled: true }],
      noofboxessent:[{ value: '', disabled: true }],
      receiptvalue:[{ value: '', disabled: true }],
      noofboxesreceived: [ Validators.compose([])],
      goodsreceiptdate: [ Validators.compose([])],
      store: [ Validators.compose([])],

    }) 
    return this.quotationForm;
  }
}





