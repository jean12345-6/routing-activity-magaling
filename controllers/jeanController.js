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
    res.send(`Data submitted successfully: ${JSON.stringify(data)}`);
  },

  about: (req, res) => {
    res.send("This is Jean's about route.");
  },
};