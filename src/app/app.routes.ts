import { Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/contacts', pathMatch: 'full' },
    { path: 'contacts', component: ContactListComponent },
    { path: 'contacts/:id', component: ContactDetailComponent },
    { path: 'add-contact', component: ContactFormComponent },
  ];
  
