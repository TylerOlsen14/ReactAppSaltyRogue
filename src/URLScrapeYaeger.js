// the purpose of this app is to read a file of numbers
// and return a file with the numbers added to the end of a string

// Requiring fs module in which  
// readFile function is defined. 
var readline = require('readline');
var fs = require('fs');
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');


var myInterface = readline.createInterface({
  input: fs.createReadStream('./SerialNumbers.csv')
});


let serialNumberArray = [];
myInterface.
  on('line',  (line) => {
    serialNumberArray.push('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=' + line);


    // console.log(serialNumberArray);
    //console.log('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=' + line);
  })
  // .on('line', () => {
  //   // console.log('wut?')
  //   // console.log(serialNumberArray)
  //   newURL.push(serialNumberArray)
  //   console.log(newURL)
  // })
