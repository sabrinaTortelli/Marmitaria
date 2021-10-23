import { Component, OnInit } from '@angular/core';
import { Package } from './package.model';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  packages: Package[] = [
    new Package('Churrasco', 'Churrasco de Picanha', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxI5G8tqGTl-3uaeMgCtcW6D7zUgHAEG9Xvg&usqp=CAU'),
    new Package('Arroz Negro', 'Arroz Negro Cozindo com louro, alho e cebola', 'https://img.itdg.com.br/images/recipes/000/199/772/309707/309707_original.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
