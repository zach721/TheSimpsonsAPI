## Using Axios
```javascript
const axios = require('axios')

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
## Using V
```v
import net.http
import json

//We're creating a struct to parse our json
//into an object
struct User {
	 homer struct{
		name string
		age string
		img string
		description string
	}
	marge struct{
		name string
		age string
		img string
		description string
	}
	bart struct{
		name string
		age string
		img string
		description string
	}
	lisa struct{
		name string
		age string
		img string
		description string
	}
	maggie struct{
		name string
		age string
		img string
		description string
	}
}

fn main() {


    //Making a get call and storing the value
	//into a variabe
	response := http.get('https://thesimpsonsapi.vercel.app') or {
		println('failed to fetch data from the server')
		return
	}
	//Decoding our response from json to an object
	mut thesimpsons := json.decode(User,response.body) or {
		eprintln('Failed to parse json')
		return
	}
	
    //Access all Homer's data
    println(thesimpsons.homer)
    // Get name
    println(thesimpsons.homer.name)
    // Get age
    println(thesimpsons.homer.age)
    // Get url image
    println(thesimpsons.homer.img)
    // Get description
    println(thesimpsons.homer.description)
    //You can try with other characters too!
    println(thesimpsons.marge) //Access Marge's object
    println(thesimpsons.bart) //Access Bart's object
    println(thesimpsons.lisa) //Access Lisa's object
    println(thesimpsons.maggie) //Access Maggie's object
}

```
# 👇API link here 👇
https://thesimpsonsapi.vercel.app/
