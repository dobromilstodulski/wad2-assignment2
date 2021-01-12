import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String }
});

GenreSchema.statics.findByGenreDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('Genres', GenreSchema);