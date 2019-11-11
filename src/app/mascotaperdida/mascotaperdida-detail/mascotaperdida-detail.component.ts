import { Component, OnInit, Input, PipeTransform } from '@angular/core';
import { MascotaPerdida } from '../mascotaperdida';
import { MascotaPerdidaService } from '../mascotaperdida.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MascotaPerdidaDetail } from '../mascotaperdida-detail';

import { Pipe } from '@angular/core';

/**
 * Especie de la mascota
 */
@Pipe({ name: 'especie' })
export class EspeciePipe implements PipeTransform {
  transform(idEspecie: number) {
    let especie: string;
    switch (idEspecie) {
      case 0: {
        especie = 'Perro';
        break;
      }
      case 1: {
        especie = 'Gato';
        break;
      }
      default: {
        especie = 'Animal Mistico';
        break;
      }
    }
    return especie;
  }
}

@Component({
  selector: 'app-mascotaperdida-detail',
  templateUrl: './mascotaperdida-detail.component.html',
  styleUrls: ['./mascotaperdida-detail.component.css']
})
/**
 * Detalles de mascota perdida
 */
export class MascotaPerdidaDetailComponent implements OnInit {
  /**
   * La mascota perdida
   */
  mascotaperdida: MascotaPerdida;
  /**
   * Recibe como parametro el id de la mascota perdida
   */
  @Input() id: number;

  loader: any;
  /**
   * Constructor de clase mascota perdida detalle
   * @param mascotaperdidaService Servicio de la mascora perdida
   * @param router La ruta
   * @param route La ruta activa
   */
  constructor(private mascotaperdidaService: MascotaPerdidaService,
    private router: Router,
    private route: ActivatedRoute) { }
  /**
 * The method which initializes the component.
 * We need to create the author so it is never considered as undefined
 */
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }
  /**
   * Destroy
   */
  ngOnDestroy() {
    this.loader.unsubscribe();
  }
  /**
   * Llama el método con el id de la mascota correspondiente
   * @param params id
   */
  onLoad(params) {

    this.id = parseInt(params['id']);
    this.mascotaperdida = new MascotaPerdida();
    this.getMascotaPerdida();
  }
  /**
   * Llama el metodo de mascota perdida
   */
  getMascotaPerdida(): void {
    this.mascotaperdidaService.getMascotaPerdida(this.id).subscribe(mascotaperdidas => this.mascotaperdida = mascotaperdidas);
  }
  /**
   * Se va a mascota perdidas list
   */
  onBack() {
    this.router.navigate(["mascotasPerdidas", "list"]);
  }
  /**
   * Da la imagen principal de la mascota perdida y si no hay 
   * pone la de default
   * @param m MascotaPerdidaDetail
   */
  getImageSrc(m: MascotaPerdidaDetail): string {
    //let src = "../../../assets/images/mascota.png";
    let src = "../../../assets/images/mascotaPerdida.png";
    if (m != undefined && m.multimedia != undefined) {
      for (let mul of m.multimedia) {
        if (mul.tipo == 'foto') {
          src = mul.url;
          break;
        }
      }
    }
    console.log(src);
    return src;
  }
}