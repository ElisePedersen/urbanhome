import { baseUrl } from "../settings/api.js";

const bannerUrl = baseUrl + "home";
const bannerContainer = document.querySelector(".banner__container");

export async function getBanner(bannerUrl) {
  const response = await fetch(bannerUrl);
  const banner = await response.json();

  // bannerContainer.style.backgroundImage = `url("${banner.hero_banner.url}")`
}
getBanner(bannerUrl);
