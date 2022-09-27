const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
  name: { type: Schema.Types.String, required: true },
  parent: { type: Schema.Types.ObjectID, required: false },
  createdAt: { type: Schema.Types.Date, required: false },
  updatedAt: { type: Schema.Types.Date, required: false },
  deletedAt: { type: Schema.Types.Date, required: false },
});

Category.index({ name: 1 }, { unique: true, background: true, w: 1 });

export default mongoose.model('Category', Category);