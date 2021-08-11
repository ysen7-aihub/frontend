const express = require("express");
const app = express();
const PORT = 3001;
const cors = require('cors');

// cors 적용, credential true => 다른 도메인 간 쿠키 공유 가능
app.use(cors({
  credentials:true,}));

app.use(express.json());
app.post("/image", function (req, res) {
  setTimeout(() => {
    console.log("server: image uploaded");
  }, 10000);
});

app.post("/diary/text/list", function (req, res) {
  setTimeout(() => {
    console.log(req.body);
    console.log("server: text uploaded");
  }, 10000);
});

app.post("/diary/image/list", function (req, res) {
  setTimeout(() => {
    console.log("server: req.body:",req.body);
    console.log("server: image uploaded");
  }, 10000);
});

app.get('/result', function(req,res){
  
})

app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log("app now listening");
});
