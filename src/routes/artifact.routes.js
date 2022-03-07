const artifact = require("../controller/AuthorsController.js");

module.exports = (app, router) => {
    // Create a new author
    router.post("/", author.create);

    // Retrieve all authors
    router.get("/", author.browse);

    // Retrieve a single author with id
    router.get("/:id", author.view);

    // Delete an author with id
    router.delete("/:id", author.delete);

    // Update an author with id
    router.put("/:id", author.update);

    app.use('/api/json/authors', router);
};