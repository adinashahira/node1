const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World! from Putty')
})

app.listen(port, () => {
 console.log(`Example app listening on port ${port}!`)
 // console.log('Hello World from PuTTY master branch')
});

/*setTimeout((function() {
    return process.exit(1);
}), 10000);*/
