import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DirectivesModule } from './directives/directives.module';
import { Material2Module } from './material2.module';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { WedoComponent } from './wedo/wedo.component';
import { HeadingComponent } from './heading/heading.component';
import { PricingComponent } from './pricing/pricing.component';
import { TeamsComponent } from './teams/teams.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';



@NgModule({
    declarations: [
        AppComponent,
        PortfolioComponent,
        AboutComponent,
        WedoComponent,
        HeadingComponent,
        PricingComponent,
        TeamsComponent,
        ContactComponent,
        ContactDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        Material2Module,
        FlexLayoutModule,
        DirectivesModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    entryComponents: [ ContactDialogComponent ],
    bootstrap: [AppComponent]
})
export class AppModule { }
