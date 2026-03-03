import express from 'express';
const router = express.Router();
import Application from '../models/application.js'; 
import auth from '../middleware/authMiddleware.js';

// 1. GET: Fetch user's jobs
router.get('/', auth, async (req, res) => {
  try {
    const apps = await Application.find({ user: req.user.id }).sort({ date: -1 });
    res.json(apps);
  } catch (err) {
    console.error("Fetch Error:", err.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

// 2. POST: Save a new job
router.post('/', auth, async (req, res) => {
  try {
    const { company, position, status, date } = req.body;
    
    const newApp = new Application({
      company,
      position,
      status: status || 'Applied',
      date: date || Date.now(),
      user: req.user.id 
    });

    const savedApp = await newApp.save();
    res.json(savedApp);
  } catch (err) {
    console.error("Save Error:", err.message);
    res.status(500).json({ error: 'Could not save job' });
  }
});

// 3. PUT: Update job status 
router.put('/:id', auth, async (req, res) => {
  try {
    
    const updatedApp = await Application.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { status: req.body.status },
      { new: true } 
    );

    if (!updatedApp) {
      return res.status(404).json({ msg: "Application not found" });
    }

    res.json(updatedApp);
  } catch (err) {
    console.error("Update Error:", err.message);
    res.status(500).json({ error: 'Update failed' });
  }
});

// 4. DELETE: Remove a job
router.delete('/:id', auth, async (req, res) => {
  try {
    const deletedApp = await Application.findOneAndDelete({ 
      _id: req.params.id, 
      user: req.user.id 
    });
    
    if (!deletedApp) return res.status(404).json({ msg: "Not found" });
    res.json({ msg: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

export default router;