import { Component, OnDestroy, OnInit } from '@angular/core';
import { InterestService } from '../interest.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit, OnDestroy {

  public imageResourceList: Array<string> = [];
  public imageDescriptionList: Array<any>;
  subscriptions: Array<any> = [];
  constructor(private interestService: InterestService) { }

  ngOnInit()  {
    this.getIntroResourceList();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
  


  getIntroResourceList(): void {

      this.subscriptions.push(this.interestService.getYogaDescrption().subscribe(
        (response: any) => {
            this.imageDescriptionList = response;
        }
    ));
  }
 


}



