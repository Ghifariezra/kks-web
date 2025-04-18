import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const PORT = 4000;
const corsOptions = {
    origin: 'http://localhost:3000',
}

app.use(cors(corsOptions));
app.use(morgan(
    ':method :url :status :res[content-length] - :response-time ms'
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/users', (req, res) => {
    res.json({
        message: 'Hello from the server!',
        users: [
            { 
                id: 1,
                name: 'John Doe', 
                email: '9m4yH@example.com', 
                WhatsApp: '08123456789' 
            },
        ]
    })
});

app.post('/api/schedule', (req, res) => {
    console.log(req.body);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
