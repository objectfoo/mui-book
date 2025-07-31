export default function (
	/** @type {import("plop").NodePlopAPI} */
	plop
) {
	// controller generator
	plop.setGenerator("ComponentStory", {
		description: "mui component and story files",
		prompts: [{
			type: "input",
			name: "ComponentName",
			message: "component name will be added in src folder"
		}],
		actions: [
			{ type: "add", path: "src/Components/{{ pascalCase ComponentName }}.tsx", templateFile: "plop-templates/Component.tsx.hbs" },
			{ type: "add", path: "src/Components/{{ pascalCase ComponentName }}.stories.tsx", templateFile: "plop-templates/Component.stories.tsx.hbs" },
		]
	});
};
