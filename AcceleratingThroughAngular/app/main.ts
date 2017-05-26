import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { RacesComponent } from './races.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, RacesComponent],
    bootstrap: [AppComponent]
})
class AppModule { }

platformBrowserDynamic()
    .bootstrapModule(AppModule);
