import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-global',
  standalone: true,
  imports: [HeaderComponent,
    SidebarComponent,RouterOutlet],
  templateUrl: './global.component.html',
  styleUrl: './global.component.scss'
})
export class GlobalComponent {

}
