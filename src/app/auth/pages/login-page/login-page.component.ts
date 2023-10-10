import { Component, OnInit, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';
import { FormServiceService } from '../../services/form-service.service';
@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
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
