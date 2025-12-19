const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/api', async (req, res) => {
  try {
    const response = await fetch('http://backend:4000/data');
    const text = await response.text();
    res.send("Backend says: " + text);
  } catch (err) {
    res.send("Error contacting backend: " + err.message);
  }
});

app.listen(PORT, () => console.log(`Frontend running on port ${PORT}`));


