console.log("stdout si writable? " + process.stdout.writable);

process.stdout.write("Hello\n");
process.stdout.write("World");