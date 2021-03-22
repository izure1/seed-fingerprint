export function getWebglRenderer(): string|null {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    if (gl === null) {
        return null;
    }
  
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo === null) {
        return null;
    }
    return [
        gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
        gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
    ].join(', ');
}
  
export function getWebglRender(): string|null {
    const canvas = document.createElement('canvas');
    canvas.width = 50;
    canvas.height = 50;
  
    const gl = canvas.getContext('webgl');
    if (gl === null) {
        return null;
    }
  
    const vertices: number[] = [
        [ -0.1, 0.8, 0.0 ],
        [ -0.8, -0.8, 0.0 ],
        [ 0.8, -0.7, 0.0 ],
    ].flat();
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  
    const indices: number[] = [0, 1, 2];
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(
        gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indices),
        gl.STATIC_DRAW
    );
  
    const vertCode = `
      attribute vec3 coordinates;
      void main(void) {
        gl_Position = vec4(coordinates, 1.0);
      }
     `;
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    if (vertexShader === null) {
        return null;
    }
    gl.shaderSource(vertexShader, vertCode);
    gl.compileShader(vertexShader);
  
    const fragCode = `
      void main(void) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.5);
      }
    `;
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (fragmentShader === null) {
        return null;
    }
    gl.shaderSource(fragmentShader, fragCode);
    gl.compileShader(fragmentShader);
  
    const program = gl.createProgram();
    if (program === null) {
        return null;
    }
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);
  
    const coordinatesAttribute = gl.getAttribLocation(program, 'coordinates');
  
    gl.vertexAttribPointer(coordinatesAttribute, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coordinatesAttribute);
  
    gl.clearColor(1, 1, 1, 1);
    gl.enable(gl.DEPTH_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
  
    return canvas.toDataURL();
}

export async function component() {
    return {
        webglRenderer: getWebglRenderer(),
        webglRender: getWebglRender(),
    }
}