import { Component, OnInit, Output } from '@angular/core';
import { CreateQuotationService } from './create-quotation.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-quotation',
  templateUrl: './create-quotation.component.html',
  styleUrls: ['./create-quotation.component.scss'],
  providers: [
    CreateQuotationService
  ]
})
export class CreateQuotationComponent implements OnInit {

  quotationForm: FormGroup;

 

  purchase: string[] = ['Own Use','Hire'];
  grnType: object[] = [{ no: 'KAI', id: 1 }, { no: 'Co-Dealer', id: 2 }];
  supplierType: string[]= ['KAI','Co-Dealer','Branch','Third Party Supplier'];
  stores: string[] = ['Spares Counter','warehouse'];
  invoiceNumber: string[] = ['1','2','3','4']

createQuotationValue1: object = {
  enquiryDate:'12 / 12 / 2019',
}
  
  createQuotationValue: object = {
    enquiryDate: '12 / 10 / 2019',
    // supplytype: ''
    // suppliernames: 'Supplier Name'
  }

  invoiceNumberValues: object = {
    enquiryDate:'10 / 24 / 2019',
    modeoftransport: 'Road',
    transporter: 'Gati',
    invoicevalue:'4451.65',
    grndoneby: 'dealer22',
    noofboxessent: '1',
    receiptvalue: '0',
  }

  proDetail : object = {}

  max: Date | null;
  min: Date | null;
  today = new Date();
  tomorrow = new Date();
  constructor(private createQuotationService: CreateQuotationService) { }
  ngOnInit() {
    this.quotationForm = this.createQuotationService.createQuotation();
  }
                                                                                                                                                                                              
  invoiceNumberForm(event){
    if (event.value === '1'){
      this.quotationForm.controls.enquiryDate.patchValue(new Date(this.invoiceNumberValues['enquiryDate']));

      this.quotationForm.controls.modeoftransport.patchValue(this.invoiceNumberValues['modeoftransport']);
      this.quotationForm.controls.transporter.patchValue(this.invoiceNumberValues['transporter']);
      this.quotationForm.controls.invoicevalue.patchValue(this.invoiceNumberValues['invoicevalue']);
      this.quotationForm.controls.grndoneby.patchValue(this.invoiceNumberValues['grndoneby']);
      this.quotationForm.controls.noofboxessent.patchValue(this.invoiceNumberValues['noofboxessent']);
      this.quotationForm.controls.receiptvalue.patchValue(this.invoiceNumberValues['receiptvalue']);

    }
  }
  enquiryCreateForm(event) {

    console.log("event", event);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    if (event.value.no === 'KAI') {

      // this.proDetail = this.createQuotationValue
this.quotationForm.controls.suppliertype.patchValue(this.supplierType[0]);
      // this.quotationForm.controls.enquiryDate.patchValue(new Date(this.createQuotationValue['enquiryDate']));
      // this.quotationForm.controls.tentativePurchaseDate.patchValue(new Date(this.createQuotationValue['tentativePurchaseDate']));
      // this.quotationForm.controls.supplytype.patchValue(this.createQuotationValue['supplytype']);
      // this.quotationForm.controls.salesPerson.patchValue(this.createQuotationValue['salesPerson']);
      // this.quotationForm.controls.source.patchValue(this.createQuotationValue['source']);
      // this.quotationForm.controls.purposeOfPurchase.patchValue(this.createQuotationValue['purposeOfPurchase']);
      // this.quotationForm.controls.suppliername.patchValue(this.createQuotationValue)['suppliername'];
     
      // we can patch values directly like this 
      // this.quotationForm.patchValue(this.createQuotationValue)
    }

    if (event.value.no === 'Co-Dealer') {
      
      this.quotationForm.controls.enquiryDate.patchValue(new Date(this.createQuotationValue['enquiryDate']));

    }
  }
}
