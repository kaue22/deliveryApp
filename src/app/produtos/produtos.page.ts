import { AppComponent } from './../app.component';
import { Post } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {


  lista : any = [];
  lista_cat : any = [];
  url_site_img : string;
  url_site_img_cat : string;
  limit : number = 10;
  start : number = 0;
  id: number;
  total_itens : number = 0;
  cpf : string;

  total_carrinho : string;
  dadosLogin : any;
  total_itens_cat : number = 0;
  buscar: string;
  
  constructor(public appCtrl: AppComponent, private storage: NativeStorage, private actRouter: ActivatedRoute, private router: Router, private provider:Post, public toast: ToastController) {  }

  ngOnInit() {
    
    this.actRouter.params.subscribe((data:any)=>{
      this.id = data.id;
      
      //this.adc = data.adc;
      
    });
   
  }

  logout(){
    this.storage.clear();
    this.router.navigate(['/home']);
  }

  
  ionViewWillEnter(){

    
    this.appCtrl.atualizarLogin(this.cpf);
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
      this.cpf = this.dadosLogin.cpf;
      this.listarCarrinho();
      this.appCtrl.atualizarLogin(this.cpf);
      
    }); 
   // this.cpf = '777.777.777-77';
   
    

    this.lista = [];
    this.lista_cat = [];
    this.start = 0;   
    this.listarProdutos();
   
    this.listarCategorias();
    this.url_site_img = this.provider.url_site_img_produtos; 
    this.url_site_img_cat = this.provider.url_site_img_cat; 
  }




  listarProdutos(){
    return new Promise(resolve => {

      

    let dados = {
      requisicao : 'listar-produtos',
      limit : this.limit,
      start : this.start,
      id_cat :this.id, 
      buscar :this.buscar, 
      };

      this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {

        if(data['result'] == '0') {
          this.lista = [];
          this.mensagemBusca();
        }else{
          this.lista = [];
          for(let item of data['result']){
            this.lista.push(item);
            this.total_itens = data['total'];
            
          }
        }
         
        resolve(true);
        
    });

  });
    
  }



  categorias(){
    this.router.navigate(['/categorias']);
  }


  //barra de rolagem
loadData(event) {

  this.start += this.limit;

  setTimeout(() => {
    this.listarProdutos().then(()=>{ 
      event.target.complete();
     });
   
  }, 3000);
  

}


async mensagemBusca() {
  const toast = await this.toast.create({
    message: 'Nenhum Item Encontrado',
    duration: 1000,
    color: 'danger'
  });
  toast.present();
}


async mensagemSalvar() {
  const toast = await this.toast.create({
    message: 'Adicionado ao Carinho!',
    duration: 500,
    color: 'primary'
  });
  toast.present();
}


async mensagemLogar() {
  const toast = await this.toast.create({
    message: 'Você precisa estar logado! Faça Login ou Cadastre-se!',
    duration: 4000,
    color: 'danger'
  });
  toast.present();
}


addCarrinho(id){
 
  if(this.cpf === undefined){
    this.mensagemLogar();
    this.router.navigate(['/login']);
    console.log(this.cpf);
    return;
  }
  return new Promise(resolve => {
        
    let dados = {
      requisicao : 'add-carrinho',
      id_produto : id, 
      cpf : this.cpf, 
      
      };

      this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {
               
          this.mensagemSalvar();
          this.listarCarrinho();
                  
      });
  });
}




listarCarrinho(){

  console.log(this.total_itens);
  return new Promise(resolve => {

  let dados = {
    requisicao : 'listar-carrinho',
    cpf :this.cpf, 
    };

    if(this.cpf != ''){

    this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {

        
          this.total_carrinho = data['total'];

    
         
             
      resolve(true);
      
  });

}

});
  
}




carrinhoPage(){
  this.router.navigate(['/carrinho']);
}




listarCategorias(){
  return new Promise(resolve => {

  let dados = {
    requisicao : 'listar-cat',
    limit : this.limit,
    start : this.start      
    };

    this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {

      if(data['result'] == '0') {
        this.ionViewWillEnter();
      }else{
        this.lista_cat = [];
        for(let item of data['result']){
          this.lista_cat.push(item);
          this.total_itens_cat = data['total'];
        }
      }
       
      resolve(true);
      
  });

});
  
}


filtrarCategoria(id){
  this.router.navigate(['/produtos/' + id ]);
}


}