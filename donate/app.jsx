/* eslint-disable */

const { useState: useStateApp } = React;

function App() {
  const [route, setRoute] = useStateApp("home");
  const [donateMode, setDonateMode] = useStateApp("monthly");

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
  else if (route === "details") { page = <DetailsPage navigate={navigate} mode={donateMode} setMode={setDonateMode} />; url = "childrenssociety.org.uk/donate/details"; }
  else if (route === "payment") { page = <PaymentPage navigate={navigate} mode={donateMode} setMode={setDonateMode} />; url = "childrenssociety.org.uk/donate/payment"; }
  else if (route === "thanks")  { page = <ThanksPage navigate={navigate} mode={donateMode} setMode={setDonateMode} />;  url = "childrenssociety.org.uk/donate/thanks"; }
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
