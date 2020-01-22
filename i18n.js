const NextI18Next = require("next-i18next").default;

const NextI18NextInstance = new NextI18Next({
	defaultLanguage: "en",
	otherLanguages: ["hu"],
	localeSubpaths: {
		hu: "hu",
	}
});

module.exports = NextI18NextInstance;
