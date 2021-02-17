import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  products = [
    {"id":1,"name":"Laptop"},
    {"id":2,"name":"Mobile"},
    {"id":3,"name":"Tv"}
  ];

  ngOnInit(): void {
  }
}