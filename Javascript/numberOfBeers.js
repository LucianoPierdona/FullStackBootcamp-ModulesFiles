function beer() {
    var numberOfBeers = 99;
    while (numberOfBeers >= 1) {
        console.log(numberOfBeers + " bottles of beer on the wall, " + numberOfBeers + " bottles of beer, Take 1 down, pass it around, " + (numberOfBeers - 1) + " bottles of beer on the wall.");
        numberOfBeers--;
    }
    console.log(" no bottles of beer on the wall, the music ends xD");
}