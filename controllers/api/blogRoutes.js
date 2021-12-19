const router = require("express").Router();
const { Blog, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");
const { Op } = require("sequelize");

// Post
router.post("/", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get

router.get("/:id", withAuth, async (req, res) => {
  try {
    const blogId = await Blog.findOne({
      user_id: req.session.user_id,
      where: {
        id: req.params.id,
      },
      attributes: ["id", "title", "dateCreated", "description"],
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: ["id", "blogId", "userId", "dateCreated", "comments"],
        },
      ],
    });
    if (!blogId) {
      res.status(404).json({ message: "No blog found!" });
      return;
    }
    res.status(200).json(blogId);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });
    if (!blogData) {
      res.status(404).json({ message: "No blog post found!" });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
