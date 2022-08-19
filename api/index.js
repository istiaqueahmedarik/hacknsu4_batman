/* Creating an instance of the express framework. */
const app = require('express')();
var axios = require("axios").default;;


/* This is a route handler. It is a function that is called when a user visits the root route of the
website. */
app.get('/',(req,res)=>{
    console.log('hello');
    res.send(`<h1>Hello</h1>`);

})

app.get('/:device_id/:date',(req,res)=>{
    var device_id = req.params.device_id;
    var date = req.params.date;
    var data;
    axios.get(`https://firestore.googleapis.com/v1/projects/energysaver-6207e/databases/(default)/documents/istiaque/${device_id}/${date}/usage_hour/`)
  .then(function (response) {
    // handle success
    console.log(response.data.fields['11:00'].mapValue.fields['Hour']);
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  res.status(200).send({data:'h'})

    
})

/* This is a function that is used to start the server. The first argument is the port number. The
second argument is a callback function that is called when the server is started. */
app.listen(8000,()=>{
    console.log(`Server is running on port! 8000`);
})