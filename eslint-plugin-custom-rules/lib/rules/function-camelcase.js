module.exports = {
    meta: {
      type: "problem",
      docs: {
        description: "Enforce camelCase for function names",
        category: "Stylistic Issues",
        recommended: false,
      },
      schema: [], // No options
    },
    create(context) {
      return {
        FunctionDeclaration(node) {
          if (!/^[a-z][a-zA-Z0-9]*$/.test(node.id.name)) {
            context.report({
              node,
              message: "Function name '{{ name }}' must be in camelCase.",
              data: { name: node.id.name },
            });
          }
        },
        FunctionExpression(node) {
          if (node.id && !/^[a-z][a-zA-Z0-9]*$/.test(node.id.name)) {
            context.report({
              node,
              message: "Function name '{{ name }}' must be in camelCase.",
              data: { name: node.id.name },
            });
          }
        },
      };
    },
  };