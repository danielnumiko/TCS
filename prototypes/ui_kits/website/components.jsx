/* eslint-disable */
// TCS website components — small, cosmetic, reusable

const { useState } = React;

// ---- Atoms ----

function TCSButton({ children, kind = "primary", glyph = "chevron", onClick, href, size = "md" }) {
  const kindCls = kind === "yellow" ? "btn-yellow" : kind === "donate" ? "btn-yellow" : "";
  const cls = `btn ${kindCls} ${size === "sm" ? "btn-sm" : ""}`.trim();
  const Glyph = glyph === "heart" ? Heart : glyph === "chevron-up" ? ChevronUp : Chevron;
  const inner = (
    <>
      <span>{children}</span>
      <Glyph />
    </>
  );
  if (href) return <a className={cls} href={href} onClick={onClick}>{inner}</a>;
  return <button className={cls} onClick={onClick}>{inner}</button>;
}

function Chevron() { return <Icon name="chevron-right" />; }
function ChevronUp() { return <Icon name="chevron-up" />; }
function Heart() { return <Icon name="donate" />; }

// Icon · thin wrapper around the CSS-mask-based TCS icon set.
// Default size is --icon-lg (28px). Pass size="sm" for --icon-sm (16px)
// or any explicit pixel value for one-off sizing.
function Icon({ name, size, color = "currentColor", style }) {
  let cls = `tcs-icon tcs-icon-${name}`;
  const styleObj = Object.assign({}, style);
  if (size === "sm") {
    cls += " tcs-icon-sm";
  } else if (typeof size === "number") {
    styleObj.width = size; styleObj.height = size;
  }
  if (color !== "currentColor") { styleObj.color = color; styleObj.backgroundColor = color; }
  return <i className={cls} style={styleObj} aria-hidden="true" />;
}

// ---- Header ----

function Header({ route, navigate }) {
  const minimal = route === "details" || route === "payment" || route === "thanks";
  if (minimal) return null;
  return (
    <header className="tcs-header">
      <a className="tcs-logo-square" onClick={() => navigate("home")} aria-label="The Children's Society — home">The Children's Society</a>
      <div className="tcs-header-bar">
        <div></div>
        <div className="tcs-header-black">
          <nav className="tcs-header-nav">
            <a className={route === "home" ? "active" : ""} onClick={() => navigate("home")}>What we do</a>
            <a onClick={() => navigate("story")}>How you can help</a>
            <a>Information for…</a>
            <a>About us</a>
          </nav>
        </div>
        <div className="tcs-header-actions">
          <button className="tcs-header-search" aria-label="Search">
            Search <Icon name="search" />
          </button>
          <button className="tcs-header-donate" onClick={() => navigate("donate")}>
            Donate <Icon name="donate" />
          </button>
        </div>
      </div>
    </header>
  );
}

// ---- Hero ----

function Hero({ quote, ctaLabel, onCtaClick, image = "img-park" }) {
  return (
    <div className={`tcs-hero ${image}`}>
      <div className="scrim"></div>
      <div className="content">
        <div className="quote">{quote}</div>
        {ctaLabel ? (
          <div><TCSButton kind="yellow" glyph="heart" onClick={onCtaClick}>{ctaLabel}</TCSButton></div>
        ) : null}
      </div>
      <div className="brush"></div>
      <div className="corner-arrow"></div>
    </div>
  );
}

function TopicHero({ crumb, title }) {
  return (
    <div className="tcs-topic-hero">
      <div className="crumb"><Icon name="chevron-right" size={14} /> {crumb}</div>
      <h1>{title}</h1>
    </div>
  );
}

// ---- Section divider ----

function Divider() {
  return (
    <div className="tcs-divider" aria-hidden="true">
      <div className="arrow"></div>
    </div>
  );
}

// ---- Cards ----

function TeaserCard({ eyebrow, title, image }) {
  return (
    <div className="tcs-teaser">
      <div className={`img ${image}`}></div>
      <span className="eyebrow">{eyebrow}</span>
      <h3>{title}</h3>
    </div>
  );
}

function StoryCard({ name, image, onClick }) {
  return (
    <div className={`tcs-story-card ${image}`} onClick={onClick}>
      <div className="nm">
        {name}
        <Icon name="chevron-right" size="sm" />
      </div>
    </div>
  );
}

