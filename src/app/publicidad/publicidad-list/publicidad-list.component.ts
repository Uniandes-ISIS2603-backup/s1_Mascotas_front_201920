import { Component, OnInit } from '@angular/core';
import { Publicidad } from '../publicidad';
import { PublicidadService } from '../publicidad.service';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * @author German Rozo
 */
@Component({
  selector: 'app-publicidad-list',
  templateUrl: './publicidad-list.component.html',
  styleUrls: ['./publicidad-list.component.css']
})
export class PublicidadListComponent implements OnInit {

  total: string = "$0" ;

  publicidades: Publicidad[];

  constructor(private publicidadService: PublicidadService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPublicidades();
  }

  getPublicidades(): void {
    this.publicidadService.getPublicidades().subscribe(
      publicidades => 
      { 
        this.publicidades = publicidades.map(x => Object.assign(new Publicidad(), x));;
        this.getTotal()
      });
  }

  onSelection(publicidad: Publicidad) {
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

    let str: string = String(t);
    let aux: string = str.charAt(str.length-1);

      for (var i = str.length-2; i >= 0; i--) {

        if (i % 3 == 0 )
        {
          aux += "." + str.charAt(i);
        }
        else aux += str.charAt(i);
      }
    let res: string ="";
    for (var i = aux.length -1; i >=0; i--) {
        res+= aux.charAt(i);
    }
    this.total = "$"+res;
  }

  onSearch() {
    this.router.navigate(["publicidad", "search"])
  }
}