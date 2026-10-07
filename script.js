/* =========================================================
   SME INTEGRATED ACADEMIC & TRANSPARENCY PLATFORM
   MAIN STYLESHEET
   RESPONSIVE / BURGUNDY / BURNT ORANGE PALETTE
   ========================================================= */


/* =========================================================
   ROOT VARIABLES
   ========================================================= */

:root {

  --primary: #741b17;
  --primary-dark: #4a161a;
  --primary-light: #f8ebe9;

  --accent: #8b3715;
  --accent-light: #f8eee8;

  --red: #741b17;
  --green: #16803c;

  --dark: #4a161a;
  --text: #3f3030;
  --muted: #756666;

  --white: #ffffff;
  --light: #fcf8f7;
  --border: #eadbd7;

  --brand-gradient:
    linear-gradient(
      135deg,
      #4a161a 0%,
      #741b17 55%,
      #8b3715 100%
    );

  --soft-gradient:
    linear-gradient(
      135deg,
      #ffffff 0%,
      #fcf4f1 100%
    );

  --accent-gradient:
    linear-gradient(
      135deg,
      #741b17 0%,
      #8b3715 100%
    );

  --shadow:
    0 20px 50px rgba(74, 22, 26, 0.12);

  --shadow-small:
    0 8px 24px rgba(74, 22, 26, 0.08);

  --radius: 18px;

}


/* =========================================================
   RESET
   ========================================================= */

* {

  margin: 0;
  padding: 0;
  box-sizing: border-box;

}


html {

  scroll-behavior: smooth;

  -webkit-text-size-adjust: 100%;

}


body {

  min-width: 320px;

  font-family:
    "DM Sans",
    sans-serif;

  color:
    var(--text);

  background:
    linear-gradient(
      180deg,
      #ffffff 0%,
      #fcf8f7 100%
    );

  line-height:
    1.6;

  overflow-x:
    hidden;

}


body.no-scroll {

  overflow:
    hidden;

}


img {

  max-width:
    100%;

  height:
    auto;

}


button,
input,
select,
textarea {

  font-family:
    inherit;

}


button {

  cursor:
    pointer;

}


a {

  text-decoration:
    none;

  color:
    inherit;

}


/* =========================================================
   CONTAINER
   ========================================================= */

.container {

  width:
    min(
      1160px,
      calc(100% - 40px)
    );

  margin:
    0 auto;

}


/* =========================================================
   NAVBAR
   ========================================================= */

.navbar {

  position:
    sticky;

  top:
    0;

  z-index:
    100;

  width:
    100%;

  background:
    rgba(255, 255, 255, 0.94);

  backdrop-filter:
    blur(16px);

  -webkit-backdrop-filter:
    blur(16px);

  border-bottom:
    1px solid var(--border);

}


.nav-content {

  min-height:
    76px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    space-between;

  gap:
    20px;

}


.brand {

  min-width:
    0;

  display:
    flex;

  align-items:
    center;

  gap:
    11px;

  font-family:
    "Outfit",
    sans-serif;

  font-weight:
    700;

  color:
    var(--dark);

}


.brand-logo {

  flex:
    0 0 auto;

  width:
    42px;

  height:
    42px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  border-radius:
    12px;

  background:
    var(--brand-gradient);

  color:
    white;

  font-size:
    23px;

  box-shadow:
    0 7px 18px rgba(116, 27, 23, 0.20);

  overflow:
    hidden;

}


.brand-logo img {

  width:
    100%;

  height:
    100%;

  object-fit:
    contain;

  display:
    block;

}


.brand-highlight {

  color:
    var(--primary);

}


.nav-links {

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  gap:
    clamp(16px, 2.5vw, 28px);

}


.nav-links a {

  color:
    var(--muted);

  font-size:
    14px;

  font-weight:
    600;

  white-space:
    nowrap;

  transition:
    0.2s ease;

}


.nav-links a:hover {

  color:
    var(--primary);

}


#navAuthArea {

  flex:
    0 0 auto;

}


.nav-button {

  border:
    none;

  background:
    var(--brand-gradient);

  color:
    white;

  padding:
    11px 17px;

  border-radius:
    10px;

  font-weight:
    700;

  white-space:
    nowrap;

  transition:
    0.2s ease;

  box-shadow:
    0 6px 16px rgba(116, 27, 23, 0.16);

}


.nav-button:hover {

  background:
    var(--accent-gradient);

  transform:
    translateY(-1px);

  box-shadow:
    0 9px 22px rgba(116, 27, 23, 0.22);

}


/* =========================================================
   HERO
   ========================================================= */

.hero {

  padding:
    clamp(70px, 9vw, 100px) 0
    clamp(65px, 8vw, 90px);

  overflow:
    hidden;

}


.hero-grid {

  display:
    grid;

  grid-template-columns:
    minmax(0, 1.05fr)
    minmax(0, 0.95fr);

  align-items:
    center;

  gap:
    clamp(35px, 6vw, 70px);

}


