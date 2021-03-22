import { HmacSHA256 } from 'crypto-js';
import * as canvas from './components/canvas';
import * as date from './components/date';
import * as font from './components/font';
import * as header from './components/header';
import * as navigator from './components/navigator';
import * as screen from './components/screen';
import * as webgl from './components/webgl';
class SeedFingerprint {
    constructor(seed) {
        this.seed = seed;
    }
    get component() {
        return {
            canvas: canvas.component(this.seed),
            date: date.component(),
            font: font.component(),
            header: header.component(),
            navigator: navigator.component(),
            screen: screen.component(),
            webgl: webgl.component(),
            *[Symbol.iterator]() {
                yield this.canvas;
                yield this.date;
                yield this.font;
                yield this.header;
                yield this.navigator;
                yield this.screen;
                yield this.webgl;
            }
        };
    }
    async get() {
        const components = [];
        for await (const component of this.component) {
            components.push(component);
        }
        const text = JSON.stringify(components);
        return HmacSHA256(text, this.seed).toString();
    }
}
export function create(seed) {
    return new SeedFingerprint(seed);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV2QyxPQUFPLEtBQUssTUFBTSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sS0FBSyxJQUFJLE1BQU0sbUJBQW1CLENBQUM7QUFDMUMsT0FBTyxLQUFLLElBQUksTUFBTSxtQkFBbUIsQ0FBQztBQUMxQyxPQUFPLEtBQUssTUFBTSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sS0FBSyxTQUFTLE1BQU0sd0JBQXdCLENBQUM7QUFDcEQsT0FBTyxLQUFLLE1BQU0sTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRTVDLE1BQU0sZUFBZTtJQUVqQixZQUFZLElBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksU0FBUztRQUNULE9BQU87WUFDSCxNQUFNLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3RCLE1BQU0sRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQzFCLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ2hDLE1BQU0sRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQzFCLEtBQUssRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ3hCLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUNkLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDbEIsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNoQixNQUFNLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDbEIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNyQixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ2xCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNyQixDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCxLQUFLLENBQUMsR0FBRztRQUNMLE1BQU0sVUFBVSxHQUFXLEVBQUUsQ0FBQztRQUM5QixJQUFJLEtBQUssRUFBRSxNQUFNLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBNEIsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsTUFBTSxJQUFJLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRCxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xELENBQUM7Q0FDSjtBQUVELE1BQU0sVUFBVSxNQUFNLENBQUMsSUFBWTtJQUMvQixPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JDLENBQUMifQ==