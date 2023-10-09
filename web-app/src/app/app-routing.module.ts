import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoDataViewerComponent } from './pages/views/repo-data-viewer/repo-data-viewer.component';
import { ViewerLayoutComponent } from './pages/layouts/viewer-layout/viewer-layout.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'repoViewer'},
  {
    path: '',
    component: ViewerLayoutComponent,
    children: [
      {
        path: '',
        component: RepoDataViewerComponent
      }
    ]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'repoViewer'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
