import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-normal',
  imports: [FormsModule],
  templateUrl: './formulario-normal.html',
  styleUrl: './formulario-normal.css'
})
export class FormularioNormal {
  name: string = '';
  names: string[] = [];

  enviar() {
    if (this.name.trim() != "") {
      this.names.push(this.name.trim());
      this.name = '';
    }
  }
}
