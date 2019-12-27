import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { CreatProspectDetailsService } from './creat-prospect-details.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-prospect-details',
  templateUrl: './create-prospect-details.component.html',
  styleUrls: ['./create-prospect-details.component.scss'],
  providers: [
    CreatProspectDetailsService
  ]
})
export class CreateProspectDetailsComponent implements OnInit {

  quotationForm : FormGroup

  prospects : string[] = ['Institution'];
  postoffices : string[] = ['kothrud','pune']

  constructor(private creatProspectDetailsService:CreatProspectDetailsService) { }

  ngOnInit() {
    this.quotationForm = this.creatProspectDetailsService.createprospectdetails()
  }

  keyPress(event: any) {
    this.creatProspectDetailsService.keyPress(event)
  }
  whatsapp(event: any) {
    this.creatProspectDetailsService.whatsapp(event)
  }
  alternet(event: any) {
    this.creatProspectDetailsService.alternet(event)
  }


@Input() public set proDetail(gdse){
  console.log("pros gdse ", gdse);
  if(this.quotationForm)
  // All values patch at a time becuz of formcontrol Name and key name are same
  this.quotationForm.patchValue(gdse);

}

}
