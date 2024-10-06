import express from "express";
const app = express();

const port: Number = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hi there')
})

app.listen(port, () => {
    console.log(`server listening at port : ${port}`);
  });