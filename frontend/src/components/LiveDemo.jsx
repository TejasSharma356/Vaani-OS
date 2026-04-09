import React, { useState, useEffect, useRef } from 'react';

const scenarios = [
  {
    lang: "HINDI",
    buttonText: "Farmer checking wheat mandi prices",
    buttonHindi: "गेहूं भाव?",
    lines: [
      { type: "prompt", text: "*321# → Session Open" },
      { type: "out", text: "Language detected: हिंदी" },
      { type: "divider" },
      { type: "out", text: "VAANI: नमस्ते! आप क्या जानना चाहते हैं?" },
      { type: "hindi", text: "User (voice): \"आज गेहूं का भाव क्या है, मंडी में?\"" },
      { type: "divider" },
      { type: "out", text: "⟳ Processing · AgMarket API + LLM..." },
      { type: "divider" },
      { type: "response", text: "VAANI: आज रायपुर मंडी में गेहूं का" },
      { type: "response", text: "भाव ₹2,180 प्रति क्विंटल है।" },
      { type: "response", text: "MSP से ₹80 ज़्यादा। कल से" },
      { type: "response", text: "भाव बढ़ने की उम्मीद है।" },
      { type: "divider" },
      { type: "out", text: "Session: 18s · Data cost: ₹0 · Toll-free" }
    ]
  },
  {
    lang: "TAMIL",
    buttonText: "Woman asking about PM Kisan scheme",
    buttonHindi: "தகுதி?",
    lines: [
      { type: "prompt", text: "*321# → Session Open" },
      { type: "out", text: "Language detected: தமிழ்" },
      { type: "divider" },
      { type: "out", text: "VAANI: வணக்கம்! நான் எப்படி உதவலாம்?" },
      { type: "hindi", text: "User (voice): \"PM Kisan scheme-ல என் பெயர் இருக்கா?\"" },
      { type: "divider" },
      { type: "out", text: "⟳ Processing · PM Kisan DB + Aadhaar lookup..." },
      { type: "divider" },
      { type: "response", text: "VAANI: உங்கள் Aadhaar கடைசி 4 இலக்கம்" },
      { type: "response", text: "சொல்லுங்கள் — நான் சரிபார்க்கிறேன்." },
      { type: "response", text: "PM Kisan-ல் பதிவு இருந்தால்" },
      { type: "response", text: "₹2,000 வரப்போகிறது: Dec 2025" },
      { type: "divider" },
      { type: "out", text: "Session: 24s · Data cost: ₹0 · Toll-free" }
    ]
  },
  {
    lang: "BENGALI",
    buttonText: "Daily laborer asking hospital location",
    buttonHindi: "হাসপাতাল?",
    lines: [
      { type: "prompt", text: "*321# → Session Open" },
      { type: "out", text: "Language detected: বাংলা" },
      { type: "divider" },
      { type: "out", text: "VAANI: নমস্কার! আমি কীভাবে সাহায্য করতে পারি?" },
      { type: "hindi", text: "User (voice): \"কাছে কোনো সরকারি হাসপাতাল আছে?\"" },
      { type: "divider" },
      { type: "out", text: "⟳ Processing · Cell tower triangulation + Health DB..." },
      { type: "divider" },
      { type: "response", text: "VAANI: আপনার কাছে ৩টি হাসপাতাল আছে:" },
      { type: "response", text: "১. বারাসাত জেলা হাসপাতাল — ২.৪ কিমি" },
      { type: "response", text: "২. PHC মধ্যমগ্রাম — ৩.১ কিমি" },
      { type: "response", text: "জরুরি হলে 108 ডায়াল করুন।" },
      { type: "divider" },
      { type: "out", text: "Session: 21s · Data cost: ₹0 · Toll-free" }
    ]
  },
  {
    lang: "GUJARATI",
    buttonText: "Small trader asking cotton rate",
    buttonHindi: "કપાસ ભાવ?",
    lines: [
      { type: "prompt", text: "*321# → Session Open" },
      { type: "out", text: "Language detected: ગુજરાતી" },
      { type: "divider" },
      { type: "out", text: "VAANI: નમસ્તે! હું કઈ રીતે મદદ કરી શકું?" },
      { type: "hindi", text: "User (voice): \"આજ સુરેન્દ્રનગર APMC માં કપાસ ભાવ?\"" },
      { type: "divider" },
      { type: "out", text: "⟳ Processing · AgMarknet Gujarat + MCX..." },
      { type: "divider" },
      { type: "response", text: "VAANI: સુરેન્દ્રનગર APMC — આજ કપાસ" },
      { type: "response", text: "ભાવ: ₹7,420 પ્રતિ ક્વિન્ટલ." },
      { type: "response", text: "MCX ભાવ ₹7,510 — 2 દિવસ" },
      { type: "response", text: "રાહ જોવી ફાયદાકારક રહેશે." },
      { type: "divider" },
      { type: "out", text: "Session: 19s · Data cost: ₹0 · Toll-free" }
    ]
  }
];

const LiveDemo = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const terminalRef = useRef(null);

  useEffect(() => {
    setDisplayedLines([]);
    let delay = 0;
    const timeouts = [];

    scenarios[activeIdx].lines.forEach((line, i) => {
      const t = setTimeout(() => {
        setDisplayedLines(prev => [...prev, line]);
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }, delay);
      timeouts.push(t);
      delay += line.type === 'divider' ? 100 : 400;
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [activeIdx]);

  return (
    <section className="demo-section" id="demo">
      <div className="demo-container">
        <div>
          <div className="section-label">Interactive Demo</div>
          <h2 className="section-title fade-up">HEAR<br/><span style={{ color: 'var(--saffron)' }}>VAANI</span><br/>LIVE</h2>

          <div className="demo-controls">
            <div className="scenario-label">Select a real-world scenario:</div>
            {scenarios.map((scenario, idx) => (
              <button 
                key={idx} 
                className={`scenario-btn ${idx === activeIdx ? 'active' : ''}`} 
                onClick={() => setActiveIdx(idx)}
              >
                <span className="lang-tag">{scenario.lang}</span>
                {scenario.buttonText}
                <span className="hindi-text">{scenario.buttonHindi}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="terminal">
          <div className="terminal-bar">
            <div className="t-dot r"></div>
            <div className="t-dot y"></div>
            <div className="t-dot g"></div>
            <span className="t-title">vaani-os · USSD SESSION · live simulation</span>
          </div>
          <div className="terminal-body" ref={terminalRef}>
            {displayedLines.map((line, i) => {
              if (line.type === 'divider') {
                return <hr key={i} style={{ border: 'none', borderTop: '1px solid #1a1a1a', margin: '4px 0' }} />;
              } else if (line.type === 'prompt') {
                return <div key={i} className="t-line"><span className="t-prompt">▶</span><span className="t-cmd">{line.text}</span></div>;
              } else if (line.type === 'out') {
                return <div key={i} className="t-line"><span className="t-out">{line.text}</span></div>;
              } else if (line.type === 'hindi') {
                return <div key={i} className="t-line"><span className="t-hindi">{line.text}</span></div>;
              } else if (line.type === 'response') {
                return <div key={i} className="t-line"><span className="t-response">◆ {line.text}</span></div>;
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