.eyebrow {

  display:
    inline-flex;

  align-items:
    center;

  gap:
    9px;

  padding:
    7px 12px;

  border:
    1px solid #e6c9c5;

  background:
    var(--primary-light);

  color:
    var(--primary);

  border-radius:
    999px;

  font-size:
    12px;

  font-weight:
    800;

  margin-bottom:
    22px;

}


.pulse {

  width:
    8px;

  height:
    8px;

  flex:
    0 0 auto;

  border-radius:
    50%;

  background:
    var(--accent);

  box-shadow:
    0 0 0 5px
    rgba(139, 55, 21, 0.10);

}


.hero h1 {

  font-family:
    "Outfit",
    sans-serif;

  font-size:
    clamp(44px, 6vw, 78px);

  line-height:
    0.98;

  color:
    var(--dark);

  margin-bottom:
    26px;

  overflow-wrap:
    break-word;

}


.highlight {

  color:
    var(--primary);

}


.hero-content > p {

  max-width:
    650px;

  font-size:
    clamp(16px, 2vw, 18px);

  color:
    var(--muted);

  margin-bottom:
    30px;

}


.hero-buttons {

  display:
    flex;

  flex-wrap:
    wrap;

  gap:
    12px;

}


/* =========================================================
   BUTTONS
   ========================================================= */

.primary-button,
.secondary-button {

  border:
    none;

  padding:
    13px 19px;

  border-radius:
    11px;

  font-weight:
    700;

  min-height:
    44px;

  transition:
    0.2s ease;

}


.primary-button {

  background:
    var(--brand-gradient);

  color:
    white;

  box-shadow:
    0 7px 18px rgba(116, 27, 23, 0.16);

}


.primary-button:hover {

  background:
    var(--accent-gradient);

  transform:
    translateY(-2px);

  box-shadow:
    0 10px 25px rgba(116, 27, 23, 0.22);

}


.secondary-button {

  background:
    white;

  color:
    var(--primary);

  border:
    1px solid #dcbfba;

}


.secondary-button:hover {

  background:
    var(--primary-light);

  border-color:
    #c9958d;

}


/* =========================================================
   HERO DASHBOARD
   ========================================================= */

.hero-visual {

  position:
    relative;

  min-height:
    410px;

  display:
    grid;

  place-items:
    center;

}


.orbit {

  position:
    absolute;

  width:
    min(350px, 80vw);

  height:
    min(350px, 80vw);

  border:
    1px solid #ead0cb;

  border-radius:
    50%;

  animation:
    rotate 18s linear infinite;

}


.orbit::before,
.orbit::after {

  content:
    "";

  position:
    absolute;

  border-radius:
    50%;

}


.orbit::before {

  width:
    13px;

  height:
    13px;

  background:
    var(--accent);

  top:
    12%;

  left:
    13%;

  box-shadow:
    0 0 18px rgba(139, 55, 21, 0.25);

}


.orbit::after {

  width:
    10px;

  height:
    10px;

  background:
    var(--primary);

  right:
    8%;

  bottom:
    20%;

  box-shadow:
    0 0 18px rgba(116, 27, 23, 0.25);

}


.dashboard-card {

  position:
    relative;

  z-index:
    2;

  width:
    min(
      100%,
      420px
    );

  padding:
    clamp(20px, 3vw, 28px);

  background:
    rgba(255,255,255,0.97);

  border:
    1px solid var(--border);

  border-radius:
    24px;

  box-shadow:
    var(--shadow);

}


.dashboard-top {

  display:
    flex;

  justify-content:
    space-between;

  align-items:
    flex-start;

  gap:
    20px;

}


.dashboard-top small {

  color:
    var(--muted);

  font-size:
    10px;

  font-weight:
    800;

  letter-spacing:
    0.12em;

}


.dashboard-top h3 {

  font-family:
    "Outfit",
    sans-serif;

  color:
    var(--dark);

  margin-top:
    3px;

}


.status {

  color:
    var(--green);

  font-size:
    12px;

  font-weight:
    800;

  white-space:
    nowrap;

}


.chart {

  height:
    180px;

  margin:
    35px 0;

  display:
    flex;

  align-items:
    end;

  gap:
    12px;

  padding:
    20px;

  border-radius:
    15px;

  background:
    linear-gradient(
      135deg,
      #fcf5f3,
      #f7ebe7
    );

}


.bar {

  flex:
    1;

  min-width:
    4px;

  border-radius:
    7px 7px 2px 2px;

  background:
    var(--accent-gradient);

  box-shadow:
    0 5px 12px rgba(116, 27, 23, 0.12);

}


.bar:nth-child(1) {
  height: 32%;
}

.bar:nth-child(2) {
  height: 48%;
}

.bar:nth-child(3) {
  height: 41%;
}

.bar:nth-child(4) {
  height: 68%;
}

.bar:nth-child(5) {
  height: 58%;
}

.bar:nth-child(6) {
  height: 82%;
}

.bar:nth-child(7) {
  height: 72%;
}


.dashboard-info {

  display:
    grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap:
    12px;

}


.mini-stat {

  min-width:
    0;

  padding:
    15px;

  border:
    1px solid var(--border);

  border-radius:
    13px;

  background:
    #fff;

}


