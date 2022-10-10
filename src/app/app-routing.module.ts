import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLayoutComponent } from './pages/my-layout/my-layout.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';
import { NoteListComponent } from './pages/note-list/note-list.component';

const routes: Routes = [
  {path:"",component:MyLayoutComponent,children:[
    {path:"",component:NoteListComponent},
    {path:":id",component:NoteDetailsComponent},
    {path:"new",component:NoteDetailsComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
