const testimonials = [
  {
    quote:
      "\u201cManaging my taxes as a freelancer used to be overwhelming, but Noble Finance made it effortless.\u201d",
    author: "Taylor M., 28 years old",
    avatar: "assets/testimonial-1-avatar.png",
  },
  {
    quote:
      "\u201cFrom invoicing to tax prep, Noble Finance has been a game-changer for my freelance business.\u201d",
    author: "Jordan K., 34 years old",
    avatar: "assets/testimonial-2-avatar.png",
  },
  {
    quote:
      "\u201cI used to worry about missing deductions, but with Noble Finance, I know I\u2019m maximizing my savings.\u201d",
    author: "Avery R., 31 years old",
    avatar: "assets/avatar-3.png",
  },
];

const tabs = Array.from(document.querySelectorAll(".testimonial__title"));
const quoteEl = document.querySelector("[data-quote]");
const authorEl = document.querySelector("[data-author]");
const avatarEl = document.querySelector(".testimonial__avatar");

function select(index) {
  const data = testimonials[index];
  if (!data) return;

  tabs.forEach((tab, i) => {
    const active = i === index;
    tab.classList.toggle("testimonial__title--active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  quoteEl.textContent = data.quote;
  authorEl.textContent = data.author;
  avatarEl.src = data.avatar;
}

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => select(i));
});
