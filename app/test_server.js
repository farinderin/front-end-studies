const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  const possibleIndexPath = path.join(__dirname, 'dist', req.path, 'index.html');
  if (fs.existsSync(possibleIndexPath)) {
    res.sendFile(possibleIndexPath);
  } else {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  }
});

app.listen(port, () => console.log('Server listening on port ' + port));
