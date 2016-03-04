var docraptor = require("../src")

docraptor.ApiClient.default.authentications.basicAuth.username = "YOUR_API_KEY_HERE"
doc_api = new docraptor.DocApi()

doc_api.createDoc({test: true, name: "test", document_type: "pdf", document_content: "HEllo"}, function(error, data, response) {
  if (error) {
    console.log(error.message)
    process.exit(1)
  } else {
    if (data.match(/%PDF-/)) {
      process.exit(0)      
    } else {
      console.log("doesn't look like a PDF")
      process.exit(1)
    }
  }
})
