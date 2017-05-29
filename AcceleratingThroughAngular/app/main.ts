import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RacesComponent } from './races.component';
import { RaceService } from './race.service';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, RacesComponent],
    providers: [RaceService],
    bootstrap: [AppComponent]
})
class AppModule { }

platformBrowserDynamic()
    .bootstrapModule(AppModule);
