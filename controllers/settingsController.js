export const settingsPage = (req, res) => {
  res.render("settings", {
    title: "Settings",
    username: "Jean",
    page: "Settings"
  });
};