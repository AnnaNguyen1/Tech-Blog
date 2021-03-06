const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");

// Post new User
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: "Invalid data sent" });
      return;
    }

    const userData = await User.create({ ...req.body });

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, try again." });
      return;
    }

    const userPassword = await userData.checkPassword(req.body.password);

    if (!userPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, try again" });
      return;
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.email = userData.email;
      req.session.logged_in = true;

      res.status(200).json({ message: "Successfully logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// logout
router.post("/logout", async (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
