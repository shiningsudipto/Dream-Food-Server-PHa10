const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;




app.listen(port, () => {
    console.log(`Chef API is running on port: ${port}`)
})