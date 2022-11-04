function barTriang(a, b, c) {
    let x = (a[0] + b[0] + c[0]) / 3;
    let y = (a[1] + b[1] + c[1]) / 3;
    return [+x.toFixed(4), +y.toFixed(4)];
} 