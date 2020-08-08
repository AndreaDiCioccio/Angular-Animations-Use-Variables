import { Component } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('position',[
        state('left', 
            style({
                left: '0',
            })
        ),
        state('right', 
            style({
                left:'{{left}}',
            }), {params: {left: '250px'}}  // parameter passed in the template
        ),

        transition('left => right', [
            animate('{{time}}')  // parameter passed in the template
        ]),
        transition('right => left', [
            animate('{{time}}')  // parameter passed in the template
        ])
    ])
  ]
})

export class AppComponent {
  
    position:string = 'left'/*  */
    leftPosition:string = '300px'
    animationTime:string = '1000ms'

    move(){
        this.animationTime.slice(-2) == 'ms' ? null : this.animationTime = this.animationTime + 'ms'
        this.leftPosition.slice(-2) == 'px' ? null : this.leftPosition = this.leftPosition + 'px'
        this.position == 'left' ? this.position = 'right' : this.position = 'left'
    }
    
}
