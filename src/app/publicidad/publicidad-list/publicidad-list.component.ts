import { Component, OnInit } from '@angular/core';
import { PublicidadDetail } from '../publicidad-detail';
import { PublicidadService } from '../publicidad.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Multimedia } from "../../multimedia/multimedia";

//German Rozo
@Component({
  selector: 'app-publicidad-list',
  templateUrl: './publicidad-list.component.html',
  styleUrls: ['./publicidad-list.component.css']
})
export class PublicidadListComponent implements OnInit {

  total: string = "$0" ;

  publicidades: PublicidadDetail[];

  constructor(private publicidadService: PublicidadService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPublicidades();
  }

  getPublicidades(): void {
    this.publicidadService.getPublicidades().subscribe(
      publicidades => 
      { 
        this.publicidades = publicidades;
        this.publicidades.map(x => Object.assign(new PublicidadDetail(), x));
        this.getTotal()
        this.log();
      });
  }

  onSelection(publicidad: PublicidadDetail) {
    this.router.navigate([publicidad.id + ""], { relativeTo: this.route });
  }

  onCreate() {
    this.router.navigate(["publicidad", "create"]);
  }

  getTotal() 
  {
    let t: number = 0;

    this.publicidades.forEach( publicidad =>
      t+= publicidad.costo
    )

    let str: string = t+'';
    let aux: string = str.charAt(str.length-1);
    
      for (let i = str.length-2; i >= 0; i--) {

        if (i % 3 == 0 )
        {
          aux += "." + str.charAt(i);
        }
        else aux += str.charAt(i);
      }
    let res: string ="";
    for (let e = aux.length -1; e >=0; e--) {
        res+= aux.charAt(e);
    }
    this.total = "$"+res;
  }

  onSearch() {
    this.router.navigate(["publicidad", "search"])
  }

  private log()
  {
    //for (var i= 0; i< this.publicidades[0].multimedia.length; i++)
      console.log("jiro");
  }
}