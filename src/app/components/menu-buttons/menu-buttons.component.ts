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
      
      /* Hide cards*/
      $(".card").hide();  

      $("#resumeBtn").click(function(){ 
        $("#profileContainer").addClass("profileOpen")
        /* Hide open cards */
        $("#eduCard").hide(1000);  
        $("#experienceCard").hide(1000);  
        $("#achievmentsCard").hide(1000);  
        $("#skillsCard").hide(1000); 
        /* Change buttons colors */
        $("#eduBtn").removeClass("eduBtnOn")
        $("#experienceBtn").removeClass("expBtnOn")
        $("#achievmentsBtn").removeClass("achBtnOn")
        $("#skillsBtn").removeClass("sklBtnOn")
        /* Toggle card */
        $("#resumeCard").toggle(500);
        /* Change Btn Color */
        $("#resumeBtn").toggleClass("resBtnOn")
      });
      $("#eduBtn").click(function(){    
        $("#profileContainer").addClass("profileOpen")
        $("#resumeCard").hide(1000);  
        $("#experienceCard").hide(1000);  
        $("#achievmentsCard").hide(1000);  
        $("#skillsCard").hide(1000);   
        /* Change buttons colors */
        $("#resumeBtn").removeClass("resBtnOn")
        $("#experienceBtn").removeClass("expBtnOn")
        $("#achievmentsBtn").removeClass("achBtnOn")
        $("#skillsBtn").removeClass("sklBtnOn")

        $("#eduCard").toggle(1000);     
        $("#eduBtn").toggleClass("eduBtnOn")            
      });

      $("#experienceBtn").click(function(){
        $("#profileContainer").addClass("profileOpen")
        $("#eduCard").hide(1000);  
        $("#resumeCard").hide(1000);  
        $("#achievmentsCard").hide(1000);  
        $("#skillsCard").hide(1000); 

        $("#resumeBtn").removeClass("resBtnOn")
        $("#eduBtn").removeClass("eduBtnOn")
        $("#achievmentsBtn").removeClass("achBtnOn")
        $("#skillsBtn").removeClass("sklBtnOn")
        $("#experienceCard").toggle(1000);
        $("#experienceBtn").toggleClass("expBtnOn") 
      });          
      $("#achievmentsBtn").click(function(){
        $("#profileContainer").addClass("profileOpen")
        $("#eduCard").hide(1000);  
        $("#resumeCard").hide(1000);  
        $("#experienceCard").hide(1000);  
        $("#skillsCard").hide(1000); 
        $("#resumeBtn").removeClass("resBtnOn")
        $("#eduBtn").removeClass("eduBtnOn")
        $("#experienceBtn").removeClass("expBtnOn")
        $("#skillsBtn").removeClass("sklBtnOn")
        $("#achievmentsCard").toggle(1000);
        $("#achievmentsBtn").toggleClass("achBtnOn") 
      });          
      $("#skillsBtn").click(function(){      
        $("#profileContainer").addClass("profileOpen")
        $("#eduCard").hide(1000);  
        $("#experienceCard").hide(1000);  
        $("#achievmentsCard").hide(1000);  
        $("#resumeCard").hide(1000);   
        
        $("#resumeBtn").removeClass("resBtnOn")
        $("#eduBtn").removeClass("eduBtnOn")
        $("#experienceBtn").removeClass("expBtnOn")
        $("#achievmentsBtn").removeClass("achBtnOn")

        $("#skillsCard").toggle(1000);         
        $("#skillsBtn").toggleClass("sklBtnOn")        
      });
    })        
  }
}
