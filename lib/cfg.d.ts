export = CFG;
/**
 * Constructs a new context-free grammar, which is just a container for
 * production rules
 *
 * @class CFG
 * @extends Array
 * @constructor
 * @param {rules=} - Optional array of {@link Rule}s to initialize the grammar
 *    with
 */
declare function CFG(rules: any): any[];
declare class CFG {
    /**
     * Constructs a new context-free grammar, which is just a container for
     * production rules
     *
     * @class CFG
     * @extends Array
     * @constructor
     * @param {rules=} - Optional array of {@link Rule}s to initialize the grammar
     *    with
     */
    constructor(rules: any);
    /**
     * Adds a rule to the grammar. The rule can be either an instance of
     * {@link Rule}, or arguments for the Rule constructor, or a string of the form
     * <pre>
     *    A -> B C D
     * </pre>
     *
     * @example
     * grammar.rule(Rule(S, [NP, VP], (np, vp) => ...));
     * grammar.rule(S, [NP, VP], (np, vp) => ...);
     * grammar.rule('S -> NP VP', (np, vp) => ...);
     *
     * Symbols in a stringy rule (such as 'A', 'B', 'C', and 'D' above) will be
     * searched for by name in existing rules and replaced if a match is found, or
     * if no match is found a new Sym will be created.
     *
     * Terminal symbols such as "a", 'b' will be treated as terminal strings and not
     * converted into Syms, and likewise bare regexps such as /\d+/ will be
     * converted into RegExp objects
     *
     * @method rule
     * @param {string|Sym|Rule} theRule - Rule object or a LHS Sym or string
     *    describing a production
     * @param {Function=|Sym[]} maybeRHS - If `theRule` is a string, this will be
     *    the valuation function. If `theRule` is a Sym, this will be the RHS
     * @param {Function=} maybeValuator - If `theRule` is a Sym and `maybeRHS` is
     *    an array of Syms (so the arguments mimic the Rule constructor), then this
     *    is an optional valuation function
     * @return {Rule} The rule that was either passed in, or created from the string
     *    passed in, and subsequently added to the grammar
     * @throws {SyntaxError} If a stringy rule is passed in that doesn't have a ->
     *    separator
     */
    rule(theRule: string | Sym | Rule, maybeRHS: any, maybeValuator?: Function | undefined): Rule;
    /**
     * Retrieve all unique Sym objects within the grammar by searching each rule
     *
     * @return {object} Object whose keys are the names of each symbol, and whose
     *    values are the actual Sym object pointers
     * @throws {Error} If multiple symbols are found with the same name
     */
    getSymbols(): object;
}
import Sym_1 = require("./rules");
import Sym = Sym_1.Sym;
import Rule_1 = require("./rules");
import Rule = Rule_1.Rule;
