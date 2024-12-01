const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Set the view engine to ejs and specify the views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // **Set views folder location**

 // Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public'))); // **Serve static files from 'public' directory**

 // Define Routes
app.get('/', (req, res) => {
    res.render('main'); // This will render main.ejs
});

app.get('/about', (req, res) => {
    res.render('about'); // This will render about.ejs
});

app.get('/car', (req, res) => {
    res.render('car'); // This will render car.ejs
});

app.get('/login', (req, res) => {
    res.render('login'); // This will render login.ejs
});

// Add any other routes you need
app.get('/arp', (req, res) => {
    res.render('arp'); // This will render arp.ejs
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
