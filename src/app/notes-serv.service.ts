import { Injectable } from '@angular/core';
import { notes } from './noteType';
@Injectable({
  providedIn: 'root'
})
export class NotesServService {

  notes:notes[]=new Array<notes>();

  constructor() { 

  }
  getAll(){
    return this.notes;
  }

  get(id:any){
    return this.notes[id];
  }

  getId(note: notes){
    return this.notes.indexOf(note);
  }

  add(note:any){
    let newLength=this.notes.push(note);
    let index=newLength-1;
    return index;
  }

  update(id:number,title:any,body:any){
    let note = this.notes[id];
     note.title=title;
     note.body=body;
  }

  delete(id:any){
    this.notes.splice(id,1);
  }


}
