import { Component, OnInit } from '@angular/core';
import { AmountTableService } from './amount-table.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-amount-table',
  templateUrl: './amount-table.component.html',
  styleUrls: ['./amount-table.component.scss'],
  providers: [
    AmountTableService
  ]
})
export class AmountTableComponent implements OnInit {

  quotationFrom: FormGroup;

  amountTableValue: Array<object> = [{
    srNo: '1',
    // itemDescription: 'item1',
    ACCPAC: 'ORD19-CHS-004113',
    DMS: 'SPO/C01220/2019/00014',
    itemNo: 'LEP02-00030',
    itmDesc: 'SCREW',
    binLocation: '',
    HSNCode: '7234',
    unitPrice: '356.6',
    invoiceQty: '7',
    balanceQty: '3',
    assessableValue: '2496.2',
    discount: '0',
    CGST: '0',
    CGSTAmount: '0',
    SGST: '0',
    SGSTAmount: '0',
    IGST: '0',
    IGSTAmount: '0',
    totalReceivedQty:'',
    totalReceivedValue:'',
    receivedShortQty:'',
    receivedShortValue:'',
    receivedDamageQty:'',
    receivedDamageValue:'',
    notReceivedQty:'',
    notReceivedValue:''

  },
  {
    srNo: '2',
    ACCPAC: 'ORD19-CHS-004114',
    DMS: 'SPO/C01220/2019/00014',
    itemNo: 'LEP02-00030',
    itmDesc: 'PLUG',
    binLocation: '',
    HSNCode: '9586',
    unitPrice: '41.77',
    invoiceQty: '22',
    balanceQty: '15',
    assessableValue: '918.94',
    discount: '0',
    CGST: '0',
    CGSTAmount: '0',
    SGST: '0',
    SGSTAmount: '0',
    IGST: '0',
    IGSTAmount: '0',
    totalReceivedQty:'',
    totalReceivedValue:'',
    receivedShortQty:'',
    receivedShortValue:'',
    receivedDamageQty:'',
    receivedDamageValue:'',
    notReceivedQty:'',
    notReceivedValue:''




  },
  ]

  constructor(private amountTableService: AmountTableService) { }
  ngOnInit() {
    this.quotationFrom = this.amountTableService.amountTableForm();
    this.tableAmount();
  }
  keyPress(event: any) {
    this.amountTableService.keyPress(event)
  }
  tableAmount() {
    this.quotationFrom.patchValue(this.amountTableValue)
  }
  onBtnClick(index) {
    this.amountTableValue.splice(index, 1)
  }
  onSubmitClick() {
    console.log('Array ====>', this.amountTableValue)
  }
  // modelChanged(chngEvent) {
  //   console.log("chngEvent ", chngEvent);
  //   chngEvent.indexOf(this.amountTableValue);
  // }


  myFn(chngValue: string, row) {
    console.log("chngValue ", chngValue);

    row.itemDescription = chngValue
    console.log("row.itemDescription ", row.itemDescription);
  }

}
