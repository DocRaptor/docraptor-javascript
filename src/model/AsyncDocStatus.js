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
    root.docraptor.AsyncDocStatus = factory(root.docraptor.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  var AsyncDocStatus = function AsyncDocStatus() {

  };

  AsyncDocStatus.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new AsyncDocStatus();

    if (data['status']) {
      _this['status'] = ApiClient.convertToType(data['status'], 'String');
    }

    if (data['download_url']) {
      _this['download_url'] = ApiClient.convertToType(data['download_url'], 'String');
    }

    if (data['download_id']) {
      _this['download_id'] = ApiClient.convertToType(data['download_id'], 'String');
    }

    if (data['message']) {
      _this['message'] = ApiClient.convertToType(data['message'], 'String');
    }

    if (data['number_of_pages']) {
      _this['number_of_pages'] = ApiClient.convertToType(data['number_of_pages'], 'Integer');
    }

    if (data['validation_errors']) {
      _this['validation_errors'] = ApiClient.convertToType(data['validation_errors'], 'String');
    }

    return _this;
  }



  /**
   * get The present status of the document. Can be queued, working, completed, and failed.
   * @return {String}
   **/
  AsyncDocStatus.prototype.getStatus = function() {
    return this['status'];
  }

  /**
   * set The present status of the document. Can be queued, working, completed, and failed.
   * @param {String} status
   **/
  AsyncDocStatus.prototype.setStatus = function(status) {
    this['status'] = status;
  }

  /**
   * get The URL where the document can be retrieved. This URL may only be used a few times.
   * @return {String}
   **/
  AsyncDocStatus.prototype.getDownloadUrl = function() {
    return this['download_url'];
  }

  /**
   * set The URL where the document can be retrieved. This URL may only be used a few times.
   * @param {String} downloadUrl
   **/
  AsyncDocStatus.prototype.setDownloadUrl = function(downloadUrl) {
    this['download_url'] = downloadUrl;
  }

  /**
   * get The identifier for downloading the document with the download api.
   * @return {String}
   **/
  AsyncDocStatus.prototype.getDownloadId = function() {
    return this['download_id'];
  }

  /**
   * set The identifier for downloading the document with the download api.
   * @param {String} downloadId
   **/
  AsyncDocStatus.prototype.setDownloadId = function(downloadId) {
    this['download_id'] = downloadId;
  }

  /**
   * get Additional information.
   * @return {String}
   **/
  AsyncDocStatus.prototype.getMessage = function() {
    return this['message'];
  }

  /**
   * set Additional information.
   * @param {String} message
   **/
  AsyncDocStatus.prototype.setMessage = function(message) {
    this['message'] = message;
  }

  /**
   * get Number of PDF pages in document.
   * @return {Integer}
   **/
  AsyncDocStatus.prototype.getNumberOfPages = function() {
    return this['number_of_pages'];
  }

  /**
   * set Number of PDF pages in document.
   * @param {Integer} numberOfPages
   **/
  AsyncDocStatus.prototype.setNumberOfPages = function(numberOfPages) {
    this['number_of_pages'] = numberOfPages;
  }

  /**
   * get Error information.
   * @return {String}
   **/
  AsyncDocStatus.prototype.getValidationErrors = function() {
    return this['validation_errors'];
  }

  /**
   * set Error information.
   * @param {String} validationErrors
   **/
  AsyncDocStatus.prototype.setValidationErrors = function(validationErrors) {
    this['validation_errors'] = validationErrors;
  }





  return AsyncDocStatus;


}));
