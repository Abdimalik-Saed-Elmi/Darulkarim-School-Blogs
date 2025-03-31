

import Post from '../models/Post.js';

import cloudinary from '../config/clodinary.js';

export const createPost = async (req, res) => {

    try {

        const currentUser = req.user._id;

        const { title, content } = req.body;

        let result;

        if (req.file) {
            let encodedImage = `data:image/jpeg;base64,${req.file.buffer.toString('base64')}`;

            result = await cloudinary.uploader.upload(encodedImage, {
                resource_type: 'image',
                transformation: [{ width: 500, height: 500, crop: 'limit' }],
                encoding: 'base64'
            });
        }

        const post = new Post({
            title: title,
            content: content,
            image: result?.url || null,
            author: currentUser
        });

        await post.save();

        res.status(201).send(post);

    } catch (error) {
        console.log("error creating post", error);
        res.status(400).send(error.message);
    }
};

export const getUserPosts = async (req, res) => {
    try {

        const posts = await Post.find({ author: req.user._id })
            .populate({
                path: 'author',
                model: 'User',
                select: 'username email' // Only retrieve the username for brevity; you can add other fields if needed
            }).sort({ createdAt: -1 }); // Sort by latest posts first

        res.status(200).json(posts);

    } catch (error) {
        res.status(400).json(error.message);
    }
};



export const updatePost = async (req, res, next) => {
    try {


        let updatedFields = {
            title: req.body.title,
            content: req.body.content
        };

        if (req.file) {
            let encodedImage = `data:image/jpeg;base64,${req.file.buffer.toString('base64')}`;
            const result = await cloudinary.uploader.upload(encodedImage, {
                resource_type: 'image',
                transformation: [
                    { width: 500, height: 500, crop: 'limit' }
                ],
                encoding: 'base64'
            });
            updatedFields.image = result.url;
        }

        const post = await Post.findByIdAndUpdate(req.params.id, updatedFields, { new: true });
        if (!post) return res.status(404).send('Post not found');

        res.status(200).json(post);
    } catch (error) {
        next(error);
    }
};

export const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(400).send("Not Found");

        res.status(200).json({
            message: 'Post deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};