const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, 'whitelist.txt'), 'utf8');
  res.status(200).send(data);
};
