(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PrinceOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PrinceOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.docraptor) {
      root.docraptor = {};
    }
    root.docraptor.Doc = factory(root.docraptor.ApiClient, root.docraptor.PrinceOptions);
  }
}(this, function(ApiClient, PrinceOptions) {
  'use strict';
  
  
  var Doc = function Doc(name, documentType, documentContent) { 
    
    /**
     * A name for identifying your document.
     * datatype: String
     * required 
     **/
    this['name'] = name;
    /**
     * The type of document being created.
     * datatype: DocumentTypeEnum
     * required 
     **/
    this['document_type'] = documentType;
    /**
     * The HTML data to be transformed into a document. You must supply content using document_content or document_url.
     * datatype: String
     * required 
     **/
    this['document_content'] = documentContent;
    /**
     * Enable test mode for this document. Test documents are not charged for but include a watermark.
     * datatype: Boolean
     * required 
     **/
    this['test'] = true;
    /**
     * Force strict HTML validation.
     * datatype: StrictEnum
     * required 
     **/
    this['strict'] = 'none';
    /**
     * Failed loading of images/javascripts/stylesheets/etc. will not cause the rendering to stop.
     * datatype: Boolean
     * required 
     **/
    this['ignore_resource_errors'] = true;
    /**
     * Request support help with this request if it succeeds.
     * datatype: Boolean
     * required 
     **/
    this['help'] = false;
    /**
     * Enable DocRaptor JavaScript parsing. PrinceXML JavaScript parsing is also available elsewhere.
     * datatype: Boolean
     * required 
     **/
    this['javascript'] = false;
  };

  Doc.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new Doc();
    
    if (data['name']) {
      _this['name'] = ApiClient.convertToType(data['name'], 'String');
    }
    
    if (data['document_type']) {
      _this['document_type'] = ApiClient.convertToType(data['document_type'], 'String');
    }
    
    if (data['document_content']) {
      _this['document_content'] = ApiClient.convertToType(data['document_content'], 'String');
    }
    
    if (data['document_url']) {
      _this['document_url'] = ApiClient.convertToType(data['document_url'], 'String');
    }
    
    if (data['test']) {
      _this['test'] = ApiClient.convertToType(data['test'], 'Boolean');
    }
    
    if (data['strict']) {
      _this['strict'] = ApiClient.convertToType(data['strict'], 'String');
    }
    
    if (data['ignore_resource_errors']) {
      _this['ignore_resource_errors'] = ApiClient.convertToType(data['ignore_resource_errors'], 'Boolean');
    }
    
    if (data['tag']) {
      _this['tag'] = ApiClient.convertToType(data['tag'], 'String');
    }
    
    if (data['help']) {
      _this['help'] = ApiClient.convertToType(data['help'], 'Boolean');
    }
    
    if (data['javascript']) {
      _this['javascript'] = ApiClient.convertToType(data['javascript'], 'Boolean');
    }
    
    if (data['referrer']) {
      _this['referrer'] = ApiClient.convertToType(data['referrer'], 'String');
    }
    
    if (data['callback_url']) {
      _this['callback_url'] = ApiClient.convertToType(data['callback_url'], 'String');
    }
    
    if (data['prince_options']) {
      _this['prince_options'] = PrinceOptions.constructFromObject(data['prince_options']);
    }
    
    return _this;
  }

  
  
  /**
   * get A name for identifying your document.
   * @return {String}
   **/
  Doc.prototype.getName = function() {
    return this['name'];
  }

  /**
   * set A name for identifying your document.
   * @param {String} name
   **/
  Doc.prototype.setName = function(name) {
    this['name'] = name;
  }
  
  /**
   * get The type of document being created.
   * @return {DocumentTypeEnum}
   **/
  Doc.prototype.getDocumentType = function() {
    return this['document_type'];
  }

  /**
   * set The type of document being created.
   * @param {DocumentTypeEnum} documentType
   **/
  Doc.prototype.setDocumentType = function(documentType) {
    this['document_type'] = documentType;
  }
  
  /**
   * get The HTML data to be transformed into a document. You must supply content using document_content or document_url.
   * @return {String}
   **/
  Doc.prototype.getDocumentContent = function() {
    return this['document_content'];
  }

  /**
   * set The HTML data to be transformed into a document. You must supply content using document_content or document_url.
   * @param {String} documentContent
   **/
  Doc.prototype.setDocumentContent = function(documentContent) {
    this['document_content'] = documentContent;
  }
  
  /**
   * get The URL to fetch the HTML data to be transformed into a document. You must supply content using document_content or document_url.
   * @return {String}
   **/
  Doc.prototype.getDocumentUrl = function() {
    return this['document_url'];
  }

  /**
   * set The URL to fetch the HTML data to be transformed into a document. You must supply content using document_content or document_url.
   * @param {String} documentUrl
   **/
  Doc.prototype.setDocumentUrl = function(documentUrl) {
    this['document_url'] = documentUrl;
  }
  
  /**
   * get Enable test mode for this document. Test documents are not charged for but include a watermark.
   * @return {Boolean}
   **/
  Doc.prototype.getTest = function() {
    return this['test'];
  }

  /**
   * set Enable test mode for this document. Test documents are not charged for but include a watermark.
   * @param {Boolean} test
   **/
  Doc.prototype.setTest = function(test) {
    this['test'] = test;
  }
  
  /**
   * get Force strict HTML validation.
   * @return {StrictEnum}
   **/
  Doc.prototype.getStrict = function() {
    return this['strict'];
  }

  /**
   * set Force strict HTML validation.
   * @param {StrictEnum} strict
   **/
  Doc.prototype.setStrict = function(strict) {
    this['strict'] = strict;
  }
  
  /**
   * get Failed loading of images/javascripts/stylesheets/etc. will not cause the rendering to stop.
   * @return {Boolean}
   **/
  Doc.prototype.getIgnoreResourceErrors = function() {
    return this['ignore_resource_errors'];
  }

  /**
   * set Failed loading of images/javascripts/stylesheets/etc. will not cause the rendering to stop.
   * @param {Boolean} ignoreResourceErrors
   **/
  Doc.prototype.setIgnoreResourceErrors = function(ignoreResourceErrors) {
    this['ignore_resource_errors'] = ignoreResourceErrors;
  }
  
  /**
   * get A field for storing a small amount of metadata with this document.
   * @return {String}
   **/
  Doc.prototype.getTag = function() {
    return this['tag'];
  }

  /**
   * set A field for storing a small amount of metadata with this document.
   * @param {String} tag
   **/
  Doc.prototype.setTag = function(tag) {
    this['tag'] = tag;
  }
  
  /**
   * get Request support help with this request if it succeeds.
   * @return {Boolean}
   **/
  Doc.prototype.getHelp = function() {
    return this['help'];
  }

  /**
   * set Request support help with this request if it succeeds.
   * @param {Boolean} help
   **/
  Doc.prototype.setHelp = function(help) {
    this['help'] = help;
  }
  
  /**
   * get Enable DocRaptor JavaScript parsing. PrinceXML JavaScript parsing is also available elsewhere.
   * @return {Boolean}
   **/
  Doc.prototype.getJavascript = function() {
    return this['javascript'];
  }

  /**
   * set Enable DocRaptor JavaScript parsing. PrinceXML JavaScript parsing is also available elsewhere.
   * @param {Boolean} javascript
   **/
  Doc.prototype.setJavascript = function(javascript) {
    this['javascript'] = javascript;
  }
  
  /**
   * get Set HTTP referrer when generating this document.
   * @return {String}
   **/
  Doc.prototype.getReferrer = function() {
    return this['referrer'];
  }

  /**
   * set Set HTTP referrer when generating this document.
   * @param {String} referrer
   **/
  Doc.prototype.setReferrer = function(referrer) {
    this['referrer'] = referrer;
  }
  
  /**
   * get A URL that will receive a POST request after successfully completing an asynchronous document. The POST data will include download_url and download_id similar to status api responses. WARNING: this only works on asynchronous documents.
   * @return {String}
   **/
  Doc.prototype.getCallbackUrl = function() {
    return this['callback_url'];
  }

  /**
   * set A URL that will receive a POST request after successfully completing an asynchronous document. The POST data will include download_url and download_id similar to status api responses. WARNING: this only works on asynchronous documents.
   * @param {String} callbackUrl
   **/
  Doc.prototype.setCallbackUrl = function(callbackUrl) {
    this['callback_url'] = callbackUrl;
  }
  
  /**
   * @return {PrinceOptions}
   **/
  Doc.prototype.getPrinceOptions = function() {
    return this['prince_options'];
  }

  /**
   * @param {PrinceOptions} princeOptions
   **/
  Doc.prototype.setPrinceOptions = function(princeOptions) {
    this['prince_options'] = princeOptions;
  }
  
  

  var DocumentTypeEnum = {

	  /**
	   * @const
	   */
	  PDF: "pdf",
	  
	  /**
	   * @const
	   */
	  XLS: "xls",
	  
	  /**
	   * @const
	   */
	  XLSX: "xlsx"
  };

  Doc.DocumentTypeEnum = DocumentTypeEnum;
var StrictEnum = {

	  /**
	   * @const
	   */
	  NONE: "none"
  };

  Doc.StrictEnum = StrictEnum;


  return Doc;
  
  
}));
