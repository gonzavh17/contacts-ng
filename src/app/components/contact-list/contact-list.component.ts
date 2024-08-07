import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { NgFor } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any[] = [];
  contact = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts().subscribe(data => {
      this.contacts = data;
      console.log(data);
    });
  }


  deleteContact(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.contactService.deleteContact(id).subscribe(() => {
          Swal.fire(
            'Eliminado!',
            'El contacto ha sido eliminado.',
            'success'
          );
          this.getContacts(); // Refresca la lista de contactos
        }, error => {
          Swal.fire(
            'Error!',
            'Hubo un problema eliminando el contacto.',
            'error'
          );
        });
      }
    });
  }
}
