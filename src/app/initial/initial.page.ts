import { ToastController, AlertController } from '@ionic/angular';
import { Post } from '../services/post.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './initial.page.html',
  styleUrls: ['./initial.page.scss'],
})
export class InitialPage implements OnInit {

  usuario: string = "";
  senha: string = "";

  cpf: string;


  constructor(public alertController: AlertController, private storage: NativeStorage, private router: Router, private provider: Post, public toast: ToastController) { }

  ngOnInit() {
  }

  async initial() {

    this.router.navigate(['/login']);
  }

 /* async google() {
    this.router.navigate[['/google']]
  }*/

  /* cadastro() {
     this.router.navigate(['/cadastro']);
   }
 
   async recuperarModal() {
     const alert = await this.alertController.create({
       header: 'Recuperar Email!',
       inputs: [
         {
           name: 'email',
           type: 'text',
           placeholder: 'Insira seu Email',
           //value: this.usuario
         },
 
       ],
       buttons: [
         {
           text: 'Cancelar',
           role: 'cancel',
           cssClass: 'secondary',
           handler: () => {
             console.log('Confirm Cancel');
           }
         }, {
           text: 'Enviar',
           handler: (data) => {
             //atualizar pag
 
             this.usuario = data.email;
             console.log(this.usuario);
             this.recuperar();
           }
         }
       ]
     });
 
     await alert.present();
   }
 
 
 
 
   async mensagemSalvar(msg) {
     const toast = await this.toast.create({
       message: msg,
       duration: 1000
     });
     toast.present();
   }
 
 
 
   recuperar() {
     return new Promise(resolve => {
 
       let dados = {
         requisicao: 'recuperar',
         usuario: this.usuario,
       };
 
       this.provider.dadosApi(dados, 'apiLogin.php').subscribe(data => {
 
 
         this.mensagemSalvar(data['result']);
 
 
       });
     });
   }
 
 */
}
