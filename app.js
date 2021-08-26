const express = require('express')
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('ejs', ejs.renderFile);


function test(req, res) {
  res.send('Hello World!')
}


app.get('/', test)

app.get('/form.html',(req,res)=> {
	res.sendFile(__dirname + '/form.html')
})

app.get('/test.html',(req,res)=> {
	res.sendFile(__dirname + '/test.html')
})

app.get('/target1', (req, res) => {
  res.send('Hello' + req.query.namehoge);
});

app.post('/target1', (req, res) => {
  res.send('Hello' + req.body.namefuga);
});

app.post('/target2', (req, res) => {
  res.render(__dirname + '/target2.ejs', { gggg: req.body.gggg});
});

app.listen(port, () => {
          console.log(`Example app listening at http://localhost:${port}`)
})

