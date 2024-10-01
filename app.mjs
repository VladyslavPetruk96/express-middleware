import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res) => {
	console.log(req.body);
	return res.send('this is express server');
});

app.listen(4000, () => console.log('listening on port 4000'));
