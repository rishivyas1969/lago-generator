const express = require('express') ;

const app = express() ;
const port = process.env.PORT || '8000' ;

//route
app.get('/', (req, res) => {
    res.status(200).send("Hey..How you doing.!?") ;
})


// Everything is good!

// listening port
app.listen(port, () => {
    console.log("Yeah..i am listening.") ;
} )