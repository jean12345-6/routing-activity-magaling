export const dashboardPage = (req, res) => {
  const orders = [
    { product: "Wireless Mouse", status: "Shipped",   amount: "₱450" },
    { product: "Keyboard",       status: "Pending",   amount: "₱890" },
    { product: "Monitor Stand",  status: "Delivered", amount: "₱1,200" },
    { product: "USB Hub",        status: "Shipped",   amount: "₱650" },
    { product: "Webcam",         status: "Pending",   amount: "₱1,500" }
  ];

  res.render("dashboard", {
    title: "Dashboard",
    username: "Jean",
    page: "Overview",
    orders
  });
};