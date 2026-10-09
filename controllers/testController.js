export const testPage = (req, res) => {
  const data = [
    { name: "Jose",   age: 22, address: "Calapan" },
    { name: "Marie",  age: 15, address: "Naujan" },
    { name: "Andre",  age: 12, address: "Socorro" },
    { name: "Manuel", age: 23, address: "Pinamalayan" },
    { name: "Josie",  age: 22, address: "Mansalay" }
  ];

  res.render("test", {
    title: "Test Page",
    content: "Hello world",
    data
  });
};  