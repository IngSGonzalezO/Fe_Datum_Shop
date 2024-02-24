import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-n-pills',
  templateUrl: './tag-n-pills.component.html',
  styleUrls: ['./tag-n-pills.component.scss']
})
export class TagNPillsComponent implements OnInit {

  digits = [
    {
      color: "primary",
      digit: "1"
    },
    {
      color: "secondary",
      digit: "2"
    },
    {
      color: "success",
      digit: "3"
    },
    {
      color: "info",
      digit: "4"
    },
    {
      color: "warning",
      digit: "5"
    },
    {
      color: "light",
      digit: "6"
    },
    {
      color: "dark",
      digit: "7"
    },
  ];

  icons = [
    {
      color: "primary",
      icon: "dollar-sign"
    },
    {
      color: "secondary",
      icon: "headphones"
    },
    {
      color: "success",
      icon: "link"
    },
    {
      color: "info",
      icon: "github"
    },
    {
      color: "warning",
      icon: "award"
    },
    {
      color: "danger",
      icon: "activity"
    },
    {
      color: "light",
      icon: "heart"
    },
    {
      color: "dark",
      icon: "mail"
    },
  ]

  buttonWithIcon = [
    {
      color: "primary",
      icon: "mail",
      text: "Messages"
    },
    {
      color: "secondary",
      icon: "bell",
      text: "Notifications"
    },
    {
      color: "success",
      icon: "settings",
      text: "Update available"
    },
    {
      color: "info",
      icon: "music",
      text: "Playing Now"
    },
    {
      color: "warning",
      icon: "alert-triangle",
      text: "1.2 GB Used"
    },
    {
      color: "danger",
      icon: "alert-circle",
      text: "alert"
    },

  ]

  tagPills = [
    {
      title: "Contextual variations",
      colors: ["primary", "secondary", "success", "info", "warning", "danger", "light", "dark"]
    },
    {
      title: "Contextual variations",
      colors: ["primary", "secondary", "success", "info", "warning", "danger", "light", "dark"]
    },
  ]

  
  constructor() { }

  ngOnInit() { }

}
