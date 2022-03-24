import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuVisible = false;
  mode = new FormControl('push');

  
  constructor() { }



  ngOnInit(): void {
  }


  showMenu(): void {
    this.menuVisible = !this.menuVisible
    console.log("menuVisible:", this.menuVisible)
  } 

}
