const image =
  "https://franklin-mike.vercel.app/images/hero.jpg";
const creator = "Franklin Mike";
const author = creator;

export const url = (slug) => {
  return `https://franklin-mike.vercel.app/${slug ?? ""}`;
};
export const SEOdata = {
  homePage: {
    author,
    image,
    creator,
    url: url(),
    title: "Franklin Mike - Frontend Engineer",
    description:
      'I build scalable and accessible frontend solutions with a focus on user experience. I am passionate about creating thoughtful and inclusive experiences that adhere to web standards.'
  },
};
