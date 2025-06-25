import e from 'express'
import {
    getAllPost,
    createPost,
    deletePost
} from '../controllers/PostController.js'

const router = e.Router();

router.get("/", getAllPost)
router.post("/create", createPost)
router.delete("/delete/:id", deletePost)

export default router;