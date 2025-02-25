const commands = [
  {
    name: "help",
    aliases: [],
    output: (_) => {
      return `
        <p>
            Enter any of the following commands and press <enter>:
            <ul>
            </ul>
        </p>
      `;
    },
  },
  {
    name: "not-valid",
    aliases: [],
    output: (input) => {
      return `
        <p>"${input}" is not a valid command. Enter "help" for assistance.</p>
      `;
    },
  },
];

export default { commands, execute };
