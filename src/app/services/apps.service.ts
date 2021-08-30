import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  constructor(public httpClient: HttpClient) { }

  async getListApps() {
    return await this.httpClient.get("http://localhost:8080/apps/list").toPromise()
  }

  async getEspecificApp(id: number) {
    return await this.httpClient.get(`http://localhost:8080/apps/${id}`).toPromise()
  }

  async deleteApp(id: number){
    return await this.httpClient.delete(`http://localhost:8080/apps/${id}`).toPromise()
  }
}
