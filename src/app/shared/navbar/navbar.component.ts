import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private router:Router){}
  ngOnInit(): void {
    
  }

  irUsuario(id:string){

    if(!id){return};
    //una vez implementado el router arriba ya podemos usarlo abajo:
      this.router.navigate(['/usuario', id]);



  }

}
