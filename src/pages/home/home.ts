import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {OtherPage} from "../otherPage/otherPage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  
  otherPage : any =OtherPage;
  
  public myJSON: any={
    nombre:'Pablo',
    apepaterno:'Crespo',
    apmaterno:'Duran',  
    curp:'CEDP941112HNTRRB07',
    edad:"",
    sexo:"",
    email:'arturoduran1818@hotmail.com',
    estado:""
  }

  //CEDP941112HNTRRB07
  /*nombre:'Pablo',
  apepaterno:'Crespo',
  apmaterno:'Duran',  
  curp:'CEDP941112HNTRRB07',
  edad:"",
  sexo:"",
  email:'arturoduran1818@hotmail.com',
  estado:""*/
  constructor(public navCtrl: NavController) {

  }
}
