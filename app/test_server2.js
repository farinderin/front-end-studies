const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 8081;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  try {
    let reqPath = req.path;
    if (reqPath.endsWith('/')) {
      reqPath = reqPath.slice(0, -1);
    }
    
    // Check if it's a file
    const exactFilePath = path.join(__dirname, 'dist', req.path);
    if (fs.existsSync(exactFilePath) && fs.statSync(exactFilePath).isFile()) {
      return res.sendFile(exactFilePath);
    }
    
    // Check if it's a directory that has an index.html
    const dirIndexPath = path.join(__dirname, 'dist', reqPath, 'index.html');
    if (fs.existsSync(dirIndexPath) && fs.statSync(dirIndexPath).isFile()) {
      return res.sendFile(dirIndexPath);
    }
    
    // Fallback to exactly index.html for SPA routing (though Astro is SSG)
    // Actually, Astro 404 is usually 404.html, but let's just send root index.html
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  } catch (err) {
    console.error(err);
    res.status(500).send('Error: ' + err.code);
  }
});

app.listen(port, () => console.log('Server listening on port ' + port));
