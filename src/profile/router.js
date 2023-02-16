const router = require("express").Router();

const {
    getProfiles,
    createProfile,
    updateProfile,
    deleteProfile,
    getProfileById,
    getProfilePosts,
    getProfileComments,
} = require("./controllers/profile_controller");

// @route   GET /
router.get("/", getProfiles);

// @route   POST /
router.post("/", createProfile);

// @route   PATCH /
router.patch("/:id", updateProfile);

// @route   DELETE /
router.delete("/:id", deleteProfile);

// @route   GET /:id
router.get("/:id", getProfileById);

// @route   GET /:id/posts
router.get("/:id/posts", getProfilePosts);

// @route   GET /:id/comments
router.get("/:id/comments", getProfileComments);

module.exports = router;