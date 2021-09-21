import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * multiply
   */
  public multiply(x: number, y: number) {
    return x * y;
  }

  /**
   * divise
   */
  public divise(x:number, y: any) {
    if(y === null || y === undefined || y === 0) {
      throw "Illegal divider provided";
       // new Error("Illegal divider provided");
    }
    return x / y;
  }

  public add(x:number, y: any) {
    return Number.parseInt(String(x)) + Number.parseInt(String(y))
  }

  public mathJs(expr: string | undefined): Observable<HttpResponse<any>> {
    return this.httpClient.get(`http://api.mathjs.org/v4/?expr=${expr}`, { observe: "response"});
  }
}
