import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class CreatProspectDetailsService {

  quotationForm : FormGroup
  constructor(private fb : FormBuilder) { }

  createprospectdetails() {
    this.quotationForm = this.fb.group({
      prospectCode: [ Validators.compose([])],
      prospectType: [ Validators.compose([])],
      companyName: [ Validators.compose([])],
      firstName: [ Validators.compose([])],
      middleName: [ Validators.compose([])],
      lastName: [ Validators.compose([])],
      fatherName: [ Validators.compose([])],
      mobileNumber: ['', Validators.compose([Validators.required, Validators.pattern('[1-9]\\d{9}')])],
      whatsAppNumber: ['', Validators.compose([Validators.required, Validators.pattern('[1-9]\\d{9}')])],
      alternateMobileNumber: [ Validators.compose([])],
      std: [ Validators.compose([])],
      telephoneNo: [ Validators.compose([])],
      emailId: [ Validators.compose([])],
      address1: [ Validators.compose([])],
      address2: [ Validators.compose([])],
      address3: [ Validators.compose([])],
      pinCode: [ Validators.compose([])],
      postOffice: [ Validators.compose([])],
      village: [ Validators.compose([])],
      tehsil: [ Validators.compose([])],
      district: [ Validators.compose([])],
      city: [ Validators.compose([])],
      state: [ Validators.compose([])],
      country: [ Validators.compose([])],
      language: [ Validators.compose([])],
      dob: [ Validators.compose([])],
      aniversarydate: [ Validators.compose([])],
      gstno: [ Validators.compose([])],
      panno: [ Validators.compose([])],
      product: [ Validators.compose([])],
      series: [ Validators.compose([])],
      model: [ Validators.compose([])],
      variant: [ Validators.compose([])],
    })
    return this.quotationForm;
  }

  keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  whatsapp(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  alternet(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
