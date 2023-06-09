const http = require('http');
const fs = require('fs');
var requests = require("requests");
const homeFile = fs.readFileSync("home.html", "utf-8");
const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", (orgVal.main.temp - 273.15).toPrecision(4));
    // temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    // temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);

    return temperature

}

const server = http.createServer((req, res) => {
    if (req.url = "/") {
        requests
            ('https://api.openweathermap.org/data/2.5/weather?q=Nadiad&appid=34b973091b04e585a14a519aa2877081')
            .on('data', (chunk) => {
                const objdata = JSON.parse(chunk);
                const arrData = [objdata];
                console.log(arrData)
                // console.log(arrData[0].main.temp);
                const realTimeDate = arrData.map((val) => replaceVal(homeFile, val)).join("");
                res.write(realTimeDate);
                // console.log(realTimeDate);
            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);
                res.end();
                console.log('end');
            });
    }
});
server.listen(8000, "127.0.0.1");