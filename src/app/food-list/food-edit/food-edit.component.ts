import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Food } from 'src/app/shared/food.model';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent implements OnInit {

  @ViewChild("nameInput") nameInputRef!: ElementRef;
  @ViewChild("amountInput") amountInputRef!: ElementRef;
  @Output() foodAdded = new EventEmitter<Food>();


  constructor() { }

  ngOnInit(): void {
  }

  addFood(){
    const foodName = this.nameInputRef.nativeElement.value;
    const foodAmount = this.amountInputRef.nativeElement.value;
    const newFood = new Food(foodName, foodAmount);
    this.foodAdded.emit(newFood);
  }

}
