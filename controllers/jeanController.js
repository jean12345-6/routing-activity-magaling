export const jeanController = {
  intro: (req, res) => {
    res.send("Welcome to Jean's routes!");
  },

  getById: (req, res) => {
    const id = req.params.id;
    res.send(`You requested item with ID: ${id}`);
  },

  search: (req, res) => {
    const q = req.query.q || "none";
    res.send(`Search query received: ${q}`);
  },

  submit: (req, res) => {
    const data = req.body;
    const text = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join(", ");
    res.send(`Data submitted successfully: ${text || "no data"}`);
  },

  about: (req, res) => {
    res.send("This is Jean's about route.");
  },
};