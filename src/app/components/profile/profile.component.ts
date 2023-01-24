import { Component, OnInit } from '@angular/core';
declare var $:any



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(){    
    
    $(document).ready(function(){
      $(".info").hide()

      $("#contactBtn").click(function(){
        $("#languagesInfo").hide();
        $("#habilitiesInfo").hide();
        $("#contactInfo").toggle();
      })
      $("#habilitiesBtn").click(function(){
        $("#languagesInfo").hide();
        $("#contactInfo").hide();
        $("#habilitiesInfo").toggle();
      });
      $("#languagesBtn").click(function(){
        $("#contactInfo").hide();
        $("#habilitiesInfo").hide();
        $("#languagesInfo").toggle();
      });
    }); 
  }
}