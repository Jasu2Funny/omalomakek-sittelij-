import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// Luodaan express-palvelin instanssi
const app = express();

// Otetaan käyttöön EJS-moottori
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'index.html'));

app.use(express.static(__dirname));
app.use('/tyylit', express.static('includes/styles'));
app.use('/images', express.static('includes/images'));

// Määritellään vakiot
const port = 3000;
const host = 'localhost';



// Määritellään reitti pääsivulle
app.get('/palaute', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});




// Määritellään virhesivu
app.use((req, res) => {
    res.status(404).send("Sivua ei löytynyt.")
});

// Käynnistetään palvelin kuuntelemaan vakioiden mukaista osoitetta
app.listen(port, host, () => console.log(`Server running at http://${host}:${port} kuuntelee...`));
