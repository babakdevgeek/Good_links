export const categories = ["github", "v2ray sub", "tool", "free hosting"];

type Links = {
  href: string;
  title: string;
  category?: string[];
  description?: string;
}[];

export const links: Links = [
  {
    href: "https://skills.github.com/",
    title: "Github skills page",
    category: ["github"],
  },
];
