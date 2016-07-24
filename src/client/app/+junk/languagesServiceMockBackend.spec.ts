//import { TestComponentBuilder } from '@angular/compiler/testing'
//import { beforeEachProviders, inject } from '@angular/core/testing'
//import { LanguageServiceHttp } from './languagesServiceHttp'
//import { Http, HTTP_PROVIDERS } from '@angular/http'
//import { BaseRequestOptions } from '@angular/http'
//import { Response } from '@angular/http'
//import { MockBackend } from '@angular/http/testing'
//import { provide } from '@angular/core'

export function main() {

  //describe('Mockbackend: LanguageServiceHttp',() => {
    //let mockbackend, service

    //beforeEachProviders(() => [
      //LanguageServiceHttp,
      //MockBackend,
      //BaseRequestOptions,
      //provide(Http, {
        //useFactory: (backend, options) => new Http(backend, options),
        //deps: [MockBackend, BaseRequestOptions]
      //})
    //])

    //beforeEach(inject([MockBackend, LanguageServiceHttp], (_mockbackend, _service) => {
      //mockbackend = _mockbackend
      //service = _service
    //}))

    //it('should return mocked response', done => {
      //let response = ['ru','es']
      //mockbackend.connections.subscribe(connection => {
        //connection.mockResponse(new Response({body: JSON.stringify(response)}))
      //})

      //service.get().subscribe(x => {
        //expect(x).toContain('en')
        //expect(x).toContain('es')
        //expect(x).toContain('fr')
        //expect(x.length).toEqual(3)
        //done()
      //})

    //})
  //})

  //describe('Service: LanguageServiceHttp', () => {
    //let service

    // setup
    //beforeEachProviders(()=>[
      //HTTP_PROVIDERS,
      //LanguageServiceHttp
    //])

    //beforeEach(inject([LanguageServiceHttp], s => {
      //service = s
    //}))

    // specs
    //it('shoulder return available languages', done => {
     // service.get().subscribe(x => {
        //expect(x).toContain('en')
        //expect(x).toContain('es')
        //expect(x).toContain('fr')
        //expect(x.length).toEqual(3)
        //done()
      //})

    //})
  //})
}
