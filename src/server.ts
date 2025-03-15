import express from 'express';
const app = express();
const port = 3000;


app.get('/104', (req, res) => {
    res.status(104).send('Custom Informational Response');
});

app.get('/105', (req, res) => {
    res.status(105).send('Custom Informational Response');
});

app.get('/106', (req, res) => {
    res.status(106).send('Custom Informational Response');
});

app.get('/107', (req, res) => {
    res.status(107).send('Custom Informational Response');
});

app.get('/108', (req, res) => {
    res.status(108).send('Custom Informational Response');
});

app.get('/202', (req, res) => {
    res.status(202).send('Accepted');
});

app.get('/203', (req, res) => {
    res.status(203).send('Non-Authoritative Information');
});

app.get('/205', (req, res) => {
    res.status(205).send('Reset Content');
});

app.get('/207', (req, res) => {
    res.status(207).send('Multi-Status');
});

app.get('/208', (req, res) => {
    res.status(208).send('Already Reported');
});

app.get('/300', (req, res) => {
    res.status(300).send('Multiple Choices');
});

app.get('/305', (req, res) => {
    res.status(305).send('Use Proxy');
});

app.get('/306', (req, res) => {
    res.status(306).send('Switch Proxy');
});

app.get('/308', (req, res) => {
    res.status(308).send('Permanent Redirect');
});

app.get('/309', (req, res) => {
    res.status(309).send('Custom Redirect Response');
});

app.get('/402', (req, res) => {
    res.status(402).send('Payment Required');
});

app.get('/404', (req, res) => {
    res.status(404).send('Hello World');
});

app.get('/406', (req, res) => {
    res.status(406).send('Not Acceptable');
});

app.get('/407', (req, res) => {
    res.status(407).send('Proxy Authentication Required');
});

app.get('/408', (req, res) => {
    res.status(408).send('Request Timeout');
});

app.get('/505', (req, res) => {
    res.status(505).send('HTTP Version Not Supported');
});

app.get('/506', (req, res) => {
    res.status(506).send('Variant Also Negotiates');
});

app.get('/507', (req, res) => {
    res.status(507).send('Insufficient Storage');
});

app.get('/508', (req, res) => {
    res.status(508).send('Loop Detected');
});

app.get('/510', (req, res) => {
    res.status(510).send('Not Extended');
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});