export const productsController = {
  intro: (req, res) => {
    res.render("products", {
      title: "Products",
      username: "Jean",
      page: "Products"
    });
  },
  getOne: (req, res) => {
    const { id } = req.params;
    res.render("index", { title: "Product", content: id });
  },
};