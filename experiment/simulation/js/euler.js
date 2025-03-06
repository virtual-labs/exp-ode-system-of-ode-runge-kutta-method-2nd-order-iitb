function f1(x, y, z) {
    //return((x**2)-(y**2)/y);
    return (x + z);
}
function g1(x, y, z) {
    return ((1.5 * z) - (4.5 * y) + 4.5);
}
function gety(x1, xn, y1, z1, n) {
    let h = (xn - x1) / n;
    let y = [];
    let z = [];
    // let sy1 = 0;
    // let sz1 = 0;
    // let sy2 = 0;
    // let sz2 = 0;
    // let sy = 0;
    // let sz = 0;
    // let xh = 0;
    y[0] = y1;
    z[0] = z1;
    for (let i = 1; i <= n; i++) {
        //y[i]=y[i-1]+h*f1(x1,y[i-1]);
        let sy1 = h * f1(x1, y[i - 1], z[i - 1]);
        let sz1 = h * g1(x1, y[i - 1], z[i - 1]);
        // let ys1 = y[i-1]+sy1;
        // let zs1 = z[i-1]+sz1;
        // xh = x1+h;
        let sy2 = h * f1(x1 + h, y[i - 1] + sy1, z[i - 1] + sz1);
        let sz2 = h * g1(x1 + h, y[i - 1] + sy1, z[i - 1] + sz1);
        let sy = (sy1 + sy2) / 2;
        let sz = (sz1 + sz2) / 2;
        y[i] = y[i - 1] + sy;
        z[i] = z[i - 1] + sz;
        // s2 = h*f1(x1+h, y[i-1]+s1);
        // s = (s1+s2)/2;
        // y[i] = y[i-1]+s;
        x1 += h;
    }
    return [y, z];
}
function f2(x, y, z) {
    return (y * z);
}
function g2(x, y, z) {
    return (x * y);
}
function gety2(x1, xn, y1, z1, n) {
    let h = (xn - x1) / n;
    let y = [];
    let z = [];
    y[0] = y1;
    z[0] = z1;
    for (let i = 1; i <= n; i++) {
        //y[i]=y[i-1]+h*f1(x1,y[i-1]);
        let sy1 = h * f2(x1, y[i - 1], z[i - 1]);
        let sz1 = h * g2(x1, y[i - 1], z[i - 1]);
        // let ys1 = y[i-1]+sy1;
        // let zs1 = z[i-1]+sz1;
        // xh = x1+h;
        let sy2 = h * f2(x1 + h, y[i - 1] + sy1, z[i - 1] + sz1);
        let sz2 = h * g2(x1 + h, y[i - 1] + sy1, z[i - 1] + sz1);
        let sy = (sy1 + sy2) / 2;
        let sz = (sz1 + sz2) / 2;
        y[i] = y[i - 1] + sy;
        z[i] = z[i - 1] + sz;
        x1 += h;
    }
    return [y, z];
}
function f3(x, y, z) {
    return (z);
}
function g3(x, y, z) {
    return (x * Math.pow(z, 2) - (Math.pow(y, 2)));
}
function gety3(x1, xn, y1, z1, n) {
    let h = (xn - x1) / n;
    let y = [];
    let z = [];
    y[0] = y1;
    z[0] = z1;
    for (let i = 1; i <= n; i++) {
        //y[i]=y[i-1]+h*f1(x1,y[i-1]);
        let sy1 = h * f3(x1, y[i - 1], z[i - 1]);
        let sz1 = h * g3(x1, y[i - 1], z[i - 1]);
        // let ys1 = y[i-1]+sy1;
        // let zs1 = z[i-1]+sz1;
        // xh = x1+h;
        let sy2 = h * f3(x1 + h, y[i - 1] + sy1, z[i - 1] + sz1);
        let sz2 = h * g3(x1 + h, y[i - 1] + sy1, z[i - 1] + sz1);
        let sy = (sy1 + sy2) / 2;
        let sz = (sz1 + sz2) / 2;
        y[i] = y[i - 1] + sy;
        z[i] = z[i - 1] + sz;
        x1 += h;
    }
    return [y, z];
}
//# sourceMappingURL=euler.js.map