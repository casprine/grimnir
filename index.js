#!/usr/bin/env node

const prog = require("caporal");

prog
  .version("1.0.0")
  .command("create", "create a new application")
  .argument("<template>", "Template to use")
  .option(
    "--variant <variatn> ",
    "which <variant> of the template is going to be used"
  )
  .action((args, options, logger) => {
    console.log({
      args: args,
      options: options
    });
  });

prog.parse(process.argv);
