var request = require('request');
var cheerio = require('cheerio');
var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
    input: fs.createReadStream('./SerialNumbers.csv')
  });

  let newURL = [];
let serialNumberArray = [];
myInterface.on('line',  (line) => {
  serialNumberArray.push('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=' + line);
  // console.log(serialNumberArray);
  //console.log('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=' + line);
})
.on('line', () => {
  // console.log('wut?')
  // console.log(serialNumberArray)
  newURL.push(serialNumberArray)
//   console.log(newURL)

})

var URL = '10040016';

const url = 'http://www.utahcounty.gov/LandRecords/Property.asp?av_serial='

request(`${url}${URL}`, function(err, resp, html) {
        if (!err){
        const $ = cheerio.load(html);
        const td = $('table tr td table tr td table tr:nth-child(4) td:nth-child(1)');
        console.log(td.text().slice(0, 49));
        }
      }
);

// export default cheerio;