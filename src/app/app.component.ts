import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-testcase-1';
 
  ngOnInit(){
    this.myexample();
  }

   myexample(){
    // example using let
  
  let x=10;
  if(true){
    let x=20;
    console.log(1,x);
  }
  console.log(2,x);
  
  // example using var
  
  var y=60;
  if(true){
    var y=30;
    console.log(3,y);
  }
  console.log(4,y)
  
  // example using const
  
  const person={name:'John',age:'20'};
  console.log(5,person)
  
  person.age='30';
  console.log(6,person)
  
  
  // Some more examples using let,var and const
  
  
  let q=20;
  q=30;
  console.log(q) //reaasigning is allowed
  
  
  var r=50;
  r=40;
  console.log(r) //reaasigning is allowed
  
  
  // const z=20;
  // z=50;
  // console.log(z).  //error
  
  let a=20;
  let b=30;
  let sum=a+b;
  console.log("sum of two numbers is",sum);
  
  
  const pi=3.14;
  var r=22;
  let area=pi*r^2;
  console.log("area of circle is",area);
  }
  
}


