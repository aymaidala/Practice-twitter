const linkArray = [
  {
    page_name: "Twitter",
    to_path: "/",
    fa_icon: "fa-brands fa-x-twitter",
  },
  {
    page_name: "Home",
    to_path: "/",
    fa_icon: "fa-solid fa-house",
  },
  {
    page_name: "Search",
    to_path: "/",
    fa_icon: "fa-solid fa-magnifying-glass",
  },
  {
    page_name: "Notification",
    to_path: "/",
    fa_icon: "fa-regular fa-bell",
  },
  {
    page_name: "Message",
    to_path: "/",
    fa_icon: "fa-regular fa-envelope",
  },
  {
    page_name: "Menu",
    to_path: "/",
    fa_icon: "fa-solid fa-equals",
  },
  {
    page_name: "friends",
    to_path: "/",
    fa_icon: "fa-solid fa-user-group",
  },
  {
    page_name: "X",
    to_path: "/",
    fa_icon: "fa-brands fa-x-twitter",
  },
  {
    page_name: "user",
    to_path: "/",
    fa_icon: "fa-regular fa-user",
  },
  {
    page_name: "circle",
    to_path: "/",
    fa_icon: "fa-brands fa-gg-circle",
  },
  {
    page_name: "write",
    to_path: "/blog",
    fa_icon: "fa-solid fa-feather-pointed",
  },
];
function generateListElement(linkObject) {
  const linkTag = `<a href = "${linkObject.to_path}"><i class = "${linkObject.fa_icon}"></i></a>`;
  const li = document.createElement("li");

  li.innerHTML = linkTag;
  return li;
}

function generateMenu(menuList) {
  const ulTag = document.querySelector("ul");

  menuList.forEach((menuObj) => {
    const menuElement = generateListElement(menuObj);
    ulTag.appendChild(menuElement);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  generateMenu(linkArray);
});
