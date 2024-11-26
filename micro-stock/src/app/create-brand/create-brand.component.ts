import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-create-brand',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-brand.component.html',
  styleUrl: './create-brand.component.scss'
})
export class CreateBrandComponent {
  // constructor(private apiService: ApiService) {}
  onSubmit(form: any) {
    if (form.valid) {
      const brandData = form.value;
      console.log('Brand Created:', brandData);
      alert(`Brand "${brandData.name}" created successfully!`);
      form.reset();
      console.log('salero');
      // const apiResponse=this.apiService.getItems();
    }
  }
}
