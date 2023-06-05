const argv = process.argv.slice(2);

console.log(argv);

if (argv[0] == 'prod') {
    const port = Number(argv[1]) || 9000;
    console.log(port);
} else if (argv[0] == 'dev') {
    const port = 8000;
    console.log(port);
}
