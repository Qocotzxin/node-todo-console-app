const { argv } = require("./config/yargs");

const { create, list, update, remove } = require("./todos/todos");

const command = argv._[0];

switch (command) {
  case "create":
    create(argv.description);
    break;
  case "list":
    list();
    break;
  case "update":
    update(argv.description, argv.completed);
    break;
  case "remove":
    remove(argv.description);
    break;
  default:
    console.log("Comando no reconocido");
}
