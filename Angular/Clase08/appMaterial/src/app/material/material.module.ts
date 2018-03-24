import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSelectModule,
  MatRadioModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule
} from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule
  ],
  declarations: []
})
export class MaterialModule { }
