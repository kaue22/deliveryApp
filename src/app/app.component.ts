import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {


  public selectedIndex = 0;
  public ativo: string;
  public appPages;
    

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: NativeStorage
  ) {
   
    this.initializeApp();

  }

  

  

  initializeApp() {

  
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    
  }


  

  ngOnInit() {
    
  }


  public atualizarLogin(cpf){
    if(cpf === ''){
      this.ativo = 'disabled';
      
    }


    this.appPages = [
      {
        title: 'Produtos',
        url: '/produtos',
        icon: 'fast-food',
        
      },
  
      {
        title: 'Categorias',
        url: '/categorias',
        icon: 'list-circle',
        
      },
  
      {
        title: 'Carrinho',
        url: '/carrinho',
        icon: 'cart',
        inativo: this.ativo
      },
  
      {
        title: 'Pedidos',
        url: '/pedidos',
        icon: 'bicycle',
        inativo: this.ativo
        
      },
  
      {
        title: 'Cartões',
        url: '/cartoes',
        icon: 'card',
        inativo: this.ativo
      },
     
    ];
  }


}
