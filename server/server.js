const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    try{
        res
            .header('Access-Control-Allow-Origin', 'http://localhost:3000')
            .json({msg:"json text response"})
    } catch (error) {
        console.log(error)
    }

})

app.listen(5000, () => {
    console.log(`Server listens on port 5000..`)
})