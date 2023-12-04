const express = require('express'); 
const app = express();              
const port = 5000;  
const fs = require('fs');

const filePath = './restaurantData.json'; 
const cors = require('cors');
app.use(cors());               

app.get('/restaurantData', (req, res) => {  
    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(fileData);
        res.send(jsonData); 
      } catch (err) {
        console.error(err);
      }  
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});