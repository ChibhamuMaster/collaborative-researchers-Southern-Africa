const bcrypt = require('bcrypt');

const saltRounds = 10;
const plainPassword = 'password123';

bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
  // Store the hash in your database
  console.log('Hashed Password:', hash);
});
