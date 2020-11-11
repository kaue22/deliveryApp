import { Post } from './../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.page.html',
  styleUrls: ['./finalizar.page.scss'],
})
export class FinalizarPage implements OnInit {

  total_carrinho : string;
  total_itens : string;
  dadosLogin : any;

  frete : string;
  subtotal : string;
  subtotal2 : string;
  previsao: string;

  rua: string;
  numero: string;
  bairro: string;

  tipo: string;
  troco: string;
  obs: string;

  cpf: string;

  lista : any = [];

  constructor( private storage: NativeStorage, private actRouter: ActivatedRoute, private router: Router, private provider:Post, public toast: ToastController) { }

  ngOnInit() {
    
  }

  
  
  ionViewWillEnter(){

    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
      this.cpf = this.dadosLogin.cpf;
     
      
    }); 
   // this.cpf = '777.777.777-77';
    this.listarCarrinho();
    this.listarClientes();
    this.listarLocais();
    this.lista = [];
    
  }

  Carrinho(){
    this.router.navigate(['/carrinho']);
  }



  
listarCarrinho(){

   return new Promise(resolve => {

  let dados = {
    requisicao : 'listar-carrinho',
    cpf :this.cpf, 
    };

    this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {

        
          
          if(data['result'] == '0') {
            this.ionViewWillEnter();
          }else{
                       
              this.total_carrinho = data['total'];
              this.frete = data['frete'];
              this.subtotal = data['subtotal'];
              this.subtotal2 = data['subtotal2'];
              this.total_itens = data['totalItens'];
              this.previsao = data['previsao'];
            
          }
         
             
      resolve(true);
      
  });

});
  
}



listarClientes(){
  return new Promise(resolve => {

  let dados = {
    requisicao : 'listar-clientes',
    cpf :this.cpf, 
    };

    this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {

        
          
          if(data['result'] == '0') {
            this.ionViewWillEnter();
          }else{
           
           
              this.rua = data['rua'];
              this.numero = data['numero'];
              this.bairro = data['bairro'];
              
           
          }
         
             
      resolve(true);
      
  });

});
  
}



async mensagemSalvar(texto) {
  const toast = await this.toast.create({
    message: texto,
    duration: 2000,
    color: 'primary'
  });
  toast.present();
}




finalizar(){
  return new Promise(resolve => {
        
    let dados = {
      requisicao : 'finalizar-pedido',
      cpf : this.cpf,
      rua : this.rua,
      numero : this.numero,
      bairro : this.bairro,
      obs : this.obs,
      troco : this.troco,
      tipo : this.tipo,
      total: this.subtotal,
      };

      this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {
        
        
          this.mensagemSalvar(data['texto']);

          if(data['texto'] === 'Pedido Concluído!'){
            this.router.navigate(['/pedidos']);
          }
          
         
        
      });
  });
}


listarLocais(){
  return new Promise(resolve => {

  let dados = {
    requisicao : 'listar-locais',
   
    };

    this.provider.dadosApi(dados, 'apiLogin.php').subscribe(data => {

      if(data['result'] == '0') {
        this.ionViewWillEnter();
      }else{
        this.lista = [];
        for(let item of data['result']){
          this.lista.push(item);
                      
        }
      }
       
      resolve(true);
      
  });

});
  
}



}
