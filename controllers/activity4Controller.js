// ACTIVITY 4 — restored from VS Code Local History, 2026-09-15
// (original: controllers/productsController.js saved 2026-09-15 09:54:22)
// getOne changed to render a view (originally returned JSON)
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