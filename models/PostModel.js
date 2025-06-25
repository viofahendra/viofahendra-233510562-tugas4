import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Post = db.define("post", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    judul: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.STRING,
    }
})

export default Post;

// (async() => {
//     await db.sync()
// })()