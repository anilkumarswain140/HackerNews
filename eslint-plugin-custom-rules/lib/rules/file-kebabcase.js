const path = require("path");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce kebab-case file names",
      category: "Stylistic Issues",
      recommended: false,
    },
    schema: [], // No options
  },
  create(context) {
    const filename = path.basename(context.getFilename());

    return {
      Program() {
        if (!/^[a-z]+(-[a-z]+)*\.js$/.test(filename)) {
          context.report({
            loc: { line: 1, column: 0 },
            message: "File name '{{ filename }}' must be in kebab-case.",
            data: { filename },
          });
        }
      },
    };
  },
};