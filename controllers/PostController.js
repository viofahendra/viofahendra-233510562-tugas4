import Post from "../models/PostModel.js";

export const getAllPost = async (req, res) => {
    try {
        const response = await Post.findAll()
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.message })
    }
}

export const createPost = async (req, res) => {
    try {
        await Post.create(req.body)
        res.status(201).json({ msg: "Customer Created" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.message })
    }
}

export const deletePost = async(req, res) => {
    try {
        await Post.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Post Deleted" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.message })
    }
}