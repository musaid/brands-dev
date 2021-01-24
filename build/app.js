import express from 'express';
// Boot express
const app = express();
const port = 5000;
// Application routing
app.use('/', (_req, res, _next) => {
    res.status(200).send({ data: 'Hello World!' });
});
// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
