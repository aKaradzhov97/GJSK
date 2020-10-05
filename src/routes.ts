const path = require("path");
module.exports = [
  {
    path: "/",
    component: path.resolve(`src/pages/index.tsx`),
  },
  {
    path: "/about",
    component: path.resolve(`src/pages/about.tsx`),
  },
  {
    path: "/404/",
    component: path.resolve(`src/pages/404.tsx`),
  },
];
