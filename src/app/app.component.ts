import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldService } from './hello-world.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  
  private helloWorldService = inject(HelloWorldService);

 
  onClick() {
    console.log(this.helloWorldService.getHelloWorld());
  }

}