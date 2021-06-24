import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { ToolsComponent } from './components/tools/tools.component';
import { OsComponent } from './components/os/os.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ContactComponent } from './components/contact/contact.component';
import { AchievmentsComponent } from './components/achievments/achievments.component';
import { SkillsComponent } from './components/skills/skills.component';
import { MenuButtonsComponent } from './components/menu-buttons/menu-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    ProfileComponent,
    NavBarComponent,
    ResumeComponent,
    ExperienceComponent,
    EducationComponent,
    KnowledgeComponent,
    ToolsComponent,
    OsComponent,
    FooterComponent,
    ProyectsComponent,
    ContactComponent,
    AchievmentsComponent,
    SkillsComponent,
    MenuButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
