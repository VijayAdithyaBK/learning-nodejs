// const args = process.argv.slice(2);
// console.log(process.env[args[0]]);

// const args = process.argv.slice(2);
// args.forEach((arg) => {
//     console.log(process.env[arg] + "\n");
// });

const args  = process.argv.slice(2);
args.forEach((arg) => {
    let envVar = process.env[arg];

    if(envVar === undefined) {
        console.error(`Could not find the "${arg}" in environment`);
    } else {
        console.log(envVar);
    }
})