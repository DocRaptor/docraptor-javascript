var docraptor = require("../src");

docraptor.ApiClient.default.authentications.basicAuth.username = "YOUR_API_KEY_HERE"
da = new docraptor.DocApi()

var name = Array(202).join("t") // limit is 200 characters

da.createAsyncDoc({test: true, name: name, document_type: "pdf", document_content: "HEllo"}, function(error, data, response) {
  if (error) {
    console.log(error.message)
    process.exit(1)
  } else {
    var status_id = data.status_id
    checkStatus = function(error, data, response) {
      if (data.status == "failed") {
        process.exit(0)
      } else {
        setTimeout(function() { da.getAsyncDocStatus(status_id, checkStatus) }, 1000)
      }
    }
    da.getAsyncDocStatus(status_id, checkStatus)

  }
})

// abort "Did not receive failed validation within 30 seconds."
