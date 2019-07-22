'use strict';
let fs = require('fs');

exports.kittensIndex = (req, res) => {
  // Return page
  res.render('index', {
      title: 'Kittens',
      layout: "kittensLayout.hbs"
  })
};

exports.kittensGet = (req, res) => {
  let data = req.body;
  let playerName = 'jeff';
  let baseURL = "./kittens/stats/";
  
  // Get files in directory
  fs.readdir(baseURL, (err, files) =>{
    // Error handling
    if (err){
      return console.dir('Error', err);
    }

    // Store file names
    let asyncFileNames = files;
    
    // Store file content
    var asyncFileContent = [];

    // Go through list of file names to get content
    asyncFileNames.forEach( (file) => {

      // Read files individually, syncrynosly, avoid in a production environment
      var rawData = fs.readFileSync(baseURL + file, 'utf8' );
      var parsedData = JSON.parse(rawData)
      asyncFileContent.push(parsedData);
    });
    console.dir(asyncFileContent);
    res.json(asyncFileContent);
  });
};

exports.kittensPost = (req, res) => {

  if (typeof req.body                       === undefined ||
      typeof req.body.kittensData           === undefined ||
      typeof req.body.playerData            === undefined ||
      typeof req.body.playerData.playerName === undefined) {
    return console.dir('Error', err);
  } else {
    console.log('Posting data to kittens')
  }

  let data = req.body;
  let playerName = data.playerData.playerName;
  let baseURL = "./kittens/stats/" + encodeURIComponent(playerName) + ".json";

  // Clear contents of file then write data to file
  fs.writeFile(baseURL, '', (err) => {
    if (err){
      return console.dir('Error', err);
    }

    // Write data to file
    fs.writeFile(baseURL, JSON.stringify(data), (err) => {
      if(err) {
        return console.dir('Error', err);
      }

      console.log('Success', 'Wrote to file ' + baseURL);
    }); 

  });

};
