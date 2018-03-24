import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(private referencia:MatDialogRef<PopupComponent>, 
    @Inject(MAT_DIALOG_DATA) public datosRecibidos: any) { }

  ngOnInit() {
  }

  enviarInfo(){
    this.referencia.close({status: "ok"})
  }

}
