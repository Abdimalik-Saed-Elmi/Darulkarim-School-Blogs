import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        validate: [value => value.length <= 500, 'Content should be up to 500 characters long']
    },
    image: {
        type: String,  // This will store the URL/path to the image.
        default: null
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',  // Referencing the User model.
        required: true
    }
});

const User = mongoose.model('Post', postSchema);

export default User;
