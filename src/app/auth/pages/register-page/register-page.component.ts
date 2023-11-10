import { Component, OnInit, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { FormServiceService } from '../../../shared/services/form-service.service';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  public myForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.myForm = this.formService.createForm();
  }

  private validatorsService = inject(ValidatorsService);
  private formService = inject(FormServiceService);

  public isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  public onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
