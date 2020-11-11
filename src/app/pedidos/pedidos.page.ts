import { ToastController } from '@ionic/angular';
import { Post } from './../services/post.service';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  lista : any = [];
  nome : Date;
  dadosLogin : any;
  cpf: string = "";
  dados: string;
  mensagem: string = "1";
  
  constructor(public toast: ToastController, private storage: NativeStorage, private router: Router,  private provider: Post) { this.carregar() }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
     
      this.cpf = this.dadosLogin.cpf;
      this.lista = [];
      this.carregar();
      
    }); 
    //this.cpf = '777.777.777-77';

    
    
  }

  async mensagemLogar(texto) {
    const toast = await this.toast.create({
      message: texto,
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  }

  
  carregar(){

   
    
    return new Promise(resolve => {
      this.lista = [];
      let dados = {
        requisicao : 'listar',
        nome : this.nome,
        cpf : this.cpf,
        
        };

       

        
        if(this.cpf != ''){

       

        this.provider.dadosApi(dados, 'apiPedidos.php').subscribe(data => {
        this.dados = data['result'];
        if(data['result'] == null) {
          
        }else{
          this.mensagemLogar(data['texto']);
          for(let item of data['result']){
            this.lista.push(item);
            this.mensagem = 'Entrou';
          }
        }
         
         resolve(true);
         
        });

      }

    });

  
    
  }



  mostrar(id){
    this.router.navigate(['/mostrar-produtos/' + id]);
  }


  //atualizar o list view

 doRefresh(event) {
    
  setTimeout(() => {
    this.ionViewWillEnter();
    event.target.complete();
  }, 500);
}


}
