import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  personForm = new FormGroup({
    nombrePersona: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellidoPersona: new FormControl('', [Validators.required, Validators.minLength(3)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    nombreMascota: new FormControl('', [Validators.required]),
    pesoMascota: new FormControl('', [Validators.required]),
    razaMascota: new FormControl('', [Validators.required])
  })

  registerPerson() {
    if (this.personForm.valid) {
      this.apiService.registerPerson(this.personForm.value).subscribe(result => {
        console.log(result, 'bien');
        this.router.navigate(['home']);
        this.alertSuccess();
      }, (error) => {
        this.alertError();
        this.personForm.reset()
        console.log(error, 'Error');
        this.router.navigate(['home']);
      })
    } else {
      // this.alertError();
      console.log('Error');
      this.personForm.reset()
    }
  }


  alertSuccess() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Registro Exitoso'
    })
  }
  
  alertError() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'error',
      title: 'Error, Registre Nuevamente'
    })
  }
}
