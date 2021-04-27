const command: string[] = ["deno", "compile", "--unstable","./mod.ts"]

const help = `
    __  __     __               
   / / / /__  / /___  ___  _____
  / /_/ / _ \\/ / __ \\/ _ \\/ ___/
 / __  /  __/ / /_/ /  __/ /    
/_/ /_/\\___/_/ .___/\\___/_/     
            /_/                 

This command includes those options:
        --lite | Compiles lite version of dottissimo
`

for (const arg of Deno.args) {
    if (arg.includes("--lite") || arg.includes("-l")) {
        await command.push("--lite")
    } else if (arg.includes("--help" || arg.includes("-h"))) {
        await console.log(help)
    }
}

await Deno.run({
    cmd: command
}).status();

