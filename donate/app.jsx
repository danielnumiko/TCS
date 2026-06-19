/* eslint-disable */

const { useState: useStateApp, useEffect: useEffectApp, useLayoutEffect: useLayoutEffectApp } = React;

function App() {
  const [route, setRoute] = useStateApp("home");
  const [donateMode, setDonateModeRaw] = useStateApp("monthly");
  const [donateAmount, setDonateAmount] = useStateApp(null);
  const [formVersion, setFormVersion] = useStateApp("ambitious");

  // Arm the draw-on-scroll decorations only once JS is running; without this
  // class every decoration shows fully (graceful fallback, never hidden).
  useLayoutEffectApp(() => { document.body.classList.add("draw-ready"); }, []);

  // Draw-on-scroll: reveal brushy/highlighter decorations as they enter view.
  // Uses geometry on scroll (IntersectionObserver is unreliable in some embeds).
  useEffectApp(() => {
    const scrollRoot = document.querySelector(".tcs-prototype-window");
    const sel = ".tcs-divider, .tcs-hero .corner-arrow, .tcs-stories-grid, .intro-stat-num, .tcs-stat, .tcs-donate-impact .impact-stats .stat, .tcs-help";
    // Stickers pop only once they've scrolled well into view (not while still
    // clipped at the very bottom edge), so the animation is actually seen.
    const popSel = ".donate-article-sticker, .tcs-footer-sig img";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const parallaxSel = "[data-parallax]";
    function check() {
      const rootRect = scrollRoot ? scrollRoot.getBoundingClientRect() : { top: 0, bottom: window.innerHeight, height: window.innerHeight };
      const vTop = rootRect.top;
      const vBottom = rootRect.bottom;
      const vH = vBottom - vTop;
      document.querySelectorAll(sel).forEach((e) => {
        if (e.classList.contains("is-drawn")) return;
        const r = e.getBoundingClientRect();
        if (r.top < vBottom - 60 && r.bottom > vTop) e.classList.add("is-drawn");
      });
      // Stickers: require the element to be at least ~30% up from the bottom
      // edge before triggering, so the pop happens in clear view.
      document.querySelectorAll(popSel).forEach((e) => {
        if (e.classList.contains("is-drawn")) return;
        const r = e.getBoundingClientRect();
        if (r.top < vBottom - vH * 0.3 && r.bottom > vTop + 40) e.classList.add("is-drawn");
      });
      // Parallax: shift each tagged image layer relative to its distance
      // from the viewport centre, for a subtle depth effect.
      if (!reduceMotion) {
        const mid = (vTop + vBottom) / 2;
        document.querySelectorAll(parallaxSel).forEach((e) => {
          const r = e.getBoundingClientRect();
          if (r.bottom < vTop - 200 || r.top > vBottom + 200) return;
          const factor = parseFloat(e.getAttribute("data-parallax")) || 0.1;
          const elCenter = r.top + r.height / 2;
          const offset = (elCenter - mid) * factor;
          e.style.setProperty("--py", offset.toFixed(1) + "px");
        });
      }
    }
    const target = scrollRoot || window;
    target.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    const raf = requestAnimationFrame(check);
    const t = setTimeout(check, 140);
    return () => {
      target.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [route]);

  function setDonateMode(m) { setDonateModeRaw(m); setDonateAmount(null); }

  function navigate(to) {
    setRoute(to);
    // Scroll the prototype window (and outer page) back to top
    const win = document.querySelector(".tcs-prototype-window");
    if (win) win.scrollTo({ top: 0, behavior: "instant" });
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  let page = null;
  let url = "childrenssociety.org.uk";
  if (route === "home")   { page = <HomePage navigate={navigate} />;   url = "childrenssociety.org.uk"; }
  else if (route === "donate")  { page = <DonatePage navigate={navigate} mode={donateMode} setMode={setDonateMode} />;  url = "childrenssociety.org.uk/donate"; }
  else if (route === "details") { page = formVersion === "standard"
      ? <StandardFormPage navigate={navigate} mode={donateMode} setMode={setDonateMode} amount={donateAmount} setAmount={setDonateAmount} />
      : <DetailsPage navigate={navigate} mode={donateMode} setMode={setDonateMode} amount={donateAmount} setAmount={setDonateAmount} />; url = "childrenssociety.org.uk/donate/details"; }
  else if (route === "payment") { page = <PaymentPage navigate={navigate} mode={donateMode} setMode={setDonateMode} />; url = "childrenssociety.org.uk/donate/payment"; }
  else if (route === "thanks")  { page = <ThanksPage navigate={navigate} mode={donateMode} setMode={setDonateMode} amount={donateAmount} version={formVersion} />;  url = "childrenssociety.org.uk/donate/thanks"; }
  else page = <HomePage navigate={navigate} />;

  const pages = [
    { id: "home",    label: "Home" },
    { id: "donate",  label: "Donate" },
    { id: "details", label: "Form" },
    { id: "thanks",  label: "Thanks" },
  ];

  return (
    <div className="tcs-prototype-shell">
      <nav className="tcs-prototype-nav" aria-label="Prototype navigation">
        <div className="tcs-prototype-group">
          <span className="tcs-prototype-group-label">Form</span>
          <div className="tcs-prototype-mode">
            <button className={"tcs-prototype-mode-btn" + (formVersion === "standard" ? " active" : "")} onClick={() => { setFormVersion("standard"); if (route === "details") navigate("details"); }}>Payment last</button>
            <button className={"tcs-prototype-mode-btn" + (formVersion === "ambitious" ? " active" : "")} onClick={() => { setFormVersion("ambitious"); if (route === "details") navigate("details"); }}>Payment first</button>
          </div>
        </div>
        <span className="tcs-prototype-divider" aria-hidden="true"></span>
        <div className="tcs-prototype-group">
          <span className="tcs-prototype-group-label">Journey</span>
          <div className="tcs-prototype-mode">
            <button className={"tcs-prototype-mode-btn" + (donateMode === "monthly" ? " active" : "")} onClick={() => setDonateMode("monthly")}>Monthly</button>
            <button className={"tcs-prototype-mode-btn" + (donateMode === "oneoff" ? " active" : "")} onClick={() => setDonateMode("oneoff")}>One-off</button>
          </div>
        </div>
        <span className="tcs-prototype-divider" aria-hidden="true"></span>
        <div className="tcs-prototype-group">
          <span className="tcs-prototype-group-label">Page</span>
          <div className="tcs-prototype-nav-links">
            {pages.map((p) => (
              <button
                key={p.id}
                className={"tcs-prototype-nav-link" + (route === p.id ? " active" : "")}
                onClick={() => navigate(p.id)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <div className="tcs-prototype-frame">
        <div className="tcs-prototype-window">
          <div className="tcs-page">
            <Header route={route} navigate={navigate} />
            {page}
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
