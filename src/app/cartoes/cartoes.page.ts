import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Post } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.page.html',
  styleUrls: ['./cartoes.page.scss'],
})
export class CartoesPage implements OnInit {

  url_site_img : string;
  cpf: string;
  dadosLogin : any;
  cartao : number;

  mensagem: string = "1";

  constructor(private router: Router, public toast: ToastController, private storage: NativeStorage, private provider:Post) { }

  ngOnInit() {
    this.listarCartoes();
  }

  
  ionViewWillEnter(){

    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
     
      this.cpf = this.dadosLogin.cpf;

      this.url_site_img = this.provider.url_site_img; 
      this.listarCartoes();
      
    }); 
    //this.cpf = '777.777.777-77';

   
  }


  async mensagemLogar() {
    const toast = await this.toast.create({
      message: 'Você precisa está logado!',
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  }



  listarCartoes(){

     
    return new Promise(resolve => {
  
    let dados = {
      requisicao : 'listar-cartoes',
      cpf :this.cpf, 
      };

      if(this.cpf != ''){
  
      this.provider.dadosApi(dados, 'apiPedidos.php').subscribe(data => {

        if(data['cartao'] == null) {
         
        }else{
  
        this.cartao = data['cartao']; 
        this.mensagem = 'Entrou';
        }
               
        resolve(true);
        
    });


  }
  
  });
    
  }

}
