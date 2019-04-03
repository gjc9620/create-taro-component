#! /usr/bin/env node

const fs         = require("fs");
const path       = require("path");
const program    = require("commander");
const changeCase = require("change-case");

const reactTemplate = require('./reactTemplate');
const scssTemplate = require('./scssTemplate');
const indexTemplate = require('./indexTemplate');


function run(name, options) {

  const dir       = path.resolve(name);
  const stylesExt = options.styles || "css";
  const styles    = path.resolve(dir, name + ".scss")
  const jsx       = path.resolve(dir, name + ".jsx");
  const js        = path.resolve(dir, name + ".js");
  const index     = path.resolve(dir, "index.js");

  const jsxContent = reactTemplate({ name });
  const scssContent = scssTemplate({ className: name });
  const indexContent = indexTemplate({ name });

  fs.mkdirSync("./"+name);
  // fs.openSync(styles, "w");
  fs.writeSync(fs.openSync(jsx, "w"), jsxContent);
  fs.writeSync(fs.openSync(styles, "w"), scssContent);
  console.log("Finished");

}

program
  // .version('0.0.1')
  // .option('-s, --styles [extension]', 'styles extension [default: scss]')
  .arguments('<name>')
  .action(run)
  .parse(process.argv);
