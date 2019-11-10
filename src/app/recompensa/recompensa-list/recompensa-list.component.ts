import { Component, OnInit } from '@angular/core';
import { Recompensa } from '../recompensa';
import { RecompensaService } from '../recompensa.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recompensa-list',
  templateUrl: './recompensa-list.component.html',
  styleUrls: ['./recompensa-list.component.css']
})
export class RecompensaListComponent implements OnInit {

  total: string;

  recompensas: Recompensa[];

  constructor(private recompensaService: RecompensaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRecompensas();
  }

  getRecompensas(): void {
    this.recompensaService.getRecompensas().subscribe(
      recompensas => 
      { 
        this.recompensas = recompensas; 
   
      });
  }

  onSelection(recompensa: Recompensa) {
    this.router.navigate([recompensa.id + ""], { relativeTo: this.route })
  }

  onCreate() {
    this.router.navigate(["recompensa", "create"])
  }



 
}