.mini-stat small {

  display:
    block;

  color:
    var(--muted);

  font-size:
    11px;

}


.mini-stat strong {

  color:
    var(--dark);

  overflow-wrap:
    anywhere;

}


/* =========================================================
   SECTIONS
   ========================================================= */

section {

  padding:
    clamp(65px, 8vw, 95px) 0;

}


section:nth-of-type(even) {

  background:
    #fcf8f7;

}


.section-heading {

  max-width:
    700px;

  margin-bottom:
    42px;

}


.section-heading > span {

  color:
    var(--accent);

  font-size:
    12px;

  font-weight:
    800;

  letter-spacing:
    0.12em;

}


.section-heading h2 {

  font-family:
    "Outfit",
    sans-serif;

  color:
    var(--dark);

  font-size:
    clamp(32px, 5vw, 52px);

  line-height:
    1.05;

  margin:
    10px 0 15px;

}


.section-heading p {

  color:
    var(--muted);

}


/* =========================================================
   ACCESS GRID
   ========================================================= */

.access-grid {

  display:
    grid;

  grid-template-columns:
    repeat(4, minmax(0, 1fr));

  gap:
    18px;

}


.access-card {

  min-width:
    0;

  padding:
    25px;

  background:
    white;

  border:
    1px solid var(--border);

  border-radius:
    var(--radius);

  box-shadow:
    var(--shadow-small);

  display:
    flex;

  flex-direction:
    column;

  align-items:
    flex-start;

  transition:
    0.2s ease;

}


.access-card:hover {

  transform:
    translateY(-3px);

  border-color:
    #d9aaa2;

  box-shadow:
    var(--shadow);

}


.access-icon {

  width:
    48px;

  height:
    48px;

  flex:
    0 0 auto;

  display:
    grid;

  place-items:
    center;

  background:
    var(--primary-light);

  color:
    var(--primary);

  border-radius:
    13px;

  font-size:
    22px;

  margin-bottom:
    18px;

}


.card-label {

  color:
    var(--accent);

  font-size:
    11px;

  font-weight:
    800;

  text-transform:
    uppercase;

  letter-spacing:
    0.08em;

}


.access-card h3 {

  font-family:
    "Outfit",
    sans-serif;

  color:
    var(--dark);

  margin:
    7px 0 10px;

}


.access-card p {

  color:
    var(--muted);

  font-size:
    14px;

  margin-bottom:
    22px;

}


.access-card button {

  margin-top:
    auto;

}


/* =========================================================
   FEATURES
   ========================================================= */

.features-grid {

  display:
    grid;

  grid-template-columns:
    repeat(4, minmax(0, 1fr));

  gap:
    18px;

}


.feature-card {

  min-width:
    0;

  background:
    white;

  border:
    1px solid var(--border);

  border-radius:
    var(--radius);

  padding:
    28px;

  transition:
    0.2s ease;

}


.feature-card:hover {

  border-color:
    #d9aaa2;

  transform:
    translateY(-2px);

}


.feature-number {

  color:
    var(--primary);

  font-size:
    13px;

  font-weight:
    800;

}


.feature-card h3 {

  font-family:
    "Outfit",
    sans-serif;

  color:
    var(--dark);

  margin:
    25px 0 10px;

}


.feature-card p {

  color:
    var(--muted);

  font-size:
    14px;

}


/* =========================================================
   OBJECTIVE
   ========================================================= */

.objective-box {

  max-width:
    900px;

  margin:
    0 auto;

  text-align:
    center;

  padding:
    clamp(45px, 7vw, 70px)
    clamp(20px, 5vw, 40px);

  border-radius:
    30px;

  background:
    var(--brand-gradient);

  color:
    white;

  box-shadow:
    0 25px 60px rgba(74, 22, 26, 0.20);

  position:
    relative;

  overflow:
    hidden;

}


.objective-box::before {

  content:
    "";

  position:
    absolute;

  width:
    260px;

  height:
    260px;

  border-radius:
    50%;

  background:
    rgba(255,255,255,0.06);

  top:
    -120px;

  right:
    -80px;

}


.objective-box::after {

  content:
    "";

  position:
    absolute;

  width:
    200px;

  height:
    200px;

  border-radius:
    50%;

  background:
    rgba(255,255,255,0.05);

  bottom:
    -100px;

  left:
    -60px;

}


.math-symbol {

  position:
    relative;

  z-index:
    1;

  display:
    inline-grid;

  place-items:
    center;

  width:
    70px;

  height:
    70px;

  border-radius:
    20px;

  background:
    rgba(255,255,255,0.15);

  border:
    1px solid rgba(255,255,255,0.15);

  font-size:
    35px;

  margin-bottom:
    25px;

}


.objective-box h2 {

  position:
    relative;

  z-index:
    1;

  font-family:
    "Outfit",
    sans-serif;

  font-size:
    clamp(30px, 4vw, 48px);

  line-height:
    1.1;

  margin-bottom:
    20px;

}


.objective-box p {

  position:
    relative;

  z-index:
    1;

  max-width:
    700px;

  margin:
    auto;

  opacity:
    0.90;

}


