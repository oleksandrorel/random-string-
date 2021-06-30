import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { StringService } from '../string.service';

@Component({
  selector: 'app-random-string',
  templateUrl: './random-string.component.html',
  styleUrls: ['./random-string.component.scss']
})
export class RandomStringComponent implements OnInit {
  str: string = this.stringService.generateRandomString().generatedString;
  reversed: boolean = false;
  isNumbers: boolean = false;
  isNull: boolean = false;

  constructor( private stringService: StringService ) { }

  ngOnInit(): void {
    const obs$ = interval(3000);
    obs$.subscribe(() => {
      const { 
      generatedString,
      reversed,
      everyCharIsNumber,
      containsNull
    } = this.stringService.generateRandomString();

      this.str = generatedString;
      this.reversed = reversed;
      this.isNumbers = everyCharIsNumber;
      this.isNull = containsNull;
    })
  }

}
