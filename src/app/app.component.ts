import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FooterComponent } from './mainpage/footer/footer.component';

import { ArtimagesComponent } from './artimages/artimages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,MainpageComponent,FooterComponent,ArtimagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-angular';
}
