import express from 'express';
const router = express.Router();
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    res.status(201).json({ msg: 'User created' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});


router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

    
    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

export default router;