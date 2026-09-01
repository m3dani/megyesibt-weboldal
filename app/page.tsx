import { MobileMenu } from "./MobileMenu";

const phoneHref = "tel:+36309869255";
const emailHref = "mailto:megyesibt@gmail.com";
const siteUrl = "https://megyesituzifa.hu";

const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Megyesi Bt.",
  url: siteUrl,
  image: `${siteUrl}/og.png`,
  logo: `${siteUrl}/brand-tree.png`,
  description:
    "Több mint 30 éves erdészeti tapasztalattal működő családi vállalkozás, kályhakész tűzifa és hasított méterfa házhozszállításával Nemeskolta mintegy 30 km-es körzetében.",
  telephone: "+36 30 986 9255",
  email: "megyesibt@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Szabadság u. 7.",
    postalCode: "9775",
    addressLocality: "Nemeskolta",
    addressCountry: "HU",
  },
  areaServed: ["Nemeskolta", "Szombathely", "Körmend", "Vasvár", "Sárvár", "Vép"],
  identifier: {
    "@type": "PropertyValue",
    name: "EUTR azonosító",
    value: "AA8633932",
  },
};

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <header className="site-header">
        <a className="brand" href="#kezdolap" aria-label="Megyesi Bt. – kezdőlap">
          <span className="brand-mark" aria-hidden="true" />
          <span>Megyesi Bt.</span>
        </a>
        <nav className="main-nav" aria-label="Fő navigáció">
          <a href="#bemutatkozas">Bemutatkozás</a>
          <a href="#termekek">Termékek</a>
          <a href="#arak">Árak</a>
          <a href="#szallitas">Szállítás</a>
          <a href="#rendeles">Rendelés</a>
          <a href="#kapcsolat">Kapcsolat</a>
        </nav>
        <a className="header-phone" href={phoneHref}>☎ Hívás: +36 30 986 9255</a>
        <MobileMenu />
      </header>

      <main id="kezdolap">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Tűzifa Nemeskoltáról</p>
            <h1 id="hero-title">Tűzifa házhozszállítással</h1>
            <p className="hero-lead">
              Nemeskoltáról kb. 30 km-es körzetben (Szombathely, Körmend,
              Vasvár, Sárvár, Vép és környéke)
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={phoneHref}><span className="button-icon" aria-hidden="true">☎</span> Hívás: +36 30 986 9255</a>
              <a className="button button-secondary" href={emailHref}><span className="button-icon button-icon-mail" aria-hidden="true">✉</span> E-mail</a>
            </div>
            <ul className="highlights" aria-label="Fő feltételek">
              <li>Kályhakész tűzifa</li>
              <li>Hasított méterfa</li>
              <li>3–6 m³ / fuvar</li>
              <li>Szállítás az árban</li>
            </ul>
          </div>
          <div className="wood-rings" aria-hidden="true">
            <span>30+ év</span>
          </div>
        </section>

        <section className="section intro" id="bemutatkozas" aria-labelledby="intro-title">
          <div className="intro-inner">
            <h2 id="intro-title">BEMUTATKOZÁS</h2>
            <p className="intro-greeting">Üdvözöljük a MEGYESI BT. weboldalán!</p>
            <p>
              Családi vállalkozásunk több mint 30 éve foglalkozik erdészeti
              munkákkal. Cégünk erdőgazdálkodásra jogosult, kiemelt besorolással
              rendelkező erdészeti szakirányító vállalkozás. Az erdészeti feladatok
              ellátásához saját alkalmazásban lévő szakemberekkel és a hozzá tartozó
              gépparkkal rendelkezünk. Vállalkozásunk komplex erdészeti szolgáltatásokat
              nyújt magánerdők kezelői és más megrendelők számára.
            </p>
            <h3 className="services-title">Vállaljuk:</h3>
            <ul className="service-list">
              <li>Kezeletlen erdőterületek erdőkezelését, illetve tulajdonosi használat esetén a szakirányítási feladatok elvégzését</li>
              <li>Az erdészeti hatóság felé szükséges engedélyezést, elszámolások elkészítését és kapcsolattartást</li>
              <li>Erdőművelési és fahasználati feladatok komplett végrehajtását</li>
              <li>Akácosok gyökérszaggatását</li>
              <li>Fakitermelés és közelítés elvégzését (LKT, forwarder)</li>
              <li>Értékesítés és szállítás szervezését</li>
            </ul>
            <p>
              Tűzifából kályhakész tűzifát és igény szerint hasított méteres fát
              kínálunk, Nemeskoltáról kb. 30 km-es körzetben házhozszállítással.
              Az értékesített tűzifa vállalkozásunk által kezelt erdőkből származik,
              ezáltal megbízható, ellenőrizhető és nyomon követhető módon kerül
              kereskedelmi forgalomba.
            </p>
            <p>
              A szállítás az árban benne van (min. 3 m³, egy fuvar max. 6 m³),
              és minden vásárlásról számlát adunk. Készletünk szezonálisan
              változik, ezért rendelés és egyeztetés kizárólag telefonon történik.
            </p>
            <blockquote>
              Erdészeti tapasztalat. Korrekt feltételek. Megbízható kiszállítás.
            </blockquote>
          </div>
        </section>

        <section className="section products" id="termekek" aria-labelledby="products-title">
          <div className="section-inner">
            <h2 id="products-title">Termékek</h2>
            <p className="stock-note">
              Készlet szezonálisan változik – rendelés és egyeztetés kizárólag telefonon.
            </p>
            <div className="product-grid">
              <article className="product-card">
                <span className="product-icon" aria-hidden="true">🔥</span>
                <div>
                  <h3>Kályhakész tűzifa – ömlesztett m³</h3>
                  <ul className="product-features">
                    <li>Kályhakészre vágott, hasított tűzifa</li>
                    <li>Azonnal tüzelhető vagy tárolható</li>
                    <li>Választható méret: 25 vagy 33 cm</li>
                    <li>1 × 1 × 1 méter, szórt</li>
                  </ul>
                </div>
              </article>
              <article className="product-card">
                <span className="product-icon" aria-hidden="true">🌳</span>
                <div>
                  <h3>Hasított méterfa – m³</h3>
                  <ul className="product-features">
                    <li>Méteres hosszúságú, hasított rönkök</li>
                    <li>1 × 1 × 1 méter, rakott</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section prices" id="arak" aria-labelledby="prices-title">
          <div className="section-inner price-inner">
            <h2 id="prices-title">Árak</h2>
            <div className="price-groups">
              <div className="table-wrap">
                <table>
                  <caption>Kályhakész tűzifa</caption>
                  <thead>
                    <tr><th scope="col">Fafaj</th><th scope="col">Tájékoztató ár</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Cser–tölgy</td><td>30 000 Ft <span>/ ömlesztett m³</span></td></tr>
                    <tr><td>Akác</td><td>30 000 Ft <span>/ ömlesztett m³</span></td></tr>
                    <tr><td>Vöröstölgy</td><td>28 000 Ft <span>/ ömlesztett m³</span></td></tr>
                    <tr><td>Magas kőris</td><td>28 000 Ft <span>/ ömlesztett m³</span></td></tr>
                  </tbody>
                </table>
              </div>
              <div className="table-wrap">
                <table>
                  <caption>Hasított méterfa</caption>
                  <thead>
                    <tr><th scope="col">Fafaj</th><th scope="col">Tájékoztató ár</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Cser–tölgy</td><td>33 000 Ft <span>/ m³</span></td></tr>
                    <tr><td>Akác</td><td>33 000 Ft <span>/ m³</span></td></tr>
                    <tr><td>Vöröstölgy</td><td>30 000 Ft <span>/ m³</span></td></tr>
                    <tr><td>Magas kőris</td><td>30 000 Ft <span>/ m³</span></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="price-note">
              A táblázatban szereplő árak tájékoztató jellegűek, nem minősülnek
              ajánlatnak. Az aktuális készletről és árakról kérjük, érdeklődjön telefonon.
            </p>
          </div>
        </section>

        <section className="section delivery" id="szallitas" aria-labelledby="delivery-title">
          <div className="section-inner delivery-grid">
            <div>
              <h2 id="delivery-title">Szállítás és feltételek</h2>
              <p>
                Nemeskoltáról kb. 30 km-es körzetben szállítunk: Szombathely,
                Körmend, Vasvár, Sárvár, Vép és környéke. A pontos címről és szállítási
                időpontról telefonon egyeztetünk.
              </p>
            </div>
            <ul className="condition-list">
              <li>Minimum rendelés: 3 m³</li>
              <li>Egy fuvar maximum 6 m³</li>
              <li>A kiszállítás benne van az árban</li>
              <li>Minden vásárlásról számlát adunk</li>
              <li className="condition-warning">A tűzifa helyszínen történő lebillentését követően reklamációt nem áll módunkban elfogadni!</li>
            </ul>
          </div>
        </section>

        <section className="section process" id="rendeles" aria-labelledby="process-title">
          <div className="section-inner process-inner">
            <div className="process-heading">
              <h2 id="process-title">Rendelés menete</h2>
              <p className="section-lead">Egyszerűen, kizárólag telefonos egyeztetéssel.</p>
            </div>
            <ol className="process-grid">
              <li>
                <span className="step-number" aria-hidden="true">☎</span>
                <div><h3>Hívjon minket</h3><p>Hívja a +36 30 986 9255-ös telefonszámot munkanapokon vagy hétvégén is.</p></div>
              </li>
              <li>
                <span className="step-number" aria-hidden="true">📅</span>
                <div><h3>Egyeztetünk</h3><p>Megbeszéljük a fa fajtáját, mennyiségét, a pontos árat és a szállítási időpontot.</p></div>
              </li>
              <li>
                <span className="step-number" aria-hidden="true">🚚</span>
                <div><h3>Kiszállítás és fizetés</h3><p>A megbeszélt időpontban kiszállítjuk a fát. Fizetés a helyszínen, melyről számlát adunk.</p></div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section contact" id="kapcsolat" aria-labelledby="contact-title">
          <div className="section-inner contact-grid">
            <div className="contact-card">
              <h2 id="contact-title">Kapcsolat</h2>
              <p className="contact-company">Megyesi Bt.</p>
              <dl>
                <div>
                  <dt>Telefon</dt>
                  <dd><a href={phoneHref}>+36 30 986 9255</a></dd>
                </div>
                <div>
                  <dt>E-mail</dt>
                  <dd><a href={emailHref}>megyesibt@gmail.com</a></dd>
                </div>
                <div>
                  <dt>Helyszín</dt>
                  <dd>9775 Nemeskolta, Szabadság u. 7.</dd>
                </div>
                <div>
                  <dt>EUTR azonosító</dt>
                  <dd>AA8633932</dd>
                </div>
              </dl>
              <p className="contact-note">
                Aktuális készletért és rendeléshez kérjük, hívjon minket.
              </p>
            </div>
            <div className="map-wrap">
              <iframe
                title="Megyesi Bt. – Nemeskolta térkép"
                src="https://www.google.com/maps?q=9775%20Nemeskolta%2C%20Szabads%C3%A1g%20u.%207&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <p className="footer-brand">Megyesi Bt.</p>
            <p>© {currentYear} – Megyesi Bt. · Minden jog fenntartva.</p>
          </div>
          <nav className="footer-links" aria-label="Jogi információk">
            <a href="#impresszum">Impresszum</a>
            <a href="#adatkezeles">Adatkezelés</a>
          </nav>
          <section className="legal-panel" id="impresszum" aria-labelledby="impresszum-title">
            <h2 id="impresszum-title">Impresszum</h2>
            <p>
              Üzemeltető: Megyesi Bt. · Székhely: 9775 Nemeskolta, Szabadság u. 7.
              Kapcsolat: <a href={phoneHref}>+36 30 986 9255</a>, <a href={emailHref}>megyesibt@gmail.com</a>
            </p>
          </section>
          <section className="legal-panel" id="adatkezeles" aria-labelledby="adat-title">
            <h2 id="adat-title">Adatkezelés</h2>
            <p>
              Az oldal nem használ kapcsolatfelvételi űrlapot. Személyes adatot
              csak telefonos vagy e-mailes megkereséskor, a kapcsolatfelvétel
              céljából kezelünk.
            </p>
          </section>
        </div>
      </footer>

      <a className="sticky-call" href={phoneHref} aria-label="Megyesi Bt. hívása rendeléshez">
        ☎ Hívás: +36 30 986 9255
      </a>
    </>
  );
}
