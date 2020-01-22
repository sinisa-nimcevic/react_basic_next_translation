import { Generator } from "battlecry";

export default class ComponentGenerator extends Generator {
	config = {
		generate: {
			args: "name",
			options: {
				without: {
					description: "Create translated component without data."
				},
				en: {
					description: "Create english translation file."
				},
				hu: {
					description: "Create hungarian translation file."
				}
			}
		}
	};

	generate() {
		const { name } = this.args;
		let path = `components/__NaMe__/`;
		let componentName = name;

		if (name.indexOf("/") > -1) {
			let complexPath = name.split("/");
			componentName = complexPath.pop();
			path = `components/${complexPath}/__NaMe__/`;
		}

		this.templates().forEach(file => {
			if (file.path.indexOf("WithoutData") > -1) {
				if (this.options.without) {
					file.saveAs(path, componentName);
				}
			} else {
				if (file.path.indexOf(".json") > -1) {
					// This has to be done manualy for all available translations.
					if (this.options.en); file.saveAs("public/static/locales/en/", componentName);
					if (this.options.hu); file.saveAs("public/static/locales/hu/", componentName);
				} else {
					file.saveAs(path, componentName);
				}
			}
		});
	}
}
