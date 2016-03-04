(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AsyncDoc', '../model/Doc', '../model/AsyncDocStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AsyncDoc'), require('../model/Doc'), require('../model/AsyncDocStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.docraptor) {
      root.docraptor = {};
    }
    root.docraptor.DocApi = factory(root.docraptor.ApiClient, root.docraptor.AsyncDoc, root.docraptor.Doc, root.docraptor.AsyncDocStatus);
  }
}(this, function(ApiClient, AsyncDoc, Doc, AsyncDocStatus) {
  'use strict';

  var DocApi = function DocApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * 
     * Creates a document asynchronously. You must use a callback url or the the returned status id and the status api to find out when it completes. Then use the download api to get the document.
     * @param {Doc} doc The document to be created.
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: AsyncDoc
     */
    self.createAsyncDoc = function(doc, callback) {
      var postBody = doc;
      
      // verify the required parameter 'doc' is set
      if (doc == null) {
        throw "Missing the required parameter 'doc' when calling createAsyncDoc";
      }
      

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml', 'application/pdf', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
      var returnType = AsyncDoc;

      return this.apiClient.callApi(
        '/async_docs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    /**
     * 
     * Creates a document synchronously.
     * @param {Doc} doc The document to be created.
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: 'String'
     */
    self.createDoc = function(doc, callback) {
      var postBody = doc;
      
      // verify the required parameter 'doc' is set
      if (doc == null) {
        throw "Missing the required parameter 'doc' when calling createDoc";
      }
      

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml', 'application/pdf', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/docs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    /**
     * 
     * Downloads a document.
     * @param {String} id The download_id returned from status request or a callback.
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: 'String'
     */
    self.getAsyncDoc = function(id, callback) {
      var postBody = null;
      
      // verify the required parameter 'id' is set
      if (id == null) {
        throw "Missing the required parameter 'id' when calling getAsyncDoc";
      }
      

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml', 'application/pdf', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/download/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    /**
     * 
     * Check on the status of an asynchronously created document.
     * @param {String} id The status_id returned when creating an asynchronous document.
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: AsyncDocStatus
     */
    self.getAsyncDocStatus = function(id, callback) {
      var postBody = null;
      
      // verify the required parameter 'id' is set
      if (id == null) {
        throw "Missing the required parameter 'id' when calling getAsyncDocStatus";
      }
      

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml', 'application/pdf', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
      var returnType = AsyncDocStatus;

      return this.apiClient.callApi(
        '/status/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );

    }
    
    
  };

  return DocApi;
}));
