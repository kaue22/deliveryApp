import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class Post {
    //url_site: string = 'https://kaue.online/ProjetoDelivery/';
    url_site: string = 'http://localhost/ProjetoDelivery/';
    server: string = this.url_site + 'apis/';


    url_site_img_produtos: string = this.url_site + 'images/produtos/';
    url_site_img_cat: string = this.url_site + 'images/categorias/';
    url_site_img: string = this.url_site + 'images/';

    constructor(private http: HttpClient) {

    }


    dadosApi(dados: any, api: string) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }

        let url = this.server + api;
        /* console.log("URL");
         console.log(url);
         console.log("Dados");
         console.log(JSON.stringify(dados));
         console.log("httpOptions");
         console.log(httpOptions);*/
        return this.http.post(url, JSON.stringify(dados), httpOptions).map(res => res);
    }
}