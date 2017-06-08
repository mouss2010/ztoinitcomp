import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ZtoinitcompModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, ZtoinitcompModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}