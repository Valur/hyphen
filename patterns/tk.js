(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hyphenationPatternsTk = factory();
  }
})(this, function () {
  var patterns = [],
    hyphenation = [];

  // title: Hyphenation patterns for Turkmen
  // copyright: Copyright (C) 2010-2015 Nazar Annagurban
  // notice: This file is part of the hyph-utf8 package.
  //     See http://www.hyphenation.org/tex for more information.
  // language:
  //     name: Turkmen
  //     tag: tk
  // version: 0.1 16 March 2010
  // authors:
  //   -
  //     name: Nazar Annagurban
  //     contact: nazartm (at) gmail.com
  // licence:
  //     name: MIT
  //     url: https://opensource.org/licenses/MIT
  //     text: >
  //         Permission is hereby granted, free of charge, to any person obtaining a copy
  //         of this software and associated documentation files (the "Software"), to deal
  //         in the Software without restriction, including without limitation the rights
  //         to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  //         copies of the Software, and to permit persons to whom the Software is
  //         furnished to do so, subject to the following conditions:
  //
  //         The above copyright notice and this permission notice shall be included in
  //         all copies or substantial portions of the Software.
  //
  //         THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  //         IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  //         FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
  //         AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  //         LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  //         OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  //         THE SOFTWARE.
  //
  var patterns = [
    // Some suffixes are added through a hyphen. When hyphenating these words, a hyphen is added before the hyphen so that the line ends with a hyphen and the new line starts with a hyphen.
    "1-4",
    // Allow hyphen after a vowel if and only if there is a single consonant before next the vowel
    "ä1bä",
    "ä1be",
    "ä1bi",
    "ä1bö",
    "ä1bü",
    "ä1çä",
    "ä1çe",
    "ä1çi",
    "ä1çö",
    "ä1çü",
    "ä1dä",
    "ä1de",
    "ä1di",
    "ä1dö",
    "ä1dü",
    "ä1fä",
    "ä1fe",
    "ä1fi",
    "ä1fö",
    "ä1fü",
    "ä1gä",
    "ä1ge",
    "ä1gi",
    "ä1gö",
    "ä1gü",
    "ä1hä",
    "ä1he",
    "ä1hi",
    "ä1hö",
    "ä1hü",
    "ä1jä",
    "ä1je",
    "ä1ji",
    "ä1jö",
    "ä1jü",
    "ä1kä",
    "ä1ke",
    "ä1ki",
    "ä1kö",
    "ä1kü",
    "ä1lä",
    "ä1le",
    "ä1li",
    "ä1lö",
    "ä1lü",
    "ä1mä",
    "ä1me",
    "ä1mi",
    "ä1mö",
    "ä1mü",
    "ä1nä",
    "ä1ne",
    "ä1ni",
    "ä1nö",
    "ä1nü",
    "ä1pä",
    "ä1pe",
    "ä1pi",
    "ä1pö",
    "ä1pü",
    "ä1rä",
    "ä1re",
    "ä1ri",
    "ä1rö",
    "ä1rü",
    "ä1sä",
    "ä1se",
    "ä1si",
    "ä1sö",
    "ä1sü",
    "ä1tä",
    "ä1te",
    "ä1ti",
    "ä1tö",
    "ä1tü",
    "ä1wä",
    "ä1we",
    "ä1wi",
    "ä1wö",
    "ä1wü",
    "ä1ýä",
    "ä1ýe",
    "ä1ýi",
    "ä1ýö",
    "ä1ýü",
    "ä1zä",
    "ä1ze",
    "ä1zi",
    "ä1zö",
    "ä1zü",
    "ä1ňä",
    "ä1ňe",
    "ä1ňi",
    "ä1ňö",
    "ä1ňü",
    "ä1žä",
    "ä1že",
    "ä1ži",
    "ä1žö",
    "ä1žü",
    "ä1şä",
    "ä1şe",
    "ä1şi",
    "ä1şö",
    "ä1şü",
    "e1bä",
    "e1be",
    "e1bi",
    "e1bö",
    "e1bü",
    "e1çä",
    "e1çe",
    "e1çi",
    "e1çö",
    "e1çü",
    "e1dä",
    "e1de",
    "e1di",
    "e1dö",
    "e1dü",
    "e1fä",
    "e1fe",
    "e1fi",
    "e1fö",
    "e1fü",
    "e1gä",
    "e1ge",
    "e1gi",
    "e1gö",
    "e1gü",
    "e1hä",
    "e1he",
    "e1hi",
    "e1hö",
    "e1hü",
    "e1jä",
    "e1je",
    "e1ji",
    "e1jö",
    "e1jü",
    "e1kä",
    "e1ke",
    "e1ki",
    "e1kö",
    "e1kü",
    "e1lä",
    "e1le",
    "e1li",
    "e1lö",
    "e1lü",
    "e1mä",
    "e1me",
    "e1mi",
    "e1mö",
    "e1mü",
    "e1nä",
    "e1ne",
    "e1ni",
    "e1nö",
    "e1nü",
    "e1pä",
    "e1pe",
    "e1pi",
    "e1pö",
    "e1pü",
    "e1rä",
    "e1re",
    "e1ri",
    "e1rö",
    "e1rü",
    "e1sä",
    "e1se",
    "e1si",
    "e1sö",
    "e1sü",
    "e1tä",
    "e1te",
    "e1ti",
    "e1tö",
    "e1tü",
    "e1wä",
    "e1we",
    "e1wi",
    "e1wö",
    "e1wü",
    "e1ýä",
    "e1ýe",
    "e1ýi",
    "e1ýö",
    "e1ýü",
    "e1zä",
    "e1ze",
    "e1zi",
    "e1zö",
    "e1zü",
    "e1ňä",
    "e1ňe",
    "e1ňi",
    "e1ňö",
    "e1ňü",
    "e1žä",
    "e1že",
    "e1ži",
    "e1žö",
    "e1žü",
    "e1şä",
    "e1şe",
    "e1şi",
    "e1şö",
    "e1şü",
    "i1bä",
    "i1be",
    "i1bi",
    "i1bö",
    "i1bü",
    "i1çä",
    "i1çe",
    "i1çi",
    "i1çö",
    "i1çü",
    "i1dä",
    "i1de",
    "i1di",
    "i1dö",
    "i1dü",
    "i1fä",
    "i1fe",
    "i1fi",
    "i1fö",
    "i1fü",
    "i1gä",
    "i1ge",
    "i1gi",
    "i1gö",
    "i1gü",
    "i1hä",
    "i1he",
    "i1hi",
    "i1hö",
    "i1hü",
    "i1jä",
    "i1je",
    "i1ji",
    "i1jö",
    "i1jü",
    "i1kä",
    "i1ke",
    "i1ki",
    "i1kö",
    "i1kü",
    "i1lä",
    "i1le",
    "i1li",
    "i1lö",
    "i1lü",
    "i1mä",
    "i1me",
    "i1mi",
    "i1mö",
    "i1mü",
    "i1nä",
    "i1ne",
    "i1ni",
    "i1nö",
    "i1nü",
    "i1pä",
    "i1pe",
    "i1pi",
    "i1pö",
    "i1pü",
    "i1rä",
    "i1re",
    "i1ri",
    "i1rö",
    "i1rü",
    "i1sä",
    "i1se",
    "i1si",
    "i1sö",
    "i1sü",
    "i1tä",
    "i1te",
    "i1ti",
    "i1tö",
    "i1tü",
    "i1wä",
    "i1we",
    "i1wi",
    "i1wö",
    "i1wü",
    "i1ýä",
    "i1ýe",
    "i1ýi",
    "i1ýö",
    "i1ýü",
    "i1zä",
    "i1ze",
    "i1zi",
    "i1zö",
    "i1zü",
    "i1ňä",
    "i1ňe",
    "i1ňi",
    "i1ňö",
    "i1ňü",
    "i1žä",
    "i1že",
    "i1ži",
    "i1žö",
    "i1žü",
    "i1şä",
    "i1şe",
    "i1şi",
    "i1şö",
    "i1şü",
    "ö1bä",
    "ö1be",
    "ö1bi",
    "ö1bö",
    "ö1bü",
    "ö1çä",
    "ö1çe",
    "ö1çi",
    "ö1çö",
    "ö1çü",
    "ö1dä",
    "ö1de",
    "ö1di",
    "ö1dö",
    "ö1dü",
    "ö1fä",
    "ö1fe",
    "ö1fi",
    "ö1fö",
    "ö1fü",
    "ö1gä",
    "ö1ge",
    "ö1gi",
    "ö1gö",
    "ö1gü",
    "ö1hä",
    "ö1he",
    "ö1hi",
    "ö1hö",
    "ö1hü",
    "ö1jä",
    "ö1je",
    "ö1ji",
    "ö1jö",
    "ö1jü",
    "ö1kä",
    "ö1ke",
    "ö1ki",
    "ö1kö",
    "ö1kü",
    "ö1lä",
    "ö1le",
    "ö1li",
    "ö1lö",
    "ö1lü",
    "ö1mä",
    "ö1me",
    "ö1mi",
    "ö1mö",
    "ö1mü",
    "ö1nä",
    "ö1ne",
    "ö1ni",
    "ö1nö",
    "ö1nü",
    "ö1pä",
    "ö1pe",
    "ö1pi",
    "ö1pö",
    "ö1pü",
    "ö1rä",
    "ö1re",
    "ö1ri",
    "ö1rö",
    "ö1rü",
    "ö1sä",
    "ö1se",
    "ö1si",
    "ö1sö",
    "ö1sü",
    "ö1tä",
    "ö1te",
    "ö1ti",
    "ö1tö",
    "ö1tü",
    "ö1wä",
    "ö1we",
    "ö1wi",
    "ö1wö",
    "ö1wü",
    "ö1ýä",
    "ö1ýe",
    "ö1ýi",
    "ö1ýö",
    "ö1ýü",
    "ö1zä",
    "ö1ze",
    "ö1zi",
    "ö1zö",
    "ö1zü",
    "ö1ňä",
    "ö1ňe",
    "ö1ňi",
    "ö1ňö",
    "ö1ňü",
    "ö1žä",
    "ö1že",
    "ö1ži",
    "ö1žö",
    "ö1žü",
    "ö1şä",
    "ö1şe",
    "ö1şi",
    "ö1şö",
    "ö1şü",
    "ü1bä",
    "ü1be",
    "ü1bi",
    "ü1bö",
    "ü1bü",
    "ü1çä",
    "ü1çe",
    "ü1çi",
    "ü1çö",
    "ü1çü",
    "ü1dä",
    "ü1de",
    "ü1di",
    "ü1dö",
    "ü1dü",
    "ü1fä",
    "ü1fe",
    "ü1fi",
    "ü1fö",
    "ü1fü",
    "ü1gä",
    "ü1ge",
    "ü1gi",
    "ü1gö",
    "ü1gü",
    "ü1hä",
    "ü1he",
    "ü1hi",
    "ü1hö",
    "ü1hü",
    "ü1jä",
    "ü1je",
    "ü1ji",
    "ü1jö",
    "ü1jü",
    "ü1kä",
    "ü1ke",
    "ü1ki",
    "ü1kö",
    "ü1kü",
    "ü1lä",
    "ü1le",
    "ü1li",
    "ü1lö",
    "ü1lü",
    "ü1mä",
    "ü1me",
    "ü1mi",
    "ü1mö",
    "ü1mü",
    "ü1nä",
    "ü1ne",
    "ü1ni",
    "ü1nö",
    "ü1nü",
    "ü1pä",
    "ü1pe",
    "ü1pi",
    "ü1pö",
    "ü1pü",
    "ü1rä",
    "ü1re",
    "ü1ri",
    "ü1rö",
    "ü1rü",
    "ü1sä",
    "ü1se",
    "ü1si",
    "ü1sö",
    "ü1sü",
    "ü1tä",
    "ü1te",
    "ü1ti",
    "ü1tö",
    "ü1tü",
    "ü1wä",
    "ü1we",
    "ü1wi",
    "ü1wö",
    "ü1wü",
    "ü1ýä",
    "ü1ýe",
    "ü1ýi",
    "ü1ýö",
    "ü1ýü",
    "ü1zä",
    "ü1ze",
    "ü1zi",
    "ü1zö",
    "ü1zü",
    "ü1ňä",
    "ü1ňe",
    "ü1ňi",
    "ü1ňö",
    "ü1ňü",
    "ü1žä",
    "ü1že",
    "ü1ži",
    "ü1žö",
    "ü1žü",
    "ü1şä",
    "ü1şe",
    "ü1şi",
    "ü1şö",
    "ü1şü",
    "a1ba",
    "a1by",
    "a1bo",
    "a1bu",
    "a1ça",
    "a1çy",
    "a1ço",
    "a1çu",
    "a1da",
    "a1dy",
    "a1do",
    "a1du",
    "a1fa",
    "a1fy",
    "a1fo",
    "a1fu",
    "a1ga",
    "a1gy",
    "a1go",
    "a1gu",
    "a1ha",
    "a1hy",
    "a1ho",
    "a1hu",
    "a1ja",
    "a1jy",
    "a1jo",
    "a1ju",
    "a1ka",
    "a1ky",
    "a1ko",
    "a1ku",
    "a1la",
    "a1ly",
    "a1lo",
    "a1lu",
    "a1ma",
    "a1my",
    "a1mo",
    "a1mu",
    "a1na",
    "a1ny",
    "a1no",
    "a1nu",
    "a1pa",
    "a1py",
    "a1po",
    "a1pu",
    "a1ra",
    "a1ry",
    "a1ro",
    "a1ru",
    "a1sa",
    "a1sy",
    "a1so",
    "a1su",
    "a1ta",
    "a1ty",
    "a1to",
    "a1tu",
    "a1wa",
    "a1wy",
    "a1wo",
    "a1wu",
    "a1ýa",
    "a1ýy",
    "a1ýo",
    "a1ýu",
    "a1za",
    "a1zy",
    "a1zo",
    "a1zu",
    "a1ňa",
    "a1ňy",
    "a1ňo",
    "a1ňu",
    "a1ža",
    "a1žy",
    "a1žo",
    "a1žu",
    "a1şa",
    "a1şy",
    "a1şo",
    "a1şu",
    "y1ba",
    "y1by",
    "y1bo",
    "y1bu",
    "y1ça",
    "y1çy",
    "y1ço",
    "y1çu",
    "y1da",
    "y1dy",
    "y1do",
    "y1du",
    "y1fa",
    "y1fy",
    "y1fo",
    "y1fu",
    "y1ga",
    "y1gy",
    "y1go",
    "y1gu",
    "y1ha",
    "y1hy",
    "y1ho",
    "y1hu",
    "y1ja",
    "y1jy",
    "y1jo",
    "y1ju",
    "y1ka",
    "y1ky",
    "y1ko",
    "y1ku",
    "y1la",
    "y1ly",
    "y1lo",
    "y1lu",
    "y1ma",
    "y1my",
    "y1mo",
    "y1mu",
    "y1na",
    "y1ny",
    "y1no",
    "y1nu",
    "y1pa",
    "y1py",
    "y1po",
    "y1pu",
    "y1ra",
    "y1ry",
    "y1ro",
    "y1ru",
    "y1sa",
    "y1sy",
    "y1so",
    "y1su",
    "y1ta",
    "y1ty",
    "y1to",
    "y1tu",
    "y1wa",
    "y1wy",
    "y1wo",
    "y1wu",
    "y1ýa",
    "y1ýy",
    "y1ýo",
    "y1ýu",
    "y1za",
    "y1zy",
    "y1zo",
    "y1zu",
    "y1ňa",
    "y1ňy",
    "y1ňo",
    "y1ňu",
    "y1ža",
    "y1žy",
    "y1žo",
    "y1žu",
    "y1şa",
    "y1şy",
    "y1şo",
    "y1şu",
    "o1ba",
    "o1by",
    "o1bo",
    "o1bu",
    "o1ça",
    "o1çy",
    "o1ço",
    "o1çu",
    "o1da",
    "o1dy",
    "o1do",
    "o1du",
    "o1fa",
    "o1fy",
    "o1fo",
    "o1fu",
    "o1ga",
    "o1gy",
    "o1go",
    "o1gu",
    "o1ha",
    "o1hy",
    "o1ho",
    "o1hu",
    "o1ja",
    "o1jy",
    "o1jo",
    "o1ju",
    "o1ka",
    "o1ky",
    "o1ko",
    "o1ku",
    "o1la",
    "o1ly",
    "o1lo",
    "o1lu",
    "o1ma",
    "o1my",
    "o1mo",
    "o1mu",
    "o1na",
    "o1ny",
    "o1no",
    "o1nu",
    "o1pa",
    "o1py",
    "o1po",
    "o1pu",
    "o1ra",
    "o1ry",
    "o1ro",
    "o1ru",
    "o1sa",
    "o1sy",
    "o1so",
    "o1su",
    "o1ta",
    "o1ty",
    "o1to",
    "o1tu",
    "o1wa",
    "o1wy",
    "o1wo",
    "o1wu",
    "o1ýa",
    "o1ýy",
    "o1ýo",
    "o1ýu",
    "o1za",
    "o1zy",
    "o1zo",
    "o1zu",
    "o1ňa",
    "o1ňy",
    "o1ňo",
    "o1ňu",
    "o1ža",
    "o1žy",
    "o1žo",
    "o1žu",
    "o1şa",
    "o1şy",
    "o1şo",
    "o1şu",
    "u1ba",
    "u1by",
    "u1bo",
    "u1bu",
    "u1ça",
    "u1çy",
    "u1ço",
    "u1çu",
    "u1da",
    "u1dy",
    "u1do",
    "u1du",
    "u1fa",
    "u1fy",
    "u1fo",
    "u1fu",
    "u1ga",
    "u1gy",
    "u1go",
    "u1gu",
    "u1ha",
    "u1hy",
    "u1ho",
    "u1hu",
    "u1ja",
    "u1jy",
    "u1jo",
    "u1ju",
    "u1ka",
    "u1ky",
    "u1ko",
    "u1ku",
    "u1la",
    "u1ly",
    "u1lo",
    "u1lu",
    "u1ma",
    "u1my",
    "u1mo",
    "u1mu",
    "u1na",
    "u1ny",
    "u1no",
    "u1nu",
    "u1pa",
    "u1py",
    "u1po",
    "u1pu",
    "u1ra",
    "u1ry",
    "u1ro",
    "u1ru",
    "u1sa",
    "u1sy",
    "u1so",
    "u1su",
    "u1ta",
    "u1ty",
    "u1to",
    "u1tu",
    "u1wa",
    "u1wy",
    "u1wo",
    "u1wu",
    "u1ýa",
    "u1ýy",
    "u1ýo",
    "u1ýu",
    "u1za",
    "u1zy",
    "u1zo",
    "u1zu",
    "u1ňa",
    "u1ňy",
    "u1ňo",
    "u1ňu",
    "u1ža",
    "u1žy",
    "u1žo",
    "u1žu",
    "u1şa",
    "u1şy",
    "u1şo",
    "u1şu",
    // These combinations occur in words of foreign origin or joined words
    "a1bi",
    "a1be",
    "y1bä",
    "y1bi",
    "y1be",
    "o1bi",
    "o1be",
    "u1bi",
    "u1be",
    "i1ba",
    "i1bo",
    "e1ba",
    "e1bo",
    "ä1bo",
    "ä1ba",
    "ö1ba",
    "a1çi",
    "a1çe",
    "y1çä",
    "y1çi",
    "y1çe",
    "o1çi",
    "o1çe",
    "u1çi",
    "u1çe",
    "i1ça",
    "i1ço",
    "e1ça",
    "e1ço",
    "ä1ço",
    "ä1ça",
    "ö1ça",
    "a1di",
    "a1de",
    "y1dä",
    "y1di",
    "y1de",
    "o1di",
    "o1de",
    "u1di",
    "u1de",
    "i1da",
    "i1do",
    "e1da",
    "e1do",
    "ä1do",
    "ä1da",
    "ö1da",
    "a1fi",
    "a1fe",
    "y1fä",
    "y1fi",
    "y1fe",
    "o1fi",
    "o1fe",
    "u1fi",
    "u1fe",
    "i1fa",
    "i1fo",
    "e1fa",
    "e1fo",
    "ä1fo",
    "ä1fa",
    "ö1fa",
    "a1gi",
    "a1ge",
    "y1gä",
    "y1gi",
    "y1ge",
    "o1gi",
    "o1ge",
    "u1gi",
    "u1ge",
    "i1ga",
    "i1go",
    "e1ga",
    "e1go",
    "ä1go",
    "ä1ga",
    "ö1ga",
    "a1hi",
    "a1he",
    "y1hä",
    "y1hi",
    "y1he",
    "o1hi",
    "o1he",
    "u1hi",
    "u1he",
    "i1ha",
    "i1ho",
    "e1ha",
    "e1ho",
    "ä1ho",
    "ä1ha",
    "ö1ha",
    "a1ji",
    "a1je",
    "y1jä",
    "y1ji",
    "y1je",
    "o1ji",
    "o1je",
    "u1ji",
    "u1je",
    "i1ja",
    "i1jo",
    "e1ja",
    "e1jo",
    "ä1jo",
    "ä1ja",
    "ö1ja",
    "a1ki",
    "a1ke",
    "y1kä",
    "y1ki",
    "y1ke",
    "o1ki",
    "o1ke",
    "u1ki",
    "u1ke",
    "i1ka",
    "i1ko",
    "e1ka",
    "e1ko",
    "ä1ko",
    "ä1ka",
    "ö1ka",
    "a1li",
    "a1le",
    "y1lä",
    "y1li",
    "y1le",
    "o1li",
    "o1le",
    "u1li",
    "u1le",
    "i1la",
    "i1lo",
    "e1la",
    "e1lo",
    "ä1lo",
    "ä1la",
    "ö1la",
    "a1mi",
    "a1me",
    "y1mä",
    "y1mi",
    "y1me",
    "o1mi",
    "o1me",
    "u1mi",
    "u1me",
    "i1ma",
    "i1mo",
    "e1ma",
    "e1mo",
    "ä1mo",
    "ä1ma",
    "ö1ma",
    "a1ni",
    "a1ne",
    "y1nä",
    "y1ni",
    "y1ne",
    "o1ni",
    "o1ne",
    "u1ni",
    "u1ne",
    "i1na",
    "i1no",
    "e1na",
    "e1no",
    "ä1no",
    "ä1na",
    "ö1na",
    "a1pi",
    "a1pe",
    "y1pä",
    "y1pi",
    "y1pe",
    "o1pi",
    "o1pe",
    "u1pi",
    "u1pe",
    "i1pa",
    "i1po",
    "e1pa",
    "e1po",
    "ä1po",
    "ä1pa",
    "ö1pa",
    "a1ri",
    "a1re",
    "y1rä",
    "y1ri",
    "y1re",
    "o1ri",
    "o1re",
    "u1ri",
    "u1re",
    "i1ra",
    "i1ro",
    "e1ra",
    "e1ro",
    "ä1ro",
    "ä1ra",
    "ö1ra",
    "a1si",
    "a1se",
    "y1sä",
    "y1si",
    "y1se",
    "o1si",
    "o1se",
    "u1si",
    "u1se",
    "i1sa",
    "i1so",
    "e1sa",
    "e1so",
    "ä1so",
    "ä1sa",
    "ö1sa",
    "a1ti",
    "a1te",
    "y1tä",
    "y1ti",
    "y1te",
    "o1ti",
    "o1te",
    "u1ti",
    "u1te",
    "i1ta",
    "i1to",
    "e1ta",
    "e1to",
    "ä1to",
    "ä1ta",
    "ö1ta",
    "a1wi",
    "a1we",
    "y1wä",
    "y1wi",
    "y1we",
    "o1wi",
    "o1we",
    "u1wi",
    "u1we",
    "i1wa",
    "i1wo",
    "e1wa",
    "e1wo",
    "ä1wo",
    "ä1wa",
    "ö1wa",
    "a1ýi",
    "a1ýe",
    "y1ýä",
    "y1ýi",
    "y1ýe",
    "o1ýi",
    "o1ýe",
    "u1ýi",
    "u1ýe",
    "i1ýa",
    "i1ýo",
    "e1ýa",
    "e1ýo",
    "ä1ýo",
    "ä1ýa",
    "ö1ýa",
    "a1zi",
    "a1ze",
    "y1zä",
    "y1zi",
    "y1ze",
    "o1zi",
    "o1ze",
    "u1zi",
    "u1ze",
    "i1za",
    "i1zo",
    "e1za",
    "e1zo",
    "ä1zo",
    "ä1za",
    "ö1za",
    "a1ňi",
    "a1ňe",
    "y1ňä",
    "y1ňi",
    "y1ňe",
    "o1ňi",
    "o1ňe",
    "u1ňi",
    "u1ňe",
    "i1ňa",
    "i1ňo",
    "e1ňa",
    "e1ňo",
    "ä1ňo",
    "ä1ňa",
    "ö1ňa",
    "a1ži",
    "a1že",
    "y1žä",
    "y1ži",
    "y1že",
    "o1ži",
    "o1že",
    "u1ži",
    "u1že",
    "i1ža",
    "i1žo",
    "e1ža",
    "e1žo",
    "ä1žo",
    "ä1ža",
    "ö1ža",
    "a1şi",
    "a1şe",
    "y1şä",
    "y1şi",
    "y1şe",
    "o1şi",
    "o1şe",
    "u1şi",
    "u1şe",
    "i1şa",
    "i1şo",
    "e1şa",
    "e1şo",
    "ä1şo",
    "ä1şa",
    "ö1şa",
    // Allow hyphen between two consonants (if there is only two of them), except when they are at the begining of the word
    "b1b",
    ".b2b",
    "b1ç",
    ".b2ç",
    "b1d",
    ".b2d",
    "b1f",
    ".b2f",
    "b1g",
    ".b2g",
    "b1h",
    ".b2h",
    "b1j",
    ".b2j",
    "b1k",
    ".b2k",
    "b1l",
    ".b2l",
    "b1m",
    ".b2m",
    "b1n",
    ".b2n",
    "b1p",
    ".b2p",
    "b1r",
    ".b2r",
    "b1s",
    ".b2s",
    "b1t",
    ".b2t",
    "b1w",
    ".b2w",
    "b1ý",
    ".b2ý",
    "b1z",
    ".b2z",
    "b1ň",
    ".b2ň",
    "b1ž",
    ".b2ž",
    "b1ş",
    ".b2ş",
    "ç1b",
    ".ç2b",
    "ç1ç",
    ".ç2ç",
    "ç1d",
    ".ç2d",
    "ç1f",
    ".ç2f",
    "ç1g",
    ".ç2g",
    "ç1h",
    ".ç2h",
    "ç1j",
    ".ç2j",
    "ç1k",
    ".ç2k",
    "ç1l",
    ".ç2l",
    "ç1m",
    ".ç2m",
    "ç1n",
    ".ç2n",
    "ç1p",
    ".ç2p",
    "ç1r",
    ".ç2r",
    "ç1s",
    ".ç2s",
    "ç1t",
    ".ç2t",
    "ç1w",
    ".ç2w",
    "ç1ý",
    ".ç2ý",
    "ç1z",
    ".ç2z",
    "ç1ň",
    ".ç2ň",
    "ç1ž",
    ".ç2ž",
    "ç1ş",
    ".ç2ş",
    "d1b",
    ".d2b",
    "d1ç",
    ".d2ç",
    "d1d",
    ".d2d",
    "d1f",
    ".d2f",
    "d1g",
    ".d2g",
    "d1h",
    ".d2h",
    "d1j",
    ".d2j",
    "d1k",
    ".d2k",
    "d1l",
    ".d2l",
    "d1m",
    ".d2m",
    "d1n",
    ".d2n",
    "d1p",
    ".d2p",
    "d1r",
    ".d2r",
    "d1s",
    ".d2s",
    "d1t",
    ".d2t",
    "d1w",
    ".d2w",
    "d1ý",
    ".d2ý",
    "d1z",
    ".d2z",
    "d1ň",
    ".d2ň",
    "d1ž",
    ".d2ž",
    "d1ş",
    ".d2ş",
    "f1b",
    ".f2b",
    "f1ç",
    ".f2ç",
    "f1d",
    ".f2d",
    "f1f",
    ".f2f",
    "f1g",
    ".f2g",
    "f1h",
    ".f2h",
    "f1j",
    ".f2j",
    "f1k",
    ".f2k",
    "f1l",
    ".f2l",
    "f1m",
    ".f2m",
    "f1n",
    ".f2n",
    "f1p",
    ".f2p",
    "f1r",
    ".f2r",
    "f1s",
    ".f2s",
    "f1t",
    ".f2t",
    "f1w",
    ".f2w",
    "f1ý",
    ".f2ý",
    "f1z",
    ".f2z",
    "f1ň",
    ".f2ň",
    "f1ž",
    ".f2ž",
    "f1ş",
    ".f2ş",
    "g1b",
    ".g2b",
    "g1ç",
    ".g2ç",
    "g1d",
    ".g2d",
    "g1f",
    ".g2f",
    "g1g",
    ".g2g",
    "g1h",
    ".g2h",
    "g1j",
    ".g2j",
    "g1k",
    ".g2k",
    "g1l",
    ".g2l",
    "g1m",
    ".g2m",
    "g1n",
    ".g2n",
    "g1p",
    ".g2p",
    "g1r",
    ".g2r",
    "g1s",
    ".g2s",
    "g1t",
    ".g2t",
    "g1w",
    ".g2w",
    "g1ý",
    ".g2ý",
    "g1z",
    ".g2z",
    "g1ň",
    ".g2ň",
    "g1ž",
    ".g2ž",
    "g1ş",
    ".g2ş",
    "h1b",
    ".h2b",
    "h1ç",
    ".h2ç",
    "h1d",
    ".h2d",
    "h1f",
    ".h2f",
    "h1g",
    ".h2g",
    "h1h",
    ".h2h",
    "h1j",
    ".h2j",
    "h1k",
    ".h2k",
    "h1l",
    ".h2l",
    "h1m",
    ".h2m",
    "h1n",
    ".h2n",
    "h1p",
    ".h2p",
    "h1r",
    ".h2r",
    "h1s",
    ".h2s",
    "h1t",
    ".h2t",
    "h1w",
    ".h2w",
    "h1ý",
    ".h2ý",
    "h1z",
    ".h2z",
    "h1ň",
    ".h2ň",
    "h1ž",
    ".h2ž",
    "h1ş",
    ".h2ş",
    "j1b",
    ".j2b",
    "j1ç",
    ".j2ç",
    "j1d",
    ".j2d",
    "j1f",
    ".j2f",
    "j1g",
    ".j2g",
    "j1h",
    ".j2h",
    "j1j",
    ".j2j",
    "j1k",
    ".j2k",
    "j1l",
    ".j2l",
    "j1m",
    ".j2m",
    "j1n",
    ".j2n",
    "j1p",
    ".j2p",
    "j1r",
    ".j2r",
    "j1s",
    ".j2s",
    "j1t",
    ".j2t",
    "j1w",
    ".j2w",
    "j1ý",
    ".j2ý",
    "j1z",
    ".j2z",
    "j1ň",
    ".j2ň",
    "j1ž",
    ".j2ž",
    "j1ş",
    ".j2ş",
    "k1b",
    ".k2b",
    "k1ç",
    ".k2ç",
    "k1d",
    ".k2d",
    "k1f",
    ".k2f",
    "k1g",
    ".k2g",
    "k1h",
    ".k2h",
    "k1j",
    ".k2j",
    "k1k",
    ".k2k",
    "k1l",
    ".k2l",
    "k1m",
    ".k2m",
    "k1n",
    ".k2n",
    "k1p",
    ".k2p",
    "k1r",
    ".k2r",
    "k1s",
    ".k2s",
    "k1t",
    ".k2t",
    "k1w",
    ".k2w",
    "k1ý",
    ".k2ý",
    "k1z",
    ".k2z",
    "k1ň",
    ".k2ň",
    "k1ž",
    ".k2ž",
    "k1ş",
    ".k2ş",
    "l1b",
    ".l2b",
    "l1ç",
    ".l2ç",
    "l1d",
    ".l2d",
    "l1f",
    ".l2f",
    "l1g",
    ".l2g",
    "l1h",
    ".l2h",
    "l1j",
    ".l2j",
    "l1k",
    ".l2k",
    "l1l",
    ".l2l",
    "l1m",
    ".l2m",
    "l1n",
    ".l2n",
    "l1p",
    ".l2p",
    "l1r",
    ".l2r",
    "l1s",
    ".l2s",
    "l1t",
    ".l2t",
    "l1w",
    ".l2w",
    "l1ý",
    ".l2ý",
    "l1z",
    ".l2z",
    "l1ň",
    ".l2ň",
    "l1ž",
    ".l2ž",
    "l1ş",
    ".l2ş",
    "m1b",
    ".m2b",
    "m1ç",
    ".m2ç",
    "m1d",
    ".m2d",
    "m1f",
    ".m2f",
    "m1g",
    ".m2g",
    "m1h",
    ".m2h",
    "m1j",
    ".m2j",
    "m1k",
    ".m2k",
    "m1l",
    ".m2l",
    "m1m",
    ".m2m",
    "m1n",
    ".m2n",
    "m1p",
    ".m2p",
    "m1r",
    ".m2r",
    "m1s",
    ".m2s",
    "m1t",
    ".m2t",
    "m1w",
    ".m2w",
    "m1ý",
    ".m2ý",
    "m1z",
    ".m2z",
    "m1ň",
    ".m2ň",
    "m1ž",
    ".m2ž",
    "m1ş",
    ".m2ş",
    "n1b",
    ".n2b",
    "n1ç",
    ".n2ç",
    "n1d",
    ".n2d",
    "n1f",
    ".n2f",
    "n1g",
    ".n2g",
    "n1h",
    ".n2h",
    "n1j",
    ".n2j",
    "n1k",
    ".n2k",
    "n1l",
    ".n2l",
    "n1m",
    ".n2m",
    "n1n",
    ".n2n",
    "n1p",
    ".n2p",
    "n1r",
    ".n2r",
    "n1s",
    ".n2s",
    "n1t",
    ".n2t",
    "n1w",
    ".n2w",
    "n1ý",
    ".n2ý",
    "n1z",
    ".n2z",
    "n1ň",
    ".n2ň",
    "n1ž",
    ".n2ž",
    "n1ş",
    ".n2ş",
    "p1b",
    ".p2b",
    "p1ç",
    ".p2ç",
    "p1d",
    ".p2d",
    "p1f",
    ".p2f",
    "p1g",
    ".p2g",
    "p1h",
    ".p2h",
    "p1j",
    ".p2j",
    "p1k",
    ".p2k",
    "p1l",
    ".p2l",
    "p1m",
    ".p2m",
    "p1n",
    ".p2n",
    "p1p",
    ".p2p",
    "p1r",
    ".p2r",
    "p1s",
    ".p2s",
    "p1t",
    ".p2t",
    "p1w",
    ".p2w",
    "p1ý",
    ".p2ý",
    "p1z",
    ".p2z",
    "p1ň",
    ".p2ň",
    "p1ž",
    ".p2ž",
    "p1ş",
    ".p2ş",
    "r1b",
    ".r2b",
    "r1ç",
    ".r2ç",
    "r1d",
    ".r2d",
    "r1f",
    ".r2f",
    "r1g",
    ".r2g",
    "r1h",
    ".r2h",
    "r1j",
    ".r2j",
    "r1k",
    ".r2k",
    "r1l",
    ".r2l",
    "r1m",
    ".r2m",
    "r1n",
    ".r2n",
    "r1p",
    ".r2p",
    "r1r",
    ".r2r",
    "r1s",
    ".r2s",
    "r1t",
    ".r2t",
    "r1w",
    ".r2w",
    "r1ý",
    ".r2ý",
    "r1z",
    ".r2z",
    "r1ň",
    ".r2ň",
    "r1ž",
    ".r2ž",
    "r1ş",
    ".r2ş",
    "s1b",
    ".s2b",
    "s1ç",
    ".s2ç",
    "s1d",
    ".s2d",
    "s1f",
    ".s2f",
    "s1g",
    ".s2g",
    "s1h",
    ".s2h",
    "s1j",
    ".s2j",
    "s1k",
    ".s2k",
    "s1l",
    ".s2l",
    "s1m",
    ".s2m",
    "s1n",
    ".s2n",
    "s1p",
    ".s2p",
    "s1r",
    ".s2r",
    "s1s",
    ".s2s",
    "s1t",
    ".s2t",
    "s1w",
    ".s2w",
    "s1ý",
    ".s2ý",
    "s1z",
    ".s2z",
    "s1ň",
    ".s2ň",
    "s1ž",
    ".s2ž",
    "s1ş",
    ".s2ş",
    "t1b",
    ".t2b",
    "t1ç",
    ".t2ç",
    "t1d",
    ".t2d",
    "t1f",
    ".t2f",
    "t1g",
    ".t2g",
    "t1h",
    ".t2h",
    "t1j",
    ".t2j",
    "t1k",
    ".t2k",
    "t1l",
    ".t2l",
    "t1m",
    ".t2m",
    "t1n",
    ".t2n",
    "t1p",
    ".t2p",
    "t1r",
    ".t2r",
    "t1s",
    ".t2s",
    "t1t",
    ".t2t",
    "t1w",
    ".t2w",
    "t1ý",
    ".t2ý",
    "t1z",
    ".t2z",
    "t1ň",
    ".t2ň",
    "t1ž",
    ".t2ž",
    "t1ş",
    ".t2ş",
    "w1b",
    ".w2b",
    "w1ç",
    ".w2ç",
    "w1d",
    ".w2d",
    "w1f",
    ".w2f",
    "w1g",
    ".w2g",
    "w1h",
    ".w2h",
    "w1j",
    ".w2j",
    "w1k",
    ".w2k",
    "w1l",
    ".w2l",
    "w1m",
    ".w2m",
    "w1n",
    ".w2n",
    "w1p",
    ".w2p",
    "w1r",
    ".w2r",
    "w1s",
    ".w2s",
    "w1t",
    ".w2t",
    "w1w",
    ".w2w",
    "w1ý",
    ".w2ý",
    "w1z",
    ".w2z",
    "w1ň",
    ".w2ň",
    "w1ž",
    ".w2ž",
    "w1ş",
    ".w2ş",
    "ý1b",
    ".ý2b",
    "ý1ç",
    ".ý2ç",
    "ý1d",
    ".ý2d",
    "ý1f",
    ".ý2f",
    "ý1g",
    ".ý2g",
    "ý1h",
    ".ý2h",
    "ý1j",
    ".ý2j",
    "ý1k",
    ".ý2k",
    "ý1l",
    ".ý2l",
    "ý1m",
    ".ý2m",
    "ý1n",
    ".ý2n",
    "ý1p",
    ".ý2p",
    "ý1r",
    ".ý2r",
    "ý1s",
    ".ý2s",
    "ý1t",
    ".ý2t",
    "ý1w",
    ".ý2w",
    "ý1ý",
    ".ý2ý",
    "ý1z",
    ".ý2z",
    "ý1ň",
    ".ý2ň",
    "ý1ž",
    ".ý2ž",
    "ý1ş",
    ".ý2ş",
    "z1b",
    ".z2b",
    "z1ç",
    ".z2ç",
    "z1d",
    ".z2d",
    "z1f",
    ".z2f",
    "z1g",
    ".z2g",
    "z1h",
    ".z2h",
    "z1j",
    ".z2j",
    "z1k",
    ".z2k",
    "z1l",
    ".z2l",
    "z1m",
    ".z2m",
    "z1n",
    ".z2n",
    "z1p",
    ".z2p",
    "z1r",
    ".z2r",
    "z1s",
    ".z2s",
    "z1t",
    ".z2t",
    "z1w",
    ".z2w",
    "z1ý",
    ".z2ý",
    "z1z",
    ".z2z",
    "z1ň",
    ".z2ň",
    "z1ž",
    ".z2ž",
    "z1ş",
    ".z2ş",
    "ň1b",
    ".ň2b",
    "ň1ç",
    ".ň2ç",
    "ň1d",
    ".ň2d",
    "ň1f",
    ".ň2f",
    "ň1g",
    ".ň2g",
    "ň1h",
    ".ň2h",
    "ň1j",
    ".ň2j",
    "ň1k",
    ".ň2k",
    "ň1l",
    ".ň2l",
    "ň1m",
    ".ň2m",
    "ň1n",
    ".ň2n",
    "ň1p",
    ".ň2p",
    "ň1r",
    ".ň2r",
    "ň1s",
    ".ň2s",
    "ň1t",
    ".ň2t",
    "ň1w",
    ".ň2w",
    "ň1ý",
    ".ň2ý",
    "ň1z",
    ".ň2z",
    "ň1ň",
    ".ň2ň",
    "ň1ž",
    ".ň2ž",
    "ň1ş",
    ".ň2ş",
    "ž1b",
    ".ž2b",
    "ž1ç",
    ".ž2ç",
    "ž1d",
    ".ž2d",
    "ž1f",
    ".ž2f",
    "ž1g",
    ".ž2g",
    "ž1h",
    ".ž2h",
    "ž1j",
    ".ž2j",
    "ž1k",
    ".ž2k",
    "ž1l",
    ".ž2l",
    "ž1m",
    ".ž2m",
    "ž1n",
    ".ž2n",
    "ž1p",
    ".ž2p",
    "ž1r",
    ".ž2r",
    "ž1s",
    ".ž2s",
    "ž1t",
    ".ž2t",
    "ž1w",
    ".ž2w",
    "ž1ý",
    ".ž2ý",
    "ž1z",
    ".ž2z",
    "ž1ň",
    ".ž2ň",
    "ž1ž",
    ".ž2ž",
    "ž1ş",
    ".ž2ş",
    "ş1b",
    ".ş2b",
    "ş1ç",
    ".ş2ç",
    "ş1d",
    ".ş2d",
    "ş1f",
    ".ş2f",
    "ş1g",
    ".ş2g",
    "ş1h",
    ".ş2h",
    "ş1j",
    ".ş2j",
    "ş1k",
    ".ş2k",
    "ş1l",
    ".ş2l",
    "ş1m",
    ".ş2m",
    "ş1n",
    ".ş2n",
    "ş1p",
    ".ş2p",
    "ş1r",
    ".ş2r",
    "ş1s",
    ".ş2s",
    "ş1t",
    ".ş2t",
    "ş1w",
    ".ş2w",
    "ş1ý",
    ".ş2ý",
    "ş1z",
    ".ş2z",
    "ş1ň",
    ".ş2ň",
    "ş1ž",
    ".ş2ž",
    "ş1ş",
    ".ş2ş",
    // Patterns for triple consonants. There may be additions to this category, as this list is not exhaustive.
    "ý2t1b",
    "ý2n1b",
    "ý2d1b",
    "r2t1b",
    "ý2p1b",
    "l2p1b",
    "l2t1b",
    "g2t1b",
    "n2t1b",
    "r2k1b",
    "r2p1b",
    "k2t1b",
    "r2h1b",
    "s2t1b",
    "l2k1b",
    "w2p1b",
    "n2s1b",
    "r2s1b",
    "l2m1b",
    "ý2t1ç",
    "ý2n1ç",
    "ý2d1ç",
    "r2t1ç",
    "ý2p1ç",
    "l2p1ç",
    "l2t1ç",
    "g2t1ç",
    "n2t1ç",
    "r2k1ç",
    "r2p1ç",
    "k2t1ç",
    "r2h1ç",
    "s2t1ç",
    "l2k1ç",
    "w2p1ç",
    "n2s1ç",
    "r2s1ç",
    "l2m1ç",
    "ý2t1d",
    "ý2n1d",
    "ý2d1d",
    "r2t1d",
    "ý2p1d",
    "l2p1d",
    "l2t1d",
    "g2t1d",
    "n2t1d",
    "r2k1d",
    "r2p1d",
    "k2t1d",
    "r2h1d",
    "s2t1d",
    "l2k1d",
    "w2p1d",
    "n2s1d",
    "r2s1d",
    "l2m1d",
    "ý2t1g",
    "ý2n1g",
    "ý2d1g",
    "r2t1g",
    "ý2p1g",
    "l2p1g",
    "l2t1g",
    "g2t1g",
    "n2t1g",
    "r2k1g",
    "r2p1g",
    "k2t1g",
    "r2h1g",
    "s2t1g",
    "l2k1g",
    "w2p1g",
    "n2s1g",
    "r2s1g",
    "l2m1g",
    "ý2t1j",
    "ý2n1j",
    "ý2d1j",
    "r2t1j",
    "ý2p1j",
    "l2p1j",
    "l2t1j",
    "g2t1j",
    "n2t1j",
    "r2k1j",
    "r2p1j",
    "k2t1j",
    "r2h1j",
    "s2t1j",
    "l2k1j",
    "w2p1j",
    "n2s1j",
    "r2s1j",
    "l2m1j",
    "ý2t1k",
    "ý2n1k",
    "ý2d1k",
    "r2t1k",
    "ý2p1k",
    "l2p1k",
    "l2t1k",
    "g2t1k",
    "n2t1k",
    "r2k1k",
    "r2p1k",
    "k2t1k",
    "r2h1k",
    "s2t1k",
    "l2k1k",
    "w2p1k",
    "n2s1k",
    "r2s1k",
    "l2m1k",
    "ý2t1l",
    "ý2n1l",
    "ý2d1l",
    "r2t1l",
    "ý2p1l",
    "l2p1l",
    "l2t1l",
    "g2t1l",
    "n2t1l",
    "r2k1l",
    "r2p1l",
    "k2t1l",
    "r2h1l",
    "s2t1l",
    "l2k1l",
    "w2p1l",
    "n2s1l",
    "r2s1l",
    "l2m1l",
    "ý2t1m",
    "ý2n1m",
    "ý2d1m",
    "r2t1m",
    "ý2p1m",
    "l2p1m",
    "l2t1m",
    "g2t1m",
    "n2t1m",
    "r2k1m",
    "r2p1m",
    "k2t1m",
    "r2h1m",
    "s2t1m",
    "l2k1m",
    "w2p1m",
    "n2s1m",
    "r2s1m",
    "l2m1m",
    "ý2t1n",
    "ý2n1n",
    "ý2d1n",
    "r2t1n",
    "ý2p1n",
    "l2p1n",
    "l2t1n",
    "g2t1n",
    "n2t1n",
    "r2k1n",
    "r2p1n",
    "k2t1n",
    "r2h1n",
    "s2t1n",
    "l2k1n",
    "w2p1n",
    "n2s1n",
    "r2s1n",
    "l2m1n",
    "ý2t1p",
    "ý2n1p",
    "ý2d1p",
    "r2t1p",
    "ý2p1p",
    "l2p1p",
    "l2t1p",
    "g2t1p",
    "n2t1p",
    "r2k1p",
    "r2p1p",
    "k2t1p",
    "r2h1p",
    "s2t1p",
    "l2k1p",
    "w2p1p",
    "n2s1p",
    "r2s1p",
    "l2m1p",
    "ý2t1s",
    "ý2n1s",
    "ý2d1s",
    "r2t1s",
    "ý2p1s",
    "l2p1s",
    "l2t1s",
    "g2t1s",
    "n2t1s",
    "r2k1s",
    "r2p1s",
    "k2t1s",
    "r2h1s",
    "s2t1s",
    "l2k1s",
    "w2p1s",
    "n2s1s",
    "r2s1s",
    "l2m1s",
    "ý2t1t",
    "ý2n1t",
    "ý2d1t",
    "r2t1t",
    "ý2p1t",
    "l2p1t",
    "l2t1t",
    "g2t1t",
    "n2t1t",
    "r2k1t",
    "r2p1t",
    "k2t1t",
    "r2h1t",
    "s2t1t",
    "l2k1t",
    "w2p1t",
    "n2s1t",
    "r2s1t",
    "l2m1t",
    "ý2t1ý",
    "ý2n1ý",
    "ý2d1ý",
    "r2t1ý",
    "ý2p1ý",
    "l2p1ý",
    "l2t1ý",
    "g2t1ý",
    "n2t1ý",
    "r2k1ý",
    "r2p1ý",
    "k2t1ý",
    "r2h1ý",
    "s2t1ý",
    "l2k1ý",
    "w2p1ý",
    "n2s1ý",
    "r2s1ý",
    "l2m1ý",
    "ý2t1z",
    "ý2n1z",
    "ý2d1z",
    "r2t1z",
    "ý2p1z",
    "l2p1z",
    "l2t1z",
    "g2t1z",
    "n2t1z",
    "r2k1z",
    "r2p1z",
    "k2t1z",
    "r2h1z",
    "s2t1z",
    "l2k1z",
    "w2p1z",
    "n2s1z",
    "r2s1z",
    "l2m1z",
    "ý2t1ş",
    "ý2n1ş",
    "ý2d1ş",
    "r2t1ş",
    "ý2p1ş",
    "l2p1ş",
    "l2t1ş",
    "g2t1ş",
    "n2t1ş",
    "r2k1ş",
    "r2p1ş",
    "k2t1ş",
    "r2h1ş",
    "s2t1ş",
    "l2k1ş",
    "w2p1ş",
    "n2s1ş",
    "r2s1ş",
    "l2m1ş",
    // Exceptions and single word occurence patterns for words of foreign origin i.e. Russian
    "s2k1d",
    "l1s2k",
    "l1s2t",
    "s1t2r",
    "n2g1l",
    "n1g2r",
    "s2k1w",
    ""
  ];

  return {
    patterns: patterns,
    exceptions: hyphenation
  };
});
