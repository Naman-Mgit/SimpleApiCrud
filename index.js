import { dbConnect } from './db.js';
import express, { urlencoded } from "express"
import ProdutRouter from './routes/product.route.js'
const app = express();
//middleware
app.use(express.json())
app.use(urlencoded({ extended: false }))

//routes
app.use('/api/products', ProdutRouter);

app.get('/', (req, res) => {
    res.send("Node js crud")
})

dbConnect().then(() => {

    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
    })
    .catch(() => {
        console.log("Connection failed!");
    });
