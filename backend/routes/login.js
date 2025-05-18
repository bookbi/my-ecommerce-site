const express = require('express');
const router  = express.Router();
const fs      = require('fs');
const path    = require('path');

const filepath = path.join(__dirname, '..', 'data', 'user.json');

router.post('/', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: 'Username / Password required' });

  if (!fs.existsSync(filepath))
    return res.status(400).json({ message: 'Incorrected Username' });

  const users = JSON.parse(fs.readFileSync(filepath, 'utf-8'));
  const user  = users.find(u => u.email === email);

  if (!user)
    return res.status(400).json({ message: 'Incorrected Username' });

  if (user.password !== password)
    return res.status(400).json({ message: 'Incorrected Password.' });

  res.status(200).json({ message: 'Login successfully.' });
});

module.exports = router;
