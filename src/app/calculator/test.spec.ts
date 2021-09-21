import {CalculatorService} from "./calculator.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {fakeAsync, TestBed} from "@angular/core/testing";

describe('CalculatorService', () => {
  let service: CalculatorService;
  let httpClientController: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule //fournit les services nécessaires pour contrôler les échanges HTTP.
      ]
    });
    httpClientController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(CalculatorService);
  });

  afterEach(()=> {
    // cette instruction permet de vérifier qu'il n'y a aucune requête en attente
    httpClientController.verify({ignoreCancelled: true})
  })

  it('should multiply 2 by 8', () => {
    expect(service.multiply(2, 8)).toBe(16);
  });
});
