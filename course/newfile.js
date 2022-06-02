/*tree = {
    name: 'Name',
    age: 5,
    children: [{ name: 'Name2',
                age: 3,
                children: []},
                { name: 'Name3',
                age: 6,
                children: []}
                ]
}
*/

tree = {}
findInTree = (tree, name) => {
    
    if(Object.keys(tree).length == 0) { return false }

    if(tree.name === name) { return (tree) }

    if(tree.children == []) { return false }

    for(child of tree.children) {
        result = findInTree(child, name)
        if(result) { return result }
    }
    return false
}
console.log(findInTree(tree, 'Name2'))

fizzbuzz = (n) => {
    const a = []
    for(let i = 1; i <= n; i++) {
         a.push(i)
    }

    for(let i = 1; i <= n; i++) {
        let output = ''

        if (i % 3 === 0) { output += 'fizz'; }
        if (i % 5 === 0) { output += 'buzz'; }
        if(!output) { output = i; }

        console.log(output);
    }
}

fizzbuzz(20)

mysort = (a) => {

    if(a.length <= 1) { return a; }

    let pivot = a[0];
    let left  = []
    let right = []

    for(let i = 1; i < a.length; i++) {
        
        if(a[i] <= pivot) { left.push(a[i]) }

        if(a[i] > pivot) { right.push(a[i]) }
    }

    return [...mysort(left), pivot, ...mysort(right)]
}

console.log(mysort([7, 4, 8, 2, 8, 1, 0, 3, 22, 53, 12 ,46]))


fibo = (num) => {

    if(num <= 2) {
        return num;
    }

    return fibo(num - 1) + fibo(num - 2);
};

console.log('Fibo result: ' + fibo(6))

