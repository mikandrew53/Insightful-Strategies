import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
interface inputElement {
  element: ElementRef,
  valid: boolean,
  entered: boolean,
  inputEntered: boolean
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }
  @ViewChild('firstName', {static: true}) firstName: ElementRef;
  @ViewChild('lastName', {static: true}) lastName: ElementRef;
  @ViewChild('email', {static: true}) email: ElementRef;
  @ViewChild('orginization', {static: true}) orginization: ElementRef;
  @ViewChild('message', {static: true}) message: ElementRef;
  @ViewChild('phone', {static: true}) phone: ElementRef;
  @ViewChild('send', {static: true}) send: ElementRef;

  inputs: Array<inputElement>;
  sent:boolean = false;
  element;

  showElement = [false, false];

  ngOnInit(): void {
    this.inputs = [
      { element: this.firstName, valid: false, entered: false, inputEntered: false }, //e
      { element: this.lastName, valid: false, entered: false, inputEntered: false }, //e
      { element: this.email, valid: false, entered: false, inputEntered: false }, //e & email
      { element: this.orginization, valid: false, entered: false, inputEntered: false }, // e
      { element: this.message, valid: false, entered: false, inputEntered: false }, // e
      { element: this.phone, valid: true, entered: false, inputEntered: false }, // p
      { element: this.send, valid: false, entered: false, inputEntered: false }, // check all 
    ]

    
    this.element = document.getElementById('1');
  }

  onAppear(e, index){
    if(e.visible)
      this.showElement[index]= true;
  }

  checkIfEmpty(inputIndex){
    if(this.inputs[inputIndex].element.nativeElement.value === "")
      return true;
    return false;
  }

  onFocusOut(e:Event, inputIndex){
    this.inputs[inputIndex].entered = true;
  }

  onKeyPress(e:Event, inputIndex:number){
    if(!this.inputs[inputIndex].inputEntered && this.inputs[inputIndex].element.nativeElement.value !== "")
      this.inputs[inputIndex].inputEntered = true;
    
    if (inputIndex === 5)
      this.validatePhone(e);
    else if (inputIndex === 2)
      this.inputs[2].valid =  this.validateEmail(this.inputs[2].element.nativeElement.value);
    else 
      this.inputs[inputIndex].valid = !this.checkIfEmpty(inputIndex);
    }

  validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePhone(e:any) {
    if(this.inputs[5].element.nativeElement.value[0] && this.inputs[5].element.nativeElement.value.length === 10){
      console.log('VALID');
    }


    if(isNaN(e.data) || this.inputs[5].element.nativeElement.value.length === 19){
      this.inputs[5].element.nativeElement.value = this.inputs[5].element.nativeElement.value.substring(0, this.inputs[5].element.nativeElement.value.length -1) 
    }else {
      if(e.inputType === 'deleteContentBackward'){

      }else{
        if(this.inputs[5].element.nativeElement.value.length === 1)
          this.inputs[5].element.nativeElement.value = '(' + this.inputs[5].element.nativeElement.value;  
        else if(this.inputs[5].element.nativeElement.value.length === 4)
          this.inputs[5].element.nativeElement.value += ')'
      else if(this.inputs[5].element.nativeElement.value.length === 6 || this.inputs[5].element.nativeElement.value.length === 12) {
        this.inputs[5].element.nativeElement.value = this.inputs[5].element.nativeElement.value.substring(0, this.inputs[5].element.nativeElement.value.length-1) + ` - ${e.data}`;
      }
    }
  }
}

  submit(e:Event){
    this.sent = true;

    for(let input of this.inputs){
      input.entered = true;
      input.inputEntered = true;
    }
    
    e.preventDefault();
  }

}

 
