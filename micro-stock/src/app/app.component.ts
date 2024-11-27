import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { ApiService } from './api/api.service';
import { FormsModule } from '@angular/forms';

//json pipe
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CreateBrandComponent,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[ApiService]
})
export class AppComponent {
  title = 'micro-stock';
  apiUrl:string='http://localhost:8090/';
  // apiUrl:string='http://127.0.0.1:53816/';
  brandName:string='';
  brandDescription:string='';
  brandId:number=1;
  jsonResponse:string="response: here, you will see the response";

  constructor(private api: ApiService) {}
  async createBrand(){
    console.log('trying to call');
    const response= this.api.post(this.apiUrl+'brand/',{
      "name": this.brandName,
      "description":this.brandDescription
    }).subscribe({
      next: (response) => {
        console.log('Response:', response);
        this.jsonResponse=response;
      },
      error: (error) => {
        console.error('Error:', error.data);
        this.jsonResponse=error["error"];
      },
    });
    console.log(response)
  }
  async getBrand(){
    console.log('createBrand2: trying to call api');
    try{
      let res=await this.api.get2(this.apiUrl+'brand/?id='+this.brandId.toString());
      // console.log(res.data);
      console.log('API Response:', res);
      console.log(this.brandName);
      console.log(this.brandDescription);
      console.log(this.apiUrl);
      this.jsonResponse=res;
    }catch(error){
      console.error('error javi:',error);
    }
    console.log('get brand end');
  }
}
