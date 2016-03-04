var docraptor = require("../src");

docraptor.ApiClient.default.authentications.basicAuth.username = "YOUR_API_KEY_HERE"
da = new docraptor.DocApi()

da.createDoc({test: true, name: "javascript-xlsx.xlsx", document_type: "xlsx", document_content: "<html><body><table><tr><td>Hello from JavaScript</td></tr></table></body></html>"}, function(error, data, response) {
  if (error) {
    console.log(error.message)
    process.exit(1)
  } else {
    // if (data.match(/%PDF-/)) {
      process.exit(0)      
    // } else {
    //   console.log("doesn't look like a PDF")
    //   process.exit(1)
    // }
  }
})
