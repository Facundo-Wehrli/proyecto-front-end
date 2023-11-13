import { Component, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormServiceService } from 'src/app/shared/services/form-service.service';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  public myForm: FormGroup = new FormGroup({});

  private validatorsService = inject(ValidatorsService);
  private formService = inject(FormServiceService);

  ngOnInit(): void {
    this.myForm = this.formService.createForm();
  }

  public isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  public onSubmit(): void {
    this.myForm.markAllAsTouched();
  }
}
