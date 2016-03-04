(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/PrinceOptions', './model/AsyncDoc', './model/AsyncDocStatus', './model/Doc', './api/DocApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/PrinceOptions'), require('./model/AsyncDoc'), require('./model/AsyncDocStatus'), require('./model/Doc'), require('./api/DocApi'));
  }
}(function(ApiClient, PrinceOptions, AsyncDoc, AsyncDocStatus, Doc, DocApi) {
  'use strict';

  return {
    ApiClient: ApiClient,
    PrinceOptions: PrinceOptions,
    AsyncDoc: AsyncDoc,
    AsyncDocStatus: AsyncDocStatus,
    Doc: Doc,
    DocApi: DocApi
  };
}));
