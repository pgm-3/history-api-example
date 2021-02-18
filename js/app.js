const nav = document.querySelector("nav");
const infoBoxes = document.querySelectorAll("#info div.monopoly");

nav.addEventListener("click", (e) => {
  e.preventDefault(); // hou me tegen hou me tegen

  const link = e.target.getAttribute("href");
  if (!link) return false; // naast de link geklikt, dus wegwezen uit deze methode

  showContent(link);

  history.pushState({ link: link }, null, `monopoly-${link}`);
});

const showContent = (link) => {
  infoBoxes.forEach((box) => {
    box.className = box.id == link ? "monopoly" : "monopoly hide";
  });
};

// bij een nieuwe sessie, meteen url updaten
history.replaceState({ link: "gent" }, null, "monopoly-gent");
document.title = "Monopoly Gent";
