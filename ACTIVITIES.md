# Class Activities — Jean Raven Magaling

Start the app with `npm run xian`, then open **http://localhost:3000/activities** for a page with links to every activity.

| # | Activity | Date done | URL to open | Files to look at |
|---|---|---|---|---|
| 1 | Routes only (logic inside the route, no controller) | 2026-09-10 (original), recreated on 2026-10-09 | http://localhost:3000/jean (original) and http://localhost:3000/activity1 (recreated) | `routes/index.js` |
| 2 | Routes + controller | 2026-09-10 | http://localhost:3000/jean | `routes/jean.js`, `controllers/jeanController.js` |
| 3 | Routes + controller + param | 2026-09-10 | http://localhost:3000/jean/5 | `routes/jean.js`, `controllers/jeanController.js` |
| 4 | Routes + controller + param + view | 2026-09-15 | http://localhost:3000/products/5 | `routes/products.js`, `controllers/productsController.js`, `views/index.xian`, `views/partials/test.xian` |
| 5 | Admin dashboard | 2026-09-16 to 2026-09-20 | http://localhost:3000/admin/dashboard | `controllers/dashboardController.js`, `views/dashboard.xian`, `views/partials/*.xian` |

## Activity 1 — Routes only
- **Date:** recreated on 2026-10-09; the original was the `/jean` route from 2026-09-10
- **What it shows:** `router.get("/activity1", (req, res) => { ... })`. The logic is written directly inside the route, with no controller. It uses `res.send()` and returns plain text: `Welcome to Jean's routes!`
- **URLs:** `/jean` (original, now uses a controller) and `/activity1` (recreated)
- **Files:** `routes/index.js` (look for `router.get("/activity1", ...)`)

## Activity 2 — Routes + controller
- **Date:** 2026-09-10 (git commit `f4ffe3c`)
- **What it shows:** routes in `routes/jean.js` that call functions in `controllers/jeanController.js`. The routes are mounted at `/jean` in `index.js`.
- **URL:** `/jean` → plain text: `Welcome to Jean's routes!` (`jeanController.intro` uses `res.send()`)

## Activity 3 — Routes + controller + param
- **Date:** 2026-09-10 (git commit `f4ffe3c`)
- **What it shows:** `router.get("/:id", jeanController.getById)`. The controller reads `req.params.id` and returns it with `res.send()`.
- **URL:** `/jean/5` → plain text: `You requested item with ID: 5`
- **Files:** `routes/jean.js`, `controllers/jeanController.js` (same files as Activity 2)

## Activity 4 — Routes + controller + param + view
- **Date:** 2026-09-15 (from VS Code Local History; this version was replaced on 2026-09-16 by the admin Products page)
- **What it shows:**
  - `/products/5`: `router.get("/:id", productsController.getOne)`. The controller reads `req.params.id` and shows it in the `.xian` view `views/index.xian` with `res.render("index", { title: "Product", content: id })`. `index.xian` uses the header partial, the `test` partial (`views/partials/test.xian`, which shows `{{title}}` and `{{content}}`) and the footer partial.
- **Files:** `routes/products.js`, `controllers/productsController.js`, `views/index.xian`, `views/partials/test.xian`
- **Note:** Activity 4 is back in `controllers/productsController.js` and `routes/products.js`, where it was first done on 2026-09-15. `getOne` was changed to render a view (it originally returned JSON).

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

## Setup
1. Copy `.env.example` to `.env` and put your MySQL root password in `DB_PASSWORD`.
2. Run `npm run migrate` once to create the database and tables.
3. Run `npm run xian` and open http://localhost:3000/activities.
