await console.log("    ____        __  __  _           _               ");
await console.log("   / __ \\____  / /_/ /_(_)_________(_)___ ___  ____ ");
await console.log("  / / / / __ \\/ __/ __/ / ___/ ___/ / __ `__ \\/ __ \\");
await console.log(" / /_/ / /_/ / /_/ /_/ (__  |__  ) / / / / / / /_/ /");
await console.log("/_____/\\____/\\__/\\__/_/____/____/_/_/ /_/ /_/\\____/ ");

console.log("Press Ctrl-C to trigger a SIGINT signal");
await Deno.signal(Deno.Signal.SIGINT);
console.log("interrupted!");
Deno.exit();