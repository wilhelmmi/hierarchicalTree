import { Pipe, PipeTransform } from '@angular/core';
import { DetailService } from '../services/detail.service';


@Pipe({name: 'translatorPipe'})
export class TranslatorPipe implements PipeTransform {

  transform(value: string, replacementObject?: object): string {
    if(!value) return "";
    const result = replacementObject[value];
    if(!result) return value;
    return result;
  }
}