/* =========================================================
   FOOTER
   ========================================================= */

footer {

  padding:
    30px 0;

  text-align:
    center;

  background:
    var(--dark);

  color:
    #d9c9c7;

  font-size:
    13px;

}


/* =========================================================
   MODAL OVERLAY
   ========================================================= */

.window-overlay {

  position:
    fixed;

  inset:
    0;

  z-index:
    500;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  padding:
    clamp(10px, 3vw, 20px);

  background:
    rgba(74, 22, 26, 0.68);

  backdrop-filter:
    blur(7px);

  -webkit-backdrop-filter:
    blur(7px);

  opacity:
    0;

  visibility:
    hidden;

  transition:
    0.25s ease;

}


.window-overlay.active {

  opacity:
    1;

  visibility:
    visible;

}


/* =========================================================
   WINDOWS
   ========================================================= */

.site-window {

  display:
    none;

  width:
    min(
      760px,
      100%
    );

  max-width:
    100%;

  max-height:
    90vh;

  overflow:
    auto;

  background:
    white;

  border-radius:
    22px;

  box-shadow:
    0 30px 90px
    rgba(74, 22, 26, 0.28);

  overscroll-behavior:
    contain;

}


.site-window.active {

  display:
    block;

  animation:
    windowIn 0.25s ease;

}


.window-header {

  position:
    sticky;

  top:
    0;

  z-index:
    2;

  display:
    flex;

  justify-content:
    space-between;

  align-items:
    center;

  gap:
    15px;

  padding:
    20px 24px;

  background:
    white;

  border-bottom:
    1px solid var(--border);

}


.window-title {

  min-width:
    0;

  display:
    flex;

  align-items:
    center;

  gap:
    13px;

}


.window-title h3 {

  font-family:
    "Outfit",
    sans-serif;

  color:
    var(--dark);

  overflow-wrap:
    anywhere;

}


.window-title p {

  color:
    var(--muted);

  font-size:
    12px;

}


.mini-icon {

  width:
    44px;

  height:
    44px;

  flex:
    0 0 auto;

  display:
    grid;

  place-items:
    center;

  border-radius:
    12px;

  background:
    var(--primary-light);

  color:
    var(--primary);

}


.close-button {

  width:
    38px;

  height:
    38px;

  flex:
    0 0 auto;

  border:
    none;

  border-radius:
    10px;

  background:
    #f5eeec;

  color:
    var(--dark);

  font-size:
    25px;

}


.close-button:hover {

  background:
    #eadbd7;

}


.header-actions {

  display:
    flex;

  align-items:
    center;

  gap:
    8px;

  flex-wrap:
    wrap;

}


.logout-button {

  border:
    none;

  background:
    #f8e5e2;

  color:
    var(--primary);

  padding:
    9px 13px;

  border-radius:
    9px;

  font-weight:
    700;

}


.window-body {

  padding:
    clamp(18px, 4vw, 25px);

}


/* =========================================================
   LOGIN FORM
   ========================================================= */

.form-group {

  margin-bottom:
    18px;

}


.form-group label {

  display:
    block;

  color:
    var(--dark);

  font-weight:
    700;

  font-size:
    13px;

  margin-bottom:
    7px;

}


.form-group input,
.form-group select,
.form-group textarea {

  width:
    100%;

  max-width:
    100%;

  padding:
    13px 14px;

  border:
    1px solid var(--border);

  border-radius:
    10px;

  outline:
    none;

  font-size:
    15px;

  transition:
    0.2s ease;

}


.form-group textarea {

  min-height:
    110px;

  resize:
    vertical;

}


.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {

  border-color:
    var(--primary);

  box-shadow:
    0 0 0 4px
    rgba(116,27,23,0.10);

}


.demo-passwords {

  display:
    none;

}


/* =========================================================
   ACCOUNT STRIP
   ========================================================= */

.account-strip {

  display:
    flex;

  align-items:
    center;

  justify-content:
    space-between;

  gap:
    15px;

  padding:
    14px 16px;

  border-radius:
    12px;

  background:
    #fcf8f7;

  border:
    1px solid var(--border);

  margin-bottom:
    20px;

}


.account-strip span {

  color:
    var(--muted);

  font-size:
    13px;

}


.good-status {

  color:
    var(--green);

}


/* =========================================================
   DASHBOARD GRID
   ========================================================= */

.window-grid {

  display:
    grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap:
    15px;

}


.window-option {

  min-width:
    0;

  text-align:
    left;

  border:
    1px solid var(--border);

  background:
    white;

  border-radius:
    15px;

  padding:
    20px;

  transition:
    0.2s ease;

}


.window-option:hover {

  border-color:
    #d4a29a;

  transform:
    translateY(-2px);

  box-shadow:
    var(--shadow-small);

}


.option-icon {

  font-size:
    25px;

  margin-bottom:
    12px;

}


.window-option h4 {

  color:
    var(--dark);

  font-family:
    "Outfit",
    sans-serif;

  margin-bottom:
    7px;

}


.window-option p {

  color:
    var(--muted);

  font-size:
    13px;

}


/* =========================================================
   REVIEWER CARDS
   ========================================================= */

