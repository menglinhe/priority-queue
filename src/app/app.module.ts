import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QueueVisualizationComponent } from './queue-visualization/queue-visualization.component';

@NgModule({
  declarations: [
    AppComponent,
    QueueVisualizationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
