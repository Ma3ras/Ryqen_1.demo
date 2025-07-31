import React, { useState, useEffect } from "react";

export function ServicePricing({ darkBackground = false, patternBackground = false, patternName = 'Pattern9' }) {
  const [patternLoaded, setPatternLoaded] = useState(false);

  useEffect(() => {
    // Simulate pattern loading
    const timer = setTimeout(() => {
      setPatternLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section 
      className={`px-[5%] py-16 md:py-24 lg:py-28 ${darkBackground ? 'bg-[#2E2E2E]' : 'bg-white'} relative`}
      style={patternBackground ? {
        backgroundImage: `url('/${patternName}.webp')`,
        backgroundSize: '400px 400px',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat'
      } : {}}
    >
      {patternBackground && <div className={`absolute inset-0 ${darkBackground ? 'bg-[#2E2E2E]' : 'bg-white'}`} style={{ opacity: 0.2 }}></div>}
      <style jsx>{`
        .pricing-box-shadow {
          box-shadow: ${darkBackground 
            ? '0 10px 25px rgba(255, 255, 255, 0.2)' 
            : '0 10px 25px rgba(0, 0, 0, 0.3)'
          };
        }
      `}</style>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-medium mb-6 ${darkBackground ? 'text-white' : 'text-gray-900'}`}>
            Unsere Dienstleistungen
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${darkBackground ? 'text-gray-300' : 'text-gray-600'}`}>
            Transparente Preise für alle unsere Services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                     {/* Cut & Go */}
           <div className="bg-white rounded-lg overflow-hidden border-2 pricing-box-shadow" style={{ borderColor: 'rgba(0, 0, 0, 0.5)' }}>
                           <div 
                className={`px-6 py-4 relative transition-all duration-300 ${!patternLoaded ? 'blur-sm' : ''}`}
                style={{
                  backgroundImage: `url('/Pattern6.png')`,
                  backgroundSize: '200px 200px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'repeat'
                }}
              >
                <div className="absolute inset-0 bg-gray-800" style={{ opacity: 0.5 }}></div>
                <h3 className="text-xl font-medium text-white relative z-10">Cut & Go</h3>
              </div>
            <div className="p-6">
              <ul className="space-y-3">
                                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Waschen, Schneiden, Speedstyling bis Kinn</span>
                   <span className="font-medium text-gray-900 ml-4">ab 75€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Waschen, Schneiden, Speedstyling ab Kinn</span>
                   <span className="font-medium text-gray-900 ml-4">ab 79€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Waschen, Schneiden, selber Föhnen</span>
                   <span className="font-medium text-gray-900 ml-4">ab 35€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Pony schneiden</span>
                   <span className="font-medium text-gray-900 ml-4">ab 10€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Splissschnitt</span>
                   <span className="font-medium text-gray-900 ml-4">ab 15€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Haarschnitt, Maschine</span>
                   <span className="font-medium text-gray-900 ml-4">ab 35€</span>
                 </li>
              </ul>
            </div>
          </div>

                     {/* Farbsorglospaket */}
           <div className="bg-white rounded-lg overflow-hidden border-2 pricing-box-shadow" style={{ borderColor: 'rgba(0, 0, 0, 0.5)' }}>
                           <div 
                className={`px-6 py-4 relative transition-all duration-300 ${!patternLoaded ? 'blur-sm' : ''}`}
                style={{
                  backgroundImage: `url('/Pattern6.png')`,
                  backgroundSize: '200px 200px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'repeat'
                }}
              >
                <div className="absolute inset-0 bg-gray-800" style={{ opacity: 0.5 }}></div>
                <h3 className="text-xl font-medium text-white relative z-10">Farbsorglospaket</h3>
              </div>
            <div className="p-6">
              <ul className="space-y-3">
                                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Balayage Strähnen L (ganzer Kopf)</span>
                   <span className="font-medium text-gray-900 ml-4">ab 289€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Balayage Strähnen L (halber Kopf)</span>
                   <span className="font-medium text-gray-900 ml-4">ab 250€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Strähnen Balayage XXL Länge</span>
                   <span className="font-medium text-gray-900 ml-4">ab 330€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Blondierpaket</span>
                   <span className="font-medium text-gray-900 ml-4">ab 250€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Ansatzfarbe - Paket</span>
                   <span className="font-medium text-gray-900 ml-4">ab 188€</span>
                 </li>
              </ul>
            </div>
          </div>

                     {/* Haarkur und Pflege */}
           <div className="bg-white rounded-lg overflow-hidden border-2 pricing-box-shadow" style={{ borderColor: 'rgba(0, 0, 0, 0.5)' }}>
                           <div 
                className={`px-6 py-4 relative transition-all duration-300 ${!patternLoaded ? 'blur-sm' : ''}`}
                style={{
                  backgroundImage: `url('/Pattern6.png')`,
                  backgroundSize: '200px 200px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'repeat'
                }}
              >
                <div className="absolute inset-0 bg-gray-800" style={{ opacity: 0.5 }}></div>
                <h3 className="text-xl font-medium text-white relative z-10">Haarkur und Pflege</h3>
              </div>
            <div className="p-6">
              <ul className="space-y-3">
                                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Ausreinigung - Detox für Haar und Kopfhaut</span>
                   <span className="font-medium text-gray-900 ml-4">ab 20€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">3 Schritte Haar- und Kopfhautpflege</span>
                   <span className="font-medium text-gray-900 ml-4">ab 65€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Olaplex Behandlung</span>
                   <span className="font-medium text-gray-900 ml-4">ab 49€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Haarmaske</span>
                   <span className="font-medium text-gray-900 ml-4">ab 12€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Dauerwelle/Kur/Schn./Styling bis Kinn</span>
                   <span className="font-medium text-gray-900 ml-4">ab 146€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Newsha Glättung</span>
                   <span className="font-medium text-gray-900 ml-4">ab 280€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Newsha Intensiv Rescue System + Intense Repair Boost</span>
                   <span className="font-medium text-gray-900 ml-4">ab 59€</span>
                 </li>
              </ul>
            </div>
                                </div>

                     {/* Haarverlängerung und Extensions */}
           <div className="bg-white rounded-lg overflow-hidden border-2 pricing-box-shadow" style={{ borderColor: 'rgba(0, 0, 0, 0.5)' }}>
                           <div 
                className={`px-6 py-4 relative transition-all duration-300 ${!patternLoaded ? 'blur-sm' : ''}`}
                style={{
                  backgroundImage: `url('/Pattern6.png')`,
                  backgroundSize: '200px 200px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'repeat'
                }}
              >
                <div className="absolute inset-0 bg-gray-800" style={{ opacity: 0.5 }}></div>
                <h3 className="text-xl font-medium text-white relative z-10">Haarverlängerung und Extensions</h3>
              </div>
            <div className="p-6">
              <ul className="space-y-3">
                                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Tapes hochsetzen (pro Stück)</span>
                   <span className="font-medium text-gray-900 ml-4">ab 11€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Haarvrdichtung/Verlängerung mit Bondings</span>
                   <span className="font-medium text-gray-900 ml-4">ab 30€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Tapes hoch, 25 gr.</span>
                   <span className="font-medium text-gray-900 ml-4">ab 85€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Tapes hoch, 50 gr.</span>
                   <span className="font-medium text-gray-900 ml-4">ab 110€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Tapes hoch, 100 gr.</span>
                   <span className="font-medium text-gray-900 ml-4">ab 220€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Tapes 60 cm Balayage. 25 gr.</span>
                   <span className="font-medium text-gray-900 ml-4">ab 150€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Verdichtung 50 gramm bis 45 cm</span>
                   <span className="font-medium text-gray-900 ml-4">ab 240€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Haarverlängerung bis 45 cm 100 gr.</span>
                   <span className="font-medium text-gray-900 ml-4">ab 480€</span>
                 </li>
                                 <li className="flex justify-between items-start">
                   <div className="flex flex-col">
                     <span className="text-gray-700 text-sm">Haarverlängerung 45cm *125 Gramm Invisible Tapes</span>
                     <span className="text-gray-700 text-sm">Russisches Haar</span>
                   </div>
                   <span className="font-medium text-gray-900 ml-4">ab 750€</span>
                 </li>
              </ul>
            </div>
          </div>

                     {/* Low Budget Farbpakete - Box 1 */}
           <div className="bg-white rounded-lg overflow-hidden border-2 pricing-box-shadow" style={{ borderColor: 'rgba(0, 0, 0, 0.5)' }}>
                           <div 
                className={`px-6 py-4 relative transition-all duration-300 ${!patternLoaded ? 'blur-sm' : ''}`}
                style={{
                  backgroundImage: `url('/Pattern6.png')`,
                  backgroundSize: '200px 200px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'repeat'
                }}
              >
                <div className="absolute inset-0 bg-gray-800" style={{ opacity: 0.5 }}></div>
                <h3 className="text-xl font-medium text-white relative z-10">Low Budget Farbpakete</h3>
              </div>
            <div className="p-6">
              <ul className="space-y-3">
                                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Balayage/Strähnenpaket M (halber Kopf)</span>
                   <span className="font-medium text-gray-900 ml-4">ab 202€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Balayage/Strähnenpaket XL (ganzer kopf *extra lang/dick)</span>
                   <span className="font-medium text-gray-900 ml-4">ab 279€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Balayage/Strähnenpaket S (Oberkopf)</span>
                   <span className="font-medium text-gray-900 ml-4">ab 178€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Balayage/Strähnenpaket L (ganzer kopf)</span>
                   <span className="font-medium text-gray-900 ml-4">ab 234€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Ansatzfarbe</span>
                   <span className="font-medium text-gray-900 ml-4">ab 74€</span>
                 </li>
              </ul>
            </div>
          </div>

                     {/* Low Budget Farbpakete - Box 2 */}
           <div className="bg-white rounded-lg overflow-hidden border-2 pricing-box-shadow" style={{ borderColor: 'rgba(0, 0, 0, 0.5)' }}>
                           <div 
                className={`px-6 py-4 relative transition-all duration-300 ${!patternLoaded ? 'blur-sm' : ''}`}
                style={{
                  backgroundImage: `url('/Pattern6.png')`,
                  backgroundSize: '200px 200px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'repeat'
                }}
              >
                <div className="absolute inset-0 bg-gray-800" style={{ opacity: 0.5 }}></div>
                <h3 className="text-xl font-medium text-white relative z-10">Low Budget Farbpakete</h3>
              </div>
            <div className="p-6">
              <ul className="space-y-3">
                                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Ansatz-blondieren bis 3cm</span>
                   <span className="font-medium text-gray-900 ml-4">ab 139€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Intensive tönung bis Kinn</span>
                   <span className="font-medium text-gray-900 ml-4">ab 81€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Intensive tönung bis Schulter</span>
                   <span className="font-medium text-gray-900 ml-4">ab 94€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Färben kurz bis Augenbrauen</span>
                   <span className="font-medium text-gray-900 ml-4">ab 87€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Farbe mittel bis Kinn</span>
                   <span className="font-medium text-gray-900 ml-4">ab 101€</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <span className="text-gray-700 text-sm">Farbe bis Schulter</span>
                   <span className="font-medium text-gray-900 ml-4">ab 130€</span>
                 </li>
                             </ul>
             </div>
           </div>

                     {/* Herrenhaarschnitte */}
           <div className="bg-white rounded-lg overflow-hidden border-2 pricing-box-shadow" style={{ borderColor: 'rgba(0, 0, 0, 0.5)' }}>
                           <div 
                className={`px-6 py-4 relative transition-all duration-300 ${!patternLoaded ? 'blur-sm' : ''}`}
                style={{
                  backgroundImage: `url('/Pattern6.png')`,
                  backgroundSize: '200px 200px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'repeat'
                }}
              >
                <div className="absolute inset-0 bg-gray-800" style={{ opacity: 0.5 }}></div>
                <h3 className="text-xl font-medium text-white relative z-10">Herrenhaarschnitte</h3>
              </div>
                          <div className="p-6">
                <ul className="space-y-3">
                                     <li className="flex justify-between items-start">
                     <span className="text-gray-700 text-sm">Waschen, Schneiden & Stylen (Maschinenschnitt)</span>
                     <span className="font-medium text-gray-900 ml-4">ab 35€</span>
                   </li>
                   <li className="flex justify-between items-start">
                     <span className="text-gray-700 text-sm">Grauhaarkaschierung</span>
                     <span className="font-medium text-gray-900 ml-4">ab 29€</span>
                   </li>
                   <li className="flex justify-between items-start">
                     <span className="text-gray-700 text-sm">Blondierung inkl. Gloss & Pflege</span>
                     <span className="font-medium text-gray-900 ml-4">ab 129€</span>
                   </li>
                </ul>
              </div>
                      </div>
          </div>
        </div>
      </section>
    );
  } 