var docraptor = require("../src");

docraptor.ApiClient.default.authentications.basicAuth.username = "YOUR_API_KEY_HERE"
da = new docraptor.DocApi()

da.createAsyncDoc({test: true, name: "name", document_type: "pdf", document_content: "HEllo"}, function(error, data, response) {
  if (error) {
    console.log(error.message)
    process.exit(1)
  } else {
    var status_id = data.status_id
    checkStatus = function(error, data, response) {
      if (data.status == "completed") {
        da.getAsyncDoc(data.download_id, function(error, data, response) {
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
      } else {
        setTimeout(function() { da.getAsyncDocStatus(status_id, checkStatus) }, 1000)
      }
    }
    da.getAsyncDocStatus(status_id, checkStatus)

  }
})

// 30.times do