.reviewer-folders {

  display:
    grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap:
    14px;

}


.folder-card {

  min-width:
    0;

  border:
    1px solid var(--border);

  border-radius:
    15px;

  padding:
    20px;

  background:
    white;

}


.folder-card span {

  color:
    var(--accent);

  font-size:
    11px;

  font-weight:
    800;

  text-transform:
    uppercase;

}


.folder-card h4 {

  font-family:
    "Outfit",
    sans-serif;

  color:
    var(--dark);

  margin:
    7px 0;

}


.folder-card p {

  color:
    var(--muted);

  font-size:
    13px;

}


/* =========================================================
   DETAIL LIST
   ========================================================= */

.detail-list {

  display:
    grid;

  gap:
    12px;

}


.detail-list article {

  min-width:
    0;

  padding:
    16px;

  border:
    1px solid var(--border);

  border-radius:
    12px;

  background:
    #fff;

}


.detail-list strong {

  display:
    block;

  color:
    var(--dark);

  overflow-wrap:
    anywhere;

}


.detail-list span {

  display:
    block;

  color:
    var(--muted);

  font-size:
    13px;

  margin-top:
    4px;

  overflow-wrap:
    anywhere;

}


/* =========================================================
   FINANCE
   ========================================================= */

.record-card {

  display:
    grid;

  gap:
    10px;

  padding:
    20px;

  background:
    #fcf8f7;

  border:
    1px solid var(--border);

  border-radius:
    15px;

}


.record-line {

  display:
    flex;

  justify-content:
    space-between;

  gap:
    20px;

  padding:
    12px 0;

  border-bottom:
    1px solid var(--border);

}


.record-line:last-child {

  border-bottom:
    none;

}


.record-line span {

  color:
    var(--muted);

}


.record-line strong {

  color:
    var(--dark);

  overflow-wrap:
    anywhere;

}


.private-panel {

  margin-top:
    20px;

}


.panel-heading {

  display:
    flex;

  justify-content:
    space-between;

  align-items:
    center;

  gap:
    12px;

  margin-bottom:
    12px;

}


.panel-heading h4 {

  color:
    var(--dark);

}


.panel-heading span {

  color:
    var(--primary);

  background:
    #f8e5e2;

  padding:
    5px 9px;

  border-radius:
    7px;

  font-size:
    11px;

  font-weight:
    800;

}


/* =========================================================
   RED CARD
   ========================================================= */

.year-switcher {

  margin-bottom:
    18px;

}


.year-switcher label {

  display:
    block;

  font-weight:
    700;

  font-size:
    13px;

  margin-bottom:
    7px;

}


.year-switcher select {

  width:
    100%;

  max-width:
    320px;

  padding:
    10px 12px;

  border:
    1px solid var(--border);

  border-radius:
    9px;

  background:
    white;

  color:
    var(--text);

}


.red-card-table-wrap {

  width:
    100%;

  overflow-x:
    auto;

  -webkit-overflow-scrolling:
    touch;

}


table {

  width:
    100%;

  min-width:
    650px;

  border-collapse:
    collapse;

}


th,
td {

  padding:
    13px;

  border-bottom:
    1px solid var(--border);

  text-align:
    left;

  font-size:
    13px;

  white-space:
    nowrap;

}


th {

  background:
    #fcf5f3;

  color:
    var(--dark);

}


td {

  color:
    var(--muted);

}


.status-chip {

  display:
    inline-block;

  padding:
    5px 9px;

  border-radius:
    999px;

  background:
    #dcfae6;

  color:
    #067647;

  font-size:
    11px;

  font-weight:
    800;

}


.status-chip.warning {

  background:
    #f9e3dc;

  color:
    var(--accent);

}


/* =========================================================
   TOAST
   ========================================================= */

.toast {

  position:
    fixed;

  z-index:
    1000;

  left:
    50%;

  bottom:
    max(20px, env(safe-area-inset-bottom));

  transform:
    translate(-50%, 30px);

  opacity:
    0;

  visibility:
    hidden;

  width:
    max-content;

  max-width:
    calc(100% - 30px);

  padding:
    13px 18px;

  border-radius:
    11px;

  background:
    var(--dark);

  color:
    white;

  font-size:
    13px;

  font-weight:
    700;

  text-align:
    center;

  box-shadow:
    var(--shadow);

  transition:
    0.25s ease;

}


.toast.show {

  opacity:
    1;

  visibility:
    visible;

  transform:
    translate(-50%, 0);

}


/* =========================================================
   SCROLLBAR
   ========================================================= */

::-webkit-scrollbar {

  width:
    9px;

}


::-webkit-scrollbar-track {

  background:
    #f5eeec;

}


::-webkit-scrollbar-thumb {

  background:
    #b9958e;

  border-radius:
    999px;

}


::-webkit-scrollbar-thumb:hover {

  background:
    var(--primary);

}


/* =========================================================
   ANIMATIONS
   ========================================================= */

.reveal {

  opacity:
    0;

  transform:
    translateY(25px);

  transition:
    opacity 0.7s ease,
    transform 0.7s ease;

}


