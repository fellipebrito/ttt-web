/* global React */
// ════════════════════════════════════════════════════════════
// CUT LINE — app screen mockups
// The three approved app flows (New Session · Log a Putt · Make
// the Cut), re-rendered on the Tee Time Trainer design system.
// Native 390×844 markup, scaled crisply into a phone slot via
// .cl-phone (see cutline-screens.css). Same source as the
// standalone "Cut Line - App Screens.html" studio file.
// ════════════════════════════════════════════════════════════

const SB = `
  <div class="sb">
    <span class="sb__time">5:01</span>
    <span class="sb__right">
      <span class="sb__dots"><i></i><i></i><i></i><i></i></span>
      <svg width="17" height="13" viewBox="0 0 17 13" fill="none"><path d="M8.5 2.2c2.2 0 4.2.85 5.7 2.25l1.05-1.1A9.6 9.6 0 0 0 8.5.6 9.6 9.6 0 0 0 1.75 3.35L2.8 4.45A8.1 8.1 0 0 1 8.5 2.2Z" fill="#FFF8E3"/><path d="M8.5 5.2c1.4 0 2.65.55 3.6 1.45l1.05-1.1A7 7 0 0 0 8.5 3.6a7 7 0 0 0-4.65 1.95L4.9 6.65A5.5 5.5 0 0 1 8.5 5.2Z" fill="#FFF8E3"/><path d="M8.5 8.2c.62 0 1.18.25 1.6.66l-1.6 1.69-1.6-1.69c.42-.41.98-.66 1.6-.66Z" fill="#FFF8E3"/></svg>
      <svg width="26" height="13" viewBox="0 0 26 13" fill="none"><rect x="1" y="1.5" width="21" height="10" rx="2.6" stroke="#FFF8E3" stroke-opacity="0.5" stroke-width="1.2"/><rect x="2.6" y="3.1" width="17.5" height="6.8" rx="1.4" fill="#FFF8E3"/><path d="M23.6 4.5v4c.8-.3 1.3-1 1.3-2s-.5-1.7-1.3-2Z" fill="#FFF8E3" fill-opacity="0.6"/></svg>
    </span>
  </div>`;

// ── Screen 1: New Session ─────────────────────────────────────────
const SCREEN_HOME = `
<div class="screen">
  ${SB}
  <div class="body">
    <div class="nav">
      <button class="nav__back"><span class="nav__chev">‹</span></button>
      <div class="nav__title">New Session</div>
      <span></span>
    </div>
    <div class="s1" style="flex:1;display:flex;flex-direction:column;">
      <h2 class="s1__q">Longest putt you can hit on this green?</h2>
      <div class="fill"></div>
      <div class="s1__opts">
        <div class="opt">25 FT</div>
        <div class="opt">30 FT</div>
        <div class="opt">40 FT</div>
        <div class="opt">50 FT</div>
        <div class="opt">60 FT</div>
        <div class="opt opt--on">70 FT</div>
      </div>
      <div class="s1__steps">Approximately 23 steps</div>
      <div class="fill"></div>
      <button class="btn-primary"><span class="tri">▶</span> Start Session</button>
    </div>
  </div>
</div>`;

// ── Screen 2: Log a Putt ──────────────────────────────────────────
const SCREEN_PUTT = `
<div class="screen">
  ${SB}
  <div class="body">
    <div class="nav">
      <button class="nav__close"><span class="nav__x">✕</span></button>
      <div class="nav__title">Putt 1 / 9</div>
      <span></span>
    </div>
    <div class="s2" style="flex:1;display:flex;flex-direction:column;">
      <div class="prog">
        <span class="cur"></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
      <div class="s2__dist"><span class="s2__num">14</span><span class="s2__ft">FT</span></div>
      <div class="s2__steps">Approximately 5 steps</div>
      <div class="s2__choices">
        <div class="choice"><div class="choice__chip">1</div><div class="choice__lbl">Made It</div></div>
        <div class="choice choice--two"><div class="choice__chip">2</div><div class="choice__lbl">Two Putt</div></div>
        <div class="choice choice--three"><div class="choice__chip">3+</div><div class="choice__lbl">Three or More</div></div>
      </div>
    </div>
  </div>
</div>`;

// ── Screen 3: Make the Cut ────────────────────────────────────────
const SCREEN_RESULT = `
<div class="screen">
  ${SB}
  <div class="body">
    <div class="s3" style="flex:1;">
      <div class="nav">
        <button class="nav__close"><span class="nav__x">✕</span><span class="nav__closetxt">Close</span></button>
      </div>
      <div class="card">
        <div class="score">
          <div class="score__k">Your Score</div>
          <div class="score__n">14</div>
          <div class="score__u">Putts</div>
        </div>
        <div class="cut-banner">
          <div class="cut-banner__main"><span>✓</span> You Made the Cut</div>
          <div class="cut-banner__streak">Cut Streak · 2</div>
        </div>
        <div class="sc">
          <div class="sc__top"><span>Scorecard</span><span>Max Distance: 30 FT</span></div>
          <div class="sc__grid">
            <div class="sc__col"><span class="sc__i">1</span><span class="sc__v circ">26</span></div>
            <div class="sc__col"><span class="sc__i">2</span><span class="sc__v">12</span></div>
            <div class="sc__col"><span class="sc__i">3</span><span class="sc__v circ">15</span></div>
            <div class="sc__col"><span class="sc__i">4</span><span class="sc__v box">28</span></div>
            <div class="sc__col"><span class="sc__i">5</span><span class="sc__v">24</span></div>
            <div class="sc__col"><span class="sc__i">6</span><span class="sc__v circ">30</span></div>
            <div class="sc__col"><span class="sc__i">7</span><span class="sc__v circ">21</span></div>
            <div class="sc__col"><span class="sc__i">8</span><span class="sc__v">13</span></div>
            <div class="sc__col"><span class="sc__i">9</span><span class="sc__v circ">16</span></div>
          </div>
          <div class="sc__cap">Distance in Feet</div>
        </div>
        <div class="plate">
          <div class="plate__k">Make the Cut</div>
          <div class="plate__wm"><span class="cut">CUT</span> <span class="line">LINE</span></div>
        </div>
      </div>
      <div class="fill"></div>
      <button class="btn-primary">Done</button>
      <button class="btn-share">Share ↗</button>
    </div>
  </div>
</div>`;

function Phone({ html }) {
  return <div className="cl-phone" dangerouslySetInnerHTML={{ __html: html }} />;
}

function ScreenHome()   { return <Phone html={SCREEN_HOME} />; }
function ScreenPutt()   { return <Phone html={SCREEN_PUTT} />; }
function ScreenResult() { return <Phone html={SCREEN_RESULT} />; }

// legacy export (no longer used by the layout, kept for safety)
function PhoneChrome({ children }) { return <div className="cl-phone">{children}</div>; }

Object.assign(window, { ScreenHome, ScreenPutt, ScreenResult, PhoneChrome });
