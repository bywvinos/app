import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DomEnvio } from '../../models/domicilio-envio';
import { DomicilioEnvioProvider } from '../../providers/providers';
import { Storage } from '@ionic/storage';
import { DomenvioFormPage } from '../domenvio-form/domenvio-form';
/**
 * Generated class for the DomicilioEnvioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-domicilio-envio',
  templateUrl: 'domicilio-envio.html',
  providers: [DomicilioEnvioProvider],
})
export class DomicilioEnvioPage implements OnInit{

  public domicilios: DomEnvio[];
  public messageError: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage:Storage,
    public alertCtrl:AlertController,
    public direccionProvider: DomicilioEnvioProvider
  ) {
    this.domicilios =[];
  }
  ngOnInit(){
    this.showDirecciones();
  }

  showDirecciones(){
    this.storage.get("access_token").then((val)=>{
      let token = JSON.parse(val);
      this.direccionProvider.getDomicilios(token).subscribe(result=>{
        console.log(result);
        this.domicilios = result.domicilio;
        console.log(this.domicilios);
      },error=>{
        this.messageError = JSON.parse(error._body)
        console.log("Error " + JSON.stringify(this.messageError));
      });
    });
  }

  showDireccion(id){

  }

  openForm(){
    this.navCtrl.push(DomenvioFormPage);
  }

  editDireccion(direccion:DomEnvio){
    this.navCtrl.push(DomenvioFormPage,{
      edit:true,
      domicilio: direccion
    });
  }

  eliminarDireccion(id){
    let alert = this.alertCtrl.create({
      title: 'Deseas eliminar esta direccion',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            console.log(data);
            this.storage.get("access_token").then((val)=>{
              let token = JSON.parse(val);
              console.log(token);
              this.direccionProvider.deleteDomicilio(token,id).subscribe(result => {
                console.log(result);
                // this.tarjetas = result.tarjetas;
                // console.log(this.tarjetas);
                this.ionViewWillEnter();
              },
                error => {
                  this.messageError = JSON.parse(error._body)
                  console.log("Error " + JSON.stringify(this.messageError));
                  
                });
            });
          }
        }
      ]
    });
    alert.present();
  }
  ionViewWillEnter(){
    console.log("hola tarjeta");
    this.ngOnInit();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DomicilioEnvioPage');
  }

}
