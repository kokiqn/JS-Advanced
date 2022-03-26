function solve(...args) {
    let argsInfo = {};

    for (const item of args) {
        let key = typeof (item);
        if (argsInfo[key]) argsInfo[key]++;
        else argsInfo[key] = 1;
        console.log(`${key}: ${item}`);
    }

    let sortedInfo = Object.entries(argsInfo).sort((a, b) => b[1] - a[1]);
    sortedInfo.forEach(item => console.log(`${item.join(' = ')}`));
}

solve({ name: 'bob' }, 3.333, 9.999);
