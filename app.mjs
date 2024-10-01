import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

const app = express();
// logs info about requests
app.use(morgan('tiny'));
// converts JSON to to JS Object in POST, PUT, PATCH request
app.use(express.json());
// converts form data to JS Object in POST, PUT, PATCH request
app.use(express.urlencoded({ extended: true }));
// enable all CORS requests
app.use(cors());

app.use((req, res) => {
	console.log(req.body);
	return res.send('this is express server');
});

app.listen(4000, () => console.log('listening on port 4000'));
