import { Injectable } from '@angular/core';
import { generatedString } from './types';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const CHARACTERS_LENGTH = CHARACTERS.length;

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  generateRandomString(): generatedString {
    let string = '';

    for ( let i = 0; i < 5; i++ ) {
      string += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS_LENGTH));
    }

    const reversed = string.split('').reverse().join('') === string;
    const everyCharIsNumber = string.split('').every(el => Number.isInteger(Number(el)));
    const containsNull = string.split('').some(el => Number(el) === 0);

    return {
      generatedString: string,
      reversed,
      everyCharIsNumber,
      containsNull
    };
  }
  
}