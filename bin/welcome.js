const gradient = require("gradient-string");

function welcome() {
  const logo = gradient.pastel.multiline(
    [
      "\n",
      "  ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗██████╗  █████╗ ██╗",
      "  ██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗██║",
      "  ███████╗██║     ██████╔╝██║██████╔╝   ██║   ██████╔╝███████║██║",
      "  ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║   ██╔═══╝ ██╔══██║██║",
      "  ███████║╚██████╗██║  ██║██║██║        ██║   ██║     ██║  ██║███████╗",
      "  ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   ╚═╝     ╚═╝  ╚═╝╚══════╝",
      "\n"
    ].join("\n")
  );

  console.log(logo);
}

module.exports = welcome;