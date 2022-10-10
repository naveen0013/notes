import { Component, OnInit } from '@angular/core';
import { NotesServService } from 'src/app/notes-serv.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  filteredNotes:any=[];
  notes:any=[];
  searched:any='';
  constructor(private noteServ:NotesServService) { }

  ngOnInit(): void {
    this.notes=this.noteServ.getAll();
    this.filteredNotes=this.notes;
  }

  deleteCard(id:number){
    this.noteServ.delete(id);
  }

  filter(searched:any){
    searched=searched.toLowerCase().trim();
    let allResults:any=[];
    let terms:string[]=searched.split(' ');
    terms = this.removeDuplicates(terms);
    terms.forEach((term:any)=>{
      let results:any=this.relevantNotes(term);
      allResults=[...allResults,...results]
    })
    let uniqueResults=this.removeDuplicates(allResults);
    this.filteredNotes=uniqueResults;
  }
  removeDuplicates(arr:any){
    let uniqueResults:Set<any>= new Set();
    arr.forEach( (element:any) => uniqueResults.add(element));
    return Array.from(uniqueResults)
  }
  relevantNotes(term:any){
      term=term.toLowerCase().trim();
      let relevantNotes=this.notes.filter((ele:any)=>{
        if((ele.title && ele.title.toLowerCase().includes(term))||(ele.body&& ele.body.toLowerCase().includes(term))){
          return true
        }
        else{
          return false;
        }
      });
      return relevantNotes;
  }

   /* 
  filter(searched:any){
    searched=searched.toLowerCase().trim();
    if(searched!=''){
    let filterNotes=this.filteredNotes.filter((ele:any)=>{
      if((ele.body&&ele.body.toLowerCase().includes(searched))||(ele.title && ele.title.toLowerCase().includes(searched))){
        return true;
      }
      else{
        return false;
      }
    })
    this.filteredNotes=filterNotes;
  }
    else if(searched==""){
      this.filteredNotes=this.notes;
    }
    return this.filteredNotes;
  }
 */

}
