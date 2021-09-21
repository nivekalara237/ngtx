import {fakeAsync, TestBed} from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";


describe('CalculatorService', () => {
  let service: CalculatorService;
  let httpClientController: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // fournit les services nécessaires pour contrôler les échanges HTTP.
        HttpClientTestingModule
      ]
    });
    httpClientController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(CalculatorService);
  });

  afterEach(()=> {
    // cette instruction permet de vérifier qu'il n'y a aucune requête en attente
    httpClientController.verify({ignoreCancelled: true})
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should multiply 2 by 8', () => {
    expect(service.multiply(2, 8)).toBe(16);
  });

  it('should split 8 by 2', () => {
    expect(service.divise(8, 2)).toBe(4);
  });

  it('should sum 1 and 5', () => {
    expect(service.add(1, 5)).toBe(6);
  });

  it('should throwing excpetion, when divided by nullable value', () => {
    expect( ()=> service.divise(8, null)).toThrow("Illegal divider provided")
  });

  // test form httpClient

  it('should calculate by calling API', fakeAsync(function () {
    let result: any, exp: string = "det([-1, 2; 3, 1])";
    service.mathJs(exp).subscribe(
      (response)=> { result = response.body}
    )

    let query = httpClientController.expectOne("http://api.mathjs.org/v4/?expr=" + exp)
    query.flush(-7)// mock de le response de retour
    expect(result).toEqual(-7)
  }));
});
