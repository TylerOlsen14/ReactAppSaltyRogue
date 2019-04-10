// ohhhh snap! this guy works!!!


const fs = require('fs');
var lineReader = require('line-reader');
var csv = require('fast-csv');
var cheerio = require('cheerio');
var request = require('request');

// This guy works, but kinda does the same thing as down there...
// fs.createReadStream('./URL.csv')
//     .pipe(csv())
//     .on('data', function(data){
//         console.log(data)
//     })
//     .on('end', function(data){
//         console.log('Read finished')
//     })

lineReader.eachLine('./URL.csv', function(line, last) {
    console.log(line);

    request(line, function(err, resp, html) {
        if (!err){
        const $ = cheerio.load(html);
        const td = $('table tr td table tr td table tr:nth-child(4) td:nth-child(1)');
        console.log(td.text().slice(0, 49));
        }
      }
    );
   
    

    if (last){
        return false
    }
});
