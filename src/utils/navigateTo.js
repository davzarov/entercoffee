export const navigateTo = (e, id) => {
  e.preventDefault();
  id === ""
    ? window.scrollTo({ top: 0, behavior: "smooth" })
    : document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};
