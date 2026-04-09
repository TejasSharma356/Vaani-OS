import React, { useEffect, useState } from 'react';
import LiveDemo from './components/LiveDemo';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav>
        <div className="nav-logo">
          VAANI
          <span className="devanagari">वाणी</span>
          <span className="nav-badge">BETA</span>
        </div>
        <ul className="nav-links">
          <li><a href="#how">How it Works</a></li>
          <li><a href="#demo">Live Demo</a></li>
          <li><a href="#languages">Languages</a></li>
          <li><a href="#business">Business</a></li>
        </ul>
        <button className="btn-primary" style={{ padding: '12px 24px', fontSize: '13px' }} onClick={() => setIsModalOpen(true)}>
          Contact Us →
        </button>
      </nav>

      <section className="hero">
        <div className="hero-bg-text">वाणी</div>

        <div className="hero-left">
          <div className="hero-tag">LIVE ON 2G · NO APP · NO SMARTPHONE</div>
          <h1 className="hero-title">
            <span className="line-orange">VAANI</span>
            <span className="line-deva">वाणी</span>
          </h1>
          <p className="hero-sub">
            An AI OS for India's <strong>600 million feature phone users.</strong><br/>
            No smartphone. No app download. No internet. Just dial <strong>*321#</strong>,
            speak in your language, and get intelligent answers spoken back.
          </p>
          <div className="hero-cta">
            <a href="#demo" className="btn-primary">Try the Demo</a>
            <a href="#pitch" className="btn-ghost">YC Pitch Deck</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="phone-stack">
            <div className="signal-ring"></div>
            <div className="signal-ring"></div>
            <div className="signal-ring"></div>

            <div className="feature-phone">
              <div className="ussd-bubble">*321# → VAANI AI</div>

              <div className="phone-screen">
                <div id="screenDisplay">
                  <div className="screen-line orange">VAANI OS v1.0</div>
                  <div className="screen-line dim">──────────────</div>
                  <div className="screen-line">Connecting...</div>
                  <div className="screen-line dim">2G · Airtel · USSD</div>
                  <div className="screen-line">&nbsp;</div>
                  <div className="screen-line hindi">आप क्या जानना</div>
                  <div className="screen-line hindi">चाहते हैं?</div>
                  <div className="screen-line">&nbsp;</div>
                  <div className="screen-line blink">_</div>
                </div>
              </div>

              <div className="phone-keypad">
                <div className="key">1<br/><span style={{fontSize:'7px',color:'#555'}}>ABC</span></div>
                <div className="key">2<br/><span style={{fontSize:'7px',color:'#555'}}>DEF</span></div>
                <div className="key">3<br/><span style={{fontSize:'7px',color:'#555'}}>GHI</span></div>
                <div className="key">4<br/><span style={{fontSize:'7px',color:'#555'}}>JKL</span></div>
                <div className="key">5<br/><span style={{fontSize:'7px',color:'#555'}}>MNO</span></div>
                <div className="key">6<br/><span style={{fontSize:'7px',color:'#555'}}>PQR</span></div>
                <div className="key">7<br/><span style={{fontSize:'7px',color:'#555'}}>STU</span></div>
                <div className="key">8<br/><span style={{fontSize:'7px',color:'#555'}}>VWX</span></div>
                <div className="key">9<br/><span style={{fontSize:'7px',color:'#555'}}>YZ</span></div>
                <div className="key call">📞</div>
                <div className="key">0</div>
                <div className="key end">✕</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-inner">
          <span>हिंदी</span> · HINDI · <span>বাংলা</span> · BANGLA · <span>தமிழ்</span> · TAMIL · <span>తెలుగు</span> · TELUGU · <span>मराठी</span> · MARATHI · <span>ਪੰਜਾਬੀ</span> · PUNJABI · <span>ಕನ್ನಡ</span> · KANNADA · <span>ગુજરાતી</span> · GUJARATI · NO SMARTPHONE REQUIRED · 2G COMPATIBLE · USSD + IVR · AI-POWERED ·
          <span>हिंदी</span> · HINDI · <span>বাংলা</span> · BANGLA · <span>தமிழ்</span> · TAMIL · <span>తెలుగు</span> · TELUGU · <span>मराठी</span> · MARATHI · <span>ਪੰਜਾਬੀ</span> · PUNJABI · <span>ಕನ್ನಡ</span> · KANNADA · <span>ગુજરાતી</span> · GUJARATI · NO SMARTPHONE REQUIRED · 2G COMPATIBLE · USSD + IVR · AI-POWERED ·
        </div>
      </div>

      <section className="stats">
        <div className="stat-card fade-up">
          <div className="stat-num">600M</div>
          <div className="stat-label">Feature phone users in India with zero AI access today</div>
        </div>
        <div className="stat-card fade-up">
          <div className="stat-num">22</div>
          <div className="stat-label">Official Indian languages. We support the top 12 spoken by 95% of population</div>
        </div>
        <div className="stat-card fade-up">
          <div className="stat-num">₹0</div>
          <div className="stat-label">Cost for the user. Zero. Toll-free IVR + USSD. Monetized via B2B</div>
        </div>
        <div className="stat-card fade-up">
          <div className="stat-num">2G</div>
          <div className="stat-label">Works on lowest connectivity. USSD requires less bandwidth than a text message</div>
        </div>
      </section>

      <section className="how" id="how">
        <div className="section-label">Architecture</div>
        <h2 className="section-title fade-up">HOW<br/><span style={{color:'var(--saffron)'}}>VAANI</span><br/>WORKS</h2>

        <div className="flow-grid">
          <div className="flow-card fade-up">
            <div className="flow-num">01</div>
            <div className="flow-icon">📞</div>
            <div className="flow-title">User Dials *321#</div>
            <div className="flow-desc">Works on any mobile phone — Nokia 3310, Jio Phone, basic Airtel handset. No internet, no app, no data pack needed. USSD session opens instantly, like checking balance.</div>
            <div className="flow-code">USSD → *321# → Session Open<br/>Latency: &lt;800ms on 2G</div>
          </div>
          <div className="flow-card fade-up">
            <div className="flow-num">02</div>
            <div className="flow-icon">🎙️</div>
            <div className="flow-title">Speak in Your Language</div>
            <div className="flow-desc">IVR prompts the user in their detected state language. They speak naturally — Hindi, Tamil, Bengali, Bhojpuri dialect — our ASR model transcribes in real-time, fine-tuned on Indian accents and low-quality audio.</div>
            <div className="flow-code">ASR → Whisper fine-tuned IN<br/>12 languages · dialectal variants</div>
          </div>
          <div className="flow-card fade-up">
            <div className="flow-num">03</div>
            <div className="flow-icon">🧠</div>
            <div className="flow-title">AI Processes + Responds</div>
            <div className="flow-desc">Query goes to our LLM layer with RAG over domain-specific knowledge bases — mandi prices, government schemes, weather, health. Response is generated in the same language and spoken back via TTS in under 3 seconds.</div>
            <div className="flow-code">LLM + RAG → TTS → Voice<br/>Response time: &lt;3s end-to-end</div>
          </div>
        </div>
      </section>

      <LiveDemo />

      <section className="languages" id="languages">
        <div className="section-label">Coverage</div>
        <h2 className="section-title fade-up">12 LANGUAGES<br/><span style={{color:'var(--saffron)'}}>DAY ONE</span></h2>

        <div className="lang-grid">
          {/* List of languages ported directly to jsx */}
          <div className="lang-card fade-up"><span className="lang-script">हि</span><div className="lang-name">Hindi</div><div className="lang-speakers">530M speakers</div></div>
          <div className="lang-card fade-up"><span className="lang-script">বা</span><div className="lang-name">Bengali</div><div className="lang-speakers">100M speakers</div></div>
          <div className="lang-card fade-up"><span className="lang-script">த</span><div className="lang-name">Tamil</div><div className="lang-speakers">80M speakers</div></div>
          <div className="lang-card fade-up"><span className="lang-script">తె</span><div className="lang-name">Telugu</div><div className="lang-speakers">82M speakers</div></div>
          <div className="lang-card fade-up"><span className="lang-script">मर</span><div className="lang-name">Marathi</div><div className="lang-speakers">83M speakers</div></div>
          <div className="lang-card fade-up"><span className="lang-script">ਪੰ</span><div className="lang-name">Punjabi</div><div className="lang-speakers">33M speakers</div></div>
          <div className="lang-card fade-up"><span className="lang-script">ಕ</span><div className="lang-name">Kannada</div><div className="lang-speakers">44M speakers</div></div>
          <div className="lang-card fade-up"><span className="lang-script">ગુ</span><div className="lang-name">Gujarati</div><div className="lang-speakers">56M speakers</div></div>
          <div className="lang-card fade-up"><span className="lang-script">ओ</span><div className="lang-name">Odia</div><div className="lang-speakers">38M speakers</div></div>
          <div className="lang-card fade-up"><span className="lang-script">മ</span><div className="lang-name">Malayalam</div><div className="lang-speakers">38M speakers</div></div>
          <div className="lang-card fade-up"><span className="lang-script">अ</span><div className="lang-name">Awadhi</div><div className="lang-speakers">40M speakers</div></div>
          <div className="lang-card fade-up"><span className="lang-script">भो</span><div className="lang-name">Bhojpuri</div><div className="lang-speakers">55M speakers</div></div>
        </div>
      </section>

      <section className="biz" id="business">
        <div className="biz-inner">
          <div className="section-label">Revenue Model</div>
          <h2 className="section-title fade-up">NOT FREE.<br/><span style={{color:'var(--saffron)'}}>B2B2C.</span></h2>

          <div className="biz-grid">
            <div className="biz-card featured fade-up">
              <div className="biz-icon">🌾</div>
              <div className="biz-title">Agri-Input API</div>
              <div className="biz-desc">Fertilizer cos (IFFCO, Coromandel), seed companies, and pesticide brands pay per qualified recommendation that leads to a purchase. Farmer gets free advice. Company gets qualified, intent-based lead at scale.</div>
              <div className="biz-rev">₹8–15 per recommendation → ₹80Cr/yr potential at 1% of farmers</div>
            </div>
            <div className="biz-card fade-up">
              <div className="biz-icon">🏦</div>
              <div className="biz-title">Gov & Financial Inclusion</div>
              <div className="biz-desc">State governments pay for VAANI to be the AI interface for welfare scheme eligibility, crop insurance queries, and Jan Dhan account assistance. Telecom operators (Airtel, Jio) white-label for rural ARPU boost.</div>
              <div className="biz-rev">₹2–5 per USSD session · SLA contracts with state govts</div>
            </div>
            <div className="biz-card fade-up">
              <div className="biz-icon">💊</div>
              <div className="biz-title">Health & Insurance</div>
              <div className="biz-desc">Ayushman Bharat navigation, PMJAY claim status, nearest PHC routing. Health insurance cos pay for qualified leads. Pharma pays for OTC medicine awareness campaigns through our voice channel.</div>
              <div className="biz-rev">₹50–200 per insurance lead · highest LTV segment</div>
            </div>
          </div>
        </div>
      </section>

      <section className="tech" id="tech">
        <div className="section-label">Under the Hood</div>
        <h2 className="section-title fade-up">BUILT<br/><span style={{color:'var(--saffron)'}}>DIFFERENT</span></h2>

        <div className="tech-grid">
          <div className="tech-row fade-up">
            <div className="tech-category">Voice Layer</div>
            <div className="tech-items">
              <span className="tech-tag">Whisper Fine-Tuned IN</span>
              <span className="tech-tag">IndicASR</span>
              <span className="tech-tag">Custom IVR</span>
              <span className="tech-tag">Asterisk PBX</span>
            </div>
          </div>
          <div className="tech-row fade-up">
            <div className="tech-category">AI Core</div>
            <div className="tech-items">
              <span className="tech-tag">Claude API</span>
              <span className="tech-tag">IndicLLM</span>
              <span className="tech-tag">RAG Pipeline</span>
              <span className="tech-tag">Domain KBs</span>
            </div>
          </div>
          <div className="tech-row fade-up">
            <div className="tech-category">TTS</div>
            <div className="tech-items">
              <span className="tech-tag">IndicTTS</span>
              <span className="tech-tag">Bhashini API</span>
              <span className="tech-tag">Custom Voice Cloning</span>
            </div>
          </div>
          <div className="tech-row fade-up">
            <div className="tech-category">Telecom</div>
            <div className="tech-items">
              <span className="tech-tag">USSD Gateway</span>
              <span className="tech-tag">IVR / SS7</span>
              <span className="tech-tag">Exotel API</span>
              <span className="tech-tag">Twilio IN</span>
            </div>
          </div>
          <div className="tech-row fade-up">
            <div className="tech-category">Data</div>
            <div className="tech-items">
              <span className="tech-tag">Agmarknet (Mandi)</span>
              <span className="tech-tag">IMD Weather</span>
              <span className="tech-tag">MyScheme.gov</span>
              <span className="tech-tag">ABDM</span>
            </div>
          </div>
          <div className="tech-row fade-up">
            <div className="tech-category">Moat</div>
            <div className="tech-items">
              <span className="tech-tag">Call Graph Data</span>
              <span className="tech-tag">Query Corpus</span>
              <span className="tech-tag">Regional Dialect ASR</span>
              <span className="tech-tag">Feedback Loop</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pitch" id="pitch">
        <div className="pitch-quote">वाणी</div>
        <p className="pitch-statement">
          ChatGPT exists for <strong>the top 2% of India.</strong><br/>
          VAANI is for <strong>everyone else.</strong>
        </p>
        <p className="pitch-sub">
          600 million people in India own a phone but cannot access AI — not because they're not smart enough,
          but because the entire AI stack was built for English, smartphones, and broadband.
          VAANI tears that down. One phone call. Your language. Any question.
          No app. No internet. No English.
        </p>
        <div style={{marginBottom:'40px'}}>
          <div style={{fontFamily:"'Space Mono',monospace",fontSize:'11px',letterSpacing:'3px',color:'rgba(255,248,240,0.3)',marginBottom:'20px',textTransform:'uppercase'}}>YC One-Liner</div>
          <div style={{fontSize:'20px',fontWeight:700,color:'var(--cream)',borderLeft:'3px solid var(--saffron)',paddingLeft:'24px',textAlign:'left',maxWidth:'700px',margin:'0 auto'}}>
            "We're building the AI OS for India's 600 million feature phone users — accessible via a toll-free phone call, in 12 languages, with zero smartphone or internet required."
          </div>
        </div>
        <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
          <a href="#how" className="btn-primary">See the Tech</a>
          <a href="#business" className="btn-ghost">Business Model</a>
        </div>
      </section>

      <footer>
        <div className="footer-logo">VAANI</div>
        <div>DIAL *321# FROM ANY PHONE · AI FOR EVERY INDIAN</div>
        <div>© 2026 · BUILT FOR YC</div>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default App;
