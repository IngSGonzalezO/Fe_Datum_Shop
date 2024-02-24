import { Component, Input, OnInit } from '@angular/core';
import { avatarsData, avatarsData1, avatarsData2, avatarsData3 } from 'src/app/shared/data/ui-kits/data';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent implements OnInit {

  public avatarData = avatarsData;
  public avatarsData1 = avatarsData1;
  public avatarsData2 = avatarsData2;
  public avatarsData3 = avatarsData3;

  public title1 = "Sizing";
  public title2 = "Initials";
  public title3 = "Shape";

  constructor() { }

  ngOnInit() { }

}
