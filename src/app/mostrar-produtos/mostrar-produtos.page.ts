import { Post } from './../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-produtos',
  templateUrl: './mostrar-produtos.page.html',
  styleUrls: ['./mostrar-produtos.page.scss'],
})
export class MostrarProdutosPage implements OnInit {

  lista : any = [];
  url_site_img : string;
  
  id: number;
 
  constructor(private actRouter: ActivatedRoute, private router: Router, private provider:Post) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.id = data.id;
     
    });
  }

 
  
  ionViewWillEnter(){

    this.lista = [];
   
    this.listarProdutos();
    this.url_site_img = this.provider.url_site_img_produtos; 
  }


  Pedidos(){
    this.router.navigate(['/pedidos']);
  }


  listarProdutos(){

     
    return new Promise(resolve => {
  
    let dados = {
      requisicao : 'listar-produtos',
      id :this.id, 
      };
  
      this.provider.dadosApi(dados, 'apiPedidos.php').subscribe(data => {
  
          
            
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
