import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'edb-example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {
  title: string = 'TEST';

  @ViewChild('content') content: ElementRef | undefined;

  getValue() {
    console.log(this.content?.nativeElement.innerHTML);
  }

  changeTitle() {
    this.title = 'Example 2 changed';
  }
}
