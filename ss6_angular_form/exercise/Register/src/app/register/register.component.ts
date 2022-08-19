import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Register} from '../model/register';
import {Country} from '../model/country';
import {CountryService} from '../service/country.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  register: Register;

  public countryList: Country[];

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {

    this.countryList = this.countryService.getAll();
    console.log(this.countryList);

    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(99)]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(\\+84)[0-9]{9,10}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, [this.checkPass]);
  }

  checkPass(item: AbstractControl) {
    const pass = item.value.password;
    const confirmPass = item.value.confirmPassword;
    return pass === confirmPass ? null : {passwordNotMatch: true};
  }


  submit() {
    this.register = this.registerForm.value;
    console.log(this.register);
  }

}
