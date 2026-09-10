export const jeanController = {
  intro: (req, res) => {
    res.json({ message: "Welcome to Jean's routes!" });
  },

  getById: (req, res) => {
    const id = req.params.id;
    res.json({ message: `You requested item with ID: ${id}` });
  },

  search: (req, res) => {
    const q = req.query.q || "none";
    res.json({ message: `Search query received: ${q}` });
  },

  submit: (req, res) => {
    const data = req.body;
    res.json({ message: "Data submitted successfully", data });
  },

  about: (req, res) => {
    res.json({ message: "This is Jean's about route." });
  },
};