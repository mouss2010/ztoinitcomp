import { Component } from '@angular/core';

@Component({
  selector: 'zto-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'ztoinitcomp';
}
