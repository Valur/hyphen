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
    root.hyphenationPatternsGl = factory();
  }
})(this, function () {
  var patterns = [],
    hyphenation = [];

  // title: Hyphenation patterns for Galician
  // copyright: Copyright (C) 2006, 2007, 2008, 2010 Javier A. Múgica
  // notice: This file is part of the hyph-utf8 package.
  //     See http://www.hyphenation.org/tex for more information.
  // language:
  //     name: Galician
  //     tag: gl
  // version: 2010/04/23
  // authors:
  //   -
  //     name: Javier A. Múgica
  //     contact: javier (at) digi21.eu
  // licence:
  //     name: LPPL
  //     version: 1.3
  //     status: maintained
  //     maintainer: Javier A. Múgica
  //     url: https://latex-project.org/lppl/lppl-1-3.html
  //
  // ==========================================
  // Generated with the mkpattern utility (v. 1.2), on 2010/04/23
  // The original source file were glpatter-utf8.tex
  // This is a generated file
  //
  // Note that there is no 'j' nor 'y' in Galician

  var patterns = [
    "3ï3a",
    "a1a",
    "e1e",
    "o1o",
    "zo2o",
    "a1á",
    "e1é",
    "o1ó",
    "2ai.",
    "2au.",
    "2ei.",
    "2eu.",
    "2oi.",
    "2ou.",
    //
    "a1ia",
    "a1ie",
    "a1io",
    "a1iá",
    "e1ia",
    "e1ie",
    "e1io",
    "e1iá",
    "o1ia",
    "o1ie",
    "o1io",
    "o1iá",
    "u1ia",
    "u1ie",
    "u1io",
    "u1iá",
    //
    "2ia.",
    "2ie.",
    "2io.",
    "2iá.",
    //
    "1ñ",
    "1ba",
    "1be",
    "1bi",
    "1bo",
    "1bu",
    "1bá",
    "1bé",
    "1bí",
    "1bó",
    "1bú",
    "1ca",
    "1ce",
    "1ci",
    "1co",
    "1cu",
    "1cá",
    "1cé",
    "1cí",
    "1có",
    "1cú",
    "1da",
    "1de",
    "1di",
    "1do",
    "1du",
    "1dá",
    "1dé",
    "1dí",
    "1dó",
    "1dú",
    "1fa",
    "1fe",
    "1fi",
    "1fo",
    "1fu",
    "1fá",
    "1fé",
    "1fí",
    "1fó",
    "1fú",
    "1ga",
    "1ge",
    "1gi",
    "1go",
    "1gu",
    "1gá",
    "1gé",
    "1gí",
    "1gó",
    "1gú",
    "1ha",
    "1he",
    "1hi",
    "1ho",
    "1hu",
    "1há",
    "1hé",
    "1hí",
    "1hó",
    "1hú",
    "1ka",
    "1ke",
    "1ki",
    "1ko",
    "1ku",
    "1ká",
    "1ké",
    "1kí",
    "1kó",
    "1kú",
    "1la",
    "1le",
    "1li",
    "1lo",
    "1lu",
    "1lá",
    "1lé",
    "1lí",
    "1ló",
    "1lú",
    "1ma",
    "1me",
    "1mi",
    "1mo",
    "1mu",
    "1má",
    "1mé",
    "1mí",
    "1mó",
    "1mú",
    "1na",
    "1ne",
    "1ni",
    "1no",
    "1nu",
    "1ná",
    "1né",
    "1ní",
    "1nó",
    "1nú",
    "1pa",
    "1pe",
    "1pi",
    "1po",
    "1pu",
    "1pá",
    "1pé",
    "1pí",
    "1pó",
    "1pú",
    "1ra",
    "1re",
    "1ri",
    "1ro",
    "1ru",
    "1rá",
    "1ré",
    "1rí",
    "1ró",
    "1rú",
    "1sa",
    "1se",
    "1si",
    "1so",
    "1su",
    "1sá",
    "1sé",
    "1sí",
    "1só",
    "1sú",
    "1ta",
    "1te",
    "1ti",
    "1to",
    "1tu",
    "1tá",
    "1té",
    "1tí",
    "1tó",
    "1tú",
    "1va",
    "1ve",
    "1vi",
    "1vo",
    "1vu",
    "1vá",
    "1vé",
    "1ví",
    "1vó",
    "1vú",
    "1xa",
    "1xe",
    "1xi",
    "1xo",
    "1xu",
    "1xá",
    "1xé",
    "1xí",
    "1xó",
    "1xú",
    "1za",
    "1ze",
    "1zi",
    "1zo",
    "1zu",
    "1zá",
    "1zé",
    "1zí",
    "1zó",
    "1zú",
    //
    "1qu2",
    "1c2h",
    "2ch.",
    "1g2h",
    "2gh.",
    "2k2h",
    //
    "1b2l",
    "1b2r",
    "1c2l",
    "1c2r",
    "1d2l",
    "1d2r",
    "1f2l",
    "1f2r",
    "1g2l",
    "1g2r",
    "1k2l",
    "1k2r",
    "1p2l",
    "1p2r",
    "2t2l",
    "1t2r",
    "1v2l",
    "1v2r",
    //
    "2bl.",
    "2br.",
    "2cl.",
    "2cr.",
    "2dl.",
    "2dr.",
    "2fl.",
    "2fr.",
    "2gl.",
    "2gr.",
    "2kl.",
    "2kr.",
    "2pl.",
    "2pr.",
    "2tr.",
    "2vl.",
    "2vr.",
    //
    "1l4l",
    "2ll.",
    "1r2r",
    "2rr.",
    //
    "b1p2t",
    "c1p2t",
    "d1p2t",
    "l1p2t",
    "m1p2t",
    "n1p2t",
    "r1p2t",
    "s1p2t",
    "t1p2t",
    "x1p2t",
    "b1c2t",
    "c1c2t",
    "d1c2t",
    "l1c2t",
    "m1c2t",
    "n1c2t",
    "r1c2t",
    "s1c2t",
    "t1c2t",
    "x1c2t",
    "b1c2n",
    "c1c2n",
    "d1c2n",
    "l1c2n",
    "m1c2n",
    "n1c2n",
    "r1c2n",
    "s1c2n",
    "t1c2n",
    "x1c2n",
    "b1p2s",
    "c1p2s",
    "d1p2s",
    "l1p2s",
    "m1p2s",
    "n1p2s",
    "r1p2s",
    "s1p2s",
    "t1p2s",
    "x1p2s",
    "b1m2n",
    "c1m2n",
    "d1m2n",
    "l1m2n",
    "m1m2n",
    "n1m2n",
    "r1m2n",
    "s1m2n",
    "t1m2n",
    "x1m2n",
    "b1g2n",
    "c1g2n",
    "d1g2n",
    "l1g2n",
    "m1g2n",
    "n1g2n",
    "r1g2n",
    "s1g2n",
    "t1g2n",
    "x1g2n",
    "b1f2t",
    "c1f2t",
    "d1f2t",
    "l1f2t",
    "m1f2t",
    "n1f2t",
    "r1f2t",
    "s1f2t",
    "t1f2t",
    "x1f2t",
    "b1p2n",
    "c1p2n",
    "d1p2n",
    "l1p2n",
    "m1p2n",
    "n1p2n",
    "r1p2n",
    "s1p2n",
    "t1p2n",
    "x1p2n",
    "b1c2z",
    "c1c2z",
    "d1c2z",
    "l1c2z",
    "m1c2z",
    "n1c2z",
    "r1c2z",
    "s1c2z",
    "t1c2z",
    "x1c2z",
    "b1t2s",
    "c1t2s",
    "d1t2s",
    "l1t2s",
    "m1t2s",
    "n1t2s",
    "r1t2s",
    "s1t2s",
    "t1t2s",
    "x1t2s",
    "san2c3t",
    "plan2c3t",
    //
    "2pt.",
    "2ct.",
    "2cn.",
    "2ps.",
    "2mn.",
    "2gn.",
    "2ft.",
    "2pn.",
    "2cz.",
    "2ts.",
    "un2ha",
    "2non.",
    "3mente.",
    "o2hib",
    "alde2h",
    //
    "4caca4",
    "4cago4",
    "4caga4",
    "4cagas.",
    "4puta4",
    "4puto4",
    "4meo.",
    "4mea.",
    "4meable.",
    "4meables.",
    "4peido4",
    //
    "acto1a2",
    "acto1e2",
    "acto1i2",
    "acto1o2",
    "acto1u2",
    "acto1á2",
    "acto1é2",
    "acto1í2",
    "acto1ó2",
    "acto1ú2",
    "afro1a2",
    "afro1e2",
    "afro1i2",
    "afro1o2",
    "afro1u2",
    "afro1á2",
    "afro1é2",
    "afro1í2",
    "afro1ó2",
    "afro1ú2",
    "aero1a2",
    "aero1e2",
    "aero1i2",
    "aero1o2",
    "aero1u2",
    "aero1á2",
    "aero1é2",
    "aero1í2",
    "aero1ó2",
    "aero1ú2",
    "anfi1a2",
    "anfi1e2",
    "anfi1i2",
    "anfi1o2",
    "anfi1u2",
    "anfi1á2",
    "anfi1é2",
    "anfi1í2",
    "anfi1ó2",
    "anfi1ú2",
    "anglo1a2",
    "anglo1e2",
    "anglo1i2",
    "anglo1o2",
    "anglo1u2",
    "anglo1á2",
    "anglo1é2",
    "anglo1í2",
    "anglo1ó2",
    "anglo1ú2",
    ".ante1a2",
    ".ante1e2",
    ".ante1i2",
    ".ante1o2",
    ".ante1u2",
    ".ante1á2",
    ".ante1é2",
    ".ante1í2",
    ".ante1ó2",
    ".ante1ú2",
    ".anti1a2",
    ".anti1e2",
    ".anti1i2",
    ".anti1o2",
    ".anti1u2",
    ".anti1á2",
    ".anti1é2",
    ".anti1í2",
    ".anti1ó2",
    ".anti1ú2",
    ".arqui1a2",
    ".arqui1e2",
    ".arqui1i2",
    ".arqui1o2",
    ".arqui1u2",
    ".arqui1á2",
    ".arqui1é2",
    ".arqui1í2",
    ".arqui1ó2",
    ".arqui1ú2",
    "auto1a2",
    "auto1e2",
    "auto1i2",
    "auto1o2",
    "auto1u2",
    "auto1á2",
    "auto1é2",
    "auto1í2",
    "auto1ó2",
    "auto1ú2",
    "biblio1a2",
    "biblio1e2",
    "biblio1i2",
    "biblio1o2",
    "biblio1u2",
    "biblio1á2",
    "biblio1é2",
    "biblio1í2",
    "biblio1ó2",
    "biblio1ú2",
    "bio1a2",
    "bio1e2",
    "bio1i2",
    "bio1o2",
    "bio1u2",
    "bio1á2",
    "bio1é2",
    "bio1í2",
    "bio1ó2",
    "bio1ú2",
    "cardio1a2",
    "cardio1e2",
    "cardio1i2",
    "cardio1o2",
    "cardio1u2",
    "cardio1á2",
    "cardio1é2",
    "cardio1í2",
    "cardio1ó2",
    "cardio1ú2",
    "cefalo1a2",
    "cefalo1e2",
    "cefalo1i2",
    "cefalo1o2",
    "cefalo1u2",
    "cefalo1á2",
    "cefalo1é2",
    "cefalo1í2",
    "cefalo1ó2",
    "cefalo1ú2",
    "ciclo1a2",
    "ciclo1e2",
    "ciclo1i2",
    "ciclo1o2",
    "ciclo1u2",
    "ciclo1á2",
    "ciclo1é2",
    "ciclo1í2",
    "ciclo1ó2",
    "ciclo1ú2",
    "cito1a2",
    "cito1e2",
    "cito1i2",
    "cito1o2",
    "cito1u2",
    "cito1á2",
    "cito1é2",
    "cito1í2",
    "cito1ó2",
    "cito1ú2",
    ".co1a2",
    ".co1e2",
    ".co1i2",
    ".co1o2",
    ".co1u2",
    ".co1é2",
    ".co1í2",
    ".co1ó2",
    ".co1ú2",
    "contra1a2",
    "contra1e2",
    "contra1i2",
    "contra1o2",
    "contra1u2",
    "contra1á2",
    "contra1é2",
    "contra1í2",
    "contra1ó2",
    "contra1ú2",
    "cripto1a2",
    "cripto1e2",
    "cripto1i2",
    "cripto1o2",
    "cripto1u2",
    "cripto1á2",
    "cripto1é2",
    "cripto1í2",
    "cripto1ó2",
    "cripto1ú2",
    "cromo1a2",
    "cromo1e2",
    "cromo1i2",
    "cromo1o2",
    "cromo1u2",
    "cromo1á2",
    "cromo1é2",
    "cromo1í2",
    "cromo1ó2",
    "cromo1ú2",
    "crono1a2",
    "crono1e2",
    "crono1i2",
    "crono1o2",
    "crono1u2",
    "crono1á2",
    "crono1é2",
    "crono1í2",
    "crono1ó2",
    "crono1ú2",
    "deca1a2",
    "deca1e2",
    "deca1i2",
    "deca1o2",
    "deca1u2",
    "deca1á2",
    "deca1é2",
    "deca1í2",
    "deca1ó2",
    "deca1ú2",
    ".deza1a2",
    ".deza1e2",
    ".deza1i2",
    ".deza1o2",
    ".deza1u2",
    ".deza1á2",
    ".deza1é2",
    ".deza1í2",
    ".deza1ó2",
    ".deza1ú2",
    "dinamo1a2",
    "dinamo1e2",
    "dinamo1i2",
    "dinamo1o2",
    "dinamo1u2",
    "dinamo1á2",
    "dinamo1é2",
    "dinamo1í2",
    "dinamo1ó2",
    "dinamo1ú2",
    "ecano1a2",
    "ecano1e2",
    "ecano1i2",
    "ecano1o2",
    "ecano1u2",
    "ecano1á2",
    "ecano1é2",
    "ecano1í2",
    "ecano1ó2",
    "ecano1ú2",
    "eco1a2",
    "eco1e2",
    "eco1i2",
    "eco1o2",
    "eco1u2",
    "eco1á2",
    "eco1é2",
    "eco1í2",
    "eco1ó2",
    "eco1ú2",
    "electro1a2",
    "electro1e2",
    "electro1i2",
    "electro1o2",
    "electro1u2",
    "electro1á2",
    "electro1é2",
    "electro1í2",
    "electro1ó2",
    "electro1ú2",
    "endo1a2",
    "endo1e2",
    "endo1i2",
    "endo1o2",
    "endo1u2",
    "endo1á2",
    "endo1é2",
    "endo1í2",
    "endo1ó2",
    "endo1ú2",
    "ento1a2",
    "ento1e2",
    "ento1i2",
    "ento1o2",
    "ento1u2",
    "ento1á2",
    "ento1é2",
    "ento1í2",
    "ento1ó2",
    "ento1ú2",
    "entre1a2",
    "entre1e2",
    "entre1i2",
    "entre1o2",
    "entre1u2",
    "entre1á2",
    "entre1é2",
    "entre1í2",
    "entre1ó2",
    "entre1ú2",
    "euco1a2",
    "euco1e2",
    "euco1i2",
    "euco1o2",
    "euco1u2",
    "euco1á2",
    "euco1é2",
    "euco1í2",
    "euco1ó2",
    "euco1ú2",
    "euro1a2",
    "euro1e2",
    "euro1i2",
    "euro1o2",
    "euro1u2",
    "euro1á2",
    "euro1é2",
    "euro1í2",
    "euro1ó2",
    "euro1ú2",
    "extra1a2",
    "extra1e2",
    "extra1i2",
    "extra1o2",
    "extra1u2",
    "extra1á2",
    "extra1é2",
    "extra1í2",
    "extra1ó2",
    "extra1ú2",
    "fono1a2",
    "fono1e2",
    "fono1i2",
    "fono1o2",
    "fono1u2",
    "fono1á2",
    "fono1é2",
    "fono1í2",
    "fono1ó2",
    "fono1ú2",
    "foto1a2",
    "foto1e2",
    "foto1i2",
    "foto1o2",
    "foto1u2",
    "foto1á2",
    "foto1é2",
    "foto1í2",
    "foto1ó2",
    "foto1ú2",
    "franco1a2",
    "franco1e2",
    "franco1i2",
    "franco1o2",
    "franco1u2",
    "franco1á2",
    "franco1é2",
    "franco1í2",
    "franco1ó2",
    "franco1ú2",
    "gastro1a2",
    "gastro1e2",
    "gastro1i2",
    "gastro1o2",
    "gastro1u2",
    "gastro1á2",
    "gastro1é2",
    "gastro1í2",
    "gastro1ó2",
    "gastro1ú2",
    "xeo1a2",
    "xeo1e2",
    "xeo1i2",
    "xeo1o2",
    "xeo1u2",
    "xeo1á2",
    "xeo1é2",
    "xeo1í2",
    "xeo1ó2",
    "xeo1ú2",
    "hecto1a2",
    "hecto1e2",
    "hecto1i2",
    "hecto1o2",
    "hecto1u2",
    "hecto1á2",
    "hecto1é2",
    "hecto1í2",
    "hecto1ó2",
    "hecto1ú2",
    "helio1a2",
    "helio1e2",
    "helio1i2",
    "helio1o2",
    "helio1u2",
    "helio1á2",
    "helio1é2",
    "helio1í2",
    "helio1ó2",
    "helio1ú2",
    "hemato1a2",
    "hemato1e2",
    "hemato1i2",
    "hemato1o2",
    "hemato1u2",
    "hemato1á2",
    "hemato1é2",
    "hemato1í2",
    "hemato1ó2",
    "hemato1ú2",
    "hemi1a2",
    "hemi1e2",
    "hemi1i2",
    "hemi1o2",
    "hemi1u2",
    "hemi1á2",
    "hemi1é2",
    "hemi1í2",
    "hemi1ó2",
    "hemi1ú2",
    "hexa1a2",
    "hexa1e2",
    "hexa1i2",
    "hexa1o2",
    "hexa1u2",
    "hexa1á2",
    "hexa1é2",
    "hexa1í2",
    "hexa1ó2",
    "hexa1ú2",
    "hidro1a2",
    "hidro1e2",
    "hidro1i2",
    "hidro1o2",
    "hidro1u2",
    "hidro1á2",
    "hidro1é2",
    "hidro1í2",
    "hidro1ó2",
    "hidro1ú2",
    "hipe2r1a2",
    "hipe2r1e2",
    "hipe2r1i2",
    "hipe2r1o2",
    "hipe2r1u2",
    "hipe2r1á2",
    "hipe2r1é2",
    "hipe2r1í2",
    "hipe2r1ó2",
    "hipe2r1ú2",
    "histo1a2",
    "histo1e2",
    "histo1i2",
    "histo1o2",
    "histo1u2",
    "histo1á2",
    "histo1é2",
    "histo1í2",
    "histo1ó2",
    "histo1ú2",
    "homeo1a2",
    "homeo1e2",
    "homeo1i2",
    "homeo1o2",
    "homeo1u2",
    "homeo1á2",
    "homeo1é2",
    "homeo1í2",
    "homeo1ó2",
    "homeo1ú2",
    "homo1a2",
    "homo1e2",
    "homo1i2",
    "homo1o2",
    "homo1u2",
    "homo1á2",
    "homo1é2",
    "homo1í2",
    "homo1ó2",
    "homo1ú2",
    "ibero1a2",
    "ibero1e2",
    "ibero1i2",
    "ibero1o2",
    "ibero1u2",
    "ibero1á2",
    "ibero1é2",
    "ibero1í2",
    "ibero1ó2",
    "ibero1ú2",
    "icono1a2",
    "icono1e2",
    "icono1i2",
    "icono1o2",
    "icono1u2",
    "icono1á2",
    "icono1é2",
    "icono1í2",
    "icono1ó2",
    "icono1ú2",
    ".in1a2",
    ".in1e2",
    ".in1i2",
    ".in1o2",
    ".in1u2",
    ".in1á2",
    ".in1é2",
    ".in1í2",
    ".in1ó2",
    ".in1ú2",
    ".indo1a2",
    ".indo1e2",
    ".indo1i2",
    ".indo1o2",
    ".indo1u2",
    ".indo1á2",
    ".indo1é2",
    ".indo1í2",
    ".indo1ó2",
    ".indo1ú2",
    "infra1a2",
    "infra1e2",
    "infra1i2",
    "infra1o2",
    "infra1u2",
    "infra1á2",
    "infra1é2",
    "infra1í2",
    "infra1ó2",
    "infra1ú2",
    ".inte2r1a2",
    ".inte2r1e2",
    ".inte2r1i2",
    ".inte2r1o2",
    ".inte2r1u2",
    ".inte2r1á2",
    ".inte2r1é2",
    ".inte2r1í2",
    ".inte2r1ó2",
    ".inte2r1ú2",
    "intra1a2",
    "intra1e2",
    "intra1i2",
    "intra1o2",
    "intra1u2",
    "intra1á2",
    "intra1é2",
    "intra1í2",
    "intra1ó2",
    "intra1ú2",
    ".iso1a2",
    ".iso1e2",
    ".iso1i2",
    ".iso1o2",
    ".iso1u2",
    ".iso1á2",
    ".iso1é2",
    ".iso1í2",
    ".iso1ó2",
    ".iso1ú2",
    "kilo1a2",
    "kilo1e2",
    "kilo1i2",
    "kilo1o2",
    "kilo1u2",
    "kilo1á2",
    "kilo1é2",
    "kilo1í2",
    "kilo1ó2",
    "kilo1ú2",
    "macro1a2",
    "macro1e2",
    "macro1i2",
    "macro1o2",
    "macro1u2",
    "macro1á2",
    "macro1é2",
    "macro1í2",
    "macro1ó2",
    "macro1ú2",
    "magneto1a2",
    "magneto1e2",
    "magneto1i2",
    "magneto1o2",
    "magneto1u2",
    "magneto1á2",
    "magneto1é2",
    "magneto1í2",
    "magneto1ó2",
    "magneto1ú2",
    "maxi1a2",
    "maxi1e2",
    "maxi1i2",
    "maxi1o2",
    "maxi1u2",
    "maxi1á2",
    "maxi1é2",
    "maxi1í2",
    "maxi1ó2",
    "maxi1ú2",
    "mega1a2",
    "mega1e2",
    "mega1i2",
    "mega1o2",
    "mega1u2",
    "mega1á2",
    "mega1é2",
    "mega1í2",
    "mega1ó2",
    "mega1ú2",
    "megalo1a2",
    "megalo1e2",
    "megalo1i2",
    "megalo1o2",
    "megalo1u2",
    "megalo1á2",
    "megalo1é2",
    "megalo1í2",
    "megalo1ó2",
    "megalo1ú2",
    "melano1a2",
    "melano1e2",
    "melano1i2",
    "melano1o2",
    "melano1u2",
    "melano1á2",
    "melano1é2",
    "melano1í2",
    "melano1ó2",
    "melano1ú2",
    "micro1a2",
    "micro1e2",
    "micro1i2",
    "micro1o2",
    "micro1u2",
    "micro1á2",
    "micro1é2",
    "micro1í2",
    "micro1ó2",
    "micro1ú2",
    "mili1a2",
    "mili1e2",
    "mili1i2",
    "mili1o2",
    "mili1u2",
    "mili1á2",
    "mili1é2",
    "mili1í2",
    "mili1ó2",
    "mili1ú2",
    "mini1a2",
    "mini1e2",
    "mini1i2",
    "mini1o2",
    "mini1u2",
    "mini1á2",
    "mini1é2",
    "mini1í2",
    "mini1ó2",
    "mini1ú2",
    "multi1a2",
    "multi1e2",
    "multi1i2",
    "multi1o2",
    "multi1u2",
    "multi1á2",
    "multi1é2",
    "multi1í2",
    "multi1ó2",
    "multi1ú2",
    "miria1a2",
    "miria1e2",
    "miria1i2",
    "miria1o2",
    "miria1u2",
    "miria1á2",
    "miria1é2",
    "miria1í2",
    "miria1ó2",
    "miria1ú2",
    "mono1a2",
    "mono1e2",
    "mono1i2",
    "mono1o2",
    "mono1u2",
    "mono1á2",
    "mono1é2",
    "mono1í2",
    "mono1ó2",
    "mono1ú2",
    ".nano1a2",
    ".nano1e2",
    ".nano1i2",
    ".nano1o2",
    ".nano1u2",
    ".nano1á2",
    ".nano1é2",
    ".nano1í2",
    ".nano1ó2",
    ".nano1ú2",
    "necro1a2",
    "necro1e2",
    "necro1i2",
    "necro1o2",
    "necro1u2",
    "necro1á2",
    "necro1é2",
    "necro1í2",
    "necro1ó2",
    "necro1ú2",
    ".neo1a2",
    ".neo1e2",
    ".neo1i2",
    ".neo1o2",
    ".neo1u2",
    ".neo1á2",
    ".neo1é2",
    ".neo1í2",
    ".neo1ó2",
    ".neo1ú2",
    "norte1a2",
    "norte1e2",
    "norte1i2",
    "norte1o2",
    "norte1u2",
    "norte1á2",
    "norte1é2",
    "norte1í2",
    "norte1ó2",
    "norte1ú2",
    "octo1a2",
    "octo1e2",
    "octo1i2",
    "octo1o2",
    "octo1u2",
    "octo1á2",
    "octo1é2",
    "octo1í2",
    "octo1ó2",
    "octo1ú2",
    "octa1a2",
    "octa1e2",
    "octa1i2",
    "octa1o2",
    "octa1u2",
    "octa1á2",
    "octa1é2",
    "octa1í2",
    "octa1ó2",
    "octa1ú2",
    "omni1a2",
    "omni1e2",
    "omni1i2",
    "omni1o2",
    "omni1u2",
    "omni1á2",
    "omni1é2",
    "omni1í2",
    "omni1ó2",
    "omni1ú2",
    "paleo1a2",
    "paleo1e2",
    "paleo1i2",
    "paleo1o2",
    "paleo1u2",
    "paleo1á2",
    "paleo1é2",
    "paleo1í2",
    "paleo1ó2",
    "paleo1ú2",
    "para1a2",
    "para1e2",
    "para1i2",
    "para1o2",
    "para1u2",
    "para1á2",
    "para1é2",
    "para1í2",
    "para1ó2",
    "para1ú2",
    "penta1a2",
    "penta1e2",
    "penta1i2",
    "penta1o2",
    "penta1u2",
    "penta1á2",
    "penta1é2",
    "penta1í2",
    "penta1ó2",
    "penta1ú2",
    "piezo1a2",
    "piezo1e2",
    "piezo1i2",
    "piezo1o2",
    "piezo1u2",
    "piezo1á2",
    "piezo1é2",
    "piezo1í2",
    "piezo1ó2",
    "piezo1ú2",
    "pluri1a2",
    "pluri1e2",
    "pluri1i2",
    "pluri1o2",
    "pluri1u2",
    "pluri1á2",
    "pluri1é2",
    "pluri1í2",
    "pluri1ó2",
    "pluri1ú2",
    "poli1a2",
    "poli1e2",
    "poli1i2",
    "poli1o2",
    "poli1u2",
    "poli1á2",
    "poli1é2",
    "poli1í2",
    "poli1ó2",
    "poli1ú2",
    ".pos2t1a2",
    ".pos2t1e2",
    ".pos2t1i2",
    ".pos2t1o2",
    ".pos2t1u2",
    ".pos2t1á2",
    ".pos2t1é2",
    ".pos2t1í2",
    ".pos2t1ó2",
    ".pos2t1ú2",
    ".pre1a2",
    ".pre1e2",
    ".pre1i2",
    ".pre1o2",
    ".pre1u2",
    ".pre1é2",
    ".pre1í2",
    ".pre1ó2",
    ".pre1ú2",
    ".pro1a2",
    ".pro1e2",
    ".pro1i2",
    ".pro1o2",
    ".pro1u2",
    ".pro1á2",
    ".pro1é2",
    ".pro1í2",
    ".pro1ó2",
    ".pro1ú2",
    "proto1a2",
    "proto1e2",
    "proto1i2",
    "proto1o2",
    "proto1u2",
    "proto1á2",
    "proto1é2",
    "proto1í2",
    "proto1ó2",
    "proto1ú2",
    "pseudo1a2",
    "pseudo1e2",
    "pseudo1i2",
    "pseudo1o2",
    "pseudo1u2",
    "pseudo1á2",
    "pseudo1é2",
    "pseudo1í2",
    "pseudo1ó2",
    "pseudo1ú2",
    "radio1a2",
    "radio1e2",
    "radio1i2",
    "radio1o2",
    "radio1u2",
    "radio1á2",
    "radio1é2",
    "radio1í2",
    "radio1ó2",
    "radio1ú2",
    ".re1a2",
    ".re1e2",
    ".re1i2",
    ".re1o2",
    ".re1u2",
    ".re1á2",
    ".re1é2",
    ".re1í2",
    ".re1ó2",
    ".re1ú2",
    "retro1a2",
    "retro1e2",
    "retro1i2",
    "retro1o2",
    "retro1u2",
    "retro1á2",
    "retro1é2",
    "retro1í2",
    "retro1ó2",
    "retro1ú2",
    "sobre1a2",
    "sobre1e2",
    "sobre1i2",
    "sobre1o2",
    "sobre1u2",
    "sobre1á2",
    "sobre1é2",
    "sobre1í2",
    "sobre1ó2",
    "sobre1ú2",
    "semi1a2",
    "semi1e2",
    "semi1i2",
    "semi1o2",
    "semi1u2",
    "semi1á2",
    "semi1é2",
    "semi1í2",
    "semi1ó2",
    "semi1ú2",
    "socio1a2",
    "socio1e2",
    "socio1i2",
    "socio1o2",
    "socio1u2",
    "socio1á2",
    "socio1é2",
    "socio1í2",
    "socio1ó2",
    "socio1ú2",
    ".su2b1a2",
    ".su2b1e2",
    ".su2b1o2",
    ".su2b1u2",
    ".su2b1á2",
    ".su2b1é2",
    ".su2b1ó2",
    ".su2b1ú2",
    "supe2r1a2",
    "supe2r1e2",
    "supe2r1i2",
    "supe2r1o2",
    "supe2r1u2",
    "supe2r1á2",
    "supe2r1é2",
    "supe2r1í2",
    "supe2r1ó2",
    "supe2r1ú2",
    "supra1a2",
    "supra1e2",
    "supra1i2",
    "supra1o2",
    "supra1u2",
    "supra1á2",
    "supra1é2",
    "supra1í2",
    "supra1ó2",
    "supra1ú2",
    ".tele1a2",
    ".tele1e2",
    ".tele1i2",
    ".tele1o2",
    ".tele1u2",
    ".tele1á2",
    ".tele1é2",
    ".tele1í2",
    ".tele1ó2",
    ".tele1ú2",
    "termo1a2",
    "termo1e2",
    "termo1i2",
    "termo1o2",
    "termo1u2",
    "termo1á2",
    "termo1é2",
    "termo1í2",
    "termo1ó2",
    "termo1ú2",
    "tetra1a2",
    "tetra1e2",
    "tetra1i2",
    "tetra1o2",
    "tetra1u2",
    "tetra1á2",
    "tetra1é2",
    "tetra1í2",
    "tetra1ó2",
    "tetra1ú2",
    "topo1a2",
    "topo1e2",
    "topo1i2",
    "topo1o2",
    "topo1u2",
    "topo1á2",
    "topo1é2",
    "topo1í2",
    "topo1ó2",
    "topo1ú2",
    ".tri1a2",
    ".tri1e2",
    ".tri1i2",
    ".tri1o2",
    ".tri1u2",
    ".tri1á2",
    ".tri1é2",
    ".tri1í2",
    ".tri1ó2",
    ".tri1ú2",
    "tropo1a2",
    "tropo1e2",
    "tropo1i2",
    "tropo1o2",
    "tropo1u2",
    "tropo1á2",
    "tropo1é2",
    "tropo1í2",
    "tropo1ó2",
    "tropo1ú2",
    "ultra1a2",
    "ultra1e2",
    "ultra1i2",
    "ultra1o2",
    "ultra1u2",
    "ultra1á2",
    "ultra1é2",
    "ultra1í2",
    "ultra1ó2",
    "ultra1ú2",
    "xeno1a2",
    "xeno1e2",
    "xeno1i2",
    "xeno1o2",
    "xeno1u2",
    "xeno1á2",
    "xeno1é2",
    "xeno1í2",
    "xeno1ó2",
    "xeno1ú2",
    //
    "hiper3r",
    ".inter3r",
    "super3r",
    //
    "ti2o3qu",
    "ti2o3co",
    "bi1u2ní",
    "o2i3de",
    "o2i3dal",
    "2al.",
    "2a2is.",
    "pe3r2e3mia",
    //
    // Terceiras persoas do pasado perfecto
    "libero2u3",
    "atopo2u3",
    "enaxeno2u3",
    //
    "2os.",
    "2o3so.",
    "2o3sos.",
    "2o3sa.",
    "2o3sas.",
    "2o3samente.",
    "2i3co.",
    "2i3cos.",
    "2i3ca.",
    "2i3cas.",
    //
    // Excepcións ó prefixo co
    //
    // Formas do verbo coar con pronomes enclíticos
    ".co2ar",
    ".co2á2",
    ".co2abá",
    ".co2acerv",
    ".co2andro",
    ".co2ano",
    ".co2añar",
    ".co2año",
    ".co2art",
    ".co2etan",
    ".co2enci",
    ".co2erci",
    ".co2inci",
    ".co2ira",
    ".co2iro",
    ".co2ita",
    //
    "co2a3gul",
    "co2á3gul",
    "co2a3la.",
    "co2a3las.",
    "co2a3lescen",
    "co2a3lición.",
    "co2a3licions.",
    "co2a3na.",
    "co2a3nas.",
    "co2antriñ",
    "co2a3ñadeir",
    "co2a3tí.",
    "co2a3tís.",
    "co2e3ficien",
    "co2e3lernos.",
    "co2e3llo.",
    "co2e3lla.",
    "co2e3llos.",
    "co2e3llas.",
    "co2e3lleir",
    "co2enll",
    "co2enxía",
    "co2e3sita.",
    "co2e3sitas.",
    "co2e3táne",
    "co2e3vo.",
    "co2e3va.",
    "co2e3vos.",
    "co2e3vas.",
    "co2i3dado",
    "co2iei",
    "co2imbra",
    "co2imbrá",
    "co2intreau.",
    "co2í3ña",
    "co2i3ña",
    "co2i3ñei",
    "co2i3pú.",
    "co2i3pús.",
    "co2i3ra.",
    "co2i3ras.",
    "co2i3raza",
    "co2i3ro.",
    "co2i3ros.",
    "co2i3ta.",
    "co2i3tas.",
    "co2i3tado.",
    "co2i3to.",
    "co2i3tos.",
    "co2i3tel",
    "co2i3tío.",
    "co2i3tus.",
    "co2u3c",
    "co2u3lomb",
    "co2u3try",
    "co2u3qui",
    "co2u3rel",
    "co2u3sa.",
    "co2u3sas.",
    "co2u3so.",
    "co2u3sos.",
    "co2u3selo",
    "co2u3tad",
    "co2u3to.",
    "co2u3tos.",
    "co2u3vini",
    "co2u3z",
    "deca2e3ment",
    // O prefixo des
    ".de2s1a2",
    ".de2s1e2",
    ".de2s1i2",
    ".de2s1o2",
    ".de2s1u2",
    ".de2s1á2",
    ".de2s1é2",
    ".de2s1í2",
    ".de2s1ó2",
    ".de2s1ú2",
    "3se.",
    "3s2es.",
    "3sa.",
    "3s2as.",
    "de3s2outr",
    "3s2emos.",
    "3s2edes.",
    "3s2en.",
    //
    "de3s2a3crali",
    "de3s2a3guisa",
    "de3s2a3lini",
    "de3s2a3ngr",
    "de3s2a3ñ",
    "de3s2a3rrollis",
    "de3s2astr",
    "de3s2a3zo",
    "de3s2e3c",
    "de3s2e3que",
    "de3s2e3guid",
    "de3s2e3la",
    "de3s2ensib",
    "de3s2e3ñ",
    "de3s2ert",
    "de3s2ért",
    "de3s2esper",
    "de4s3esperanz",
    "de3s2e3pér",
    "de3s2e3x",
    "de3s2é3x",
    "de3s2i3der",
    "de3s2ign",
    "de3s2ígn",
    "de3s2i3nenc",
    "de3s2ingr",
    "de3s2iste",
    "de3s2isti",
    "de3s2o3lac",
    "de3s2o3lad",
    "de3s2old",
    "de3s2o3lidari",
    "de3s2uetud",
    "de3s2sulf",
    //
    ".des2abor",
    ".des2afia",
    ".des2afía",
    ".des2afío",
    ".des2air",
    ".des2emboc",
    ".des2embóc",
    ".des2empeñ",
    ".des2empéñ",
    ".des2enlac",
    ".des2enlaz",
    ".des2enlác",
    ".des2enláz",
    ".des2envol",
    ".des2envól",
    ".des2idia",
    ".des2ora",
    //
    // Excepcións ó prefixo in
    //
    ".in2a3misib.",
    ".in2a3mov",
    ".in2a3ne.",
    ".in2a3nic",
    ".in2a3nid",
    ".in2á3nime",
    ".in2antes.",
    ".in2au",
    ".in2e3dia",
    ".in2é3dit",
    ".in2e3fab",
    ".in2e3narr",
    ".in2epc",
    ".in2ept",
    ".in2erc",
    ".in2ert",
    ".in2erm",
    ".in2erv",
    ".in2e3siv",
    ".in2e3xora",
    ".in2i3ci",
    ".in2i3cu",
    ".in2i3mig",
    ".in2i3miza",
    ".in2i3qui",
    ".in2o3cen",
    ".in2o3cui",
    ".in2o3cuo",
    ".in2o3cul",
    ".in2ó3cul",
    ".in2o3pia.",
    ".in2o3sili",
    ".in2o3sit",
    ".in2o3tróp",
    ".in2o3trop",
    ".in2uit",
    ".in2u3lase",
    ".in2u3lina",
    ".in2unda",
    ".in2u3sita",
    ".in2ú3til",
    "in2o4cular",
    //
    // Excepcións ó prefixo inter
    //
    ".inte3r2és.",
    ".inte3r2e3sa",
    ".inte3r2é3sa",
    ".inte3r2e3sá",
    ".inte3r2e3so",
    ".inte3r2é3so",
    ".inte3r2e3só",
    ".inte3r2ior",
    ".inte3r2i3no.",
    ".inte3r2i3nos.",
    ".inte3r2i3na.",
    ".inte3r2i3nas.",
    ".inte3r2i3nid",
    //
    // Os prefixos mal e ben
    ".be2n1a2",
    ".be2ne2",
    ".be2n1i2",
    ".be2n1o2",
    ".be2n1u2",
    ".be2n1á2",
    ".be2n1í2",
    ".be2n1ó2",
    ".be2n1ú2",
    //
    "be3n2ign",
    "be3n2i3merí",
    "be3n2i3nés",
    "be3n2i3nes",
    "be3n2i3toíta",
    //
    ".ma2l1a2",
    ".ma2le2",
    ".ma2l1i2",
    ".ma2l1o2",
    ".ma2l1u2",
    ".ma2l1á2",
    ".ma2l1í2",
    ".ma2l1ó2",
    ".ma2l1ú2",
    //
    ".mal2abar",
    ".mal2abár",
    ".mal2aco",
    ".mal2acó",
    ".mal2armad",
    ".mal2ogr",
    ".mal2ura",
    ".mal2axa",
    //
    "ma3l2a3cía",
    "ma3l2a3citan",
    "ma3l2a3gueñ",
    "ma3l2aio",
    "ma3l2aia",
    "ma3l2andrín",
    "ma3l2andrin",
    "ma3l2a3quita",
    "ma3l2ar.",
    "ma3l2a3res.",
    "ma3l2a3ria.",
    "ma3l2a3to.",
    "ma3l2a3tos.",
    "ma3l2a3ta.",
    "ma3l2a3tas.",
    "ma3l2a3tión",
    "ma3l2aui",
    "ma3l2eabl",
    "ma3l2eabil",
    "ma3l2eico",
    "ma3l2eolar",
    "ma3l2e3ta.",
    "ma3l2e3tas.",
    "ma3l2e3tín",
    "ma3l2e3teiro",
    "ma3l2eza",
    "ma3l2ia.",
    "ma3l2ian",
    "ma3l2i3cia",
    "ma3l2i3cios",
    "ma3l2ign",
    "ma3l2i3kita",
    "ma3l2inke",
    "ma3l2ó3fago",
    "ma3l2ó3nic",
    "ma3l2o3nato",
    "ma3l2o3nilue",
    "ma4l3ianq",
    //
    ".mal1educ",
    ".mal1encar",
    ".mal1ensin",
    ".mal1entend",
    //
    // Excepcións ó prefixo milifamili2a familia3r
    //
    "mili2a3rio",
    "mili2a3ria",
    "mini2a3tur",
    // Excepcións ó prefixo para
    //
    "para2u3gas",
    "para2í3so",
    //
    // Excepcións ó prefixo poli
    //
    "poli2u3r",
    "poli2o3me",
    "poli2arq",
    "poli2árq",
    "poli2éste",
    "poli2andr",
    "poli2antea",
    "expoli2",
    // Excepcións ó prefixo post
    //
    ".pos3t2a.",
    ".pos3t2as.",
    ".pos3t2al.",
    ".pos3t2ais.",
    ".pos3t2a3llo",
    ".pos3t2e.",
    ".pos3t2es.",
    ".pos3t2ear.",
    ".pos3t2e3la.",
    ".pos3t2e3las.",
    ".pos3t2er.",
    ".pos3t2erg",
    ".pos3t2e3rid",
    ".pos3t2e3rior",
    ".pos3t2i3go",
    ".pos3t2i3la",
    ".pos3t2illón",
    ".pos3t2ín.",
    ".pos3t2i3te.",
    ".pos3t2i3zo.",
    ".pos3t2i3zos.",
    ".pos3t2i3za.",
    ".pos3t2i3zas.",
    ".pos3t2o.",
    ".pos3t2os.",
    ".pos3t2oiro",
    ".pos3t2ó3ni",
    ".pos3t2u3la",
    ".pos3t2u3lo",
    ".pos3t2u3le",
    ".pos3t2u3ra.",
    ".pos3t2u3ras.",
    //
    // Excepcións ó prefixo pre
    //
    ".pre2amar",
    // Formas do verbo prear con pronomes enclíticos
    ".pre2ar",
    ".pre2á2",
    ".pre2abá",
    //
    "pre2as.",
    "pre2a3da.",
    "pre2a3das.",
    "pre2á2",
    "pre2abá",
    "pre2i3t",
    "pre2o3cup",
    "pre2o3cúp",
    //
    // Excepcións ó prefixo pro
    //
    "pro2e3za",
    "pro2í3do",
    "pro2ust",
    //
    // Excepcións ó prefixo re
    //
    ".re2al",
    ".re2a3liz",
    ".re2a3lidade",
    ".re2in",
    ".re2i3no.",
    ".re2i3nos",
    ".re2i3nante",
    ".re2iter",
    ".re2i3xa",
    ".re2os.",
    ".re2as.",
    ".re2u3ma",
    ".re2ú3ma",
    ".re2ún",
    ".re2uni",
    // Verbo reunir
    //
    "re2u3nión.",
    "re2u3nións.",
    "re2u3nir",
    "re2u3nírmo",
    "re2u3níren",
    "re2u3nido.",
    "re2u3nidos.",
    "re2u3nida.",
    "re2u3nidas.",
    "re2u3nind",
    "re2u3no.",
    "re2u3nes.",
    "re2u3ne.",
    "re2u3nimos.",
    "re2u3nímo",
    "re2u3nen.",
    "re2u3nía",
    "re2u3ni3amos.",
    "re2u3ni3ades.",
    "re2u3nín.",
    "re2u3niches.",
    "re2u3niu.",
    "re2u3nistes.",
    "re2u3níst",
    "re2u3niron.",
    "re2u3na.",
    "re2u3nas.",
    "re2u3namos.",
    "re2u3nades.",
    "re2u3nan.",
    "re2u3nise",
    "re2u3níse",
    "re2u3nide",
    "re2u3níde",
    "re2u3námo",
    "re2u3náde",
    // Verbo reinar
    //
    "re2i3nar",
    "re2i3nado.",
    "re2i3nados.",
    "re2i3nand",
    "re2i3na.",
    "re2i3nas.",
    "re2i3namos.",
    "re2i3nades.",
    "re2i3nan.",
    "re2i3naba.",
    "re2i3nabas.",
    "re2i3nabamos.",
    "re2i3nábamos.",
    "re2i3nabades.",
    "re2i3nábades.",
    "re2i3nei.",
    "re2i3naches.",
    "re2i3nou.",
    "re2i3nastes.",
    "re2i3naron.",
    "re2i3ne.",
    "re2i3nes.",
    "re2i3nemos.",
    "re2i3nedes.",
    "re2i3nen.",
    "re2i3nase.",
    "re2i3nases.",
    "re2i3nasemo.",
    "re2i3nasedes.",
    "re2i3náse",
    "re2i3nasen.",
    "re2i3nade.",
    //
    // O prefixo sub: l, r e excepcións
    ".su2b3l",
    ".su2b3r",
    //
    // Formas do verbo subir con pronomes enclíticos
    ".su2b2i2",
    ".su2b2í2",
    ".sub2eriz",
    ".sub2orna",
    //
    "sub3índic",
    "sub3indic",
    "sub3indiz",
    //
    ".sub4lev",
    ".sub4lim",
    //
    "su3b2e3la.",
    "su3b2e3las.",
    "su3b2é3rico",
    "su3b2e3rina.",
    "su3b2e3rinas.",
    "su3b2eroso",
    "su3b2iote",
    "su3b2ulado",
    "su3b2orno.",
    "su3b2ornos.",
    "su3b2urbio",
    //
    "su3b4liminar",
    "su3b4repción",
    "su3b4reptici",
    //
    // Excepcións ó prefixo tri
    //
    "tri2a3ga.",
    "tri2a3gas.",
    "tri2al.",
    "tri2a3les.",
    "tri2angul",
    "tri2á3sico.",
    "tri2estin",
    "tri2unf",
    "tri2unvir",
    //
    // Excepcións a varios prefixos que son terminacións verbais
    // Inclúense as variantes de acentuación abamos/ábamos, etc.
    //
    "2a3do.",
    "2i3do.",
    "2a3da.",
    "2i3da.",
    "2a3dos.",
    "2i3dos.",
    "2a3das.",
    "2i3das.",
    "2ando.",
    "2indo.",
    "2ar.",
    "2ir.",
    //
    "2a3res.",
    "2e3res.",
    "2i3res.",
    "2armos.",
    "2ermos.",
    "2irmos.",
    "2ardes.",
    "2erdes.",
    "2irdes.",
    "2a3ren.",
    "2e3ren.",
    "2i3ren.",
    //
    "2arme.",
    "2erme.",
    "2irme.",
    "2arte.",
    "2erte.",
    "2irte.",
    "2arlle.",
    "2erlle.",
    "2irlle.",
    "2arnos.",
    "2ernos.",
    "2irnos.",
    "2arvos.",
    "2ervos.",
    "2irvos.",
    "2arlles.",
    "2erlles.",
    "2irlles.",
    //
    "2a3dor.",
    "2e3dor.",
    "2i3dor.",
    "2a3dora.",
    "2e3dora.",
    "2i3dora.",
    "2a3dores.",
    "2e3dores.",
    "2i3dores.",
    "2a3doiro.",
    "2e3doiro.",
    "2i3doiro.",
    "2a3doiros.",
    "2e3doiros.",
    "2i3doiros.",
    "2a3doira.",
    "2e3doira.",
    "2i3doira.",
    "2a3doiras.",
    "2e3doiras.",
    "2i3doiras.",
    "2a3deiro.",
    "2e3deiro.",
    "2i3deiro.",
    "2a3deiros.",
    "2e3deiros.",
    "2i3deiros.",
    "2a3deira.",
    "2e3deira.",
    "2i3deira.",
    "2a3deiras.",
    "2e3deiras.",
    "2i3deiras.",
    "2a3lo.",
    "2e3lo.",
    "2i3lo.",
    "2a3los.",
    "2e3los.",
    "2i3los.",
    "2a3la.",
    "2e3la.",
    "2i3la.",
    "2a3las.",
    "2e3las.",
    "2i3las.",
    "2a3rei.",
    "2e3rei.",
    "2i3rei.",
    "2a3rás.",
    "2e3rás.",
    "2i3rás.",
    "2a3rá.",
    "2e3rá.",
    "2i3rá.",
    "2a3remos.",
    "2e3remos.",
    "2i3remos.",
    "2a3redes.",
    "2e3redes.",
    "2i3redes.",
    "2a3rán.",
    "2e3rán.",
    "2i3rán.",
    //
    "2a3ría.",
    "2e3ría.",
    "2i3ría.",
    "2a3rías.",
    "2e3rías.",
    "2i3rías.",
    "2a3ri1amos.",
    "2e3ri1amos.",
    "2i3ri1amos.",
    "2a3ríamos.",
    "2e3ríamos.",
    "2i3ríamos.",
    "2a3ri1ades.",
    "2e3ri1ades.",
    "2i3ri1ades.",
    "2a3ríades.",
    "2e3ríades.",
    "2i3ríades.",
    "2a3rían.",
    "2e3rían.",
    "2i3rían.",
    //
    "2a3de.",
    "2e3de.",
    "2i3de.",
    //
    "2á3deo.",
    "2é3deo.",
    "2í3deo.",
    "2á3dea.",
    "2é3dea.",
    "2í3dea.",
    "2á3deos.",
    "2é3deos.",
    "2í3deos.",
    "2á3deas.",
    "2é3deas.",
    "2í3deas.",
    //
    "2as.",
    "2a3mos.",
    "2a3des.",
    "2an.",
    "2a3ba.",
    "2a3bas.",
    "2a3bamos.",
    "2á3bamos.",
    "2a3bades.",
    "2á3bades.",
    "2a3ban.",
    "2a3ches.",
    "2astes.",
    "2a3ron.",
    "2es.",
    "2e3mos.",
    "2e3des.",
    "2en.",
    "2a3se.",
    "2a3ses.",
    "2á3semos.",
    "2á3sedes.",
    "2a3sen.",
    //
    "o3ar.",
    "o3ado.",
    "o3ada.",
    "o3ados.",
    "o3adas.",
    "o3ando.",
    "o3ares.",
    "o3armos.",
    "o3ardes.",
    "o3aren.",
    "o3arme.",
    "o3arte.",
    "o3arlle.",
    "o3arnos.",
    "o3arvos.",
    "o3arlles.",
    "o3alo.",
    "o3alos.",
    "o3ala.",
    "o3alas.",
    "o3ade.",
    "o3ádeo.",
    "o3ádea.",
    "o3ádeos.",
    "o3ádeas.",
    "o3as.",
    "o3amos.",
    "o3ades.",
    "o3an.",
    "o3aba.",
    "o3abas.",
    "o3abamos.",
    "o3ábamos.",
    "o3abades.",
    "o3ábades.",
    "o3aban.",
    "o3aches.",
    "o3astes.",
    "o3aron.",
    "o3es.",
    "o3emos.",
    "o3edes.",
    "o3en.",
    "o3ase.",
    "o3ases.",
    "o3ásemos.",
    "o3ásedes.",
    "o3asen.",
    //
    "e3ar.",
    "e3ado.",
    "e3ada.",
    "e3ados.",
    "e3adas.",
    "e3ando.",
    "e3ares.",
    "e3armos.",
    "e3ardes.",
    "e3aren.",
    "e3arme.",
    "e3arte.",
    "e3arlle.",
    "e3arnos.",
    "e3arvos.",
    "e3arlles.",
    "e3alo.",
    "e3alos.",
    "e3ala.",
    "e3alas.",
    "e3ade.",
    "e3ádeo.",
    "e3ádea.",
    "e3ádeos.",
    "e3ádeas.",
    "e3as.",
    "e3amos.",
    "e3ades.",
    "e3an.",
    "e3aba.",
    "e3abas.",
    "e3abamos.",
    "e3ábamos.",
    "e3abades.",
    "e3ábades.",
    "e3aban.",
    "e3aches.",
    "e3astes.",
    "e3aron.",
    "e3es.",
    "e3emos.",
    "e3edes.",
    "e3en.",
    "e3ase.",
    "e3ases.",
    "e3ásemos.",
    "e3ásedes.",
    "e3asen.",
    //
    "2i3mos.",
    "2i3des.",
    "2ía.",
    "2ías.",
    "2íamos.",
    "2íades.",
    "2ían.",
    "2ín.",
    "2i3ches.",
    "2iu.",
    "2istes.",
    "2i3ron.",
    "2i3se.",
    "2i3ses.",
    "2í3semos.",
    "2í3sedes.",
    "2i3sen.",
    //
    "í3do",
    "í3da",
    "í3dos",
    "í3das",
    //
    ".su3bir.",
    ".su3bindo.",
    ".su3bido.",
    ".su3bida.",
    ".su3bidos.",
    ".su3bidas.",
    ".su3bires.",
    ".su3birmos.",
    ".su3birdes.",
    ".su3biren.",
    ".su3bo.",
    ".su3bes.",
    ".su3be.",
    ".su3bimos.",
    ".su3bides.",
    ".su3ben.",
    ".su3bía.",
    ".su3bías.",
    ".su3b2i3amos.",
    ".su3bíamos.",
    ".su3b2i3ades.",
    ".su3bíades.",
    ".su3bían.",
    ".su3bín.",
    ".su3biches.",
    ".su3biu.",
    ".su3bistes.",
    ".su3biron.",
    ".su3birei.",
    ".su3birás.",
    ".su3birá.",
    ".su3biremos.",
    ".su3biredes.",
    ".su3birán.",
    ".su3biría.",
    ".su3birías.",
    ".su3biriamos.",
    ".su3biríamos.",
    ".su3biriades.",
    ".su3biríades.",
    ".su3birían.",
    ".su3ba.",
    ".su3bas.",
    ".su3bamos.",
    ".su3bades.",
    ".su3ban.",
    ".su3bise.",
    ".su3bises.",
    ".su3bísemos.",
    ".su3bísedes.",
    ".su3bisen.",
    ".su3bide.",
    ".su3bídeo.",
    ".su3bídeos.",
    ".su3bídea.",
    ".su3bídeas.",
    ".su3bador.",
    ".su3badora.",
    ".su3badores.",
    ".su3badoras.",
    //
    ".supe3rar.",
    ".supe3rando.",
    ".supe3rado.",
    ".supe3rada.",
    ".supe3rados.",
    ".supe3radas.",
    ".supe3rares.",
    ".supe3rarmos.",
    ".supe3rardes.",
    ".supe3raren.",
    ".supe3ra.",
    ".supe3ras.",
    ".supe3ramos.",
    ".supe3rades.",
    ".supe3ran.",
    ".supe3raba.",
    ".supe3rabas.",
    ".supe3rabamos.",
    ".supe3rábamos.",
    ".supe3rabades.",
    ".supe3rábades.",
    ".supe3raban.",
    ".supe3rei.",
    ".supe3raches.",
    ".supe3rou.",
    ".supe3rastes.",
    ".supe3raron.",
    ".supe3rarei.",
    ".supe3rarás.",
    ".supe3rará.",
    ".supe3reremos.",
    ".supe3reredes.",
    ".supe3rarán.",
    ".supe3raría.",
    ".supe3rarías.",
    ".supe3rariamos.",
    ".supe3raríamos.",
    ".supe3rariades.",
    ".supe3raríades.",
    ".supe3rarían.",
    ".supe3re.",
    ".supe3res.",
    ".supe3remos.",
    ".supe3redes.",
    ".supe3ren.",
    ".supe3rase.",
    ".supe3rases.",
    ".supe3rásemos.",
    ".supe3rásedes.",
    ".supe3rasen.",
    ".supe3rade.",
    ".supe3rádeo.",
    ".supe3rádeos.",
    ".supe3rádea.",
    ".supe3rádeas.",
    ".supe3rador.",
    ".supe3radora.",
    ".supe3radores.",
    ".supe3radoras.",
    ".supe3ración.",
    "supe3r2ior",
    "supe3r2a3ble",
    "supe3r2a3bilidade",
    //
    "a3er.",
    "a3endo.",
    "a3eres.",
    "a3ermos.",
    "a3erdes.",
    "a3eren.",
    "a3erme.",
    "a3erte.",
    "a3erlle.",
    "a3ernos.",
    "a3ervos.",
    "a3erlles.",
    "a3elo.",
    "a3elos.",
    "a3ela.",
    "a3elas.",
    "a3ede.",
    "a3édeo.",
    "a3édea.",
    "a3édeos.",
    "a3édeas.",
    "a3emos.",
    "a3edes.",
    "a3eron.",
    "a3ese.",
    "a3eses.",
    "a3esemos.",
    "a3ésemos.",
    "a3esedes.",
    "a3ésedes.",
    "a3esen.",
    ""
  ];

  return {
    patterns: patterns,
    exceptions: hyphenation
  };
});
