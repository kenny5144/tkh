const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");

const taskRoutes = require("./routes/taskRoute");
const morgan = require('morgan')
const app = express();
const PORT = 8080;


app.use(cors({
  origin: ['https://tkh-forntend.onrender.com', "http://localhost:5173"], 
  methods: 'GET,POST,PUT,DELETE',
})); 

app.use(morgan('tiny'))
app.use(cookieParser()); 
app.use(express.json()); 
    

app.get('/getuser', (req, res) => {
  const userId = uuidv4();
  res.json({ userId });
});
app.get('/', (req, res) => {
  res.send("all is well");
});
app.use("/tasks", taskRoutes); 

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});