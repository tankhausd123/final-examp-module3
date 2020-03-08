import { Component, OnInit } from '@angular/core';
import {AwesomeInterface} from '../awesome-interface';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list;

  constructor(private aweService: ServiceService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.aweService.getAll().subscribe(value => this.list = value);
  }

}
