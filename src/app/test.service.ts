import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}
  printToConsole(arg: string) {
    console.log('these is message printed ===> ' + arg);
  }
}