function HelpCard({ ill, title, body }) {
  return (
    <div className="tcs-help">
      <div className={`ill ${ill}`}></div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

function StatRow({ stats }) {
  return (
    <div className="tcs-stat-row">
      {stats.map((s, i) => (
        <div className="tcs-stat" key={i}>
          <div className="n">{s.n}</div>
          <div className="u"></div>
          <div className="l">{s.l}</div>
        </div>
      ))}
    </div>
  );
}

// ---- Large promo (RHS Chelsea pattern) ----

function LargePromo({ eyebrow, title, body, image, ctaLabel, onCtaClick }) {
  return (
    <div className={`tcs-large-promo ${image}`}>
      <div className="scrim"></div>
      <div className="text">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{body}</p>
        {ctaLabel ? <div className="cta-row"><TCSButton onClick={onCtaClick}>{ctaLabel}</TCSButton></div> : null}
      </div>
    </div>
  );
}

function TwoUp({ items }) {
  return (
    <div className="tcs-twoup">
      {items.map((it, i) => (
        <div className="card" key={i}>
          <div className={`img ${it.image}`}></div>
          <span className="eyebrow">{it.eyebrow}</span>
          <h3>{it.title}</h3>
        </div>
      ))}
    </div>
  );
}

// ---- Newsletter ----

function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="tcs-newsletter">
      <div>
        <h2>Keep in touch</h2>
        <p>Sign up to receive email updates about our work and how you can support vulnerable children.</p>
      </div>
      <form className="form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        {submitted ? (
          <div style={{ background: "#000", color: "#FFEB00", padding: "22px", fontFamily: "var(--font-brand)", fontWeight: 700 }}>
            Thanks. You're on the list.
          </div>
        ) : (
          <>
            <input placeholder="First name" />
            <input placeholder="Last name" />
            <input placeholder="Email address" type="email" />
            <div className="privacy">Please see our Privacy Policy for details of how we will use your personal information.</div>
            <TCSButton onClick={(e) => { e.preventDefault?.(); setSubmitted(true); }}>Primary</TCSButton>
          </>
        )}
      </form>
    </div>
  );
}

// ---- Footer ----

function Footer() {
  return (
    <footer className="tcs-footer">
      <div className="tcs-footer-left">
        <div className="tcs-footer-cols">
          <div>
            <h6>Get in touch</h6>
            <p>The Children's Society<br/>Whitecross Studios<br/>50 Banner Street<br/>London EC1Y 8ST</p>
            <p style={{ marginTop: 16 }}>Supporter Care: 0300 303 7000</p>
            <div className="tcs-footer-fr" aria-label="Registered with Fundraising Regulator">
              <div className="ic">FR</div>
              <div>Registered with<br/><strong>FUNDRAISING REGULATOR</strong></div>
            </div>
          </div>
          <div>
            <h6>Quick links</h6>
            <ul>
              <li>Media team</li>
              <li>Email updates</li>
              <li>Organisational policies and statements</li>
              <li>Safeguarding statement</li>
              <li>Privacy policy</li>
              <li>Cookie policy</li>
              <li>Accessibility</li>
              <li>Terms and conditions</li>
            </ul>
            <div className="tcs-footer-connect">
              <h6>Connect with us</h6>
              <div className="tcs-footer-socials">
                <Icon name="facebook" />
                <Icon name="twitter" />
                <Icon name="x" />
                <Icon name="bluesky" />
                <Icon name="linkedin" />
              </div>
            </div>
          </div>
        </div>
        <div className="tcs-footer-meta">© The Children's Society 2026 &nbsp;&nbsp; All rights reserved &nbsp;&nbsp; Charity Registration No. 221124</div>
      </div>
      <div className="tcs-footer-right">
        <div className="tcs-footer-sig">I feel like I<br/>belong</div>
        <button className="btn tcs-footer-backtop" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span>Back to top</span>
          <ChevronUp />
        </button>
      </div>
    </footer>
  );
}

Object.assign(window, {
  TCSButton, Chevron, ChevronUp, Heart, Icon,
  Header, Hero, TopicHero, Divider,
  TeaserCard, StoryCard, HelpCard, StatRow, LargePromo, TwoUp,
  Newsletter, Footer,
});
