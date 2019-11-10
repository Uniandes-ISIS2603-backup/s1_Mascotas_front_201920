import { Component, OnInit } from '@angular/core';
import { Publicidad } from '../publicidad';
import { PublicidadService } from '../publicidad.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicidad-list',
  templateUrl: './publicidad-list.component.html',
  styleUrls: ['./publicidad-list.component.css']
})
export class PublicidadListComponent implements OnInit {

  total: string;

  publicidades: Publicidad[];

  constructor(private publicidadService: PublicidadService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPublicidades();
  }

  getPublicidades(): void {
    this.publicidadService.getPublicidades().subscribe(
      publicidades => 
      { 
        this.publicidades = publicidades; 
        this.getTotal()
      });
  }

  onSelection(publicidad: Publicidad) {
    this.router.navigate([publicidad.id + ""], { relativeTo: this.route })
  }

  onCreate() {
    this.router.navigate(["publicidad", "create"])
  }

  getTotal() 
  {
    let t: number = 0;

    this.publicidades.forEach( publicidad =>
      t+= publicidad.costo
    )

    let str: string = String(t);
    let res: string = "$"+ str.charAt(0);

      
      for (var i = 1; i < str.length; i++) {
        if (i % 3 == 0) 
        {
          res += "." + str.charAt(i);
        }
        else res += str.charAt(i);
      }
  
    this.total = res;
  }

 
}