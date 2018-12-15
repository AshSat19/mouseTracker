import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseData } from '../models/mouseData.model';
import { Subscription } from 'rxjs';
import { MouseDataService } from '../services/mouse-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  thorClickCount = 0;
  ironManClickCount = 0;
  hulkClickCount = 0;
  blackWidowClickCount = 0;
  capClickCount = 0;

  thorHoverCount = 0;
  ironManHoverCount = 0;
  hulkHoverCount = 0;
  blackWidowHoverCount = 0;
  capHoverCount = 0;

  mouseDataSet: MouseData[] = [];
  private mouseDataSetSub: Subscription;

  constructor(private mouseDataService: MouseDataService) { }

  ngOnInit() {
    this.mouseDataService.getData();
    this.mouseDataSetSub = this.mouseDataService.getMouseDataUpdateListener()
    .subscribe((mouseDataCollection: {mouseData: MouseData[]}) => {
      this.mouseDataSet = mouseDataCollection.mouseData;
      console.log(this.mouseDataSet);
    });
  }

  

  thorClick($event) {
    console.log('Thor Clicked !');
    this.thorClickCount += 1;
    console.log(this.thorClickCount);
    this.mouseDataService.addMouseData(
      'Thor', 
      this.thorClickCount, 
      this.thorHoverCount
    );
  }

  thorHover($event) {
    console.log('Thor Hovered On !');
    this.thorHoverCount += 1;
    console.log(this.thorHoverCount);
    this.mouseDataService.addMouseData(
      'Thor', 
      this.thorClickCount, 
      this.thorHoverCount
    );
  }

  ironManClick($event) {
    console.log('Iron Man Clicked !');
    this.ironManClickCount += 1;
    console.log(this.ironManClickCount);
    this.mouseDataService.addMouseData(
      'Iron Man', 
      this.ironManClickCount, 
      this.ironManHoverCount
    );
  }

  ironManHover($event) {
    console.log('Iron Man Hovered On !');
    this.ironManHoverCount += 1;
    console.log(this.ironManHoverCount);
    this.mouseDataService.addMouseData(
      'Iron Man', 
      this.ironManClickCount, 
      this.ironManHoverCount
    );
  }

  hulkClick($event) {
    console.log('Hulk Clicked !');
    this.hulkClickCount += 1;
    console.log(this.hulkClickCount);
    this.mouseDataService.addMouseData(
      'Hulk', 
      this.hulkClickCount, 
      this.hulkHoverCount
    );
  }

  hulkHover($event) {
    console.log('Hulk Hovered On !');
    this.hulkHoverCount += 1;
    console.log(this.hulkHoverCount);
    this.mouseDataService.addMouseData(
      'Hulk', 
      this.hulkClickCount, 
      this.hulkHoverCount
    );
  }

  blackWidowClick($event) {
    console.log('Black Widow Clicked !');
    this.blackWidowClickCount += 1;
    console.log(this.blackWidowClickCount);
    this.mouseDataService.addMouseData(
      'Black Widow', 
      this.blackWidowClickCount, 
      this.blackWidowHoverCount
    );
  }

  blackWidowHover($event) {
    console.log('Black Widow Hovered On !');
    this.blackWidowHoverCount += 1;
    console.log(this.blackWidowHoverCount);
    this.mouseDataService.addMouseData(
      'Black Widow', 
      this.blackWidowClickCount, 
      this.blackWidowHoverCount
    );
  }

  capClick($event) {
    console.log('Captain America Clicked !');
    this.capClickCount += 1;
    console.log(this.capClickCount);
    this.mouseDataService.addMouseData(
      'Captain America', 
      this.capClickCount, 
      this.capHoverCount
    );
  }

  capHover($event) {
    console.log('Captain America Hovered On !');
    this.capHoverCount += 1;
    console.log(this.capHoverCount);
    this.mouseDataService.addMouseData(
      'Captain America', 
      this.capClickCount, 
      this.capHoverCount
    );
  }

  ngOnDestroy() {
    this.mouseDataSetSub.unsubscribe();
  }
}
