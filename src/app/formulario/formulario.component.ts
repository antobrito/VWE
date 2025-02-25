import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //esta es para el form
import { HttpClient } from '@angular/common/http'; //esta es para el form
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ ReactiveFormsModule], //para usar formGroup
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {


  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  sendEmail() {
    if (this.contactForm.valid) {
      this.http.post('http://localhost:3000/send-email', this.contactForm.value)
        .subscribe(response => {
          alert('Correo enviado con éxito');
          this.contactForm.reset();
        }, error => {
          alert('Hubo un error al enviar el correo');
        });
    }
  }

  
}
