import express from 'express';
import cors from 'cors';
import usersRouter from './routes/users.js';
import productsRouter from './routes/products.js';
import ordersRouter from './routes/order.js';
import deliveriesRouter from './routes/deliveries.js';
import storesRouter from './routes/store.routes.js';
import mocksRouter from './routes/mocks.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/health", (req, res) => {
  res.json({
    status: "success",
    message: "API funcionando"
  });
})
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/deliveries', deliveriesRouter);
app.use('/api/stores', storesRouter);
app.use("/api/mocks", mocksRouter);

app.use(notFoundHandler);

//middleware global de errores
app.use(errorHandler);


export default app

