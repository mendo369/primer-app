import { Component} from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  //styleUrls: ['./persona.component.css']
  styles: [`
          p{
            color: red;
            font-size: 30px
          }`]
})
export class PersonaComponent{

  constructor() { }

}
