/* eslint-disable */
// TCS website — page templates

const { useState: useStatePages } = React;

function HomePage({ navigate }) {
  const [videoOpen, setVideoOpen] = useStatePages(false);
  return (
    <div className="tcs-page-content" data-screen-label="01 Home">
      <Hero
        ctaLabel="Watch the full Appeal"
        onCtaClick={() => setVideoOpen(true)}
        image="img-park"
      />
      <VideoModal videoId="5PQYM_KSXag" open={videoOpen} onClose={() => setVideoOpen(false)} />

      <div className="tcs-intro">
        <div className="ill">
          <span className="intro-stat-num">16,000</span>
          <p className="intro-stat-cap">Young people were being criminally exploited by gangs or sexual predators</p>
        </div>
        <div className="body">
          <div className="h">Too many of Britain's teens are in crisis.</div>
          <div className="col">
            <p>Let down by failing systems, many teens face abuse, poverty, and isolation. As Europe's unhappiest youth, they need our support. We ensure every teenager has a safe place to go and a specialist to talk to, whenever they need it.</p>
          </div>
          <div className="col">
            <p>Because we believe teens all deserve the chance to enjoy this formative life stage. And the truth is — if they're in trouble, we all are. We're raising the alarm. Search 'Save Teenhood' today.</p>
          </div>
          <div className="cta"><TCSButton onClick={() => navigate("donate")}>Donate now to Save Teenhood</TCSButton></div>
        </div>
      </div>

      <HomeDonateSlice navigate={navigate} />

      <div className="tcs-stories-slice">
        <div className="text">
          <h2>In their own <span className="hl">words</span></h2>
          <p>When young people want to tell their story, we listen. These young people still believe in a better tomorrow.</p>
          <p>Often their stories aren't easy to tell, but they tell them. Because they know sharing their story will help them and others like them.</p>
          <TCSButton onClick={() => navigate("story")}>Read their stories</TCSButton>
        </div>
        <div className="tcs-stories-grid">
          <StoryCard name="Louise" image="img-portrait-1" onClick={() => navigate("story")} />
          <StoryCard name="Willow" image="img-portrait-2" onClick={() => navigate("story")} />
          <StoryCard name="Andrew" image="img-portrait-3" onClick={() => navigate("story")} />
          <StoryCard name="Isla" image="img-portrait-4" onClick={() => navigate("story")} />
        </div>
      </div>

      <QuoteSlice image="img-quote-banner" navigate={navigate} />

      <div className="tcs-stats-slice">
        <h2 className="tcs-stats-heading">The crisis in numbers</h2>
        <StatRow
          stats={[
            { n: "16,000", l: "Young people were being criminally exploited by gangs or sexual predators." },
            { n: "In 2025", l: "X million homes with young people couldn't afford to buy enough healthy food." },
            { n: "1 in 5",  l: "Young people in every classroom in England have mental health difficulties." },
          ]}
        />
      </div>

      <WeekInFocus />

      <Divider variant="left" />

      <div className="tcs-howhelp-slice">
        <h2>How you can <span className="hl">help</span></h2>
        <div className="tcs-help-grid">
          <HelpCard ill="ill-placard"        title="Campaign" body="Help us create a society that is built for all children. Together we will listen to young people, give them a voice, and campaign for the change they need." />
          <HelpCard ill="ill-heart-hand"     title="Donate"           body="Your gift will contribute to our vital work with children across the country, giving young people hope, and a reason to believe in a brighter future." />
          <HelpCard ill="ill-two-hearts"     title="Raise money or do a charity challenge"      body="Baking, singing or running, however you choose to raise money, it all helps us to be there for young people." />
          <HelpCard ill="ill-volunteer-hand" title="Volunteer"        body="Either behind a till or mentoring a child in our services, as a volunteer you can make a huge difference to your community and the young people in it." />
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

// ---------- Donate page · matches Figma 4474:36554 ----------

function DonatePage({ navigate, mode, setMode }) {
  // Falls back to local state if not wired through (older route entry)
  const [localTab, setLocalTab] = useStatePages("oneoff");
  const tab = mode || localTab;
  const baseSetTab = setMode || setLocalTab;
  const [amount, setAmount] = useStatePages(tab === "oneoff" ? "25" : "10");
  // Reset amount to the "most popular" default for the new tab on switch
  const setTab = (newTab) => {
    baseSetTab(newTab);
    setAmount(newTab === "oneoff" ? "25" : "10");
  };

  return (
    <div className="tcs-page-content" data-screen-label="02 Donate">
      <DonateSlice
        navigate={navigate}
        image="img-portrait-2 is-hero"
        tab={tab} setTab={setTab}
        amount={amount} setAmount={setAmount}
      />

      <DonateArticleHeader />

      <Divider />

      <DonateDifference
        title="Making a difference"
        bodyA="There is no one-size-fits-all approach. To help young people open up, we might start with chess, a fidget spinner or writing thoughts and fears down. We offer support one-to-one and in groups. And we never describe children as 'hard to reach'."
        bodyB="We know they simply need adults who are willing to listen and reach them where they really are. Right now, with mental health waiting lists spiralling, our drop-ins are often the only place a young person can get timely support."
        image="img-young-boy"
      />

      <Divider />

      <DonateImpactBlock
        title="How your money helps young people"
        body="Andrew's painting is just one example of how creative expression can transform lives. The Children's Society continues to partner with arts organisations and galleries across the country to help young people find their voice."
        stats={[
          { n: "57,652", l: "Children and young people were supported through our services and events 2024/25" },
          { n: "97%",    l: "of children surveyed reported that they were happy with the support they recieved" },
          { n: "77,307", l: "supporters took campaign actions with us to call for . change for young people" },
        ]}
      />

      <DonateSlice
        navigate={navigate}
        image="img-portrait-3"
        tab={tab} setTab={setTab}
        amount={amount} setAmount={setAmount}
      />

      <Divider />

      <OtherWaysToGive />

      <AccordionSection
        title="Other ways to donate"
        items={[
          { ti: "Donate by post",            panel: "Send a cheque made payable to The Children's Society to 50 Banner Street, London EC1Y 8ST. Include a note with your name and a return address if you'd like a receipt." },
          { ti: "Donate by phone",           panel: "Call Supporter Care on 0300 303 7000. Lines are open 9am–5pm, Monday to Friday." },
          { ti: "Donate to a young perosm",  panel: "Sponsor a young person at one of our drop-ins. Your support goes straight to direct services in their community." },
          { ti: "Any questions for us?",     panel: "Drop us a line at supportercare@childrenssociety.org.uk and we'll get back to you within 2 working days." },
        ]}
      />

      <Divider />

      <ShareBlock title="Share the page" />

      <RelatedBlock
        title="Related content"
        items={[
          { heading: "Leave a gift in your will", body: "Leaving a gift in your will is a great way to support young people who need a little hope. Your money makes a huge difference.", image: "img-portrait-1" },
          { heading: "Other ways to give", body: "Become a box coordinator or leave a gift in your will. Here are some other ways you can transform the hopes of young people.", image: "img-group" },
          { heading: "Paying in your donations", body: "There are different ways you can pay in your donations and collections. Read our information and choose the most convenient way for you.", image: "img-fundraising-collections" },
        ]}
      />

      <Footer />
    </div>
  );
}

// ---------- Other ways to give (Numiko feedback #2) ----------

function OtherWaysToGive() {
  const items = [
    { eyebrow: "Gifts in wills",   title: "Leave a gift in your will and pass on hope to the next generation of young people.", image: "img-park" },
    { eyebrow: "Give in memory",   title: "Honour someone special with a tribute fund or a memorial donation in their name.",   image: "img-fundraising-arts" },
    { eyebrow: "Corporate giving", title: "Major gifts, foundation grants and employee fundraising — let's build something.",  image: "img-hero-looking-up" },
  ];
  return (
    <section className="tcs-teaser-slice">
      <h2>Other ways to give</h2>
      <div className="tcs-teaser-grid">
        {items.map((it, i) => (
          <TeaserCard key={i} eyebrow={it.eyebrow} title={it.title} image={it.image} />
        ))}
      </div>
    </section>
  );
}

// ---------- Donate slice (widget left + photo right) ----------

function DonateSlice({ navigate, image, tab, setTab, amount, setAmount }) {
  return (
    <section className={`tcs-donate-slice ${image}`} data-parallax="0.08">
      <DonateWidget
        navigate={navigate}
        tab={tab} setTab={setTab}
        amount={amount} setAmount={setAmount}
      />
    </section>
  );
}

function DonateWidget({ navigate, tab, setTab, amount, setAmount }) {
  const [customAmount, setCustomAmount] = useStatePages("");
  return (
    <div className="tcs-donate-widget">
      <h2 className="tcs-donate-widget-title">Donate now</h2>
      <p className="tcs-donate-widget-subtitle">Help young people to break free and find hope for a brighter future.</p>

      <div className="tcs-donate-widget-tabs">
        <button className={tab === "monthly" ? "active" : ""} onClick={() => setTab("monthly")}>Monthly</button>
        <button className={tab === "oneoff" ? "active" : ""} onClick={() => setTab("oneoff")}>One-off</button>
      </div>

      <div className="tcs-donate-widget-amounts">
        {(tab === "monthly" ? ["5", "10", "20", "Other"] : ["10", "25", "50", "Other"]).map((a) => (
          <button key={a} className={amount === a ? "active" : ""} onClick={() => setAmount(a)}>
            {a === "Other" ? "Other" : `£${a}`}
          </button>
        ))}
      </div>

      <p className="tcs-donate-widget-impact">
        {tab === "monthly" ? (
          amount === "5"      ? "£5 a month could help one of our project workers reach a struggling teenager and prevent a crisis."
          : amount === "10"   ? <><strong>Our most popular gift —</strong> £10 a month could give a teenager awaiting mental health support a chance to talk with a specialist.</>
          : amount === "20"   ? "£20 a month could fund a drop-in service, giving young people a space to go when things get tough."
          : "Whether it's a little or a lot, give monthly and make a lasting difference to a young person."
        ) : (
          amount === "10"     ? "£10 could allow a teenager to travel to one of our services, so they can begin to move forward."
          : amount === "25"   ? <><strong>Our most popular gift —</strong> £25 could fund a 30-minute support session between a young person and a trained professional.</>
          : amount === "50"   ? "£50 could help provide a group session for teenagers who are struggling with their wellbeing."
          : "Whether a little or a lot, whatever you can give will make a huge difference to a young person."
        )}
      </p>

      {amount === "Other" ? (
        <div className="tcs-donate-widget-other-input">
          <span className="prefix">£</span>
          <input
            type="text"
            inputMode="numeric"
            placeholder="Choose your own amount"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
          />
        </div>
      ) : null}

      <button className="tcs-donate-widget-submit" onClick={() => navigate && navigate("details")}>
        <span>Donate now</span>
        <span className="secure">
          Secure
          <Icon name="padlock" size="sm" />
        </span>
      </button>

      <div className="tcs-donate-widget-foot">
      <div className="tcs-donate-widget-payments">
        {tab === "monthly" ? (
          <>
            <img className="pay pay-dd-img" src="./assets/logos/direct-debit-mark.png" alt="Direct Debit" />
          </>
        ) : (
          <>
            <span className="pay pay-apple"><span className="glyph"></span>Pay</span>
            <span className="pay pay-google"><span className="glyph">G</span>Pay</span>
            <span className="pay pay-visa">VISA</span>
            <span className="pay pay-mc" aria-label="Mastercard"><span className="mc-r"></span><span className="mc-y"></span></span>
            <span className="pay pay-paypal">PayPal</span>
          </>
        )}
      </div>

      <div className="tcs-donate-widget-fr">
        <span className="fr-roundel">FR</span>
        <span className="fr-text">Registered 2025/26<br/><strong>FUNDRAISING REGULATOR</strong></span>
      </div>
      </div>
    </div>
  );
}

// ---------- Article header ("Donate today") ----------

function DonateArticleHeader() {
  return (
    <section className="tcs-donate-article">
      <div className="tcs-donate-article-side">
        <Icon name="twitter" size="sm" />
        <Icon name="facebook" size="sm" />
        <Icon name="mail" size="sm" />
      </div>
      <div className="tcs-donate-article-body">
        <div className="meta"><span className="crumb">What we do</span> <Icon name="chevron-right" size="sm" /></div>
        <h1>Donate today</h1>
        <p>Right now, there are children living through abuse, exploitation and neglect. For them, childhood is a daily battle, with nowhere to turn. You can change this.  By donating today, you enable our project workers to transform lives. You can help young people to break free and find hope for a brighter future.</p>
      </div>
      <img className="donate-article-sticker" src="./assets/illustrations/save-teenhood-sticker.png" alt="Save Teenhood" />
    </section>
  );
}

// ---------- Making a difference (text left + media right) ----------

function DonateDifference({ title, bodyA, bodyB, image }) {
  return (
    <section className="tcs-donate-difference">
      <div className="text">
        <h2>{title}</h2>
        <div className="body-cols">
          <p>{bodyA}</p>
          <p>{bodyB}</p>
        </div>
      </div>
      <div className={`tcs-donate-difference-media ${image}`}>
        <button className="pause-overlay" aria-label="Pause">
          <span className="ring"></span>
          <span className="dot"><Icon name="pause" size="sm" /></span>
        </button>
      </div>
    </section>
  );
}

// ---------- Impact block (centred title + body + 3 stats) ----------

function DonateImpactBlock({ title, body, stats }) {
  return (
    <section className="tcs-donate-impact">
      <h2>{title}</h2>
      <p>{body}</p>
      <div className="impact-stats">
        {stats.map((s, i) => (
          <div className="stat" key={i}>
            <div className="n">{s.n}</div>
            <div className="u"></div>
            <div className="l">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- Accordion section ----------

function AccordionSection({ title, items }) {
  const [open, setOpen] = useStatePages(-1);
  return (
    <section className="tcs-accordion-section">
      <h2>{title}</h2>
      <div className="accordion-list">
        {items.map((it, i) => (
          <React.Fragment key={i}>
            <div className={`tcs-faq-item ${open === i ? "open" : ""}`} onClick={() => setOpen(open === i ? -1 : i)}>
              <span className="ti">{it.ti}</span>
              <span className="ic"><Icon name="chevron-down-accordion" /></span>
            </div>
            {open === i ? <div className="tcs-faq-panel">{it.panel}</div> : null}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

// ---------- Share block ----------

function ShareBlock({ title }) {
  return (
    <section className="tcs-share-block">
      <h2>{title}</h2>
      <div className="share-buttons">
        <button className="share-button"><span>Twitter</span><Icon name="twitter" size="sm" /></button>
        <button className="share-button"><span>Facebook</span><Icon name="facebook" size="sm" /></button>
        <button className="share-button"><span>LinkedIn</span><Icon name="linkedin" size="sm" /></button>
      </div>
    </section>
  );
}

// ---------- Related block ----------

function RelatedBlock({ title, items }) {
  return (
    <section className="tcs-related-block">
      <h2>{title}</h2>
      <div className="related-grid">
        {items.map((it, i) => (
          <div className="tcs-related-card" key={i}>
            <div className="rc-media">
              <div className={`img ${it.image}`}></div>
            </div>
            <a href="#" className="related-heading" onClick={(e) => e.preventDefault()}>{it.heading}</a>
            <p>{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- Story page ----------

function StoryPage({ navigate }) {
  return (
    <div className="tcs-page-content" data-screen-label="03 Story">
      <TopicHero crumb="How you can help" title={"A young person's painting for change"} />

      <div className="tcs-article">
        <div className="tcs-article-side">
          <Icon name="twitter" size={20} />
          <Icon name="facebook" size={20} />
          <Icon name="share" size={20} />
        </div>
        <div className="tcs-article-body">
          <p className="lead">Creative expression helps young people articulate their thoughts and feelings. This can take many different forms, including art, poetry or music. Helya created a beautiful painting to represent the need for change in society and to empower young people to be the leaders in that. Here she shared with us how she discovered her passion for painting and the meaning behind her artwork.</p>
          <div className="meta"><Icon name="calendar" size={14} /> 28 September 2026</div>
        </div>
      </div>

      <Divider />

      <div className="tcs-article">
        <div></div>
        <div className="tcs-article-body">
          <h2 style={{ fontSize: 36, fontWeight: 700, margin: "0 0 18px", lineHeight: 1.1, color: "#000" }}>Natural talent</h2>
          <p>It was so fun to see what kind of message kids today are giving us. Children don't realise that some of the things they say to other kids can affect them. I'd love it if I had the chance to see this art in real life again.</p>
          <div className="tcs-article-pullquote">"I love painting because this is where I can express my ideas and thoughts to others."</div>
          <p>All the paintings have a deeper meaning for the artist who painted them. Andrew was very keen on emphasising the importance of small acts of kindness which contribute to a greater whole. Words like 'humanity' and 'happiness' echo through his work, reminding us that every individual contribution adds up to something powerful.</p>
        </div>
      </div>

      <div className="tcs-article">
        <div></div>
        <div className="tcs-article-body">
          <h2 style={{ fontSize: 36, fontWeight: 700, margin: "20px 0 18px", lineHeight: 1.1, color: "#000" }}>Meaning behind the painting</h2>
          <p>Andrew's painting is just one example of how creative expression can transform lives. The Children's Society continues to partner with arts organisations and galleries across the country to help young people find their voice.</p>
          <div className="tcs-article-pullquote">"The message of this painting is that every hardship brings with it a great success."</div>
        </div>
      </div>

      <div style={{ padding: "0 100px", marginTop: 60 }}>
        <LargePromo
          eyebrow="Research"
          title="The Good Childhood Report"
          body="The award-winning Good Childhood Report has been pulling back the curtain on children's lives for over a decade. Read our latest insights into what life is really like for young people today."
          image="img-paint"
          ctaLabel="Read more"
          onCtaClick={() => navigate("story")}
        />
      </div>

      <div className="tcs-share">
        <h3>Share the page</h3>
        <div className="btns">
          <button>Twitter <Icon name="twitter" size={14} /></button>
          <button>Facebook <Icon name="facebook" size={14} /></button>
          <button>LinkedIn <Icon name="linkedin" size={14} /></button>
        </div>
      </div>

      <div className="tcs-section tight">
        <h2 className="tcs-section-title" style={{ padding: 0 }}>Related content</h2>
      </div>
      <div style={{ marginBottom: 80 }}>
        <TeaserCard eyebrow="Story" title="110 character lorem ipsum dolor sit amet, consectetur adipiscing elit." image="img-portrait-1" />
        <TeaserCard eyebrow="Story" title="110 character lorem ipsum dolor sit amet, consectetur adipiscing elit." image="img-portrait-2" />
        <TeaserCard eyebrow="Story" title="110 character lorem ipsum dolor sit amet, consectetur adipiscing elit." image="img-group" />
      </div>

      <Footer />
    </div>
  );
}

// ---------- Step 2 · Details ----------
/* Numiko feedback addressed:
   - Title field removed (read as marketing collection)
   - Phone shown only if user opts into Text contact (tied to preference)
   - Address shown only if user opts into Post contact
   - "Yes please, I'd like to hear…" framing replaces the negative
     "if you do not wish to hear from us" copy
   - Trust band (Secure + Apple/Google/Visa/MC/PayPal) at the bottom
     so the payment-method marks carry through the journey
*/

function DetailsPage({ navigate, mode = "monthly", setMode, amount: amountProp, setAmount: setAmountProp }) {
  const [emailPref, setEmailPref] = useStatePages(null);
  const [textPref, setTextPref] = useStatePages(null);
  const [ddDay, setDdDay] = useStatePages("3rd");
  const [giftAid, setGiftAid] = useStatePages(false);
  const [ddAuth, setDdAuth] = useStatePages(false);
  const [confirmOneoff, setConfirmOneoff] = useStatePages(false);
  const [paymentMethod, setPaymentMethod] = useStatePages(null);
  const [walletReturn, setWalletReturn] = useStatePages(null);

  const amount = amountProp != null ? amountProp : (mode === "monthly" ? "10" : "25");
  const setAmount = setAmountProp;
  // Upsell: suggest the next tier up, with impact context.
  const amt = parseFloat(amount);
  const upsell = mode === "monthly"
    ? { extra: 3, impact: "fund a one-to-one counselling session for a young person in crisis" }
    : { extra: 5, impact: "give a young person in crisis a safe space to talk for an afternoon" };
  const nextAmount = amt + upsell.extra;
  const period = mode === "monthly" ? " a month" : "";
  const [upsellTaken, setUpsellTaken] = useStatePages(false);
  const expanded = paymentMethod === "dd" || paymentMethod === "card";

  function scrollFormTop() {
    const win = document.querySelector(".tcs-prototype-window");
    if (win) win.scrollTo({ top: 0, behavior: "instant" });
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  function selectMethod(m) {
    setWalletReturn(null);
    setPaymentMethod(m);
    scrollFormTop();
  }

  function handlePayPal() {
    setPaymentMethod("paypal");
    // Simulate the PayPal round-trip. Most land back authorised → return to
    // OUR site to capture the remaining supporter details. Some cancel.
    setTimeout(() => {
      if (Math.random() < 0.75) {
        setWalletReturn("paypal");
        scrollFormTop();
      } else {
        setPaymentMethod("paypal-cancelled");
      }
    }, 1200);
  }
  function handleApplePay() {
    setPaymentMethod("applepay");
    setTimeout(() => { setWalletReturn("applepay"); scrollFormTop(); }, 900);
  }
  function handleGooglePay() {
    setPaymentMethod("googlepay");
    setTimeout(() => { setWalletReturn("googlepay"); scrollFormTop(); }, 900);
  }

  return (
    <div className="tcs-page-content" data-screen-label={mode === "monthly" ? "Monthly donation" : "One-off donation"}>
      <section className="tcs-form-slice img-portrait-2">
        <a href="#" className="tcs-form-logo" onClick={(e) => { e.preventDefault(); navigate("home"); }} aria-label="The Children's Society — home">
          <img src="./assets/logo-white.svg" alt="The Children's Society" />
        </a>
        <div className="tcs-form-panel">
          <div className="tcs-form-amount-panel">
            <h1 className="tcs-form-heading">You're about to do something special</h1>
            <p className="tcs-form-context">
              {mode === "monthly"
                ? <>You're giving a <strong>monthly donation of £{amount}</strong> by Direct Debit. Thank you, your gift will give a child a brighter future.</>
                : <>You're giving a <strong>donation of £{amount}</strong>. Thank you, your gift will give a child a brighter future.</>}
            </p>
          </div>

          <StepIndicator steps={["Amount", "Your gift", "Your details"]} current={expanded ? 2 : 1} onStepBack={(i) => { if (i === 0) navigate("donate"); else if (i === 1) selectMethod(null); }} />

          {!expanded ? <GiftAidBand amount={amount} mode={mode} checked={giftAid} onChange={setGiftAid} /> : null}

          {mode === "monthly" ? (
            <>
              {!expanded ? (
                <div className="tcs-form-section tcs-form-paymethod">
                  {paymentMethod === "paypal" ? (
                    <p className="tcs-form-section-body"><strong>Redirecting to PayPal…</strong></p>
                  ) : (
                    <>
                      {paymentMethod === "paypal-cancelled" ? (
                        <div className="tcs-form-notice">Your PayPal payment wasn't completed — choose how you'd like to give.</div>
                      ) : null}
                      <div className="tcs-pay-buttons">
                        <button type="button" className="tcs-pay-btn pay-primary" onClick={() => selectMethod("dd")}>
                          <span>Pay by Direct Debit</span>
                          <img className="pay-btn-dd" src="./assets/logos/direct-debit-mark.png" alt="" aria-hidden="true" />
                        </button>
                      </div>
                      <a href="#" className="tcs-paybtns-change" onClick={(e) => { e.preventDefault(); navigate("donate"); }}>Change your amount</a>
                    </>
                  )}
                </div>
              ) : null}
              {!expanded && !walletReturn ? <FormTrustBand showLogos={false} /> : null}

              {paymentMethod === "dd" ? (
                <>
                  <NumberedSection number={1} title="Set up Direct Debit">
                    <FormField label="Account holder name" required hint="Exactly as it appears on your bank statement." />
                    <FormField label="Account number" required hint="8 digits." />
                    <div className="tcs-form-field">
                      <label className="tcs-form-label">Sort code <span className="required">*</span></label>
                      <p className="tcs-form-hint">6 digits, in pairs.</p>
                      <div className="tcs-form-sort-code">
                        <input className="tcs-form-input" type="text" maxLength={2} />
                        <span>—</span>
                        <input className="tcs-form-input" type="text" maxLength={2} />
                        <span>—</span>
                        <input className="tcs-form-input" type="text" maxLength={2} />
                      </div>
                    </div>
                    <div className="tcs-form-field">
                      <label className="tcs-form-label">Monthly donation date <span className="required">*</span></label>
                      <div className="tcs-form-day-picker">
                        {["3rd", "10th", "17th"].map((d) => (
                          <button key={d} type="button" className={"day-pill " + (ddDay === d ? "active" : "")} onClick={() => setDdDay(d)}>{d}</button>
                        ))}
                      </div>
                    </div>
                    <div className="tcs-form-mandate">
                      <h3 className="tcs-form-mandate-title">Direct Debit mandate</h3>
                      <p className="tcs-form-hint">If you are not the only required signatory on your account, please call our friendly Supporter Care team on <a href="#" onClick={(e) => e.preventDefault()}>0300 303 7000</a> or email <a href="#" onClick={(e) => e.preventDefault()}>supportercare@childrenssociety.org.uk</a></p>
                      <label className="tcs-form-check">
                        <input type="checkbox" checked={ddAuth} onChange={(e) => setDdAuth(e.target.checked)} />
                        <span className="tcs-form-check-box"></span>
                        <span className="tcs-form-check-label">I am the account holder and I am the only person required to authorise debits from this account</span>
                      </label>
                      <div className="tcs-form-dd-guarantee">
                        <img className="dd-logo" src="./assets/logos/direct-debit-mark.png" alt="Direct Debit" />
                        <span className="dd-guarantee-text">The Direct Debit Guarantee</span>
                      </div>
                    </div>
                  </NumberedSection>

                  <NumberedSection number={2} title="Your Details">
                    <FormField label="First name" required />
                    <FormField label="Last name" required />
                    <FormField label="Email address" type="email" required hint="So we can email your donation receipt." />
                    {textPref === "yes" ? (
                      <FormField label="Phone number" type="tel" hint="So we can text you the occasional update." />
                    ) : null}
                    <PostcodeLookup />
                  </NumberedSection>

                  <NumberedSection number={3} title="Keep in touch">
                    <p className="tcs-form-section-body">The Children's Society would like to contact you about how you can support children by campaigning, volunteering and providing financial support.</p>
                    <ConsentChoice label="I'm happy to be contacted by email:" value={emailPref} onChange={setEmailPref} />
                    <ConsentChoice label="I'm happy to be contacted by text:" value={textPref} onChange={setTextPref} />
                    <p className="tcs-form-section-body tcs-form-consent-post">We may also contact you by post and, if you have provided your number, telephone. If you do not wish to hear from us, or have a preferred contact method, simply let our friendly Supporter Care team know by calling <a href="#" onClick={(e) => e.preventDefault()}>0300 303 7000</a> or emailing <a href="#" onClick={(e) => e.preventDefault()}>supportercare@childrenssociety.org.uk</a>.</p>
                  </NumberedSection>

                  <p className="tcs-form-privacy">
                    Please see our <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a> for details of how we will use your personal information and keep it safe and secure.
                  </p>

                  <div className="tcs-form-commit">
                    <p className="tcs-form-commit-confirm">You're about to donate <strong>£{amount} a month</strong>, with your first payment taken on the {ddDay} of next month. You can change or cancel anytime.</p>
                    <button className="tcs-form-submit" onClick={() => navigate("thanks")}>
                      <span>Confirm your £{amount} monthly gift</span>
                    </button>
                    <div className="tcs-form-commit-box">
                      {!upsellTaken ? (
                        <div className="tcs-form-upsell-row">
                          <div className="tcs-form-upsell-text">
                            <p className="tcs-form-upsell-tagline">Could you make your gift go further?</p>
                            <p className="tcs-form-upsell-copy">
                              An extra <strong>£{upsell.extra}{period}</strong> could help {upsell.impact}.
                            </p>
                          </div>
                          <button type="button" className="tcs-form-upsell-btn" onClick={() => { setAmount(String(nextAmount)); setUpsellTaken(true); }}>
                            <span>Yes, make it £{nextAmount}{period}</span>
                            <Icon name="chevron-right" size="sm" />
                          </button>
                        </div>
                      ) : (
                        <div className="tcs-form-upsell-done">
                          <Icon name="donate" size="sm" />
                          <span>Thank you — your gift is now <strong>£{amount}{period}</strong>. That makes a real difference.</span>
                        </div>
                      )}
                    </div>
                    <a href="#" className="tcs-form-changemethod" onClick={(e) => { e.preventDefault(); selectMethod(null); }}>Change payment method</a>
                  </div>

                  <FormTrustBand showLogos={false} />
                </>
              ) : null}
            </>
          ) : (
            <>
              {!expanded ? (
                <div className="tcs-form-section tcs-form-paymethod">
                  {walletReturn ? (
                    <WalletReturnCapture
                      method={walletReturn}
                      amount={amount}
                      giftAid={giftAid}
                      setGiftAid={setGiftAid}
                      emailPref={emailPref}
                      setEmailPref={setEmailPref}
                      onComplete={() => navigate("thanks")}
                      onBack={() => { setWalletReturn(null); setPaymentMethod(null); }}
                    />
                  ) : paymentMethod === "paypal" ? (
                    <p className="tcs-form-section-body"><strong>Redirecting to PayPal…</strong></p>
                  ) : paymentMethod === "applepay" ? (
                    <p className="tcs-form-section-body"><strong>Opening Apple Pay…</strong></p>
                  ) : paymentMethod === "googlepay" ? (
                    <p className="tcs-form-section-body"><strong>Opening Google Pay…</strong></p>
                  ) : (
                    <>
                      {paymentMethod === "paypal-cancelled" ? (
                        <div className="tcs-form-notice">Your PayPal payment wasn't completed — choose how you'd like to give.</div>
                      ) : null}
                      <div className="tcs-pay-buttons">
                        <button type="button" className="tcs-pay-btn pay-primary" onClick={() => selectMethod("card")}>
                          <span>Pay by Card</span>
                        </button>
                        <button type="button" className="tcs-pay-btn pay-paypal" onClick={handlePayPal}>
                          <span>Pay with <span className="pp">PayPal</span></span>
                        </button>
                        <button type="button" className="tcs-pay-btn pay-applepay" onClick={handleApplePay}>
                          <span className="ap-mark">
                            <svg className="ap-logo" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.88 2.65 3.22 2.6 1.29-.05 1.78-.83 3.34-.83 1.56 0 2 .83 3.37.81 1.39-.03 2.27-1.27 3.12-2.53.98-1.45 1.39-2.85 1.41-2.92-.03-.01-2.71-1.04-2.74-4.13zM14.6 4.7c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.3-.58 3.01-1.44z"/></svg>
                            Pay
                          </span>
                        </button>
                        <button type="button" className="tcs-pay-btn pay-googlepay" onClick={handleGooglePay}>
                          <span className="gp-mark"><span className="glyph">G</span> Pay</span>
                        </button>
                      </div>
                      <a href="#" className="tcs-paybtns-change" onClick={(e) => { e.preventDefault(); navigate("donate"); }}>Change your amount</a>
                    </>
                  )}
                </div>
              ) : null}
              {!expanded && !walletReturn ? <FormTrustBand showLogos={false} /> : null}

              {paymentMethod === "card" ? (
                <>
                  <NumberedSection number={1} title="Card details">
                    <FormField label="Cardholder name" required hint="Exactly as it appears on your card." />
                    <FormField label="Card number" required hint="16 digits, on the front of your card." />
                    <div className="tcs-form-field">
                      <label className="tcs-form-label">Expiry &amp; CVC <span className="required">*</span></label>
                      <div className="tcs-form-sort-code">
                        <input className="tcs-form-input" type="text" maxLength={2} placeholder="MM" />
                        <span>/</span>
                        <input className="tcs-form-input" type="text" maxLength={2} placeholder="YY" />
                        <input className="tcs-form-input" type="text" maxLength={4} placeholder="CVC" style={{ width: 80 }} />
                      </div>
                    </div>
                  </NumberedSection>

                  <NumberedSection number={2} title="Your Details">
                    <FormField label="First name" required />
                    <FormField label="Last name" required />
                    <FormField label="Email address" type="email" required hint="So we can email your donation receipt." />
                    {textPref === "yes" ? (
                      <FormField label="Phone number" type="tel" hint="So we can text you the occasional update." />
                    ) : null}
                    <PostcodeLookup hint="So we can keep your records up to date." />
                  </NumberedSection>

                  <NumberedSection number={3} title="Keep in touch">
                    <p className="tcs-form-section-body">The Children's Society would like to contact you about how you can support children by campaigning, volunteering and providing financial support.</p>
                    <ConsentChoice label="I'm happy to be contacted by email:" value={emailPref} onChange={setEmailPref} />
                    <ConsentChoice label="I'm happy to be contacted by text:" value={textPref} onChange={setTextPref} />
                    <p className="tcs-form-section-body tcs-form-consent-post">We may also contact you by post and, if you have provided your number, telephone. If you do not wish to hear from us, or have a preferred contact method, simply let our friendly Supporter Care team know by calling <a href="#" onClick={(e) => e.preventDefault()}>0300 303 7000</a> or emailing <a href="#" onClick={(e) => e.preventDefault()}>supportercare@childrenssociety.org.uk</a>.</p>
                  </NumberedSection>

                  <p className="tcs-form-privacy">
                    Please see our <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a> for details of how we will use your personal information and keep it safe and secure.
                  </p>

                  <div className="tcs-form-commit">
                    <label className="tcs-form-check tcs-form-confirm-check">
                      <input type="checkbox" checked={confirmOneoff} onChange={(e) => setConfirmOneoff(e.target.checked)} />
                      <span className="tcs-form-check-box"></span>
                      <span className="tcs-form-check-label">Please confirm that <strong>you are donating £{amount}</strong> to help keep hope alive for vulnerable young people.</span>
                    </label>
                    <button className="tcs-form-submit" onClick={() => navigate("thanks")}>
                      <span>Donate £{amount} today</span>
                    </button>
                    <div className="tcs-form-commit-box">
                      {!upsellTaken ? (
                        <div className="tcs-form-upsell-row">
                          <div className="tcs-form-upsell-text">
                            <p className="tcs-form-upsell-tagline">Could you make your gift go further?</p>
                            <p className="tcs-form-upsell-copy">
                              An extra <strong>£{upsell.extra}{period}</strong> could help {upsell.impact}.
                            </p>
                          </div>
                          <button type="button" className="tcs-form-upsell-btn" onClick={() => { setAmount(String(nextAmount)); setUpsellTaken(true); }}>
                            <span>Yes, make it £{nextAmount}{period}</span>
                            <Icon name="chevron-right" size="sm" />
                          </button>
                        </div>
                      ) : (
                        <div className="tcs-form-upsell-done">
                          <Icon name="donate" size="sm" />
                          <span>Thank you — your gift is now <strong>£{amount}{period}</strong>. That makes a real difference.</span>
                        </div>
                      )}
                    </div>
                    <a href="#" className="tcs-form-changemethod" onClick={(e) => { e.preventDefault(); selectMethod(null); }}>Change payment method</a>
                  </div>

                  <FormTrustBand />
                </>
              ) : null}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FormProgress({ step, onBack, onChangeAmount }) {
  const stages = ["Your gift", "Your details"];
  return (
    <div className="tcs-form-progress">
      <div className="tcs-form-progress-track">
        {stages.map((s, i) => (
          <div key={i} className={"tcs-form-progress-seg" + (i < step ? " filled" : "")}></div>
        ))}
      </div>
      <div className="tcs-form-progress-labels">
        {stages.map((s, i) => {
          const canBack = i === 0 && step === 2 && !!onBack;
          return (
            <span
              key={i}
              className={"tcs-form-progress-label" + (i === step - 1 ? " current" : "") + (canBack ? " is-back" : "")}
              onClick={canBack ? (e) => { e.preventDefault(); onBack(); } : undefined}
              role={canBack ? "button" : undefined}
              tabIndex={canBack ? 0 : undefined}
            >
              {s}{canBack ? <span className="back-tag">Back</span> : null}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function WalletReturnCapture({ method, amount, giftAid, setGiftAid, emailPref, setEmailPref, onComplete, onBack }) {
  const label = method === "paypal" ? "PayPal" : method === "applepay" ? "Apple Pay" : "Google Pay";
  return (
    <div className="tcs-wallet-return">
      <span className="tcs-wallet-badge"><Icon name="padlock" size="sm" /> Payment authorised with {label}</span>
      <h2 className="tcs-wallet-title">Confirm a few details</h2>
      <p className="tcs-form-section-body">{label} has authorised your <strong>£{amount}</strong> gift. We just need a few details from you directly — {label} doesn't share these with us — so we can send your receipt and, if you choose, claim Gift Aid.</p>
      <FormField label="First name" required />
      <FormField label="Last name" required />
      <FormField label="Email address" type="email" required hint="So we can email your donation receipt." />
      <GiftAidBand amount={amount} mode="oneoff" checked={giftAid} onChange={setGiftAid} />
      <div className="tcs-wallet-consent">
        <p className="tcs-form-section-body">The Children's Society would like to contact you about how you can support children by campaigning, volunteering and providing financial support.</p>
        <ConsentChoice label="I'm happy to be contacted by email:" value={emailPref} onChange={setEmailPref} />
      </div>
      <p className="tcs-form-privacy">Please see our <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a> for details of how we will use your personal information and keep it safe and secure.</p>
      <button className="tcs-form-submit" onClick={onComplete}><span>Complete your £{amount} donation</span></button>
      <a href="#" className="tcs-paybtns-change" onClick={(e) => { e.preventDefault(); onBack(); }}>Use a different payment method</a>
      <FormTrustBand showLogos={false} />
    </div>
  );
}

function GiftAidBand({ amount, mode, checked, onChange }) {
  const amt = (parseFloat(amount)).toFixed(2);
  const total = (parseFloat(amount) * 1.25).toFixed(2);
  return (
    <div className="tcs-form-giftaid-band">
      <div className="tcs-giftaid-inner">
        <img className="tcs-giftaid-logo" src="./assets/logos/giftaid-it.png" alt="Gift Aid it" />
        <p className="tcs-giftaid-lead">If you are a UK taxpayer, the value of your gift can be increased by 25% under the <strong>Gift Aid</strong> scheme at no extra cost to you.</p>
        <p className="tcs-giftaid-lead">This means every time you donate <strong>£{amt}</strong> it's worth <strong>£{total}</strong> to us.</p>
        {mode !== "monthly" ? (
          <p className="tcs-giftaid-lead">Please note that we can only <strong>Gift Aid</strong> donations from individual donors — if you're paying in a donation from a collection/event or business please do not tick the box to <strong>Gift Aid</strong> this donation.</p>
        ) : null}
        <p className="tcs-giftaid-lead">If you pay less Income Tax and/or Capital Gains Tax than the amount of <strong>Gift Aid</strong> claimed on all of your donations in that tax year it is your responsibility to pay any difference.</p>
        <label className="tcs-giftaid-check">
          <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
          <span className="tcs-giftaid-box"></span>
          <span className="tcs-giftaid-label">Yes, I am a UK tax payer and I would like The Children's Society to treat all donations I have made for the four years prior to this tax year, today, and all donations I make from the date of this declaration as Gift Aid donations, until I notify you otherwise.</span>
        </label>
      </div>
    </div>
  );
}

function NumberedSection({ number, title, children }) {
  return (
    <div className="tcs-form-section-numbered">
      <h2 className="tcs-form-section-numbered-title">
        <span className="num">{number}</span>
        <span>{title}</span>
      </h2>
      <div className="tcs-form-section-numbered-body">
        {children}
      </div>
    </div>
  );
}

function StepIndicator({ steps = ["Amount", "Details", "Payment"], current, onStepBack }) {
  return (
    <div className="tcs-form-steps">
      {steps.map((s, i) => {
        const done = i < current;
        const clickable = done && !!onStepBack;
        return (
          <React.Fragment key={i}>
            <div
              className={"tcs-form-step " + (done ? "done" : i === current ? "active" : "") + (clickable ? " is-back" : "")}
              onClick={clickable ? () => onStepBack(i) : undefined}
              role={clickable ? "button" : undefined}
              tabIndex={clickable ? 0 : undefined}
            >
              <span className="dot">{done ? "✓" : (i + 1)}</span>
              <span className="label">{s}</span>
            </div>
            {i < steps.length - 1 ? <div className="tcs-form-step-line"></div> : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function FormField({ label, required, type = "text", hint, placeholder }) {
  const [value, setValue] = useStatePages("");
  return (
    <div className="tcs-form-field">
      <label className="tcs-form-label">{label}{required ? <span className="required"> *</span> : null}</label>
      {hint ? <p className="tcs-form-hint">{hint}</p> : null}
      <input className="tcs-form-input" type={type} value={value} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

function FormCheck({ label, checked, onChange }) {
  return (
    <label className="tcs-form-check">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className="tcs-form-check-box"></span>
      <span className="tcs-form-check-label">{label}</span>
    </label>
  );
}

function ConsentChoice({ label, value, onChange }) {
  return (
    <div className="tcs-form-consent">
      <p className="tcs-form-consent-q">{label} <span className="required">*</span></p>
      <div className="tcs-form-consent-opts">
        <label className={"tcs-consent-opt" + (value === "yes" ? " sel" : "")}>
          <input type="radio" checked={value === "yes"} onChange={() => onChange("yes")} />
          <span>Yes, please</span>
        </label>
        <label className={"tcs-consent-opt" + (value === "no" ? " sel" : "")}>
          <input type="radio" checked={value === "no"} onChange={() => onChange("no")} />
          <span>No, sorry!</span>
        </label>
      </div>
    </div>
  );
}

function PostcodeLookup({ hint = "Required for your Direct Debit instruction." }) {
  const [stage, setStage] = useStatePages("lookup"); // lookup → results → manual
  const [postcode, setPostcode] = useStatePages("");
  const [selected, setSelected] = useStatePages("");

  const sampleAddresses = [
    "Flat 1, 24 Edward Street",
    "Flat 2, 24 Edward Street",
    "26 Edward Street",
    "28 Edward Street",
    "30 Edward Street",
  ];

  return (
    <div className="tcs-form-address">
      <label className="tcs-form-label">Home address <span className="required">*</span></label>
      <p className="tcs-form-hint">{hint}</p>

      {stage === "lookup" ? (
        <>
          <div className="tcs-postcode-row">
            <input
              className="tcs-form-input"
              type="text"
              placeholder="Enter postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value.toUpperCase())}
            />
            <button
              type="button"
              className="tcs-postcode-find"
              onClick={() => setStage("results")}
            >
              Find address
            </button>
          </div>
          <a href="#" className="tcs-form-link" onClick={(e) => { e.preventDefault(); setStage("manual"); }}>Or enter address manually</a>
        </>
      ) : null}

      {stage === "results" ? (
        <>
          <p className="tcs-postcode-found">{sampleAddresses.length} addresses found for <strong>{postcode || "BS1 2AB"}</strong> · <a href="#" className="tcs-form-link-inline" onClick={(e) => { e.preventDefault(); setStage("lookup"); }}>Change postcode</a></p>
          <div className="tcs-form-field">
            <label className="tcs-form-label">Select your address <span className="required">*</span></label>
            <div className="tcs-form-select">
              <select value={selected} onChange={(e) => setSelected(e.target.value)}>
                <option value="">Please select…</option>
                {sampleAddresses.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
              <Icon name="chevron-down-accordion" size="sm" />
            </div>
          </div>
          <a href="#" className="tcs-form-link" onClick={(e) => { e.preventDefault(); setStage("manual"); }}>Or enter address manually</a>
        </>
      ) : null}

      {stage === "manual" ? (
        <>
          <FormField label="Address line 1" required />
          <FormField label="Address line 2" />
          <FormField label="Town / city" required />
          <FormField label="Postcode" required />
          <a href="#" className="tcs-form-link" onClick={(e) => { e.preventDefault(); setStage("lookup"); }}>Search by postcode instead</a>
        </>
      ) : null}
    </div>
  );
}

function FormTrustBand({ showLogos = true }) {
  return (
    <div className="tcs-form-trust">
      {showLogos ? (
      <div className="trust-logos">
        <span className="pay pay-apple"><svg className="ap-logo-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.88 2.65 3.22 2.6 1.29-.05 1.78-.83 3.34-.83 1.56 0 2 .83 3.37.81 1.39-.03 2.27-1.27 3.12-2.53.98-1.45 1.39-2.85 1.41-2.92-.03-.01-2.71-1.04-2.74-4.13zM14.6 4.7c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.3-.58 3.01-1.44z"/></svg>Pay</span>
        <span className="pay pay-google"><span className="glyph">G</span>Pay</span>
        <span className="pay pay-visa">VISA</span>
        <span className="pay pay-mc" aria-label="Mastercard"><span className="mc-r"></span><span className="mc-y"></span></span>
        <span className="pay pay-paypal">PayPal</span>
      </div>
      ) : null}
      <div className="tcs-form-trust-assurance">
        <div className="fr-badge">
          <span className="fr-roundel">FR</span>
          <span className="fr-text">Registered 2025/26<br/><strong>FUNDRAISING REGULATOR</strong></span>
        </div>
        <div className="assurance-copy">
          <p className="charity-no">Registered charity no. 221124</p>
          <p className="secure-note"><Icon name="padlock" size="sm" /> Secure, encrypted donation</p>
        </div>
      </div>
    </div>
  );
}

// ---------- Step 3 · Payment ----------
/* Two modes in one page: monthly (Direct Debit) and one-off (card / PayPal).
   Defaults to monthly to match the "Strengthen monthly confirmation
   messaging" feedback. Mode toggle at the bottom lets the donor switch. */

function PaymentPage({ navigate, mode = "monthly", setMode }) {
  const [ddDay, setDdDay] = useStatePages("3rd");
  const [giftAid, setGiftAid] = useStatePages(false);
  const [mandate, setMandate] = useStatePages(false);
  const amount = mode === "monthly" ? "10" : "25";

  return (
    <div className="tcs-page-content" data-screen-label="04 Payment">
      <section className="tcs-form-slice img-portrait-2">
        <a href="#" className="tcs-form-logo" onClick={(e) => { e.preventDefault(); navigate("home"); }} aria-label="The Children's Society — home">
          <img src="./assets/logo-white.svg" alt="The Children's Society" />
        </a>
        <div className="tcs-form-panel">
          <p className="tcs-form-context">
            You're giving a <strong>{mode === "monthly" ? `monthly donation of £${amount} by Direct Debit` : `donation of £${amount}`}</strong>. Thank you — your gift will give a young person a brighter future.
          </p>

          <h1 className="tcs-form-heading">Payment details</h1>

          <StepIndicator current={2} />

          {mode === "monthly" ? (
            <>
              <div className="tcs-form-section">
                <h2 className="tcs-form-section-heading">Pick a Direct Debit date</h2>
                <p className="tcs-form-section-body">When you'd like your gift to leave your account each month.</p>
                <div className="tcs-form-day-picker">
                  {["3rd", "10th", "17th"].map((d) => (
                    <button key={d} className={"day-pill " + (ddDay === d ? "active" : "")} onClick={() => setDdDay(d)}>{d}</button>
                  ))}
                </div>
              </div>

              <div className="tcs-form-section">
                <h2 className="tcs-form-section-heading">Your bank details</h2>
                <FormField label="Account holder name" required hint="Exactly as it appears on your bank statement." />
                <FormField label="Account number" required hint="8 digits." />
                <div className="tcs-form-field">
                  <label className="tcs-form-label">Sort code <span className="required">*</span></label>
                  <p className="tcs-form-hint">6 digits, in pairs.</p>
                  <div className="tcs-form-sort-code">
                    <input className="tcs-form-input" type="text" maxLength={2} />
                    <span>—</span>
                    <input className="tcs-form-input" type="text" maxLength={2} />
                    <span>—</span>
                    <input className="tcs-form-input" type="text" maxLength={2} />
                  </div>
                </div>
                <div className="tcs-form-dd-logo">DIRECT Debit</div>
              </div>
            </>
          ) : null}

          <div className="tcs-form-section tcs-form-giftaid">
            <h2 className="tcs-form-section-heading">Make it worth 25% more</h2>
            <p className="tcs-form-section-body">
              If you're a UK taxpayer, <strong>Gift Aid</strong> adds 25p to every £1 — at no extra cost to you. Your £{amount} could be worth <strong>£{(parseFloat(amount) * 1.25).toFixed(2)}</strong>.
            </p>
            <FormCheck label="Yes, I'm a UK taxpayer — claim Gift Aid on my donation." checked={giftAid} onChange={setGiftAid} />
          </div>

          {mode === "monthly" ? (
            <>
              <div className="tcs-form-section">
                <FormCheck label="I'm the only person required to authorise debits from this account." checked={mandate} onChange={setMandate} />
                <p className="tcs-form-mandate-note">Not the only signatory? Call Supporter Care on 0300 303 7000 and we'll set up your gift over the phone.</p>
              </div>

              <button className="tcs-form-submit" onClick={() => navigate("thanks")}>
                <span>Donate £{amount} monthly</span>
                <Icon name="chevron-right" size="sm" />
              </button>

              <p className="tcs-form-mode-toggle">
                Or <a href="#" onClick={(e) => { e.preventDefault(); setMode("oneoff"); }}>make a one-off donation</a> instead.
              </p>
            </>
          ) : (
            <>
              <button className="tcs-form-submit" onClick={() => navigate("thanks")}>
                <span>Donate £{amount} by card</span>
                <Icon name="chevron-right" size="sm" />
              </button>

              <button className="tcs-form-submit tcs-form-paypal" onClick={() => navigate("thanks")}>
                <span>Donate with</span>
                <span className="paypal-mark">PayPal</span>
              </button>

              <p className="tcs-form-mode-toggle">
                Or <a href="#" onClick={(e) => { e.preventDefault(); setMode("monthly"); }}>set up a monthly gift</a> instead.
              </p>
            </>
          )}

          <FormTrustBand />
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ---------- Step 4 · Confirmation / Thank you ----------
/* Numiko feedback addressed:
   - Monthly confirmation explicitly acknowledges the recurring commitment
     (first-payment date, "monthly gift of £5", clear summary card).
   - The "Donate Monthly" upsell that lived on the one-off thank-you page
     has been REMOVED — it now goes into a follow-up email instead.
   - Payment-method marks carried through via the trust strip. */

function ThanksPage({ navigate, mode = "monthly", setMode, amount: amountProp, version = "ambitious" }) {
  const amount = amountProp != null ? amountProp : (mode === "monthly" ? "10" : "25");
  const name = "Sarah";
  const email = "sarah@example.com";
  const reference = "TCS-2026-04823";
  const firstPaymentDate = "3 June 2026";

  return (
    <div className="tcs-page-content" data-screen-label="05 Confirmation">
      <section className="tcs-thanks-slice img-laughter">
        <a href="#" className="tcs-form-logo" onClick={(e) => { e.preventDefault(); navigate("home"); }} aria-label="The Children's Society — home">
          <img src="./assets/logo-white.svg" alt="The Children's Society" />
        </a>
        <div className="tcs-thanks-card">
          {version !== "standard" ? <span className="tcs-thanks-eyebrow">Donation confirmed</span> : null}
          <h1 className="tcs-thanks-heading">{mode === "monthly" ? "You're amazing, thank you!" : "You're amazing, thank you!"}</h1>
          <p className="tcs-thanks-lead">
            {mode === "monthly" ? (
              <>With your support, we can improve the lives of even more children and young people across the UK.</>
            ) : (
              <>We are grateful for every gift. You can have a bigger impact by donating a smaller amount each month, supporting long-term projects and helping more children to grow up happy, healthy and hopeful.</>
            )}
          </p>
          {mode !== "monthly" ? (
            <button className="tcs-thanks-monthly-cta" onClick={() => { setMode && setMode("monthly"); navigate("donate"); }}>
              <span>Donate Monthly</span>
              <Icon name="chevron-right" size="sm" />
            </button>
          ) : null}

          {version === "standard" ? (
            <div className="tcs-thanks-standard-foot">
              <p className="tcs-thanks-care">If you have any queries or want to update your details please get in touch with our Supporter Care team on <a href="#" onClick={(e) => e.preventDefault()}>0300 303 7000</a> or email <a href="#" onClick={(e) => e.preventDefault()}>supportercare@childrenssociety.org.uk</a></p>
              {mode === "monthly" ? (
                <button className="tcs-thanks-follow"><span>Follow us</span><Icon name="facebook" size="sm" /></button>
              ) : null}
            </div>
          ) : (
          <>
          <div className="tcs-thanks-summary">
            <div className="row"><span className="lbl">Amount</span><span className="val">£{amount}{mode === "monthly" ? " a month" : ""}</span></div>
            <div className="row"><span className="lbl">{mode === "monthly" ? "First payment" : "Date"}</span><span className="val">{firstPaymentDate}</span></div>
            <div className="row"><span className="lbl">Reference</span><span className="val">{reference}</span></div>
            <div className="row"><span className="lbl">Receipt sent to</span><span className="val">{email}</span></div>
          </div>

          <div className="tcs-thanks-next">
            <h2>What happens next</h2>
            <ul>
              <li>We'll email your receipt to <strong>{email}</strong> in the next few minutes.</li>
              {mode === "monthly"
                ? <li>You'll get a welcome pack with stories of the young people your gift will help.</li>
                : <li>You'll get a thank-you note from one of the young people we support.</li>}
              <li>To change or cancel your gift, call Supporter Care on <strong>0300 303 7000</strong> or email <strong>supportercare@childrenssociety.org.uk</strong>.</li>
            </ul>
          </div>

          <div className="tcs-thanks-share">
            <h2>Tell someone about it</h2>
            <p>Every voice helps. Share where your gift is going and inspire someone else to give.</p>
            <div className="buttons">
              <button className="share-btn"><Icon name="twitter" size="sm" /><span>Twitter</span></button>
              <button className="share-btn"><Icon name="facebook" size="sm" /><span>Facebook</span></button>
              <button className="share-btn"><Icon name="linkedin" size="sm" /><span>LinkedIn</span></button>
            </div>
          </div>

          <div className="tcs-thanks-assurance">
            <div className="fr-badge">
              <span className="fr-roundel">FR</span>
              <span className="fr-text">Registered 2025/26<br/><strong>FUNDRAISING REGULATOR</strong></span>
            </div>
            <p className="charity-no">Registered charity no. 221124</p>
          </div>
          </>
          )}

          <p className="tcs-thanks-mode-toggle">
            Previewing the <strong>{mode === "monthly" ? "monthly" : "one-off"}</strong> confirmation. Switch journey via the prototype nav above.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function StandardFormPage({ navigate, mode = "monthly", setMode, amount: amountProp }) {
  const amount = amountProp != null ? amountProp : (mode === "monthly" ? "10" : "25");
  const [step, setStep] = useStatePages(1); // 1 = your details · 2 = payment details
  const [title, setTitle] = useStatePages("");
  const [emailPref, setEmailPref] = useStatePages(null);
  const [textPref, setTextPref] = useStatePages(null);
  const [confirmOneoff, setConfirmOneoff] = useStatePages(false);
  const [ddDay, setDdDay] = useStatePages("3rd");
  const [giftAid, setGiftAid] = useStatePages(false);
  const [ddAuth, setDdAuth] = useStatePages(false);

  function go(n) {
    setStep(n);
    const win = document.querySelector(".tcs-prototype-window");
    if (win) win.scrollTo({ top: 0, behavior: "instant" });
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  return (
    <div className="tcs-page-content" data-screen-label={mode === "monthly" ? "Existing — Monthly" : "Existing — One-off"}>
      <section className="tcs-form-slice img-portrait-2">
        <a href="#" className="tcs-form-logo" onClick={(e) => { e.preventDefault(); navigate("home"); }} aria-label="The Children's Society — home">
          <img src="./assets/logo-white.svg" alt="The Children's Society" />
        </a>
        <div className="tcs-form-panel">
          {step === 1 ? (
            <>
              <h1 className="tcs-form-heading">You're about to do something special</h1>
              <p className="tcs-form-context">
                {mode === "monthly"
                  ? <>You're giving a <strong>monthly donation of £{amount}</strong> by Direct Debit. Thank you, your gift will give a child a brighter future.</>
                  : <>You're giving a <strong>donation of £{amount}</strong>. Thank you, your gift will give a child a brighter future.</>}
              </p>
              <StepIndicator current={1} />

              <div className="tcs-form-field">
                <label className="tcs-form-label">Title <span className="required">*</span></label>
                <div className="tcs-form-select">
                  <select value={title} onChange={(e) => setTitle(e.target.value)}>
                    <option value="">Please select</option>
                    {["Mr", "Mrs", "Ms", "Miss", "Mx", "Dr"].map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <Icon name="chevron-down-accordion" size="sm" />
                </div>
              </div>
              <FormField label="First name" required />
              <FormField label="Last name" required />
              <FormField label="Email address" type="email" required />
              <PostcodeLookup hint="So we can keep your records up to date." />
              <FormField label="Phone number" type="tel" />

              <div className="tcs-std-section">
                <h2 className="tcs-form-section-heading">Keep in touch</h2>
                <p className="tcs-form-section-body">The Children's Society would like to contact you about how you can support children by campaigning, volunteering and providing financial support.</p>
                <ConsentChoice label="I'm happy to be contacted by email:" value={emailPref} onChange={setEmailPref} />
                <ConsentChoice label="I'm happy to be contacted by text:" value={textPref} onChange={setTextPref} />
                <p className="tcs-form-section-body tcs-form-consent-post">We may also contact you by post and, if you have provided your number, telephone. If you do not wish to hear from us, or have a preferred contact method, simply let our friendly Supporter Care team know by calling <a href="#" onClick={(e) => e.preventDefault()}>0300 303 7000</a> or emailing <a href="#" onClick={(e) => e.preventDefault()}>supportercare@childrenssociety.org.uk</a>.</p>
              </div>

              <p className="tcs-form-privacy">Please see our <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a> for details of how we will use your personal information and keep it safe and secure.</p>

              {mode !== "monthly" ? (
                <>
                  <p className="tcs-form-section-body">Please confirm that <strong>you are donating £{amount}</strong> to help keep hope alive for vulnerable young people</p>
                  <label className="tcs-form-check tcs-form-confirm-check">
                    <input type="checkbox" checked={confirmOneoff} onChange={(e) => setConfirmOneoff(e.target.checked)} />
                    <span className="tcs-form-check-box"></span>
                    <span className="tcs-form-check-label">Yes, I confirm</span>
                  </label>
                </>
              ) : null}

              <button className="tcs-form-submit" onClick={() => go(2)}><span>Continue</span></button>
              <FormTrustBand showLogos={false} />
            </>
          ) : (
            <>
              <h1 className="tcs-form-heading">Payment details</h1>
              <StepIndicator current={2} />

              {mode === "monthly" ? (
                <>
                  <div className="tcs-form-field">
                    <label className="tcs-form-label">What day would you like your Direct Debit to go out?</label>
                    <div className="tcs-form-day-picker">
                      {["3rd", "10th", "17th"].map((d) => (
                        <button key={d} type="button" className={"day-pill " + (ddDay === d ? "active" : "")} onClick={() => setDdDay(d)}>{d}</button>
                      ))}
                    </div>
                  </div>
                  <FormField label="Name of account holder(s)" required hint="Exactly as it appears on your bank statement" />
                  <FormField label="Account number" required hint="Should be a maximum of 8 digits" />
                  <div className="tcs-form-field">
                    <label className="tcs-form-label">Sort code <span className="required">*</span></label>
                    <p className="tcs-form-hint">Enter the 6 digit sort code for your account</p>
                    <div className="tcs-form-sort-code">
                      <input className="tcs-form-input" type="text" maxLength={2} />
                      <span>—</span>
                      <input className="tcs-form-input" type="text" maxLength={2} />
                      <span>—</span>
                      <input className="tcs-form-input" type="text" maxLength={2} />
                    </div>
                  </div>

                  <GiftAidBand amount={amount} mode={mode} checked={giftAid} onChange={setGiftAid} />

                  <div className="tcs-form-mandate">
                    <h3 className="tcs-form-mandate-title">Direct Debit mandate</h3>
                    <p className="tcs-form-hint">If you are not the only required signatory on your account, please call our friendly Supporter Care team on <a href="#" onClick={(e) => e.preventDefault()}>0300 303 7000</a> or email <a href="#" onClick={(e) => e.preventDefault()}>supportercare@childrenssociety.org.uk</a></p>
                    <label className="tcs-form-check">
                      <input type="checkbox" checked={ddAuth} onChange={(e) => setDdAuth(e.target.checked)} />
                      <span className="tcs-form-check-box"></span>
                      <span className="tcs-form-check-label">I am the account holder and I am the only person required to authorise debits from this account</span>
                    </label>
                    <div className="tcs-form-dd-guarantee">
                      <img className="dd-logo" src="./assets/logos/direct-debit-mark.png" alt="Direct Debit" />
                      <span className="dd-guarantee-text">The Direct Debit Guarantee</span>
                    </div>
                  </div>

                  <div className="tcs-form-commit">
                    <p className="tcs-form-commit-confirm">You're about to donate <strong>£{amount} a month</strong>, with your first payment taken on the {ddDay} of next month.</p>
                    <button className="tcs-form-submit" onClick={() => navigate("thanks")}><span>Donate</span></button>
                    <a href="#" className="tcs-form-changemethod" onClick={(e) => { e.preventDefault(); go(1); }}>Back to your details</a>
                  </div>
                  <FormTrustBand showLogos={false} />
                </>
              ) : (
                <>
                  <GiftAidBand amount={amount} mode={mode} checked={giftAid} onChange={setGiftAid} />
                  <div className="tcs-pay-buttons">
                    <button type="button" className="tcs-pay-btn pay-primary" onClick={() => navigate("thanks")}><span>Pay by card</span></button>
                    <button type="button" className="tcs-pay-btn pay-paypal" onClick={() => navigate("thanks")}><span>Pay with <span className="pp">PayPal</span></span></button>
                  </div>
                  <a href="#" className="tcs-form-changemethod" onClick={(e) => { e.preventDefault(); go(1); }}>Back to your details</a>
                  <FormTrustBand />
                </>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function HomeDonateSlice({ navigate }) {
  const [tab, setTab] = useStatePages("monthly");
  const [amount, setAmount] = useStatePages("10");
  const changeTab = (t) => { setTab(t); setAmount(t === "oneoff" ? "25" : "10"); };
  return (
    <DonateSlice navigate={navigate} image="img-portrait-2" tab={tab} setTab={changeTab} amount={amount} setAmount={setAmount} />
  );
}

function WeekInFocus() {
  const items = [
    { eyebrow: "News and blogs", title: "The real young carers behind the EastEnders storyline", date: "27 May 2026", body: "Every child should receive the support they need to learn and thrive — this is doubly true for those young people who have caring responsibilities. This is what that looks like in real life.", image: "img-news-1" },
    { eyebrow: "News and blogs", title: "The Children's Society responds to the government ban on social media for under-16s", date: "", body: "The Government's decision to ban social media for under-16s will undoubtedly shape the lives of millions of young people, but the debate is asking the wrong question.", image: "img-news-2" },
    { eyebrow: "News and blogs", title: "Protecting young people from misogyny and the manosphere", date: "13 March 2026", body: "We break down the terminology of the manosphere, and some of its risks to young people. Learn what parents and carers can look out for to keep young people safe.", image: "img-news-3" },
  ];
  return (
    <section className="tcs-news-slice">
      <h2>This week in <span className="hl">focus</span></h2>
      <div className="tcs-news-grid">
        {items.map((it, i) => (
          <article className="tcs-news-card" key={i}>
            <a href="#" className="news-media" onClick={(e) => e.preventDefault()}>
              <div className={`img ${it.image}`}></div>
            </a>
            <span className="eyebrow">{it.eyebrow}</span>
            <a href="#" className="news-heading" onClick={(e) => e.preventDefault()}>{it.title}</a>
            {it.date ? <p className="news-date">{it.date}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function QuoteSlice({ image, navigate }) {
  return (
    <section className={`tcs-quote-slice ${image}`}>
      <div className="scrim"></div>
      <div className="quote-inner">
        <img className="quote-headline" src="./assets/illustrations/freefall-headline-white.png" alt="It's like I'm in free fall" />
        <button type="button" className="btn btn-white" onClick={() => navigate && navigate("story")}>
          Read my story <Icon name="chevron-right" />
        </button>
      </div>
    </section>
  );
}

Object.assign(window, {
  HomePage, DonatePage, DonateSlice, DonateWidget, DonateArticleHeader, HomeDonateSlice, WeekInFocus, QuoteSlice,
  OtherWaysToGive, DonateDifference, DonateImpactBlock, AccordionSection,
  ShareBlock, RelatedBlock, StoryPage,
  DetailsPage, StandardFormPage, StepIndicator, FormField, FormCheck, FormTrustBand,
  PaymentPage, ThanksPage,
});
