const tf = require('@tensorflow/tfjs-node')
/* Creating an instance of the express framework. */
const app = require('express')();
var axios = require("axios").default;;



/* This is a route handler. It is a function that is called when a user visits the root route of the
website. */
app.get('/', (req, res) => {
  console.log('hello');
  res.send(`<h1>Hello</h1>`);

})
function createModel() {
  // Create a sequential model
  const model = tf.sequential();

  // Add a single input layer
  model.add(tf.layers.dense({ inputShape: [1], units: 1, useBias: true }));

  // Add an output layer
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid', useBias: true }));
  return model;
}


function convertToTensor(data) {
  // Wrapping these calculations in a tidy will dispose any
  // intermediate tensors.
  /* `tidy` is a function that is used to clean up the memory. */
  return tf.tidy(() => {
    // Step 1. Shuffle the data
    tf.util.shuffle(data);

    // Step 2. Convert data to Tensor
    const inputs = data.map(d => d.Chirps_15s)
    const labels = data.map(d => d.Temp_C);

    /* Creating a 2D tensor. */
    const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
    const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

    //Step 3. Normalize the data to the range 0 - 1 using min-max scaling
    const inputMax = inputTensor.max();
    const inputMin = inputTensor.min();
    const labelMax = labelTensor.max();
    const labelMin = labelTensor.min();
    /* `sub` is a function that is used to subtract the
      values. */
    const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
    const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

    return {
      inputs: normalizedInputs,
      labels: normalizedLabels,
      // Return the min/max bounds so we can use them later.
      inputMax,
      inputMin,
      labelMax,
      labelMin,
    }
  });
}


app.get('/:device_id', (req, res) => {
  var device_id = req.params.device_id;


  axios.get(`https://firestore.googleapis.com/v1/projects/energysaver-6207e/databases/(default)/documents/istiaque/${device_id}/daily_usage`)
    .then(function(response) {
      // handle success
      const model = createModel();

      console.log(response.data.documents[0].fields);


    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })





  res.status(200).send({ data: 'h' })


})

/* This is a function that is used to start the server. The first argument is the port number. The
second argument is a callback function that is called when the server is started. */
app.listen(8000, () => {
  console.log(`Server is running on port! 8000`);
})