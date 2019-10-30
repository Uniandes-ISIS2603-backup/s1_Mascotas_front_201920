import { Component, OnInit } from '@angular/core';
import { Mascotaperdida} from '../mascotaperdida';


@Component({
  selector: 'list-mascotaperdida',
  templateUrl: './mascotaperdida-list.component.html',
  
})
export class MascotaperdidaListComponent  {

mascotasperdidas : Mascotaperdida[] = [new Mascotaperdida ("chigu",1,"dada","jajaj"), new Mascotaperdida ("pa",2,"sa","me")];

}