export const dashboardPage = (req, res) => {
  res.render("dashboard", {
    title: "Dashboard",
    username: "Jean",
    page: "Overview"
  });
};