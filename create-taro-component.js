#! /usr/bin/env node

const fs         = require("fs");
const path       = require("path");
const program    = require("commander");
const changeCase = require("change-case");
const { pascalCase } = require('pascal-case');

const reactTemplate = require('./reactTemplate');
const scssTemplate = require('./scssTemplate');
const configTemplatge = require('./configTemplatge');


function run(name, options) {
  const dir       = path.resolve(process.env.CWD || './', pascalCase(name));
  const stylesExt = options.styles || "css";
  const styles    = path.resolve(dir, pascalCase(name) + ".less")
  const jsx       = path.resolve(dir, pascalCase(name) + ".jsx");
  const js        = path.resolve(dir, pascalCase(name) + ".js");
  const tsx        = path.resolve(dir, pascalCase(name) + ".tsx");
  const config     = path.resolve(dir, pascalCase(name)+ ".config.ts");
  
  const jsxContent = reactTemplate({ name });
  const scssContent = scssTemplate({ className: name });
  const configContent = configTemplatge({ name });

  fs.mkdirSync(dir);
  // fs.openSync(styles, "w");
  fs.writeSync(fs.openSync(tsx, "w"), jsxContent);
  fs.writeSync(fs.openSync(styles, "w"), scssContent);
  fs.writeSync(fs.openSync(config, "w"), configContent);
  console.log("Finished");

}

program
  // .version('0.0.1')
  // .option('-s, --styles [extension]', 'styles extension [default: scss]')
  .arguments('<name>')
  .action(run)
  .parse(process.argv);
