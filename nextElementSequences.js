function nextElement() {
    const a = [1, 3, 5, 7];
    const nextA = a[a.length - 1] + 2;

    const b = [2, 4, 8, 16, 32, 64];
    const nextB = b[b.length - 1] * 2;

    const c = [0, 1, 4, 9, 16, 25, 36];
    const nextC = (Math.sqrt(c[c.length - 1]) + 1) ** 2;

    const d = [4, 16, 36, 64];
    const nextD = (Math.sqrt(d[d.length - 1]) + 2) ** 2;

    const e = [1, 1, 2, 3, 5, 8];
    const nextE = e[e.length - 1] + e[e.length - 2];

    const f = [2, 10, 12, 16, 17, 18, 19];
    const nextF = f[f.length - 1] + 1;

    console.log('a) Próximo elemento:', nextA);
    console.log('b) Próximo elemento:', nextB);
    console.log('c) Próximo elemento:', nextC);
    console.log('d) Próximo elemento:', nextD);
    console.log('e) Próximo elemento:', nextE);
    console.log('f) Próximo elemento:', nextF);
}

nextElement();
