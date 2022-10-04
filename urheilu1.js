/**
 * henkilo luokka settereineen ja gettereinen
 */
class henkilo {
  constructor(nimi1, nimi2, nimi3, nimi4, vuosi) {
    this._etunimi = nimi1;
    this._toinen_nimi = nimi2;
    this._sukunimi = nimi3;
    this._kutsumanimi = nimi4;
    this._syntymavuosi = vuosi;
  }

  set etunimi(x) {
    this._etunimi = x;
  }
  get etunimi() {
    return this._etunimi;
  }
  set toinen_nimi(x) {
    this._toinen_nimi = x;
  }
  get toinen_nimi() {
    return this._toinen_nimi;
  }
  set sukunimi(x) {
    this._sukunimi = x;
  }
  get sukunimi() {
    return this._sukunimi;
  }
  set kutsumanimi(x) {
    this._kutsumanimi = x;
  }
  get kutsumanimi() {
    return this._kutsumanimi;
  }
  set syntymavuosi(x) {
    this._syntymavuosi = x;
  }
  get syntymavuosi() {
    return this._syntymavuosi;
  }

  /**
   * tässä luodaan henkilön tuloste
   * @returns tuloste
   */
  toString() {
    var toString =
      "etunimi: " +
      this._etunimi +
      "\ntoinen nimi: " +
      this._toinen_nimi +
      "\nsukunimi: " +
      this._sukunimi +
      "\nkutsumanimi: " +
      this._kutsumanimi +
      "\nsyntymavuosi: " +
      this._syntymavuosi;
    return toString;
  }
}

/**
 * urheilija jatkaa henkilo luokkaa
 * konstruktorissa mukana henkilo luokan jutut ja sitten superilla pannaan
 * muuten perus setterit ja getterit
 */
class urheilija extends henkilo {
  constructor(
    nimi1,
    nimi2,
    nimi3,
    nimi4,
    vuosi,
    linkkiKuvaan,
    paino,
    laji,
    saavutukset
  ) {
    super(nimi1, nimi2, nimi3, nimi4, vuosi);

    this._linkkiKuvaan = linkkiKuvaan;
    this._paino = paino;
    this._laji = laji;
    this._saavutukset = saavutukset;
  }

  set linkkiKuvaan(x) {
    this._linkkiKuvaan = x;
  }
  get linkkiKuvaan() {
    return this._linkkiKuvaan;
  }
  set paino(x) {
    this._paino = x;
  }
  get paino() {
    return this._paino;
  }
  set laji(x) {
    this._laji = x;
  }
  get laji() {
    return this._laji;
  }
  set saavutukset(x) {
    this._saavutukset = x;
  }
  get saavutukset() {
    return this._saavutukset;
  }

  /**
   * tässä luodaan tuloste, siihen haetaan tolla superilla henkilo luokan tuloste mukaan
   * @returns tuloste
   */
  toString() {
    var toString =
      "\nlinkki kuvaan: " +
      this._linkkiKuvaan +
      "\npaino: " +
      this._paino +
      "\nlaji: " +
      this._laji +
      "\nsaavutukset: " +
      this._saavutukset;
    return super.toString() + " " + toString;
  }
}

/*
  esimerkkejä
  tässä ekassa tehään henkilö, joka muutetaan urheilijaksi
  */
let esimerkki = new henkilo(
  "etunimi",
  "toinenNimi",
  "sukunimi",
  "kutsumanimi",
  2000
);
esimerkki = new urheilija(
  esimerkki._etunimi,
  esimerkki._toinen_nimi,
  esimerkki._sukunimi,
  esimerkki._kutsumanimi,
  esimerkki._syntymavuosi,
  "linkki",
  69,
  "laji",
  ["saavutus1", "saavutus2", "saavutus3"]
);
console.log(esimerkki.toString()); //ekan esimerkin tuloste
console.log("");

/*
  tässä tokassa luodaan suoraan urheilija
  */
let esimerkki2 = new urheilija(
  "etunimi2",
  "toinenNimi2",
  "sukunimi2",
  "kutsumanimi2",
  2020,
  null,
  null,
  null,
  null
);
console.log(esimerkki2.toString()); //toisen esimerkin tuloste
