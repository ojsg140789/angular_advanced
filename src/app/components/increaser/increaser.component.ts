import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styleUrl: './increaser.component.css'
})
export class IncreaserComponent implements OnInit {

  @Input() progress: number = 10;
  @Input() btnClass: string = 'btn-primary';
  @Output() outputValue: EventEmitter<number> = new EventEmitter;

  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  get getPercent() {
    return `${ this.progress }%`;
  }

  changeValue( value: number) {
    if ( this.progress >= 100 && value >= 0) {
      this.outputValue.emit(100);
      return this.progress = 100;
    }

    if ( this.progress <= 0 && value < 0) {
      this.outputValue.emit(0);
      return this.progress = 0;
    }

    this.outputValue.emit(this.progress);
    return this.progress = this.progress + value;
  }

  onChange( event: number ) {
    if ( event >= 100 ) {
      this.progress = 100;
    } else if( event <= 0) {
      this.progress = 0;
    } else {
      this.progress = event;
    }
    this.outputValue.emit( this.progress );
  }

}
