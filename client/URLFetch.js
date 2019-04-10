var fs = require('fs');
var csv = require('fast-csv');

const url = 'http://www.utahcounty.gov/LandRecords/Property.asp?av_serial='


var stream = fs.createReadStream("./SerialNumbers.csv");

var csvStream = csv()
    .on("data", function(data){
         console.log(data);
    })
    .on("end", function(){
         console.log("done");
    });
 
// export default URLFetch