import { hmac, sha256 } from 'hash.js';

import { availableFonts } from './font';

export function getCanvas2dRender(seed: string): string|null {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 50;

    const text  = 'seed-fingerprint';
    const ctx   = canvas.getContext('2d');
    const hash: string = hmac(sha256 as any, seed).update(text).digest('hex');

    if (ctx === null) {
        return null;
    }

    const v1 = { x: 0, y: 0 };
    const v2 = { x: 200, y: 25 };
    const v3 = { x: 0, y: 50 };

    ctx.beginPath();
    ctx.moveTo(v1.x, v1.y);
    ctx.lineTo(v2.x, v2.y);
    ctx.lineTo(v3.x, v3.y);
    ctx.closePath();

    ctx.fillStyle = '#999';
    ctx.fill();
    
    // emoji 
    const font = availableFonts().join(', ');
    ctx.font = `21.5px ${font}`;
    ctx.fillText('🍰', 3, 33);
    
    // seed
    ctx.font = `8px ${font}`;
    ctx.fillStyle = 'rgba(0,0,0,0.9)';
    ctx.fillText(hash.substr(0, 32), 40, 25)
    ctx.fillText(hash.substr(32, 32), 40, 33);

    // header
    ctx.font = `bold 25px ${font}`;
    const textGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    textGradient.addColorStop(0, '#ef007c');
    textGradient.addColorStop(1.0, '#0075c8');
    
    // ctx.lineWidth = 2;
    // ctx.strokeStyle = 'white';
    // ctx.strokeText(text, 40, 33);
    
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillStyle = textGradient;
    ctx.fillText(text, 5, 33);
  
    return canvas.toDataURL();
}

export async function component(seed: string) {
    return {
        canvas2dRender: getCanvas2dRender(seed)
    };
}