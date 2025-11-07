import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Impressum | Hackmann-Heizöl | Rechtliche Angaben"
        description="Impressum der Hackmann-Heizöl (Hackmann & Comp. GmbH) - Alle rechtlichen Angaben, Kontaktdaten und Registereintrag. Amtsgericht Hannover HRB 51477."
        keywords="Impressum, Hackmann-Heizöl, Hannover, HRB 51477, rechtliche Angaben"
        canonicalUrl="https://hackmann-heizoel.de/impressum"
      />
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
                <div className="space-y-2">
                  <p><strong>Hackmann-Heizöl (Hackmann & Comp. GmbH)</strong></p>
                  <p>Kampstr. 88 b</p>
                  <p>30629 Hannover</p>
                  <p>Deutschland</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
                <div className="space-y-2">
                  <p><strong>Telefon:</strong> 0511 16653346</p>
                  <p><strong>E-Mail:</strong> info@hackmann-heizoel.de</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Registereintrag</h2>
                <div className="space-y-2">
                  <p><strong>Eintragung im Handelsregister:</strong></p>
                  <p>Registergericht: Amtsgericht Hannover</p>
                  <p>Registernummer: HRB 51477</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                <p><strong>DE427997629</strong></p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <div className="space-y-2">
                  <p>Hackmann-Heizöl (Hackmann & Comp. GmbH)</p>
                  <p>Kampstr. 88 b</p>
                  <p>30629 Hannover</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftungsausschluss</h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Haftung für Inhalte</h3>
                  <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                  
                  <h3 className="text-lg font-semibold">Haftung für Links</h3>
                  <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                  
                  <h3 className="text-lg font-semibold">Urheberrecht</h3>
                  <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impressum;
