const transpiler = require('next-transpile-modules');

module.exports = transpiler({
  transpileModules: ['@tcp']
});