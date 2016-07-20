//import {describe, it, expect, inject, injectAsync, beforeEach, beforeEachProviders} from 'angular2/testing'
import {CapitalisePipe} from './capitalisePipe'
//import {BaseException} from '@angular/common/src/facade/exceptions'
//import {BaseException} from '@angular/core'
import { beforeEachProviders, inject } from '@angular/core/testing'

export function main() {

  describe('Pipe: CapitalisePipe', () => {
    let pipe

    //setup
    beforeEachProviders(() => [
      CapitalisePipe
    ])

    beforeEach(inject([CapitalisePipe], p => {
      pipe = p;
    }))

    //specs
    it('should throw if not used with a string', () => {
      //must use arrow function for expect to capture exception
      expect(()=>pipe.transform(null)).toThrow()
      expect(()=>pipe.transform(undefined)).toThrow()
      expect(()=>pipe.transform()).toThrow()
      expect(()=>pipe.transform()).toThrowError('Requires a String as input')
      //expect(()=>pipe.transform()).toThrowError(BaseException)
      //expect(()=>pipe.transform()).toThrowError(BaseException, 'Requires a String as input')
    })

    it('should work with empty string', () => {
      expect(pipe.transform('')).toEqual('');
    })

    it('should capitalise', () => {
      expect(pipe.transform('wow')).toEqual('WOW');
    })
  })
}
