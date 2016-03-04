var docraptor = require("../src");

docraptor.ApiClient.default.authentications.basicAuth.username = "YOUR_API_KEY_HERE"
da = new docraptor.DocApi()

var name = Array(202).join("t") // limit is 200 characters

da.createDoc({test: true, name: name, document_type: "pdf", document_content: "HEllo"}, function(error, data, response) {
  if (error) {
    process.exit(0)
  } else {
    console.log("expected error")
    process.exit(1)
  }
})
