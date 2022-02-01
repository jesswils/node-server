const http = require('http')
const server = http.createServer(function(request, response){
    response.setHeader('Content-Type', 'application/json') // Response headers hold additional information about the response, like its location or about the server providing it. 
    response.setHeader('Access-Control-Allow-Origin', '*') // The * means requests are allowed to come to us from any browser/domain and go to it // This header prevents any CORS* issues 
    response.writeHead(200) // This is always the last header

    let dataOBj = {id: "5889", "name": "Jess", "email": "jess@work.com"}
    // We can only send strings back to the client 
    let data = JSON.stringify(dataOBj)
    response.end(data) // This is the last command - think of it as everything is done and everything is being sent to the browser
})

server.listen(1234, () => {
    console.log("Listening on port 1234!")
})

// Checking my client side API is working 

// * CORS issues occur when the API does not reply to a request with "Yes, dear browser, you are allowed to do that call"

 // Request headers contain more information about the resource to be fetched, or about the client requesting the resource.