const express = require('express')
const app = express();
const port = 3100;

app.get('/', (req, res) => {
  res.send('Hello World! from VSCode test1')
})

app.listen(port, () => {
 console.log(`Example app listening on port ${port}!`)
});

/*setTimeout((function() {
    return process.exit(1);
}), 10000);*/
