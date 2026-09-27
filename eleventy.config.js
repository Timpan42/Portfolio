
import { HtmlBasePlugin } from "@11ty/eleventy"
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.setInputDirectory("src");
	eleventyConfig.setOutputDirectory("dist");
	eleventyConfig.setIncludesDirectory("_includes");

	eleventyConfig.addWatchTarget("src")
	eleventyConfig.addWatchTarget("css/**/*.css");
	//Watch images for the image pipeline.
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpg,jpeg,gif}");

	eleventyConfig.addPassthroughCopy({
		"./public/": "/"
	});

	eleventyConfig.addFilter("sortDataByDate", (obj) => {
		const sorted = {};
		Object.keys(obj)
			.sort((a, b) => {
				return obj[a].date > obj[b].date ? 1 : -1;
			})
			.forEach((name) => (sorted[name] = obj[name]));
		return sorted;
	});

	eleventyConfig.addNunjucksFilter("log", function (value) {
		console.log(value);
		return "";
	});

	eleventyConfig.addNunjucksFilter("storeTags", function (value, str) {
		if (value.includes(str)) {
			return true
		}

		return false;
	});

	eleventyConfig.addNunjucksFilter("isVideo", function (value) {
		if (value.includes(".mp4")) {
			return true
		}

		return false;
	});
};



export const config = {
	pathPrefix: "/Portfolio/",
	markdownTemplateEngine: 'njk',
	dataTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
	// dir: {
	// 	input: 'src',
	// 	output: 'dist',
	// 	includes: '_includes',
	// }
};