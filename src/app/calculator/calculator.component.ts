import {Component, OnInit} from '@angular/core';
import {CalculatorService} from "./calculator.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
//import {ConsoleLogger, LogLevel} from "@angular/compiler-cli/ngcc";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  log = console
  private _xVal: number | undefined;
  private _yVal: number| undefined;
  expressionRes: string | undefined = "(...)";
  private _expression: string | undefined;

  public set xVal(x: number) {
    this._xVal = x
  }

  public get xVal() {
    // @ts-ignore
    return this._xVal
  }

  public get expression() { // @ts-ignore
    return this._expression }
  public set expression(exp : string) { this._expression = exp }

  public get yVal() {
    // @ts-ignore
    return this._yVal
  }

  public set yVal(y: number) {
    this._yVal = y
  }

  constructor(
    private calculatorService: CalculatorService
  ) { }

  ngOnInit(): void {
    this.log.info("********************************")
    this.log.info("********** [%s] ********", "Calculator")
    this.log.info("********************************")
  }

  /**
   * sum xVal and yVal
   */
  public sum(): any {
    if (this.xVal != null && this.yVal != null) {
      return Number.parseInt(String(this._xVal)) + Number.parseInt(String(this.yVal))
    }
    return "[...]"
  }

  callMathJsApi() {
    this.log.debug(this.expression)
    this.calculatorService.mathJs(this.expression)
      .subscribe(
        (response: HttpResponse<any>) => {
          // let res = Number.parseInt(response.body, 4)
          this.expressionRes = String(response.body)
        },
      (error: HttpErrorResponse) => {
          this.log.error(error)
      })

    console.debug("************************ %s ****************", this.expressionRes)
  }
}
