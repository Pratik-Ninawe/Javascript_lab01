try {
    let undefinedObject = undefined;
    console.log(undefinedObject.someProperty);
} catch (error) {
    console.log("Caught TypeError:", error.message);
}
