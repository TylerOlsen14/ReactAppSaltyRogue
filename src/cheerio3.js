var request = require('request');
var cheerio = require('cheerio');

request('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=10040014003', function(err, resp, html) {
        if (!err){
        const $ = cheerio.load(html);
        const td = $('table tr td table tr td table tr:nth-child(4) td:nth-child(1)');
        console.log(td.text().slice(0, 49));
        }
      }
);

// export default cheerio;