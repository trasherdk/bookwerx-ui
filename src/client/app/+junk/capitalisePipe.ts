import {isString} from '@angular/common/src/facade/lang'
//import {BaseException} from 'angular2/src/facade/exceptions'
import {BaseException} from '@angular/core'
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'capitalise'
})
export class CapitalisePipe implements PipeTransform {
  transform(value) {
    if (isString(value))
      return value.toUpperCase()
    throw new BaseException('Requires a String as input')
  }
}
