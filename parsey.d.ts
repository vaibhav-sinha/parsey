export let parse: typeof import("./lib/parser").parse;
export let tokenize: (sent: string, grammar: any) => string[];
export let Rule: typeof import("./lib/rules").Rule;
export let Sym: typeof import("./lib/rules").Sym;
export let CFG: typeof import("./lib/cfg");
