import { Component, Input } from '@angular/core';
import { CommitNode } from 'src/app/models/response/GithubServ';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-commits-history-table',
  templateUrl: './commits-history-table.component.html',
  styleUrls: ['./commits-history-table.component.scss']
})
export class CommitsHistoryTableComponent {
  @Input() totalLinesLg: number = 0;
  @Input() commitsHistory: CommitNode[] = [];
  @Input() tableDataLoading: boolean = false;

  constructor(
    private clipboard: Clipboard
  ) {}

  public getFormateDate(date: string): string {
    return (new Date(date).toLocaleDateString('en', {
      weekday:"short", year:"numeric", month:"long", day:"numeric"
    }))
  }

  public getShortCommitHash(commitHash: string): string {
    return commitHash.split('', 7).join('');
  }

  public copyCommitHsToClipboard(commitHash: string) {
    this.clipboard.copy(commitHash);
  }

  public getPerLang(elem: number) {
    const tot = this.totalLinesLg;

    return ((elem / tot) * 100).toFixed(2);
  }
}
