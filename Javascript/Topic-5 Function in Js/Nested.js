const outer = () => {
    console.log("Hello from outer function");
    const inner = () => {
        console.log("Hello from inner function");
    }
    inner(); // This will work because inner is accessible within outer function
}
outer();
// inner(); // This will throw an error because inner is not accessible outside of outer function