import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from './validators.service';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  private fb = inject(FormBuilder);
  private validatorsService = inject(ValidatorsService);

  public createForm(): FormGroup {
    return this.fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(
              this.validatorsService.firstNameAndLastnamePattern
            ),
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(this.validatorsService.emailPattern),
          ],
        ],
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password2: ['', [Validators.required]],
      },
      {
        validators: [
          this.validatorsService.isFieldOneEqualFieldTwo(
            'password',
            'password2'
          ),
        ],
      }
    );
  }
}
