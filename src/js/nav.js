const navLinks = document.querySelectorAll("[data-navLink]");
const basePath = import.meta.env.BASE_URL.endsWith('/') 
  ? import.meta.env.BASE_URL 
  : `${import.meta.env.BASE_URL}/`;

navLinks.forEach(link => {
  const href = link.getAttribute("href");
  const currentPath = window.location.pathname;
  const normalizedCurrentPath = currentPath.replace(basePath, '/');
  const normalizedHref = href.replace(basePath, '/');
  
  if (normalizedCurrentPath === normalizedHref) {
    link.setAttribute("aria-current", "page");
  }
});
