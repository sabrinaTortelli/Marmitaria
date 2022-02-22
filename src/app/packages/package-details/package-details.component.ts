import { Component, Input, OnInit } from '@angular/core';
import { Package } from '../package.model';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {

  @Input() packageSelected!: Package;

  constructor() { }

  ngOnInit(): void {
  }

}
