import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api/api.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CreateBrandComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[ApiService]
})
export class AppComponent {
  title = 'micro-stock';
  constructor(private api: ApiService) {}
  createBrand(){
    console.log('salero');
    // let re=this.api.get('localhost:8090/category/test');
    // console.log(re.data);
    this.api.get('https://httpbin.org/get').subscribe(
      (data) => {
        // Handle successful response
        // this.posts = data;  // Store the data in the component's 'posts' property
        console.log(data)
      },
      (error) => {
        // Handle error response
        console.error('Error fetching data', error);
      }
    );
  }
  async createBrand2(){
    try{
      let res=await this.api.get2('localhost:8090/category/test');
    }catch(error){
      console.error('error javi:',error);
    }

  }
}
