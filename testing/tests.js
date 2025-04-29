import { test, commandTest, run, assert } from "./tools.js";
import {
  availableCommands,
  executeCommand,
  getDefaultCommand,
} from "../src/index.js";

test("Should return default funtion", () => {
  assert.truthy(getDefaultCommand());
});

test("Default command should have a name and an ouput", () => {
  const cmd = getDefaultCommand();
  const input = "fake";
  assert.truthy(cmd.names);
  assert.equal(
    cmd.output(input),
    '<p>"fake" is not a valid command. Enter "help" for assistance.</p>'
  );
});

test("Should execute command if found", () => {
  const result = executeCommand("clear", availableCommands);
  assert.equal(result, "");
});

test("Should execute default command if no other found", () => {
  const result = executeCommand("fake", availableCommands);
  assert.equal(
    result,
    '<p>"fake" is not a valid command. Enter "help" for assistance.</p>'
  );
});

commandTest("clear", "");

commandTest(
  "about",
  `<p>Hi, I'm Giannin</p>
        <p>
          I'm a developer in the small country of Switzerland🇨🇭 and do most of my work with Java☕️ and Spring Boot🌿.
          Though I also enjoy working with other technologies such as Angular, Kubernetes, Nix and more.
        </p>
        <p>
          Currently I am pursuing a Bachelor's degree in Computer Science📚. In my free time I foster my passion for OSS and learn about everything-as-code🤖, much of which you can check out on my GitHub profile.
        </p>`
);

commandTest(
  "contact",
  `<p>Feel free to contact me through these channels:</p>
        <ul>
          <li>
            Email: <a href="mailto:contact@giannin.ch">contact@giannin.ch</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/MasterEvarior">https://github.com/MasterEvarior</a>
          </li>
        <ul>`
);

commandTest(
  "skills",
  `
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
        </div>`
);
commandTest(
  "help",
  `<p>
            Enter any of the following commands and press &lt;enter&gt;:
            <ul>
              <li>help: Show help information</li> <li>about: Show some information about me</li> <li>skills: Show what my skills are</li> <li>contact: Show how you can contact me</li> <li>clear: Clear the output area</li>
            </ul>`
);
run();
