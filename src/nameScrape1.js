var cheerio = require('cheerio');
var request = require('request');
const url = 'http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=10170004'

request(url, function(err, resp, html) {
    if (!err){
    const $ = cheerio.load(html);
    const name = $('div[class=TabbedPanelsContentGroup] div[class=TabbedPanelsContentGroup] table:nth-child(1) tbody tr td:nth-child(2)').text()
    const td = $('table tr td table tr td table tr:nth-child(4) td:nth-child(1)');
    console.log(name, '\n', td.text().slice(0, 49), '\n', url);
    }
  }
);
