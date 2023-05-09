let file = "Fetch.json"
fetch (file)
.then(x => x.json())
.then(y => document.getElementById("demo").innerHTML = y.name);