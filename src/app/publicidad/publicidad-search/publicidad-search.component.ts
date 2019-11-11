import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl} from "@angular/forms";

/**
 * @author German Rozo
 */
@Component({
  selector: 'app-publicidad-search',
  templateUrl: './publicidad-search.component.html',
  styleUrls: ['./publicidad-search.component.css']
})
export class PublicidadSearchComponent implements OnInit {

  id = new FormControl('');

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }


  onSearch() {
    this.router.navigate([this.id.value + ""], { relativeTo: this.route });
  }
}
