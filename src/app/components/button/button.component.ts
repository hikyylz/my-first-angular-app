import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
  // Typescript de force defiend yapmak gerekiyormuş tanımlanmamış component değişkenlerini
  // input olarak vereceğim şeyleri böyle yazıyorum.
  @Input()
  text!: String;

  constructor(){  }

  ngOnInit(): void {
    
  }

}
