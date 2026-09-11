const express = require('express');
const unblocker = require('unblocker');

const app = express();
const port = process.env.PORT || 8080;

// Mount the unblocker middleware
app.use(unblocker({}));

// Simple fallback route
app.get('/', (req, res) => {
  res.send('Node Unblocker is running! Use /proxy/<url>');
});

app.listen(port, () => {
  console.log(`Unblocker running on port ${port}`);
});
