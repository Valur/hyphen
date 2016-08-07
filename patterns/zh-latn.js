// Hyphenation patterns for Chinese pinyin syllables
// Based on http://mirrors.ctan.org/language/hyph-utf8/tex/generic/hyph-utf8/patterns/tex/hyph-zh-latn-pinyin.tex
// Source www.ctan.org

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hyphenationPatternsZhLatn = factory();
  }
}(this, function () {

  // Hyphenation patterns
  var patterns=`
a1b
a1c
a1d
a1f
a1g
a1h
a1j
a1k
a1l
a1m
a1p
a1q
a1r
a1s
a1t
a1w
a1x
a1y
a1z
e1b
e1c
e1d
e1f
e1g
e1h
e1j
e1k
e1l
e1m
e1p
e1q
e1s
e1t
e1w
e1x
e1y
e1z
1ga
g1b
g1c
g1d
1ge
g1f
g1g
g1h
g1j
g1k
g1l
g1m
g1n
1go
g1p
g1q
g1r
g1s
g1t
1gu
g1w
g1x
g1y
g1z
i1b
i1c
i1d
i1f
i1g
i1h
i1j
i1k
i1l
i1m
i1p
i1q
i1r
i1s
i1t
i1w
i1x
i1y
i1z
1na
n1b
n1c
n1d
1ne
n1f
n1h
1ni
n1j
n1k
n1l
n1m
n1n
1no
n1p
n1q
n1r
n1s
n1t
1nu
1nü
n1w
n1x
n1y
n1z
o1b
o1c
o1d
o1f
o1g
o1h
o1j
o1k
o1l
o1m
o1p
o1q
o1r
o1s
o1t
o1w
o1x
o1y
o1z
1ra
r1b
r1c
r1d
1re
r1f
r1g
r1h
1ri
r1j
r1k
r1l
r1m
r1n
1ro
r1p
r1q
r1r
r1s
r1t
1ru
r1w
r1x
r1y
r1z
u1b
u1c
u1d
u1f
u1g
u1h
u1j
u1k
u1l
u1m
u1p
u1q
u1r
u1s
u1t
u1w
u1x
u1y
u1z
ü1b
ü1c
ü1d
ü1f
ü1g
ü1h
ü1j
ü1k
ü1l
ü1m
ü1n
ü1p
ü1q
ü1r
ü1s
ü1t
ü1w
ü1x
ü1y
ü1z
'1a
'1e
'1o
`;

  // Hyphenation exceptions
  var exceptions=`
`;

  return {
    patterns: patterns,
    exceptions: exceptions
  };
}));
