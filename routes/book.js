const router = require("express").router();
const booksController = require("../../controllers/booksController.js");

// Matches with "/api/books"
router.route("/")
.get(booksController.findAll)
.post(booksController.create);

// Matches with "/api/books/:id"
router
.route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

    module.export = router;