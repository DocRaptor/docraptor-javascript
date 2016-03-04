// This example demonstrates creating a PDF using common options and saving it
// to a place on the filesystem.
//
// It is created synchronously, which means DocRaptor will render it for up to
// 60 seconds. It is slightly simpler than making documents using the async
// interface but making many documents in parallel or very large documents with
// lots of assets will require the async api.
//
// DocRaptor supports many options for output customization, the full list is
// https://docraptor.com/documentation/api#api_general
//
// You can run this example with: node sync.js

var docraptor = require("../src");
var fs = require('fs');

docraptor.ApiClient.default.authentications.basicAuth.username = "YOUR_API_KEY_HERE"
doc_api = new docraptor.DocApi()

doc_api.createDoc({
  test:             true,                                          // test documents are free but watermarked
  document_content: "<html><body>Hello World</body></html>",       // supply content directly
  // document_url:   "http://docraptor.com/examples/invoice.html", // or use a url
  name:             "docraptor-javascript.pdf",                          // help you find a document later
  document_type:    "pdf",                                         // pdf or xls or xlsx
  // javascript:       true,                                       // enable JavaScript processing
  // prince_options: {
  //   media: "screen",                                            // use screen styles instead of print styles
  //   baseurl: "http://hello.com",                                // pretend URL when using document_content
  // },
}, function(error, data, response) {
  if (error) {
    console.log(error.message)
    //   puts "#{error.class}: #{error.message}"
    //   puts error.code          // HTTP response code
    //   puts error.response_body // HTTP response body
    //   puts error.backtrace[0..3].join("\n")

    process.exit(1)
  } else {
    fs.writeFile("docraptor-javascript.pdf", data, "binary", function(error) {
      if (error) {
        console.log(error);
      }
      console.log("Wrote PDF to docraptor-javascript.pdf");
    }); 
  }
})
