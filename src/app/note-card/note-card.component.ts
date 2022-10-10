import { Component, OnInit, Renderer2, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  // @ViewChild('truncator') truncator:any;
  // @ViewChild('bodyText') bodyText : any;

  @Input() title:any;
  @Input() body:any;
  @Input() link:any;

  @Output('delete') deleteEvent:EventEmitter<any>= new EventEmitter();

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {

 /*      let style=window.getComputedStyle(this.bodyText.nativeElement,null);
      let viewableHeight=parseInt(style.getPropertyValue('height'),10);

      if(this.bodyText.nativeElement.scrollHeight > viewableHeight){
        // if there is text overflow ,show the fadeoutTruncator div
        this.renderer.setStyle(this.truncator?.nativeElement, 'display','block');
      }else{
        //else dont show
        this.renderer.setStyle(this.truncator?.nativeElement,'display','none');
      } */
  }

  onDelete(){
    this.deleteEvent.emit();
  }

}
