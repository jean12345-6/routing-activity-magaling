export const activity4Controller = {
  intro: (req, res) => {
    res.render("activity4", {
      title: "Hello World",
      content: "Dito lang change mo ang laman"
    });
  },
  getOne: (req, res) => {
    const { id } = req.params;
    res.render("activity4", { title: "Product", content: id });
  },
};