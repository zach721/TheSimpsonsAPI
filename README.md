##Using Axios
```javascript

const axios = require('axios')

let url = 'https://thesimpsonsapi.vercel.app'

axios.get(url)
  .then(function (res) {
    // Access all Homer's data
    console.log(res.data.homer)
    // Get name
    console.log(res.data.homer.name)
    // Get age
    console.log(res.data.homer.age)
    // Get url image
    console.log(res.data.homer.img)
    // Get description
    console.log(res.data.homer.description)
    //You can try with other characters too!
    console.log(res.data.marge) //Access Marge's object
    console.log(res.data.bart) //Access Bart's object
    console.log(res.data.lisa) //Access Lisa's object
    console.log(res.data.maggie) //Access Maggie's object
  })

```

# Link here
https://thesimpsonsapi.vercel.app/
