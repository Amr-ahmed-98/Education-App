const Routes = [
  {
    id: 1,
    key: "nav.pages",
    path: "/pages",
    subRoutes: [
      { id: 1, key: "pages.about", path: "/about" },
      { id: 2, key: "pages.instructor", path: "/instructor" },
      { id: 3, key: "pages.event", path: "/event" },
      { id: 4, key: "pages.event-details", path: "/event-details" },
      { id: 5, key: "pages.faqs", path: "/faqs" },
      { id: 6, key: "pages.cart", path: "/cart" },
      { id: 7, key: "pages.wishlist", path: "/wishlist" },
      { id: 8, key: "pages.checkout", path: "/checkout" },
    ],
  },
  {
    id: 2,
    key: "nav.home",
    path: "/",
  },
  {
    id: 3,
    key: "nav.courses",
    path: "/courses",
    subRoutes: [
      { id: 11, key: "nav.courses", path: "/course" },
      { id: 12, key: "nav.course-details", path: "/course-details" },
    ],
  },
  {
    id: 4,
    key: "nav.blogs",
    path: "/blogs",
      subRoutes: [
      { id: 9, key: "nav.blogs", path: "/blogs" },
      { id: 10, key: "nav.blog-details", path: "/blog-details" },
    ],
   
  },
  {
    id: 5,
    key: "nav.contact",
    path: "/contact",
      subRoutes: [
      { id: 9, key: "nav.contact-me", path: "/contact-me" },
      { id: 10, key: "nav.contact-us", path: "/contact-us" },
    ],
   },
];

export { Routes };
