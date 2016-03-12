(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.docraptor) {
      root.docraptor = {};
    }
    root.docraptor.AsyncDoc = factory(root.docraptor.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  var AsyncDoc = function AsyncDoc() {

  };

  AsyncDoc.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new AsyncDoc();

    if (data['status_id']) {
      _this['status_id'] = ApiClient.convertToType(data['status_id'], 'String');
    }

    return _this;
  }



  /**
   * get The identifier used to get the status of the document using the status api.
   * @return {String}
   **/
  AsyncDoc.prototype.getStatusId = function() {
    return this['status_id'];
  }

  /**
   * set The identifier used to get the status of the document using the status api.
   * @param {String} statusId
   **/
  AsyncDoc.prototype.setStatusId = function(statusId) {
    this['status_id'] = statusId;
  }





  return AsyncDoc;


}));
