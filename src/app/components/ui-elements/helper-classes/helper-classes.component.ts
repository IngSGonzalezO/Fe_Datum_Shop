import { Component, OnInit } from '@angular/core';
import { backgroundColor, badgeColor, borderRadius, buttonColor, float, fontSize, fontStyle, fontWeight, imageSizes, marginBottom, marginData, marginLeft, marginRight, marginTop, overflow, paddingBottom, paddingData, paddingLeft, paddingRight, paddingTop, textColor, verticalAlign } from 'src/app/shared/data/ui-kits/data';

@Component({
  selector: 'app-helper-classes',
  templateUrl: './helper-classes.component.html',
  styleUrls: ['./helper-classes.component.scss']
})
export class HelperClassesComponent implements OnInit {

  public paddingEle = paddingData;
  public marginEle = marginData;
  public paddingLeft = paddingLeft;
  public paddingRight = paddingRight;
  public paddingTop = paddingTop;
  public paddingBottom = paddingBottom;
  public marginLeft = marginLeft;
  public marginRight = marginRight;
  public marginTop = marginTop;
  public marginBottom = marginBottom;
  public verticalAlign = verticalAlign;
  public imageSizes = imageSizes;
  public textColor = textColor;
  public badgeColor = badgeColor;
  public backgroundColor = backgroundColor;
  public buttonColor = buttonColor;
  public borderRadius = borderRadius;
  public fontWeight = fontWeight;
  public fontStyle = fontStyle;
  public float = float;
  public overflow = overflow;
  public fontSize = fontSize;

  public title1 = "Padding";
  public title2 = "Margins";
  public title3 = "Padding Left";
  public title4 = "Padding Right";
  public title5 = "Padding Top";
  public title6 = "Padding Bottom";
  public title7 = "Margin Left";
  public title8 = "Margin Right";
  public title9 = "Margin Top";
  public title10 = "Margin Bottom";
  public title11 = "Vertical Align";
  public title12 = "Image Sizes";
  public title13 = "Text Color";
  public title14 = "Badge Color";
  public title15 = "Background Color";
  public title16 = "Button Color";
  public title17 = "Border Radius";
  public title18 = "Font Weight";
  public title19 = "Font Style";
  public title20 = "Float";
  public title21 = "Overflow";
  public title22 = "Font Size"

  constructor() { }

  ngOnInit() { }

}
