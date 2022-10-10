import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotesServService } from 'src/app/notes-serv.service';
import { notes } from 'src/app/noteType';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  note:any=[];
  noteId: any=0;
  new:boolean=true;
  constructor(private notesSer:NotesServService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      
      if(params.id!='new'){
        this.note=new notes();
        this.note=this.notesSer.get(params.id);
        this.noteId=params.id;
      }
      else if(params.id=='new'){
        this.note=new notes();
      }
    })
    this.note;
    
  }

  onSubmit(form:any){
    console.log(form.value);
    if(this.noteId==''){
      this.notesSer.add(form.value);
    }else{
      this.notesSer.update(this.noteId, form.value.title, form.value.body);
    }
    this.router.navigateByUrl('/');

  }

  cancel(){
    this.router.navigateByUrl('/');
  }
}
