const availableCommands = [
  {
    names: ["help"],
    isDefault: false,
    output: (commands) => {
      return `
        <p>
            Enter any of the following commands and press <enter>:
            <ul>
              ${commands}
            </ul>
      `;
    },
  },
  {
    names: ["about", "about-me"],
    isDefault: false,
    output: (_) => {
      return `
        <p>
          Hi, I'm Giannin <br>
          I'm a developer in the small country of Switzerland🇨🇭 and do most of my work with Java☕️ and Spring Boot🌿.
          Though I also enjoy working with other technologies such as Angular, Kubernetes, Nix and more.
        </p>
      `;
    },
  },
  {
    names: ["contact", "contact-info"],
    isDefault: false,
    output: (_) => {
      return `
        <p>If you want to contact me, simply write me an email at <a href="mailto:contact@giannin.ch">contact@giannin.ch</a>.<p>
        <p>Other places you can find me are:</p>
        <ul>
          <li>
            GitHub: <a href="https://github.com/MasterEvarior">https://github.com/MasterEvarior</a>
          </li>
          <li>
            TODO: add more
          </li>
        <ul>
      `;
    },
  },
  {
    names: ["not-valid"],
    isDefault: true,
    output: (input) => {
      return `
        <p>"${input}" is not a valid command. Enter "help" for assistance.</p>
      `;
    },
  },
];

const getDefaultCommand = (commands) => {
  return commands.filter((c) => c.isDefault)[0];
};

const setOutput = (html) => {
  document.getElementById("output").innerHTML = html;
};

const executeCommand = (input, commands) => {
  const output =
    commands.find((c) => c.names.includes(input)).output(input) ??
    getDefaultCommand(commands).output(commands);
  setOutput(output);
};

export const setup = () => {
  const prompt = document.getElementById("input");
  prompt.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      executeCommand(prompt.value, availableCommands);
      prompt.value = "";
    }
  });
};
