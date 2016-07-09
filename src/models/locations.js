import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default mongoose.model('Locations', new Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  theaters: {
    type: Schema.Types.ObjectId,
    ref: 'Theaters',
    required: true,
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
  },
}));