import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-menu-buttons',
  templateUrl: './menu-buttons.component.html',
  styleUrls: ['./menu-buttons.component.css']
})
export class MenuButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      
      $(".card").toggle(); 
      $(".skill").hide();  

      $("#resumeBtn").click(function(){ 
        /* Hide Cards */
        $("#eduCard").hide();  
        $("#experienceCard").hide();  
        $("#achievmentsCard").hide();  
        $("#skillsCard").hide(); 
        /* Change Btn Color */
        $(".btnMenu").css({"background-color": "#353d61"})         
        $("#resumeCard").toggle(1000);
        $("#resumeBtn").toggleClass("resBtnOn btnMenu")        
      });
      $("#eduBtn").click(function(){    
        $("#resumeCard").hide();  
        $("#experienceCard").hide();  
        $("#achievmentsCard").hide();  
        $("#skillsCard").hide();     
        $("#eduCard").toggle();     
        $("#eduBtn").toggleClass("eduBtnOn")            
      });
      $("#experienceBtn").click(function(){
        $("#eduCard").hide();  
        $("#resumeCard").hide();  
        $("#achievmentsCard").hide();  
        $("#skillsCard").hide(); 
        $("#experienceCard").toggle();
        $("#experienceBtn").toggleClass("expBtnOn") 
      });          
      $("#achievmentsBtn").click(function(){
        $("#eduCard").hide();  
        $("#resumeCard").hide();  
        $("#experienceCard").hide();  
        $("#skillsCard").hide(); 
        $("#achievmentsCard").toggle();
        $("#achievmentsBtn").toggleClass("achBtnOn") 
      });          
      $("#skillsBtn").click(function(){      
        $("#eduCard").hide();  
        $("#experienceCard").hide();  
        $("#achievmentsCard").hide();  
        $("#resumeCard").hide();   
        $("#skillsCard").toggle();         
        $("#skillsBtn").toggleClass("sklBtnOn")        
      });
    })        
  }
}