.reveal.active {

  opacity:
    1;

  transform:
    translateY(0);

}


.delay-1 {

  transition-delay:
    0.1s;

}


.delay-2 {

  transition-delay:
    0.2s;

}


.delay-3 {

  transition-delay:
    0.3s;

}


@keyframes rotate {

  from {

    transform:
      rotate(0deg);

  }

  to {

    transform:
      rotate(360deg);

  }

}


@keyframes windowIn {

  from {

    opacity:
      0;

    transform:
      translateY(15px)
      scale(0.98);

  }

  to {

    opacity:
      1;

    transform:
      translateY(0)
      scale(1);

  }

}


/* =========================================================
   TABLET
   ========================================================= */

@media (max-width: 1000px) {

  .hero-grid {

    grid-template-columns:
      1fr;

  }


  .hero-content {

    max-width:
      800px;

    margin:
      0 auto;

    text-align:
      center;

  }


  .hero-content > p {

    margin-left:
      auto;

    margin-right:
      auto;

  }


  .hero-buttons {

    justify-content:
      center;

  }


  .hero-visual {

    min-height:
      350px;

  }


  .access-grid,
  .features-grid {

    grid-template-columns:
      repeat(2, minmax(0, 1fr));

  }


  .nav-links {

    gap:
      18px;

  }

}


/* =========================================================
   SMALL TABLET / LARGE PHONE
   ========================================================= */

@media (max-width: 760px) {

  .container {

    width:
      calc(100% - 28px);

  }


  .nav-content {

    min-height:
      68px;

    gap:
      12px;

  }


  .nav-links {

    display:
      none;

  }


  .brand {

    flex:
      1 1 auto;

  }


  .brand > span:last-child {

    line-height:
      1.15;

  }


  .hero {

    padding:
      65px 0;

  }


  section {

    padding:
      65px 0;

  }


  .hero h1 {

    font-size:
      clamp(42px, 12vw, 58px);

  }


  .hero-visual {

    min-height:
      330px;

  }


  .dashboard-card {

    width:
      min(
        100%,
        430px
      );

  }


  .access-grid,
  .features-grid,
  .reviewer-folders,
  .window-grid {

    grid-template-columns:
      1fr;

  }


  .window-overlay {

    align-items:
      flex-start;

    padding:
      10px;

  }


  .site-window {

    width:
      100%;

    max-height:
      calc(100vh - 20px);

    max-height:
      calc(100dvh - 20px);

    border-radius:
      18px;

  }


  .window-header {

    padding:
      15px 16px;

  }


  .window-body {

    padding:
      18px 16px;

  }


  .window-title {

    gap:
      9px;

  }


  .mini-icon {

    width:
      38px;

    height:
      38px;

    border-radius:
      10px;

  }


  .window-title h3 {

    font-size:
      18px;

  }


  .window-title p {

    font-size:
      11px;

  }


  .account-strip {

    align-items:
      flex-start;

    flex-direction:
      column;

  }


  .objective-box {

    border-radius:
      22px;

  }


  .record-line {

    flex-direction:
      column;

    gap:
      5px;

  }


  .panel-heading {

    align-items:
      flex-start;

    flex-direction:
      column;

  }

}


/* =========================================================
   PHONE
   ========================================================= */

@media (max-width: 520px) {

  .container {

    width:
      calc(100% - 24px);

  }


  .navbar {

    position:
      sticky;

  }


  .brand {

    gap:
      8px;

  }


  .brand-logo {

    width:
      38px;

    height:
      38px;

    border-radius:
      10px;

  }


  .brand > span:last-child {

    font-size:
      13px;

  }


  .nav-button {

    padding:
      9px 11px;

    font-size:
      12px;

    border-radius:
      9px;

  }


  .hero {

    padding:
      55px 0;

  }


  .hero h1 {

    font-size:
      clamp(38px, 13vw, 50px);

  }


  .hero-content > p {

    font-size:
      15px;

  }


  .hero-buttons {

    flex-direction:
      column;

    width:
      100%;

  }


  .hero-buttons button {

    width:
      100%;

  }


  .hero-visual {

    min-height:
      300px;

  }


  .orbit {

    width:
      260px;

    height:
      260px;

  }


  .dashboard-card {

    padding:
      17px;

    border-radius:
      18px;

  }


  .dashboard-top {

    gap:
      10px;

  }


  .dashboard-top h3 {

    font-size:
      17px;

  }


  .status {

    font-size:
      10px;

  }


  .chart {

    height:
      145px;

    gap:
      7px;

    padding:
      14px;

    margin:
      25px 0;

  }


  .dashboard-info {

    grid-template-columns:
      1fr;

  }


  .access-card,
  .feature-card {

    padding:
      21px;

  }


  .section-heading {

    margin-bottom:
      30px;

  }


  .section-heading h2 {

    font-size:
      clamp(30px, 10vw, 40px);

  }


  .objective-box {

    padding:
      42px 20px;

  }


  .math-symbol {

    width:
      60px;

    height:
      60px;

    font-size:
      30px;

  }


  .window-overlay {

    padding:
      7px;

  }


  .site-window {

    max-height:
      calc(100vh - 14px);

    max-height:
      calc(100dvh - 14px);

    border-radius:
      16px;

  }


  .window-header {

    padding:
      13px;

  }


  .window-body {

    padding:
      15px 13px;

  }


  .window-title h3 {

    font-size:
      16px;

  }


  .window-title p {

    font-size:
      10px;

  }


  .close-button {

    width:
      34px;

    height:
      34px;

    font-size:
      22px;

  }


  .primary-button,
  .secondary-button {

    width:
      100%;

  }


  .header-actions {

    width:
      100%;

  }


  .header-actions button {

    flex:
      1;

  }


  .detail-list article {

    padding:
      14px;

  }


  .form-group input,
  .form-group select,
  .form-group textarea {

    font-size:
      16px;

  }


  footer {

    padding:
      25px 12px;

    font-size:
      12px;

  }

}


