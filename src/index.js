const availableCommands = [
  {
    names: ["help"],
    isDefault: false,
    description: "Show help information",
    output: (_) => {
      return `
        <p>
            Enter any of the following commands and press &lt;enter&gt;:
            <ul>
              ${availableCommands
                .filter((c) => !c.isDefault)
                .map(
                  (c) =>
                    "<li><bold>" +
                    c.names[0] +
                    "</bold>: " +
                    c.description +
                    "</li>"
                )
                .join(" ")}
            </ul>
      `;
    },
  },
  {
    names: ["about", "about-me"],
    isDefault: false,
    description: "Show some information about me",
    output: (_) => {
      return `
        <p>Hi, I'm Giannin</p>
        <p>
          I'm a developer in the small country of Switzerland🇨🇭 and do most of my work with Java☕️ and Spring Boot🌿.
          Though I also enjoy working with other technologies such as Angular, Kubernetes, Nix and more.
        </p>
        <p>
          Currently I am pursuing a Bachelor's degree in Computer Science📚. In my free time I foster my passion for OSS and learn about everything-as-code🤖, much of which you can check out on my GitHub profile.
        </p>
      `;
    },
  },
  {
    names: ["contact", "contact-info"],
    isDefault: false,
    description: "Show how you can contact me",
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
