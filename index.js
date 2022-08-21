const express = require('express')
const app = express()
const api = require("./public/api")

app.use(express.json({extended:false}))
app.use(express.static('public'))



let api = {

    homer:{
        name:"Homer Simpson",
        age:"39",
        img:"https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png/revision/latest?cb=20201222215437",
        description:""
    },
    bart:{
        name:"Bart Simpson",
        age:"10",
        img:"https://assets.stickpng.com/images/5eb95d0e17f3c600044a2916.png",
        description:""
    },
    lisa:{
        name:"Lisa Simpson",
        age:"8",
        img:"https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png/revision/latest?cb=20190409004811",
        description:""
    },
    marge:{
        name:"Marge Simpson",
        age:"34",
        img:"http://vignette4.wikia.nocookie.net/simpsons/images/8/87/Marge_Simpson_2.png/revision/latest?cb=20150131104556",
        description:""
    },
    maggie:{
        name:"Maggie Simpson",
        age:"1",
        img:"https://static.wikia.nocookie.net/lossimpson/images/9/9d/Maggie_Simpson.png/revision/latest?cb=20100529224628&path-prefix=es",
        description:""
    }
    
    }
    

  app.get('/', function (req, res) {
  res.send(api)
})

app.listen(3000)

module.exports = app