# DocRaptor JavaScript Native Client Library

**WARNING: This is not production ready, you should use https://docraptor.com/documentation/node**

This is a JavaScript library and Node.js module for using [DocRaptor API](http://docraptor.com/documentation) to convert HTML to PDF and XLSX.


## Installation

```sh
npm install docraptor
```


## Usage

See [examples](examples/) for runnable examples with file output, error handling, etc.

```javascript
var docraptor = require("docraptor");

var auth = docraptor.ApiClient.default.authentications.basicAuth;
auth.username = "YOUR_API_KEY_HERE"; // this key works for test documents

doc_api = new docraptor.DocApi();

doc_api.createDoc({
  test: true,                                                    // test documents are free but watermarked
  document_content: "<html><body>Hello World</body></html>",     // supply content directly
  // document_url: "http://docraptor.com/examples/invoice.html", // or use a url
  name: "test",                                                  // help you find a document later
  document_type: "pdf",                                          // pdf or xls or xlsx
  // javascript: true,                                           // enable JavaScript processing
  // prince_options: {
  //   media: "screen",                                          // use screen styles instead of print styles
  //   baseurl: "http://hello.com",                              // pretend URL when
  // },
  }, function(error, data, response) {
    // ...
  }
})
```

Docs created like this are limited to 60 seconds to render, check out the [async example](examples/async.js) which allows 10 minutes.

We have guides for doing some of the common things:

* [Headers and Footers](https://docraptor.com/documentation/style#pdf-headers-footers) including page skipping
* [CSS Media Selector](https://docraptor.com/documentation/api#api_basic_pdf) to make the page look exactly as it does in your browser
* [Protected Content](https://docraptor.com/documentation/api#api_advanced_pdf) to secure your URLs so only DocRaptor can access them


## More Help

DocRaptor has a lot of more [styling](https://docraptor.com/documentation/style) and [implementation options](https://docraptor.com/documentation/api).

Stuck? We're experts at using DocRaptor so please [email us](mailto:support@docraptor.com) if you run into trouble.


## Development

The majority of the code in this repo is generated using swagger-codegen on [docraptor.yaml](docraptor.yaml). You can modify this file and regenerate the client using `script/generate_language javascript`.

The generated client needed a few fixes
- response buffer
- binary string response handling


## Release Process

1. `script/test`
2. Increment version in code:
  - `swagger-config.json`
  - `package.json`
3. Update [CHANGELOG.md](CHANGELOG.md)
4. TODO


## Version Policy

This library follows [Semantic Versioning 2.0.0](http://semver.org).