/* =========================================================
   VERY SMALL PHONES
   ========================================================= */

@media (max-width: 380px) {

  .container {

    width:
      calc(100% - 18px);

  }


  .brand > span:last-child {

    font-size:
      12px;

  }


  .brand-logo {

    width:
      34px;

    height:
      34px;

  }


  .nav-button {

    padding:
      8px 9px;

    font-size:
      11px;

  }


  .hero h1 {

    font-size:
      36px;

  }


  .hero-content > p {

    font-size:
      14px;

  }


  .dashboard-card {

    padding:
      14px;

  }


  .orbit {

    width:
      225px;

    height:
      225px;

  }


  .window-title h3 {

    font-size:
      15px;

  }

}


/* =========================================================
   LANDSCAPE PHONE
   ========================================================= */

@media (
  max-height: 520px
) and (
  orientation: landscape
) {

  .window-overlay {

    align-items:
      flex-start;

    padding:
      8px;

  }


  .site-window {

    max-height:
      calc(100vh - 16px);

    max-height:
      calc(100dvh - 16px);

  }


  .hero {

    padding:
      45px 0;

  }


  section {

    padding:
      50px 0;

  }

}
/* =========================================================
   SIATP ANIMATED MATHEMATICAL BACKGROUND
   ========================================================= */

.math-background {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

/* Keep the actual website above the background */
.navbar,
main,
section,
footer,
.window-overlay,
.toast,
.hero,
.dashboard,
.features,
.about {
  position: relative;
  z-index: 1;
}

/* ---------------------------------------------------------
   SOFT GLOWING ORBS
   --------------------------------------------------------- */

.math-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(1px);
  opacity: 0.07;
  animation: orbFloat 18s ease-in-out infinite alternate;
}

.orb-one {
  width: 280px;
  height: 280px;
  top: 8%;
  left: -100px;
  background: radial-gradient(
    circle,
    rgba(116, 27, 23, 0.45),
    transparent 70%
  );
}

.orb-two {
  width: 360px;
  height: 360px;
  right: -150px;
  top: 38%;
  background: radial-gradient(
    circle,
    rgba(139, 55, 21, 0.35),
    transparent 70%
  );
  animation-delay: -6s;
}

.orb-three {
  width: 240px;
  height: 240px;
  bottom: -80px;
  left: 35%;
  background: radial-gradient(
    circle,
    rgba(74, 22, 26, 0.3),
    transparent 70%
  );
  animation-delay: -12s;
}

@keyframes orbFloat {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(30px, -25px, 0) scale(1.08);
  }

  100% {
    transform: translate3d(-20px, 25px, 0) scale(0.95);
  }
}

/* ---------------------------------------------------------
   FLOATING MATHEMATICAL SYMBOLS
   --------------------------------------------------------- */

.math-symbol {
  position: absolute;
  color: var(--primary);
  font-family: "Times New Roman", serif;
  font-weight: 700;
  opacity: 0.075;
  user-select: none;
  white-space: nowrap;
  animation:
    mathFloat 14s ease-in-out infinite,
    mathRotate 20s linear infinite;
}

/* Individual positions */

.symbol-one {
  top: 14%;
  left: 8%;
  font-size: 52px;
  animation-duration: 17s, 24s;
}

.symbol-two {
  top: 30%;
  right: 9%;
  font-size: 42px;
  animation-duration: 15s, 22s;
  animation-delay: -4s, -8s;
}

.symbol-three {
  top: 62%;
  left: 6%;
  font-size: 46px;
  animation-duration: 18s, 27s;
  animation-delay: -8s, -12s;
}

.symbol-four {
  bottom: 15%;
  right: 12%;
  font-size: 50px;
  animation-duration: 16s, 25s;
  animation-delay: -5s, -15s;
}

.symbol-five {
  top: 74%;
  left: 30%;
  font-size: 44px;
  animation-duration: 19s, 30s;
  animation-delay: -10s, -20s;
}

.symbol-six {
  top: 20%;
  left: 43%;
  font-size: 38px;
  animation-duration: 13s, 21s;
  animation-delay: -3s, -9s;
}

.symbol-seven {
  bottom: 25%;
  right: 34%;
  font-family: "DM Sans", sans-serif;
  font-size: 28px;
  font-weight: 600;
  animation-duration: 20s, 26s;
  animation-delay: -7s, -14s;
}

