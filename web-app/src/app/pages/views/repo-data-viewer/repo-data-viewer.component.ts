import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize, forkJoin } from 'rxjs';
import { CommitNode, RepositoryData, RepositoryModel, RepositoryRefData } from 'src/app/models/response/GithubServ';
import { GitApiService } from 'src/app/services/git-api.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-repo-data-viewer',
  templateUrl: './repo-data-viewer.component.html',
  styleUrls: ['./repo-data-viewer.component.scss']
})
export class RepoDataViewerComponent implements OnInit {
  public repoData: RepositoryData = {} as RepositoryData;
  public commitsHistory: CommitNode[] = [];
  public selectedBranchData: CommitNode = {} as CommitNode;

  public branchSelect = new FormControl('main');

  public tableDataLoading: boolean = false;

  constructor(
    private gitApiServ: GitApiService,
    private snackBar: MatSnackBar,
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {
    this.getRepoData();
  }

  private getRepoData() {
    this.tableDataLoading = true;

    forkJoin([
      this.gitApiServ.getRepoInfo(),
      this.gitApiServ.getRepoCommitHistory('main')
    ])
    .pipe(finalize(() => this.tableDataLoading = false))
    .subscribe({
      next: res => {
        const [resRepoInfo, resRepoCommitHistory] = res;

        this.repoData = resRepoInfo.repository;
        this.commitsHistory = resRepoCommitHistory.repository.ref.target.history.nodes;
      }, error: (error: HttpErrorResponse) => {
        const errorMsg: string = `Error: ${error.status} - Ocurrio un error en el servidor`;
        this.snackBar.open(errorMsg, '', {
          duration: 5 * 1000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
      }
    })
  }

  public getRepoCommitHistory(branchSelect: string) {
    this.tableDataLoading = true;

    this.gitApiServ.getRepoCommitHistory(branchSelect)
    .pipe(finalize(() => this.tableDataLoading = false))
    .subscribe((res: RepositoryModel<RepositoryRefData>) => {
      this.commitsHistory = res.repository.ref.target.history.nodes;
    })
  }



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
    const tot = this.repoData.languages.totalSize;

    return ((elem / tot) * 100).toFixed(2);
  }
}
