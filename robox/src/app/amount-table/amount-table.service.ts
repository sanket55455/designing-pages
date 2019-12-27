import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class AmountTableService {
  
  quotationFrom : FormGroup;

  constructor(private fb:FormBuilder) { }

  amountTableForm() {
    this.quotationFrom = this.fb.group({
      srNo: [{ value: '', disabled: true }, Validators.compose([])],
      itemDescription: [ Validators.compose([])],
      ACCPAC: [{ value: ''}, Validators.compose([])],
      DMS: [{ value: ''}, Validators.compose([])],
      itemNo: [{ value: '' }, Validators.compose([Validators.required, Validators.pattern('[1-9]\\d{9}')])],
      itmDesc: ['', Validators.compose([ Validators.pattern('[1-9]\\d{9}')])],
      amountAfterDiscount: [{ value: null, disabled: true }, Validators.compose([])],
      binLocation: [{ value: '' }, Validators.compose([])],
      HSNCode: [{ value: '' }, Validators.compose([])],
      unitPrice: [{ value: '' }, Validators.compose([])],
      invoiceQty: [{ value: '' }, Validators.compose([])],
      balanceQty: [{ value: '' }, Validators.compose([])],
      assessableValue: [{ value: '' }, Validators.compose([])],
      discount: [{ value: '' }, Validators.compose([])],
      CGST: [{ value: '' }, Validators.compose([])],
      CGSTAmount: [{ value: '' }, Validators.compose([])],
      SGST: [{ value: '' }, Validators.compose([])],
      SGSTAmount: [{ value: '' }, Validators.compose([])],
      IGST: [{ value: '' }, Validators.compose([])],
      IGSTAmount: [{ value: '' }, Validators.compose([])],
      totalReceivedQty: [{ value: '' }, Validators.compose([])],
      totalReceivedValue: [{ value: '' }, Validators.compose([])],
      receivedShortQty: [{ value: '' }, Validators.compose([])],
      receivedShortValue: [{ value: '' }, Validators.compose([])],
      receivedDamageQty: [{ value: '' }, Validators.compose([])],
      receivedDamageValue: [{ value: '' }, Validators.compose([])],
      notReceivedQty: [{ value: '' }, Validators.compose([])],
      notReceivedValue: [{ value: '' }, Validators.compose([])],

      
    });

    return this.quotationFrom;
  }

  keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