.symbol-eight {
  top: 48%;
  left: 19%;
  font-size: 34px;
  animation-duration: 15s, 23s;
  animation-delay: -6s, -11s;
}

@keyframes mathFloat {
  0% {
    transform: translate3d(0, 0, 0);
  }

  25% {
    transform: translate3d(12px, -18px, 0);
  }

  50% {
    transform: translate3d(-8px, -30px, 0);
  }

  75% {
    transform: translate3d(-18px, -10px, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes mathRotate {
  0% {
    rotate: 0deg;
  }

  50% {
    rotate: 8deg;
  }

  100% {
    rotate: 0deg;
  }
}

/* ---------------------------------------------------------
   GEOMETRIC SHAPES
   --------------------------------------------------------- */

.math-shape {
  position: absolute;
  opacity: 0.06;
  border: 1.5px solid var(--accent);
  animation: shapeFloat 20s ease-in-out infinite;
}

/* Circle */

.shape-one {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  top: 22%;
  left: 25%;
  animation-delay: -4s;
}

/* Square */

.shape-two {
  width: 70px;
  height: 70px;
  right: 25%;
  top: 16%;
  transform: rotate(25deg);
  animation-delay: -10s;
}

/* Diamond */

.shape-three {
  width: 55px;
  height: 55px;
  left: 42%;
  bottom: 18%;
  transform: rotate(45deg);
  animation-delay: -15s;
}

/* Larger circle */

.shape-four {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  right: 5%;
  bottom: 8%;
  animation-delay: -7s;
}

@keyframes shapeFloat {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  50% {
    transform: translate3d(18px, -25px, 0) rotate(20deg);
  }

  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
}

/* ---------------------------------------------------------
   SMALL FLOATING PARTICLES
   --------------------------------------------------------- */

.math-particles {
  position: absolute;
  inset: 0;
}

.math-particles span {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.13;
  animation: particleFloat 12s ease-in-out infinite;
}

.math-particles span:nth-child(1) {
  top: 12%;
  left: 18%;
  animation-delay: -2s;
}

.math-particles span:nth-child(2) {
  top: 28%;
  left: 52%;
  animation-delay: -7s;
}

.math-particles span:nth-child(3) {
  top: 43%;
  left: 78%;
  animation-delay: -4s;
}

.math-particles span:nth-child(4) {
  top: 67%;
  left: 14%;
  animation-delay: -9s;
}

.math-particles span:nth-child(5) {
  top: 82%;
  left: 47%;
  animation-delay: -1s;
}

.math-particles span:nth-child(6) {
  top: 58%;
  left: 91%;
  animation-delay: -6s;
}

.math-particles span:nth-child(7) {
  top: 18%;
  left: 72%;
  animation-delay: -11s;
}

.math-particles span:nth-child(8) {
  top: 76%;
  left: 78%;
  animation-delay: -3s;
}

.math-particles span:nth-child(9) {
  top: 36%;
  left: 34%;
  animation-delay: -8s;
}

.math-particles span:nth-child(10) {
  top: 90%;
  left: 24%;
  animation-delay: -5s;
}

.math-particles span:nth-child(11) {
  top: 50%;
  left: 62%;
  animation-delay: -10s;
}

.math-particles span:nth-child(12) {
  top: 8%;
  left: 90%;
  animation-delay: -12s;
}

@keyframes particleFloat {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 0.05;
  }

  50% {
    transform: translate3d(10px, -18px, 0);
    opacity: 0.16;
  }

  100% {
    transform: translate3d(-5px, 5px, 0);
    opacity: 0.05;
  }
}

/* ---------------------------------------------------------
   MOBILE OPTIMIZATION
   --------------------------------------------------------- */

@media (max-width: 700px) {

  .math-symbol {
    opacity: 0.055;
  }

  .symbol-one {
    font-size: 38px;
  }

  .symbol-two {
    font-size: 32px;
  }

  .symbol-three {
    font-size: 34px;
  }

  .symbol-four {
    font-size: 38px;
  }

  .symbol-five {
    font-size: 32px;
  }

  .symbol-six {
    font-size: 30px;
  }

  .symbol-seven {
    font-size: 22px;
  }

  .symbol-eight {
    font-size: 27px;
  }

  .math-shape {
    opacity: 0.04;
  }

  .math-orb {
    opacity: 0.045;
  }

  .math-particles span {
    width: 3px;
    height: 3px;
  }
}

/* ---------------------------------------------------------
   VERY SMALL PHONES
   --------------------------------------------------------- */

@media (max-width: 450px) {

  .symbol-one,
  .symbol-three,
  .symbol-five,
  .shape-one,
  .shape-three {
    display: none;
  }

  .math-symbol {
    opacity: 0.045;
  }

  .math-orb {
    opacity: 0.03;
  }
}

/* ---------------------------------------------------------
   ACCESSIBILITY
   --------------------------------------------------------- */

@media (prefers-reduced-motion: reduce) {

  .math-background *,
  .math-background {
    animation: none !important;
  }
}
