/**
 * A sample async function (to demo Typescript's es7 async/await down-leveling).
 *
 * ### Example (es imports)
 * ```js
 * import { asyncABC } from 'typescript-starter'
 * console.log(await asyncABC())
 * // => ['a','b','c']
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var double = require('typescript-starter').asyncABC;
 * asyncABC().then(console.log);
 * // => ['a','b','c']
 * ```
 *
 * @returns a Promise which should contain `['a','b','c']`
 */
export const asyncABC = async () => {
    const somethingSlow = (index) => {
        const storage = 'abc'.charAt(index);
        return new Promise((resolve) => 
        // later...
        resolve(storage));
    };
    const a = await somethingSlow(0);
    const b = await somethingSlow(1);
    const c = await somethingSlow(2);
    return [a, b, c];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2FzeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFDSCxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDakMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUFnQixFQUFFLEVBQUU7UUFDekMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxPQUFPLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDckMsV0FBVztRQUNYLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FDakIsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUNGLE1BQU0sQ0FBQyxHQUFHLE1BQU0sYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25CLENBQUMsQ0FBQyJ9