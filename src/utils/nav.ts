export function getActiveNav(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/contact")) return "contact";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/getting-started")) return "getting-started";
  return "";
}
