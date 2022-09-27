const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  name: { type: Schema.Types.String, required: true },
  description: { type: Schema.Types.String, required: false },
  category: { type: Schema.Types.ObjectID, required: false },
  cost: { type: Schema.Types.Number, required: true },
  mrp: { type: Schema.Types.Number, required: true },
  stock: { type: Schema.Types.Number, required: true },
  createdAt: { type: Schema.Types.Date, required: false },
  updatedAt: { type: Schema.Types.Date, required: false },
  deletedAt: { type: Schema.Types.Date, required: false },
});

Product.index({ name: 1 }, { unique: true, background: true, w: 1 });

export default mongoose.model('Product', Product);