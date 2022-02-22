import { Component, Input, OnInit } from '@angular/core';
import { Package } from './package.model';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  selectedPackage!: Package;

  constructor() { }

  ngOnInit(): void {
  }

}
