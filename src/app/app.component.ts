import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Title } from '@angular/platform-browser';

/**
 * The app component. This component is the base of s1_mascotas-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
    }

       /**
     * @ignore
     */
    constructor(private authService: AuthService, private titleService: Title) { }

    logout(): void {
        
    }

}





