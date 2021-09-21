import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import {CalculatorService} from "./calculator.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule} from "@angular/forms";
import {of} from "rxjs";
import {HttpResponse} from "@angular/common/http";

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let service: CalculatorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CalculatorComponent
      ],
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [
        { provide: CalculatorService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(CalculatorService)
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should xxx', fakeAsync(function () {


    // spyOn(service, "mathJs").and.returnValue(of(new HttpResponse({ body: "-27" })))

    component = TestBed.createComponent(CalculatorComponent).componentInstance
    component.yVal = Number.parseInt("3")
    component.xVal = Number.parseInt("3")
    component.expression = "2+3*sqrt(4)"

    //fixture.detectChanges()

    const el = fixture.nativeElement.querySelector("#res_2")
    const button = fixture.nativeElement.querySelector("button#submitBtn")
    button.click()
    tick()
    //expect(component.callMathJsApi).toHaveBeenCalled()
    expect(component.expressionRes).toEqual("-27")
  }));
});
