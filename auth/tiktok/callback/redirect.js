const DEFAULT_PORT = 3600;

function getPortFromPath(pathname) {
  const fileName = pathname.split("/").filter(Boolean).pop() || "";
  const match = fileName.match(/^(\d+)\.html$/);
  return match ? Number(match[1]) : DEFAULT_PORT;
}

const port = getPortFromPath(window.location.pathname);
const target = new URL(`http://localhost:${port}/auth/tiktok/callback`);
target.search = window.location.search;

const redirectLink = document.getElementById("redirect-link");
if (redirectLink) {
  redirectLink.href = target.toString();
}

window.location.replace(target.toString());

