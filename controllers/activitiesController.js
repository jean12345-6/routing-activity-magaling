export const activitiesPage = (req, res) => {
  const activities = [
    {
      number: 1,
      name: "Routes only (logic inside the route, no controller)",
      date: "2026-09-10 (original at /jean), recreated at /activity1",
      links: ["/jean", "/activity1"]
    },
    {
      number: 2,
      name: "Routes + controller",
      date: "2026-09-10",
      links: ["/jean"]
    },
    {
      number: 3,
      name: "Routes + controller + param (req.params)",
      date: "2026-09-10",
      links: ["/jean/5"]
    },
    {
      number: 4,
      name: "Routes + controller + param + view (res.render with a .xian view)",
      date: "2026-09-15",
      links: ["/activity4", "/activity4/5"]
    },
    {
      number: 5,
      name: "Admin dashboard",
      date: "2026-09-16 to 2026-09-20",
      links: ["/admin/dashboard"]
    }
  ];

  res.render("activities", {
    title: "Activities",
    activities
  });
};
