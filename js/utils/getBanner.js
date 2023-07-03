import { baseUrl } from "../settings/api.js";
import { url } from "../settings/api.js";

const bannerUrl = baseUrl + "home/?populate=*";

export async function getBanner(bannerUrl) {
  const bannerContainer = document.querySelector(".banner__container");

  try {
    const response = await fetch(bannerUrl);
    const banner = await response.json();
    const heroBanner = banner.data.attributes.hero_banner.data.attributes.url;

    bannerContainer.style.backgroundImage = `url(${url}${heroBanner})`;
  } catch (error) {
    console.log(error);
    bannerContainer.innerHTML = "<p>An error occurred</p>";
  }
}
getBanner(bannerUrl);
