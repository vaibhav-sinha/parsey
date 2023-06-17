/**
 * Tokenizes, then parses, the input string with the given grammar. The result
 * is a parse tree represented with plain objects. See
 * {@link module:lib/parser.dfs|dfs()} for an example of the structure of a
 * parse tree
 *
 * @function parse
 * @memberof module:lib/parser
 * @param {string} sent - Input string to parse
 * @param {Rule[]|CFG} grammar - Set of Rules that define a language
 * @param {Function} [tokenizer=#tokenize} - Function that accepts a string and
 *    a grammar (optionally) and splits the input string into tokens, each
 *    representing a symbol in the language
 * @return {object} Root node of the parse tree
 */
export function parse(sent: string, grammar: Rule[] | CFG, tokenizer?: Function): object;
/**
 * Parses the input tokens using the earley top-down chart parsing algorithm
 * to product a set of states, each containing a list of earley items
 *
 * @function earley
 * @memberof module:lib/parser
 * @param {string[]} tokens - Sequence of symbols to be parsed
 * @param {Rule[]|CFG} grammar - Set of rules that define a language
 * @return {state[]} Set of 'states', each of which contains a list of earley
 *    items. Each earley item looks something like this:
 *    <pre><code>
 *    {
 *      name: [string],
 *      rule: [Rule],
 *      position: [number],
 *      origin: [number]
 *    }
 *    </code></pre>
 *    An earley item represents a completed parse of some individual rule. The
 *    position should be equivalent to rule.length, and the origin, despite its
 *    name, describes the state at which parse finished.
 *
 *    This means that an earley item <i>should</i> exist in state 0 with an
 *    origin equivalent to the number of tokens passed in to indicate that the
 *    entire input was parsed successfully for some rule
 */
export function earley(tokens: string[], grammar: Rule[] | CFG): state[];
/**
 * Performs a depth-first search on the chart generated by {@link #earley()} in
 * order to construct a parse tree, an example of which is shown below
 *
 * @example
 * {
 *   item: <Rule sum -> [factor, '+', factor]>,
 *   children: [
 *     {     // first symbol - 'factor'
 *       item: <Rule factor -> [/\d+/]>,
 *       children: [
 *         '2'
 *       ]
 *     },
 *     '+',  // second symbol
 *     {     // third symbol - another 'factor'
 *       item: <Rule factor -> [/\d+/]>,
 *       children: [
 *         '3'
 *       ]
 *     }
 *   ]
 * }
 *
 * @function dfs
 * @memberof module:lib/parser
 * @param {state[]} states - Set of lists of earley items
 * @param {string[]} tokens - Input tokens to be parsed
 * @return {object} Root node of the parse tree
 */
export function dfs(states: state[], tokens: string[]): object;
