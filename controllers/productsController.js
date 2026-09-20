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
    res.json({ message: `You requested product with ID: ${id}` });
  },
};