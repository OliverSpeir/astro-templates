import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "http://localhost:4321",
	integrations: [
		sitemap(),
		icon({
			iconDir: "src/assets/icons",
		}),
	],
});
