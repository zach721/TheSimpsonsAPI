## Using Axios
```javascript
onst axios = require('axios')

// Make a request for a user with a given ID
axios.get('https://thesimpsonsapi.vercel.app')
  .then(function (res) {
    let thesimpsons = res.data
    // Access all Homer's data
    console.log(thesimpsons.homer)
    // Get name
    console.log(thesimpsons.homer.name)
    // Get age
    console.log(thesimpsons.homer.age)
    // Get url image
    console.log(thesimpsons.homer.img)
    // Get description
    console.log(thesimpsons.homer.description)
    //You can try with other characters too!
    console.log(thesimpsons.marge) //Access Marge's object
    console.log(thesimpsons.bart) //Access Bart's object
    console.log(thesimpsons.lisa) //Access Lisa's object
    console.log(thesimpsons.maggie) //Access Maggie's object
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
