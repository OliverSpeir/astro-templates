import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
	site: "http://www.example.com",
	integrations: [
		sitemap(),
		icon({
			iconDir: "src/assets/icons",
		}),
	],
});
