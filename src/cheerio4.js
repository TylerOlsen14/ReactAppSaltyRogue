// ohhhh snap! this guy works!!!
const fs = require('fs');
var lineReader = require('line-reader');
var csv = require('fast-csv');
var cheerio = require('cheerio');
var request = require('request');


lineReader.eachLine('./URL.csv', function(line, last) {

    request(line, function(err, resp, html) {
        if (!err){
        const $ = cheerio.load(html);
        const td = $('table tr td table tr td table tr:nth-child(4) td:nth-child(1)');
        const address = (td.text().slice(0, 49))
        const pair = (address + '\n' + line + '\n')
        console.log(pair);
    fs.appendFile('addressURL.csv', pair, (err) => {
        if (err) throw err;
        console.log('saved');
    })
        }
      },

    );

    if (last){
        return false
    }
});
