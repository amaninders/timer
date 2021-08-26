const args = process.argv.slice(2);

const timer = (array) =>  {

  array.filter(x => x > 0 && !isNaN(x)).forEach(timeStamp =>
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timeStamp * 1000));
};

timer(args);