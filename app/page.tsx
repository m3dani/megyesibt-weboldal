import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tűzifa házhozszállítás Nemeskolta környékén | Megyesi Bt.",
  description:
    "Tűzifa házhozszállítás Nemeskoltáról kb. 30 km-es körzetben. Telefonos rendelés, minimum 3 m³, maximum 6 m³ fuvaronként.",
  keywords: [
    "tűzifa házhozszállítás",
    "Nemeskolta",
    "Szombathely tűzifa",
    "Körmend tűzifa",
    "Vasvár tűzifa",
    "kályhakész tűzifa",
  ],
  openGraph: {
    title: "Tűzifa házhozszállítással | Megyesi Bt.",
    description:
      "Telefonos rendelés és kiszállítás Nemeskolta kb. 30 km-es körzetében.",
    locale: "hu_HU",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const phoneHref = "tel:+36309869255";
const emailHref = "mailto:megyesibt@gmail.com";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#kezdolap" aria-label="Megyesi Bt. – kezdőlap">
          <span className="brand-mark" aria-hidden="true">▲</span>
          <span>Megyesi Bt.</span>
        </a>
        <nav className="main-nav" aria-label="Fő navigáció">
          <a href="#bemutatkozas">Bemutatkozás</a>
          <a href="#tuzifa">Tűzifa</a>
          <a href="#arak">Árak</a>
          <a href="#szallitas">Szállítás</a>
          <a href="#rendeles">Rendelés</a>
          <a href="#kapcsolat">Kapcsolat</a>
        </nav>
        <a className="header-phone" href={phoneHref}>+36 30 986 9255</a>
        <a className="mobile-header-call" href={phoneHref}>Hívás</a>
      </header>

      <main id="kezdolap">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Tűzifa Nemeskoltáról</p>
            <h1 id="hero-title">Tűzifa házhozszállítással</h1>
            <p className="hero-lead">
              Nemeskoltáról kb. 30 km-es körzetben (Szombathely, Körmend,
              Vasvár, Rum és környéke)
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={phoneHref}>Hívás rendeléshez</a>
              <a className="button button-secondary" href={emailHref}>E-mail</a>
            </div>
            <ul className="highlights" aria-label="Fő feltételek">
              <li>Min. 3 m³</li>
              <li>Max. 6 m³ / fuvar</li>
              <li>Szállítás az árban</li>
              <li>Számlaadás</li>
            </ul>
          </div>
          <div className="wood-rings" aria-hidden="true">
            <span>20+ év</span>
          </div>
        </section>

        <section className="section intro" id="bemutatkozas" aria-labelledby="intro-title">
          <div className="intro-inner">
            <h2 id="intro-title">BEMUTATKOZÁS</h2>
            <p className="intro-greeting">Üdvözöljük a MEGYESI BT. weboldalán!</p>
            <p>
              Családi vállalkozásunk több mint 20 éve foglalkozik erdészeti
              munkákkal. Tevékenységünk része a fakitermelés, a faanyag
              előkészítése, valamint komplex erdészeti szolgáltatások nyújtása
              magánerdők és megrendelők számára.
            </p>
            <p>
              Tűzifából kályhakész tűzifát és igény szerint hasított méteres fát
              kínálunk, Nemeskoltáról kb. 30 km-es körzetben házhozszállítással.
              Célunk, hogy megbízható forrásból származó, jó minőségű
              tüzelőanyaggal szolgáljuk ki a környékbeli háztartásokat átlátható
              feltételekkel.
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

        <section className="section products" id="tuzifa" aria-labelledby="products-title">
          <div className="section-inner">
            <h2 id="products-title">Tűzifa kínálat</h2>
            <div className="product-grid">
              <article className="product-card">
                <span className="card-kicker">Tűzifa</span>
                <h3>Kályhakész tűzifa</h3>
                <p>Hasított, méretre vágott tűzifa, közvetlenül felhasználásra előkészítve.</p>
              </article>
              <article className="product-card">
                <span className="card-kicker">Tűzifa</span>
                <h3>Hasított méteres fa</h3>
                <p>Igény szerint hasított méteres fa, egyeztetett készletből és mennyiségben.</p>
              </article>
            </div>
            <p className="stock-note">
              Készlet szezonálisan változik – rendelés és egyeztetés kizárólag telefonon.
            </p>
          </div>
        </section>

        <section className="section prices" id="arak" aria-labelledby="prices-title">
          <div className="section-inner price-inner">
            <div className="section-heading-row">
              <h2 id="prices-title">Árak</h2>
              <span className="placeholder-badge">PLACEHOLDER – CSERÉLENDŐ</span>
            </div>
            <div className="table-wrap">
              <table>
                <caption className="sr-only">Minta tűzifa árlista, cserélendő adatokkal</caption>
                <thead>
                  <tr>
                    <th scope="col">Termék</th>
                    <th scope="col">Egység</th>
                    <th scope="col">Tájékoztató ár</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Kályhakész keményfa</td><td>m³</td><td>XX XXX Ft</td></tr>
                  <tr><td>Kályhakész vegyes fa</td><td>m³</td><td>XX XXX Ft</td></tr>
                  <tr><td>Hasított méteres fa</td><td>m³</td><td>XX XXX Ft</td></tr>
                </tbody>
              </table>
            </div>
            <p className="price-note">
              A feltüntetett sorok és árak kizárólag minták. Az aktuális készletről
              és árakról kérjük, érdeklődjön telefonon.
            </p>
          </div>
        </section>

        <section className="section delivery" id="szallitas" aria-labelledby="delivery-title">
          <div className="section-inner delivery-grid">
            <div>
              <h2 id="delivery-title">Szállítás és feltételek</h2>
              <p>
                Nemeskoltáról kb. 30 km-es körzetben szállítunk: Szombathely,
                Körmend, Vasvár, Rum és környéke. A pontos címről és szállítási
                időpontról telefonon egyeztetünk.
              </p>
            </div>
            <ul className="condition-list">
              <li>Minimum rendelés: 3 m³</li>
              <li>Egy fuvar maximum 6 m³</li>
              <li>A kiszállítás benne van az árban</li>
              <li>Minden vásárlásról számlát adunk</li>
            </ul>
          </div>
        </section>

        <section className="section process" id="rendeles" aria-labelledby="process-title">
          <div className="section-inner">
            <h2 id="process-title">Rendelés menete</h2>
            <p className="section-lead">Egyszerűen, kizárólag telefonos egyeztetéssel.</p>
            <ol className="process-grid">
              <li>
                <span className="step-number">01</span>
                <h3>Hívjon minket</h3>
                <p>Telefonon jelezze a kívánt terméket és mennyiséget.</p>
              </li>
              <li>
                <span className="step-number">02</span>
                <h3>Egyeztetünk</h3>
                <p>Átbeszéljük a részleteket, készletet és a szállítás idejét.</p>
              </li>
              <li>
                <span className="step-number">03</span>
                <h3>Kiszállítunk</h3>
                <p>A megbeszélt időben érkezünk, és számlát adunk.</p>
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
                  <dd>Nemeskolta, Magyarország</dd>
                </div>
              </dl>
              <p className="contact-note">
                Aktuális készletért és rendeléshez kérjük, hívjon minket.
              </p>
            </div>
            <div className="map-wrap">
              <iframe
                title="Megyesi Bt. – Nemeskolta térkép"
                src="https://www.google.com/maps?q=Nemeskolta&output=embed"
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
            <p>Telefonos és e-mailes kapcsolatfelvétel · nincs űrlap</p>
          </div>
          <nav className="footer-links" aria-label="Jogi információk">
            <a href="#impresszum">Impresszum</a>
            <a href="#adatkezeles">Adatkezelés</a>
          </nav>
          <section className="legal-panel" id="impresszum" aria-labelledby="impresszum-title">
            <h2 id="impresszum-title">Impresszum</h2>
            <p>
              Üzemeltető: Megyesi Bt. · Székhely/telephely: Nemeskolta,
              Magyarország · Kapcsolat: <a href={emailHref}>megyesibt@gmail.com</a>
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
        Hívás rendeléshez
      </a>
    </>
  );
}
