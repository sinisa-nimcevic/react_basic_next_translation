import { Generator } from "battlecry";

export default class PageGenerator extends Generator {
	config = {
		generate: {
			args: "name"
		}
	};

	generate() {
		this.templates().forEach(file => file.saveAs(`pages/`, this.args.name));
	}
}
