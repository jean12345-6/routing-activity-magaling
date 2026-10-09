# Class Activities — Jean Raven Magaling

Start the app with `npm run xian`, then open **http://localhost:3000/activities** for a page with links to every activity.

| # | Activity | Date done | URL to open | Files to look at |
|---|---|---|---|---|
| 1 | Routes only (logic inside the route, no controller) | 2026-09-10 (original), recreated on 2026-10-09 | http://localhost:3000/jean (original) and http://localhost:3000/activity1 (recreated) | `routes/index.js` |
| 2 | Routes + controller | 2026-09-10 | http://localhost:3000/jean | `routes/jean.js`, `controllers/jeanController.js` |
| 3 | Routes + controller + param | 2026-09-10 | http://localhost:3000/jean/5 | `routes/jean.js`, `controllers/jeanController.js` |
| 4 | Routes + controller + param + view | 2026-09-15 | http://localhost:3000/activity4 and http://localhost:3000/activity4/5 | `routes/activity4.js`, `controllers/activity4Controller.js`, `views/test.xian` |
| 5 | Admin dashboard | 2026-09-16 to 2026-09-20 | http://localhost:3000/admin/dashboard | `controllers/dashboardController.js`, `views/dashboard.xian`, `views/partials/*.xian` |

## Activity 1 — Routes only
- **Date:** recreated on 2026-10-09; the original was the `/jean` route from 2026-09-10
- **What it shows:** `router.get("/activity1", (req, res) => { ... })`. The logic is written directly inside the route, with no controller. It returns the same message as the original: `{"message":"Welcome to Jean's routes!"}`
- **URLs:** `/jean` (original, now uses a controller) and `/activity1` (recreated)
- **Files:** `routes/index.js` (look for `// ACTIVITY 1`)

## Activity 2 — Routes + controller
- **Date:** 2026-09-10 (git commit `f4ffe3c`)
- **What it shows:** routes in `routes/jean.js` that call functions in `controllers/jeanController.js`. The routes are mounted at `/jean` in `index.js`.
- **URLs:** `/jean`, `/jean/about`, `/jean/search/query?q=shoes`, `POST /jean/submit`

## Activity 3 — Routes + controller + param
- **Date:** 2026-09-10 (git commit `f4ffe3c`)
- **What it shows:** `router.get("/:id", jeanController.getById)`. The controller reads `req.params.id` and returns it.
- **URL:** `/jean/5` → `{"message":"You requested item with ID: 5"}`
- **Files:** `routes/jean.js`, `controllers/jeanController.js` (same files as Activity 2)

## Activity 4 — Routes + controller + param + view
- **Date:** 2026-09-15 (from VS Code Local History; this version was replaced on 2026-09-16 by the admin Products page)
- **What it shows:**
  - `/activity4`: the controller uses `res.render("test", { title, content })` to show the `.xian` view `views/test.xian`
  - `/activity4/5`: the controller reads `req.params.id` and shows it in the same view with `res.render("test", { title: "Product", content: id })`
- **Files:** `routes/activity4.js`, `controllers/activity4Controller.js`, `views/test.xian`
- **Note:** The code was restored from the version of `controllers/productsController.js` saved on 2026-09-15 09:54:22. `getOne` was changed to render a view (it originally returned JSON). `views/test.xian` got a table on 2026-10-06; the table shows empty here because this activity doesn't send table data.

## Activity 5 — Admin dashboard
- **Date:** 2026-09-16 to 2026-09-20 (git commit `af075dd`, 2026-09-20)
- **What it shows:** admin layout with sidebar, topbar, breadcrumbs, metric cards, charts and an orders table, made from partials
- **URLs:** `/admin/dashboard` (same as `/dashboard`), plus `/products`, `/users`, `/settings` from the sidebar
- **Files:** `routes/index.js`, `routes/products.js`, `controllers/dashboardController.js`, `controllers/productsController.js`, `controllers/usersController.js`, `controllers/settingsController.js`, `views/dashboard.xian`, `views/products.xian`, `views/users.xian`, `views/settings.xian`, `views/partials/` (header, sidebar, topbar, breadcrumbs, metrics, table, footer)

## Other routes (not one of the 5 activities)
| URL | Date | Files |
|---|---|---|
| `/test` (table with `{{#each}}`) | 2026-10-06 | `controllers/testController.js`, `views/test.xian` |
| `/product` | 2026-10-06 | `controllers/product.js` (`product.index`) |
| `/api/products` (GET, POST), `/api/products/:id` (GET, PUT, DELETE) | 2026-10-06 | `controllers/product.js`, `models/Product.js` — needs MySQL |
| `/products/:id` | 2026-09-15 | `routes/products.js`, `controllers/productsController.js` |

## Setup
1. Copy `.env.example` to `.env` and put your MySQL root password in `DB_PASSWORD`.
2. Run `npm run migrate` once to create the database and tables.
3. Run `npm run xian` and open http://localhost:3000/activities.
