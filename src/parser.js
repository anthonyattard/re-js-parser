export class Parser {
  constructor() {}

  runParse(addy) {
    var results;
    var splitSpace = /\s/;
    var splitComma = /,\s/;
    var splitPeriod = /[.]/;
    var splitCommas = /[,\s]/;
    var splitMultiComma = /[,\s]+/;
    var splitSpriods = /[,.\s]+/;
    var splitCapitals = /[A-Z]+/;
    var splitNonLetters = /\W+/;
    var splitLetters = /\w+/;
    var regexZip = /\d{5}?/g;
    var city = addy.split(splitComma).at(-2);
    // '12345 Main St. Portland'
    var stateZip = addy.split(splitComma).at(-1);
    // 'OR 87423'

    // S1: Parse city lowercase
    // var city = streetCity.split(splitPeriod)[1].trim().toLowerCase();

    // S2: Pase state abv lowerase
    var state = stateZip.split(splitSpace)[0].toLowerCase();

    // S3: Parse zip
    var zip = stateZip.match(regexZip)[0];

    return { city, state, zip };
  }
}
