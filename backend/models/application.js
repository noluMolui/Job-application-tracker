import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Applied', 'Interview', 'Offer', 'Rejected'], 
    default: 'Applied' 
  },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

// Create the model and export it as the DEFAULT export
const ApplicationModel = mongoose.model('Application', applicationSchema);
export default ApplicationModel;