const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
});

module.exports = mongoose.model('Project', projectSchema);
