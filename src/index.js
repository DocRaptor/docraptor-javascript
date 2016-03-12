(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/AsyncDoc', './model/AsyncDocStatus', './model/Doc', './model/PrinceOptions', './api/DocApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AsyncDoc'), require('./model/AsyncDocStatus'), require('./model/Doc'), require('./model/PrinceOptions'), require('./api/DocApi'));
  }
}(function(ApiClient, AsyncDoc, AsyncDocStatus, Doc, PrinceOptions, DocApi) {
  'use strict';

  return {
    ApiClient: ApiClient,
    AsyncDoc: AsyncDoc,
    AsyncDocStatus: AsyncDocStatus,
    Doc: Doc,
    PrinceOptions: PrinceOptions,
    DocApi: DocApi
  };
}));
