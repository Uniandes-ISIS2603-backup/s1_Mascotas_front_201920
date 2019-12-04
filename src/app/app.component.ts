import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Title } from '@angular/platform-browser';
import {FuncionService} from "./funcion/funcion.service";
import {Funcion} from "./funcion/funcion";
import {ActivatedRoute, Route, Router} from "@angular/router";



/**
 * The app component. This component is the base of s1_mascotas-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    funciones: Funcion[];

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: string;

    /**
     * Sets the title of the page
     * @param newTitle The title to show on the browser
     */
    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "Mascotas Felices";
        this.setTitle(this.title);
        this.authService.start();

        let role = this.authService.getRole();
        if (role === 'ADMIN')
        {
            this.funtionService.getAdmin().subscribe( f =>
            {
                this.funciones = f;
                console.log("funciones cargadas admin")
            });
        }
        else if (role === 'CLIENT')
        {
            this.funtionService.getClient().subscribe( f =>
            {
                this.funciones = f;
                console.log("funciones cargadas client")
            });
        }
        else
        {
            this.funtionService.getGuest().subscribe( f =>
            {
                this.funciones = f;
                console.log("funciones cargadas guest");
            });
        }

        this.router.navigate(["home"]);
    }

    /**
     * @ignore
     */
    constructor(private authService: AuthService,
                private titleService: Title,
                private funtionService: FuncionService,
                private router: Router) { }


}





