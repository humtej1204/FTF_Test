import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { ConfigWeb } from 'src/utils/ConfigWeb';
import { RepositoryData, RepositoryModel, RepositoryRefData } from '../models/response/GithubServ';

@Injectable({
  providedIn: 'root'
})
export class GitApiService {
  private properties;

  constructor(
    private http: HttpClient,
  ) {
    this.properties = environment;
  }

  public getRepoInfo() {
    const uri = ConfigWeb.GET_repo_info;

    return this.http.get<RepositoryModel<RepositoryData>>(this.properties.url_github_serv + uri);
  }

  public getRepoCommitHistory(branchName: string) {
    const uri = ConfigWeb.GET_repo_commits_history;
    let params = new HttpParams();
    params = params.set('branch', branchName);

    return this.http.get<RepositoryModel<RepositoryRefData>>(
      this.properties.url_github_serv + uri, { params: params }
    );
  }
}
