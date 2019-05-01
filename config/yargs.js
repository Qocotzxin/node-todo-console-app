const options = {
  description: {
    demand: true,
    alias: "d"
  }
};

const argv = require("yargs")
  .command("create", "Creates a task", options)
  .command("remove", "Removes a task", options)
  .command("list", "Shows the list of tasks")
  .command("update", "Updates task state", {
    ...options,
    complete: {
      default: true,
      alias: "c"
    }
  })
  .help().argv;

  module.exports = {
      argv
  }
