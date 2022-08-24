## Using Axios
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
## Using Python

```python
import json
import requests
from types import SimpleNamespace

x = requests.get('https://thesimpsonsapi.vercel.app')
Simpson = x.text
# Convert json to Python object
theSimpsons = json.loads(Simpson, object_hook=lambda d: SimpleNamespace(**d))


# Access all Homer's data
print(theSimpsons.homer) 
# Get name
print(theSimpsons.homer.name)
# Get age
print(theSimpsons.homer.age)
# Get url image
print(theSimpsons.homer.url)
# Get description
print(theSimpsons.homer.descriptiom)
#You can try with other characters too!
print(theSimpsons.marge) #Access Marge's object 
print(theSimpsons.bart) #Access Bart's object
print(theSimpsons.lisa) #Access Lisa's object
print(theSimpsons.maggie) #Access Maggie's object


```

# Link here
https://thesimpsonsapi.vercel.app/
