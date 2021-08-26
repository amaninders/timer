const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {

  const keyRe = /^[\u0031-\u0039]*$/;
	
  if (key === '\u0003') {
    process.stdout.write('Thanks for choosing me, ciao!\n');
    process.exit();
  } else if (key === '\u0062') {
    process.stdout.write('\x07');
  } else if (keyRe.test(key)) {
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
		
  }
	
});