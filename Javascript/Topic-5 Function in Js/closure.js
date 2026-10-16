const outer = () => {
    console.log("Outer function");
    const a = 10;
    const b = 20;

    const inner = () =>{
        console.log("Inner function");
        console.log(a);
        console.log(b);
    }
    return inner;
}

const x = outer();
x();
