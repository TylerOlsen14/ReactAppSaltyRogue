var request = require('request');
var cheerio = require('cheerio');

request('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=10040014003', function(err, resp, html) {
        if (!err){
        const $ = cheerio.load(html);
        const td = $('table tr td table tr td table tr:nth-child(4)');
        console.log(td.text());
        }
      }
);