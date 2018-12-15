import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseData } from '../models/mouseData.model';
import { Subscription } from 'rxjs';
import { MouseDataService } from '../services/mouse-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

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

  ngOnDestroy() {
    this.mouseDataSetSub.unsubscribe();
  }

}
