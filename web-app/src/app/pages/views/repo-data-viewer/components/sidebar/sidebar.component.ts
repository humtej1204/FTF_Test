import { Component, Input } from '@angular/core';
import { RepositoryData } from 'src/app/models/response/GithubServ';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() repoData: RepositoryData = {} as RepositoryData;

  public getFormateDate(date: string): string {
    return (new Date(date).toLocaleDateString('en', {
      weekday:"short", year:"numeric", month:"long", day:"numeric"
    }))
  }

  public getPerLang(elem: number) {
    const tot = this.repoData.languages.totalSize;

    return ((elem / tot) * 100).toFixed(2);
  }
}
