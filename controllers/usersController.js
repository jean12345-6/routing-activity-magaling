export const usersPage = (req, res) => {
  res.render("users", {
    title: "Users",
    username: "Jean",
    page: "Users"
  });
};