import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        //console.log(postMessages)
        res.status(200).json(postMessages)
        console.log("get methsod")
    } catch (error) {
        res.status(404).json({ message : error.message })
    }
}

export const createPost = async (req, res) => {
    const postbody = req.body;
    console.log("postBody > ", postbody)
    const newPost = new PostMessage(postbody)

    try {
        await newPost.save();

        res.status(200).json(newPost);

    } catch (error) {
        console.log("createPost > ", error)
        res.status(409).json({ message: error.message })
    }
}


export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No Post with that id")
    } else {

        const finalPost = { ...post, _id }; // Adding Object id in post data coming from frontend

       const updatedPost = await PostMessage.findByIdAndUpdate(_id, finalPost, { new: true })

       res.json(updatedPost)
    }
}


export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No Post with that id")
    } else {
        const deletePost = await PostMessage.findOneAndDelete(id);

        console.log("delete")
        res.json({message: "Post deleted successfully!"})
    }
   
}


export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No Post with that id");
        
    } else {
        const post = await PostMessage.findById(id);
        console.log(id)
        const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new : true })

        res.json(updatedPost)
    }
}