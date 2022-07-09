import { Component, OnInit } from '@angular/core';
import { NotiService } from '../noti.service';

@Component({
  selector: 'app-notipanel',
  templateUrl: './notipanel.component.html',
  styleUrls: ['./notipanel.component.scss'],
})
export class NotipanelComponent implements OnInit {

  constructor(public noti:NotiService) { }

  ngOnInit() {}

}
