import { Component, OnInit } from '@angular/core';

import { MascotaEncontrada } from '../mascotaencontrada';

@Component({
  selector: 'app-mascotaencontrada-editor',
  templateUrl: './mascotaencontrada-editor.component.html',
  styleUrls: ['./mascotaencontrada-editor.component.css']
})
export class MascotaencontradaEditorComponent implements OnInit {

  especies = ['Perro', 'Gato'];

  constructor() { }

  ngOnInit() {
  }
  
}


export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}