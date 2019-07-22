let fs = require('fs');
exports.kittensPost = (req, res) => {

    if (typeof req.body                       === undefined ||
        typeof req.body.kittensData           === undefined ||
        typeof req.body.playerData            === undefined ||
        typeof req.body.playerData.playerName === undefined) {
      return console.dir('Error', err);
    }
  
    let data = req.body;
    let playerName = data.playerData.playerName;
    let baseURL = "./kittens/stats/" + encodeURIComponent(playerName) + ".txt";
  
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
        // return res.json({success: true, message: 'Wrote to file ' + baseURL});
      }); 
  
    });
  
};
  