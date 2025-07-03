import express from 'express';
import 'dotenv/config';
import { MONGODB_URI_LOCAL, MONGODB_URI_ONLINE } from '../constants.js';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes.js';

const app = express();

const onlineUri = process.env.MONGODB_URI_ONLINE;
const localUri  = process.env.MONGODB_URI_LOCAL;

try{
    await mongoose.connect(onlineUri);
    console.log("Connected to MongoDB Atlas (Online)");
}catch(error) {
    try{
        await mongoose.connect(localUri);
        console.log("Connected to Local MongoDB");
    }catch(localError){
        console.error("Cannot to connect to any DB!");
        console.error();
        process.exit(1); // stop the app
    }
}

// Express Setup
app.use(express.json());
app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(express.urlencoded( { extended: false } ));
//route
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is lestening on port ${port} ...`));