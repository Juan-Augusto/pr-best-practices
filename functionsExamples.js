


const wrongExample = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    arr = arr.filter((item) => {
        return item % 2 === 0;
    });
    arr = arr.reduce((acc, item) => {
        return acc + item;
    }
    , 0);

    console.log(arr);
}

wrongExample();


// Correct example


const returnEven = (arr) => {
    return arr.filter((item) => {
        return item % 2 === 0;
    });

}

const sumItems = (arr) => {
    return arr.reduce((acc, item) => {
        return acc + item;
    }
    , 0);
}

const correctExample = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    arr = returnEven(arr);
    arr = sumItems(arr);
    console.log(arr);
}


correctExample();