/**
 * @typedef {Object} Command
 * @property {Array<string>} names - The different aliases for the command. At least one needs to be provided.
 * @property {string} description - A brief description of what the command does.
 * @property {Action} output - A function that returns the HTML output for the command.
 */

/**
 * @typedef Action
 * @pure
 * @param {string} input - Text which the user entered
 * @returns {string} - The output of the command
 */

/**
 * List of available commands for the terminal interface.
 * This list does not contain the default command.
 * @constant {Array<Command>} availableCommands
 */
export const availableCommands = [
  {
    names: ["help"],
    description: "Show help information",
    /**
     * Generates the help output listing all available commands.
     * @type {Action}
     */
    output: (_) =>
      `
        <p>
            Enter any of the following commands and press &lt;enter&gt;:
            <ul>
              ${availableCommands
                .map(
                  (c) => "<li>" + c.names[0] + ": " + c.description + "</li>"
                )
                .join(" ")}
            </ul>
      `,
  },
  {
    names: ["about", "about-me"],
    description: "Show some information about me",
    /**
     * Provides an introduction about the user, including their location, field of work, and interests.
     * @type {Action}
     */
    output: (_) => `<p>Hi, I'm Giannin</p>
        <p>
          I'm a developer in the small country of Switzerland🇨🇭 and do most of my work with Java☕️ and Spring Boot🌿.
          Though I also enjoy working with other technologies such as Angular, Kubernetes, Nix and more.
        </p>
        <p>
          Currently I am pursuing a Bachelor's degree in Computer Science📚. In my free time I foster my passion for OSS and learn about everything-as-code🤖, much of which you can check out on my GitHub profile.
        </p>`,
  },
  {
    names: ["skills", "show-skills"],
    description: "Show what my skills are",
    /**
     * Displays the user's skills in programming, web development, tools, cloud, and DevOps.
     * @type {Action}
     */
    output: (_) => `
        <h3>Programming Languages</h3>
        <p align="left">
          <img src="https://img.shields.io/badge/Java-%23ED8B00.svg?style=flat&logo=openjdk&logoColor=white"/>
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"/>
          <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white"/>
        </p>

        <h3>Web Development</h3>
        <div align="left">
            <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat&logo=springboot&logoColor=white"/>
            <img src="https://img.shields.io/badge/CSS-663399?style=flat&logo=css3&logoColor=white"/>
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white"/>
            <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black"/>
            <img src="https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white"/>
        </div>

        <h3>Tools & Cloud</h3>
        <div align="left">
          <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white"/>
          <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white"/>
          <img src="https://img.shields.io/badge/k3s-FFC61C?style=flat&logo=kubernetes&logoColor=black"/>
          <img src="https://img.shields.io/badge/Nix-5277C3?style=flat&logo=nixos&logoColor=white"/>
          <img src="https://img.shields.io/badge/Ansible-EE0000?style=flat&logo=ansible&logoColor=white"/>
        </div>

        <h3>DevOps & CI/CD</h3>
        <div align="left">
          <img src="https://img.shields.io/badge/Jenkins-D24939?style=flat&logo=jenkins&logoColor=white"/>
          <img src="https://img.shields.io/badge/Flux%20CD-5468FF?style=flat&logo=flux&logoColor=white"/>
          <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat&logo=githubactions&logoColor=white"/>
        </div>`,
  },
  {
    names: ["contact", "contact-info"],
    description: "Show how you can contact me",
    /**
     * Displays contact information, including email and GitHub profile.
     * @type {Action}
     */
    output: (_) => `<p>Feel free to contact me through these channels:</p>
        <ul>
          <li>
            Email: <a href="mailto:contact@giannin.ch">contact@giannin.ch</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/MasterEvarior">https://github.com/MasterEvarior</a>
          </li>
        <ul>`,
  },
  {
    names: ["clear"],
    description: "Clear the output area",
    /**
     * Clears the output area by returning an empty string.
     * @type {Action}
     */
    output: (_) => "",
  },
];

/**
 * Retrieves the default command from the list of commands.
 * @returns {Command} - The default command object.
 */
export const getDefaultCommand = () => {
  return {
    names: ["not-valid"],
    /**
     * Handles invalid commands by displaying an error message.
     * @type {Action}
     */
    output: (input) =>
      `<p>"${input}" is not a valid command. Enter "help" for assistance.</p>`,
  };
};

/**
 * Sets the output area content.
 * @param {string} html - The HTML content to display.
 */
export const setOutput = (html) => {
  document.getElementById("output").innerHTML = html;
};

/**
 * Executes a command based on user input.
 * Searches for a matching command by name, otherwise falls back to the default command.
 * @param {string} input - The command input by the user.
 * @param {Array<Command>} commands - The list of available commands.
 * @returns {string} - The output of the command
 */
export const executeCommand = (input, commands) => {
  const command =
    commands.find((c) => c.names.includes(input)) ??
    getDefaultCommand(commands);
  return command.output(input);
};

/**
 * Initializes the command input listener and sets up event handling.
 * Listens for the Enter key press to execute user input commands.
 */
export const setup = () => {
  const prompt = document.getElementById("input");
  prompt.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      const result = executeCommand(prompt.value, availableCommands);
      setOutput(result);
      prompt.value = "";
    }
  });
};
