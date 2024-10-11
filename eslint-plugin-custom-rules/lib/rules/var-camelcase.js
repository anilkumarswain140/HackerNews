module.exports = {
    meta: {
      type: "problem",
      docs: {
        description: "Enforce camelCase for variable names",
        category: "Stylistic Issues",
        recommended: false,
      },
      schema: [], // No options
    },
    create(context) {
      return {
        VariableDeclarator(node) {
          if (!/^[a-z][a-zA-Z0-9]*$/.test(node.id.name)) {
            context.report({
              node,
              message: "Variable name '{{ name }}' must be in camelCase.",
              data: { name: node.id.name },
            });
          }
        },
      };
    },
  };