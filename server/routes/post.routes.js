const { Router } = require("express");
const controller = require("../controllers/post.controller");
const router = new Router();

router.get("/all", controller.allPosts);
router.post("/create-posts", controller.createPosts);
router.get('/:id', controller.getPostsById)
module.exports = router;