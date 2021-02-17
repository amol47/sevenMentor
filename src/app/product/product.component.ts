import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productId = '';
  url="";
  id="";
  childroute = "";
  color:string = 'red';

  status = 'error';
  constructor(private rt:Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    console.log(this.productId);
  }

  goTo(url:any,id:any,childroute:any){
    console.log(url);
    
    this.rt.navigate([url,id,childroute]);

  }
  goback():void{
    this.rt.navigate(['products']);
  }
}
