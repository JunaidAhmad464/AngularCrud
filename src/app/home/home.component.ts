import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 products: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRequest().subscribe((data: any) => {
      // tslint:disable-next-line:no-debugger
      debugger;
      console.log(data);
      this.products = data;
    });
  }

}


