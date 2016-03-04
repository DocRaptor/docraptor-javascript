(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.docraptor) {
      root.docraptor = {};
    }
    factory(root.docraptor, root.docraptor.ApiClient);
  }
}(this, function(module, ApiClient) {
  'use strict';
  
  
  var PrinceOptions = function PrinceOptions() { 
    
    /**
     * Specify the CSS media type. Defaults to \"print\" but you may want to use \"screen\" for web styles.
     * datatype: String
     * required 
     **/
    this['media'] = 'print';
    /**
     * Specify the input format.
     * datatype: InputEnum
     * required 
     **/
    this['input'] = 'html';
  };

  PrinceOptions.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new PrinceOptions();
    
    if (data['baseurl']) {
      _this['baseurl'] = ApiClient.convertToType(data['baseurl'], 'String');
    }
    
    if (data['no_xinclude']) {
      _this['no_xinclude'] = ApiClient.convertToType(data['no_xinclude'], 'Boolean');
    }
    
    if (data['no_network']) {
      _this['no_network'] = ApiClient.convertToType(data['no_network'], 'Boolean');
    }
    
    if (data['http_user']) {
      _this['http_user'] = ApiClient.convertToType(data['http_user'], 'String');
    }
    
    if (data['http_password']) {
      _this['http_password'] = ApiClient.convertToType(data['http_password'], 'String');
    }
    
    if (data['http_proxy']) {
      _this['http_proxy'] = ApiClient.convertToType(data['http_proxy'], 'String');
    }
    
    if (data['http_timeout']) {
      _this['http_timeout'] = ApiClient.convertToType(data['http_timeout'], 'Integer');
    }
    
    if (data['insecure']) {
      _this['insecure'] = ApiClient.convertToType(data['insecure'], 'Boolean');
    }
    
    if (data['media']) {
      _this['media'] = ApiClient.convertToType(data['media'], 'String');
    }
    
    if (data['no_author_style']) {
      _this['no_author_style'] = ApiClient.convertToType(data['no_author_style'], 'Boolean');
    }
    
    if (data['no_default_style']) {
      _this['no_default_style'] = ApiClient.convertToType(data['no_default_style'], 'Boolean');
    }
    
    if (data['no_embed_fonts']) {
      _this['no_embed_fonts'] = ApiClient.convertToType(data['no_embed_fonts'], 'Boolean');
    }
    
    if (data['no_subset_fonts']) {
      _this['no_subset_fonts'] = ApiClient.convertToType(data['no_subset_fonts'], 'Boolean');
    }
    
    if (data['no_compress']) {
      _this['no_compress'] = ApiClient.convertToType(data['no_compress'], 'Boolean');
    }
    
    if (data['encrypt']) {
      _this['encrypt'] = ApiClient.convertToType(data['encrypt'], 'Boolean');
    }
    
    if (data['key_bits']) {
      _this['key_bits'] = ApiClient.convertToType(data['key_bits'], 'Integer');
    }
    
    if (data['user_password']) {
      _this['user_password'] = ApiClient.convertToType(data['user_password'], 'String');
    }
    
    if (data['owner_password']) {
      _this['owner_password'] = ApiClient.convertToType(data['owner_password'], 'String');
    }
    
    if (data['disallow_print']) {
      _this['disallow_print'] = ApiClient.convertToType(data['disallow_print'], 'Boolean');
    }
    
    if (data['disallow_copy']) {
      _this['disallow_copy'] = ApiClient.convertToType(data['disallow_copy'], 'Boolean');
    }
    
    if (data['disallow_annotate']) {
      _this['disallow_annotate'] = ApiClient.convertToType(data['disallow_annotate'], 'Boolean');
    }
    
    if (data['disallow_modify']) {
      _this['disallow_modify'] = ApiClient.convertToType(data['disallow_modify'], 'Boolean');
    }
    
    if (data['input']) {
      _this['input'] = ApiClient.convertToType(data['input'], 'String');
    }
    
    if (data['version']) {
      _this['version'] = ApiClient.convertToType(data['version'], 'String');
    }
    
    if (data['javascript']) {
      _this['javascript'] = ApiClient.convertToType(data['javascript'], 'Boolean');
    }
    
    if (data['css_dpi']) {
      _this['css_dpi'] = ApiClient.convertToType(data['css_dpi'], 'Integer');
    }
    
    if (data['profile']) {
      _this['profile'] = ApiClient.convertToType(data['profile'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * get Set the baseurl for assets.
   * @return {String}
   **/
  PrinceOptions.prototype.getBaseurl = function() {
    return this['baseurl'];
  }

  /**
   * set Set the baseurl for assets.
   * @param {String} baseurl
   **/
  PrinceOptions.prototype.setBaseurl = function(baseurl) {
    this['baseurl'] = baseurl;
  }
  
  /**
   * get Disable XML inclusion.
   * @return {Boolean}
   **/
  PrinceOptions.prototype.getNoXinclude = function() {
    return this['no_xinclude'];
  }

  /**
   * set Disable XML inclusion.
   * @param {Boolean} noXinclude
   **/
  PrinceOptions.prototype.setNoXinclude = function(noXinclude) {
    this['no_xinclude'] = noXinclude;
  }
  
  /**
   * get Disable network access.
   * @return {Boolean}
   **/
  PrinceOptions.prototype.getNoNetwork = function() {
    return this['no_network'];
  }

  /**
   * set Disable network access.
   * @param {Boolean} noNetwork
   **/
  PrinceOptions.prototype.setNoNetwork = function(noNetwork) {
    this['no_network'] = noNetwork;
  }
  
  /**
   * get Set the user for HTTP authentication.
   * @return {String}
   **/
  PrinceOptions.prototype.getHttpUser = function() {
    return this['http_user'];
  }

  /**
   * set Set the user for HTTP authentication.
   * @param {String} httpUser
   **/
  PrinceOptions.prototype.setHttpUser = function(httpUser) {
    this['http_user'] = httpUser;
  }
  
  /**
   * get Set the password for HTTP authentication.
   * @return {String}
   **/
  PrinceOptions.prototype.getHttpPassword = function() {
    return this['http_password'];
  }

  /**
   * set Set the password for HTTP authentication.
   * @param {String} httpPassword
   **/
  PrinceOptions.prototype.setHttpPassword = function(httpPassword) {
    this['http_password'] = httpPassword;
  }
  
  /**
   * get Set the HTTP proxy server.
   * @return {String}
   **/
  PrinceOptions.prototype.getHttpProxy = function() {
    return this['http_proxy'];
  }

  /**
   * set Set the HTTP proxy server.
   * @param {String} httpProxy
   **/
  PrinceOptions.prototype.setHttpProxy = function(httpProxy) {
    this['http_proxy'] = httpProxy;
  }
  
  /**
   * get Set the HTTP request timeout.
   * @return {Integer}
   **/
  PrinceOptions.prototype.getHttpTimeout = function() {
    return this['http_timeout'];
  }

  /**
   * set Set the HTTP request timeout.
   * @param {Integer} httpTimeout
   **/
  PrinceOptions.prototype.setHttpTimeout = function(httpTimeout) {
    this['http_timeout'] = httpTimeout;
  }
  
  /**
   * get Disable SSL verification.
   * @return {Boolean}
   **/
  PrinceOptions.prototype.getInsecure = function() {
    return this['insecure'];
  }

  /**
   * set Disable SSL verification.
   * @param {Boolean} insecure
   **/
  PrinceOptions.prototype.setInsecure = function(insecure) {
    this['insecure'] = insecure;
  }
  
  /**
   * get Specify the CSS media type. Defaults to \"print\" but you may want to use \"screen\" for web styles.
   * @return {String}
   **/
  PrinceOptions.prototype.getMedia = function() {
    return this['media'];
  }

  /**
   * set Specify the CSS media type. Defaults to \"print\" but you may want to use \"screen\" for web styles.
   * @param {String} media
   **/
  PrinceOptions.prototype.setMedia = function(media) {
    this['media'] = media;
  }
  
  /**
   * get Ignore author stylesheets.
   * @return {Boolean}
   **/
  PrinceOptions.prototype.getNoAuthorStyle = function() {
    return this['no_author_style'];
  }

  /**
   * set Ignore author stylesheets.
   * @param {Boolean} noAuthorStyle
   **/
  PrinceOptions.prototype.setNoAuthorStyle = function(noAuthorStyle) {
    this['no_author_style'] = noAuthorStyle;
  }
  
  /**
   * get Ignore default stylesheets.
   * @return {Boolean}
   **/
  PrinceOptions.prototype.getNoDefaultStyle = function() {
    return this['no_default_style'];
  }

  /**
   * set Ignore default stylesheets.
   * @param {Boolean} noDefaultStyle
   **/
  PrinceOptions.prototype.setNoDefaultStyle = function(noDefaultStyle) {
    this['no_default_style'] = noDefaultStyle;
  }
  
  /**
   * get Disable font embedding in PDFs.
   * @return {Boolean}
   **/
  PrinceOptions.prototype.getNoEmbedFonts = function() {
    return this['no_embed_fonts'];
  }

  /**
   * set Disable font embedding in PDFs.
   * @param {Boolean} noEmbedFonts
   **/
  PrinceOptions.prototype.setNoEmbedFonts = function(noEmbedFonts) {
    this['no_embed_fonts'] = noEmbedFonts;
  }
  
  /**
   * get Disable font subsetting in PDFs.
   * @return {Boolean}
   **/
  PrinceOptions.prototype.getNoSubsetFonts = function() {
    return this['no_subset_fonts'];
  }

  /**
   * set Disable font subsetting in PDFs.
   * @param {Boolean} noSubsetFonts
   **/
  PrinceOptions.prototype.setNoSubsetFonts = function(noSubsetFonts) {
    this['no_subset_fonts'] = noSubsetFonts;
  }
  
  /**
   * get Disable PDF compression.
   * @return {Boolean}
   **/
  PrinceOptions.prototype.getNoCompress = function() {
    return this['no_compress'];
  }

  /**
   * set Disable PDF compression.
   * @param {Boolean} noCompress
   **/
  PrinceOptions.prototype.setNoCompress = function(noCompress) {
    this['no_compress'] = noCompress;
  }
  
  /**
   * get Encrypt PDF output.
   * @return {Boolean}
   **/
  PrinceOptions.prototype.getEncrypt = function() {
    return this['encrypt'];
  }

  /**
   * set Encrypt PDF output.
   * @param {Boolean} encrypt
   **/
  PrinceOptions.prototype.setEncrypt = function(encrypt) {
    this['encrypt'] = encrypt;
  }
  
  /**
   * get Set encryption key size.
   * @return {Integer}
   **/
  PrinceOptions.prototype.getKeyBits = function() {
    return this['key_bits'];
  }

  /**
   * set Set encryption key size.
   * @param {Integer} keyBits
   **/
  PrinceOptions.prototype.setKeyBits = function(keyBits) {
    this['key_bits'] = keyBits;
  }
  
  /**
   * get Set the PDF user password.
   * @return {String}
   **/
  PrinceOptions.prototype.getUserPassword = function() {
    return this['user_password'];
  }

  /**
   * set Set the PDF user password.
   * @param {String} userPassword
   **/
  PrinceOptions.prototype.setUserPassword = function(userPassword) {
    this['user_password'] = userPassword;
  }
  
  /**
   * get Set the PDF owner password.
   * @return {String}
   **/
  PrinceOptions.prototype.getOwnerPassword = function() {
    return this['owner_password'];
  }

  /**
   * set Set the PDF owner password.
   * @param {String} ownerPassword
   **/
  PrinceOptions.prototype.setOwnerPassword = function(ownerPassword) {
    this['owner_password'] = ownerPassword;
  }
  
  /**
   * get Disallow printing of this PDF.
   * @return {Boolean}
   **/
  PrinceOptions.prototype.getDisallowPrint = function() {
    return this['disallow_print'];
  }

  /**
   * set Disallow printing of this PDF.
   * @param {Boolean} disallowPrint
   **/
  PrinceOptions.prototype.setDisallowPrint = function(disallowPrint) {
    this['disallow_print'] = disallowPrint;
  }
  
  /**
   * get Disallow copying of this PDF.
   * @return {Boolean}
   **/
  PrinceOptions.prototype.getDisallowCopy = function() {
    return this['disallow_copy'];
  }

  /**
   * set Disallow copying of this PDF.
   * @param {Boolean} disallowCopy
   **/
  PrinceOptions.prototype.setDisallowCopy = function(disallowCopy) {
    this['disallow_copy'] = disallowCopy;
  }
  
  /**
   * get Disallow annotation of this PDF.
   * @return {Boolean}
   **/
  PrinceOptions.prototype.getDisallowAnnotate = function() {
    return this['disallow_annotate'];
  }

  /**
   * set Disallow annotation of this PDF.
   * @param {Boolean} disallowAnnotate
   **/
  PrinceOptions.prototype.setDisallowAnnotate = function(disallowAnnotate) {
    this['disallow_annotate'] = disallowAnnotate;
  }
  
  /**
   * get Disallow modification of this PDF.
   * @return {Boolean}
   **/
  PrinceOptions.prototype.getDisallowModify = function() {
    return this['disallow_modify'];
  }

  /**
   * set Disallow modification of this PDF.
   * @param {Boolean} disallowModify
   **/
  PrinceOptions.prototype.setDisallowModify = function(disallowModify) {
    this['disallow_modify'] = disallowModify;
  }
  
  /**
   * get Specify the input format.
   * @return {InputEnum}
   **/
  PrinceOptions.prototype.getInput = function() {
    return this['input'];
  }

  /**
   * set Specify the input format.
   * @param {InputEnum} input
   **/
  PrinceOptions.prototype.setInput = function(input) {
    this['input'] = input;
  }
  
  /**
   * get Specify a specific verison of PrinceXML to use.
   * @return {String}
   **/
  PrinceOptions.prototype.getVersion = function() {
    return this['version'];
  }

  /**
   * set Specify a specific verison of PrinceXML to use.
   * @param {String} version
   **/
  PrinceOptions.prototype.setVersion = function(version) {
    this['version'] = version;
  }
  
  /**
   * get Enable PrinceXML JavaScript. DocRaptor JavaScript parsing is also available elsewhere.
   * @return {Boolean}
   **/
  PrinceOptions.prototype.getJavascript = function() {
    return this['javascript'];
  }

  /**
   * set Enable PrinceXML JavaScript. DocRaptor JavaScript parsing is also available elsewhere.
   * @param {Boolean} javascript
   **/
  PrinceOptions.prototype.setJavascript = function(javascript) {
    this['javascript'] = javascript;
  }
  
  /**
   * get Set the DPI when rendering CSS. Defaults to 96 but can be set with Prince 9.0 and up.
   * @return {Integer}
   **/
  PrinceOptions.prototype.getCssDpi = function() {
    return this['css_dpi'];
  }

  /**
   * set Set the DPI when rendering CSS. Defaults to 96 but can be set with Prince 9.0 and up.
   * @param {Integer} cssDpi
   **/
  PrinceOptions.prototype.setCssDpi = function(cssDpi) {
    this['css_dpi'] = cssDpi;
  }
  
  /**
   * get In Prince 9.0 and up you can set the PDF profile.
   * @return {String}
   **/
  PrinceOptions.prototype.getProfile = function() {
    return this['profile'];
  }

  /**
   * set In Prince 9.0 and up you can set the PDF profile.
   * @param {String} profile
   **/
  PrinceOptions.prototype.setProfile = function(profile) {
    this['profile'] = profile;
  }
  
  

  var InputEnum = {

	  /**
	   * @const
	   */
	  HTML: "html",
	  
	  /**
	   * @const
	   */
	  XML: "xml",
	  
	  /**
	   * @const
	   */
	  AUTO: "auto"
  };

  PrinceOptions.InputEnum = InputEnum;


  if (module) {
    module.PrinceOptions = PrinceOptions;
  }

  return PrinceOptions;
  
  
}));
