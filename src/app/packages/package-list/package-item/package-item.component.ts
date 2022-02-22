import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Package } from '../../package.model';

@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.css']
})
export class PackageItemComponent implements OnInit {

  @Input() package!: Package;
  @Output() packageSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.packageSelected.emit();
  }

}
