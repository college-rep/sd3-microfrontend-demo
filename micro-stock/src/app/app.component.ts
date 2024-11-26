import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateBrandComponent } from './create-brand/create-brand.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CreateBrandComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'micro-stock';
}
