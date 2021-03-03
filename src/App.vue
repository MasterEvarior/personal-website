<template>
  <div id="app">
    <v-shell
      :banner="banner"
      :shell_input="send_to_terminal"
      :commands="commands"
      @shell_output="prompt"
    ></v-shell>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      send_to_terminal: "",
      banner: {
        header: "Giannin",
        subHeader: "Welcome to my website, enjoy your stay 🏝",
        helpHeader: 'Type "help" for more information.',
        emoji: false,
        sign: `admin$`,
        img: {
          align: "left",
          link: "https://github.com/MasterEvarior.png",
          width: 100,
          height: 100
        }
      },
      commands: [
        {
          name: "about-me",
          get() {
            return "Hi, I'm Giannin.\n" +
            "I'm a developer in the small country of Switzerland🇨🇭 and do most of my work in a Java☕️ environment.\n" + 
            "Though I also enjoy working with other technologies💾 such as Vue.js, Docker and more."
          }
        },
        {
          name: "contact-info",
          get() {
            return "GitHub: https://github.com/MasterEvarior\n" +
                   "Email: contact@giannin.dev"
          }
        },
        {
          name: "show-github",
          get() {
            window.open("https://github.com/MasterEvarior", '_blank');
            return "Trying to open new tab... ⏳";
          }
        },
        {
          name: "write-email",
          get() {
            window.open("mailto:contact@giannin.dev");
            return "Trying to open mail programm... ⏳";
          }
        }
      ]
    };
  },
  methods: {
    prompt(value) {
      if (value.trim() === "ifconfig") {
        this.send_to_terminal = `
    Wi-Fi wireless network card:
        
    Local link IPv6 address. . . : fe80 :: 340f: 6f02: 41e9: 477b% 24
    IPv4 address. . . . . . . . .: 192.168.1.2
    Subnet mask. . . . . . . . . : 255.255.255.0
    Default Gateway. . . . . . . : 192.168.1.1`;
      } else if(value.trim() === "pwd"){
        this.send_to_terminal = '/Users/Giannin'
      } else if(value.includes("hack")){
          this.banner.sign = "hackerman$";
          this.banner.header = "Oh no! You've hacked me ☠️";
          this.banner.subHeader = "Welc̴ome͏ to͞ my̴ ͘w͏ebsite,̡ eńj̵oy ýour ́stay̸ ͠�̶�̴";
          this.banner.helpHeader = "R̕el̨ǫad̸ ͡t̷h̶e̛ ̢s͘ite ̀to ̕'ưnhac̢k̨' i̧t";
          this.banner.img.link = 'images/hacked.gif';
      } else if(value.includes("ls")){
        this.send_to_terminal = 'Empty directory'
      } else if(value.includes("cd")){
        this.send_to_terminal = 'No such file or directory'
      } else {
        this.send_to_terminal = `'${value}' is not recognized as an internal or external command, an executable program or a batch file. Type "help" for a list of commands`;
      }
    }
  }
}
</script>

<style>
</style>
