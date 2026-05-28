/* eslint-disable */
// TCS website — page templates

const { useState: useStatePages } = React;

function HomePage({ navigate }) {
  return (
    <div className="tcs-page-content" data-screen-label="01 Home">
      <Hero
        quote={'"It helped me become more confident."'}
        ctaLabel="Make a donation"
        onCtaClick={() => navigate("donate")}
        image="img-park"
      />

      <div className="tcs-intro">
        <div className="ill"></div>
        <div className="body">
          <div className="h">Making a difference</div>
          <div className="col">
            <p>There is no one-size-fits-all approach. To help young people open up, we might start with chess, a fidget spinner or writing thoughts and fears down. We offer support one-to-one and in groups. And we never describe children as 'hard to reach'.</p>
          </div>
          <div className="col">
            <p>We know they simply need adults who are willing to listen and reach them where they really are. Right now, with mental health waiting lists spiralling, our drop-ins are often the only place a young person can get timely support.</p>
          </div>
          <div className="cta"><TCSButton onClick={() => navigate("story")}>Read Zack's story</TCSButton></div>
        </div>
      </div>

      <Divider />

      <div className="tcs-teaser-slice">
        <h2>This weeks focus</h2>
        <div className="tcs-teaser-grid">
          <TeaserCard eyebrow="Blog" title="Protecting young people from misogyny and the manosphere" image="img-hero-looking-up" />
          <TeaserCard eyebrow="Blog" title="Our history: Then and now" image="img-shoes" />
          <TeaserCard eyebrow="Blog" title="Reflecting on Children's Mental Health Week" image="img-group" />
        </div>
      </div>

      <Divider />

      <div className="tcs-stories-slice">
        <div className="text">
          <h2>In their own words</h2>
          <p>When young people want to tell their story, we listen. These young people still believe in a better tomorrow.</p>
          <p>Often their stories aren't easy to tell, but they tell them. Because they know sharing their story will help them and others like them.</p>
          <TCSButton onClick={() => navigate("story")}>Read their stories</TCSButton>
        </div>
        <div className="tcs-stories-grid">
          <StoryCard name="Louise's story" image="img-portrait-1" onClick={() => navigate("story")} />
          <StoryCard name="Willow's story" image="img-portrait-2" onClick={() => navigate("story")} />
          <StoryCard name="Andrew's story" image="img-portrait-3" onClick={() => navigate("story")} />
          <StoryCard name="Isla's story" image="img-portrait-4" onClick={() => navigate("story")} />
        </div>
      </div>

      <LargePromo
        eyebrow="Category tag"
        title="RHS Chelsea Flower Show 2026"
        body="We are at this year's RHS Chelsea Flower Show! There we will unveil a new show garden, shining a light on the urgent issue of teenage wellbeing in the UK. Designed with young people at its heart, the garden offers a space for reflection, hope and connection."
        image="img-promo-garden"
        ctaLabel="Find out more"
        onCtaClick={() => navigate("story")}
      />

      <div className="tcs-teaser-slice">
        <div className="tcs-teaser-grid two-up">
          <div onClick={() => navigate("donate")} style={{ cursor: "pointer" }}>
            <TeaserCard eyebrow="Category tag" title="Donate today" image="img-hero-looking-up" />
          </div>
          <TeaserCard eyebrow="Category tag" title="Corporate partnerships" image="img-shoes" />
        </div>
      </div>

      <Divider />

      <div className="tcs-howhelp-slice">
        <h2>How you can help</h2>
        <div className="tcs-help-grid">
          <HelpCard ill="ill-placard"        title="Campaign with us" body="160 character lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
          <HelpCard ill="ill-heart-hand"     title="Donate"           body="160 character lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
          <HelpCard ill="ill-two-hearts"     title="Fundraising"      body="160 character lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
          <HelpCard ill="ill-volunteer-hand" title="Volunteer"        body="160 character lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
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
  const [amount, setAmount] = useStatePages(tab === "oneoff" ? "26" : "10");
  // Reset amount to the "most popular" default for the new tab on switch
  const setTab = (newTab) => {
    baseSetTab(newTab);
    setAmount(newTab === "oneoff" ? "26" : "10");
  };

  return (
    <div className="tcs-page-content" data-screen-label="02 Donate">
      <DonateSlice
        navigate={navigate}
        image="img-portrait-2"
        tab={tab} setTab={setTab}
        amount={amount} setAmount={setAmount}
      />

      <DonateArticleHeader />

      <Divider />

      <OtherWaysToGive />

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
        image="img-portrait-2"
        tab={tab} setTab={setTab}
        amount={amount} setAmount={setAmount}
      />

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
          { eyebrow: "Category tag", title: "110 character lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "img-portrait-1" },
          { eyebrow: "Category tag", title: "110 character lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "img-shoes" },
          { eyebrow: "Category tag", title: "110 character lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "img-group" },
        ]}
      />

      <Footer />
    </div>
  );
}

// ---------- Other ways to give (Numiko feedback #2) ----------

function OtherWaysToGive() {
  const items = [
    { eyebrow: "Gifts in wills",   title: "Leave a gift in your will and pass on hope to the next generation of young people.", image: "img-shoes" },
    { eyebrow: "Give in memory",   title: "Honour someone special with a tribute fund or a memorial donation in their name.",   image: "img-paint" },
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
    <section className={`tcs-donate-slice ${image}`}>
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
        {(tab === "monthly" ? ["5", "10", "20", "Other"] : ["10", "26", "50", "Other"]).map((a) => (
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
          : "Whether it's a little or a lot, give as much as you can and make a huge difference to a young person."
        ) : (
          amount === "10"     ? "£10 could allow a teenager to travel to one of our services, so they can begin to move forward."
          : amount === "26"   ? "£26 could fund a 30-minute support session between a young person and a trained professional."
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

      <p className="tcs-donate-widget-philanthropy">
        Making a larger gift? <a href="#" onClick={(e) => e.preventDefault()}>Talk to our philanthropy team</a>
      </p>

      <button className="tcs-donate-widget-submit" onClick={() => navigate && navigate("details")}>
        <span>Donate now</span>
        <span className="secure">
          Secure
          <Icon name="padlock" size="sm" />
        </span>
      </button>

      <div className="tcs-donate-widget-payments">
        <span className="pay pay-apple"><span className="glyph"></span>Pay</span>
        <span className="pay pay-google"><span className="glyph">G</span>Pay</span>
        <span className="pay pay-visa">VISA</span>
        <span className="pay pay-mc" aria-label="Mastercard"><span className="mc-r"></span><span className="mc-y"></span></span>
        <span className="pay pay-paypal">PayPal</span>
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
              <span className="ic">{open === i ? "−" : "+"}</span>
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
          <TeaserCard key={i} eyebrow={it.eyebrow} title={it.title} image={it.image} />
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

function DetailsPage({ navigate, mode = "monthly", setMode }) {
  const [emailOK, setEmailOK] = useStatePages(true);
  const [textOK, setTextOK] = useStatePages(false);
  const [postOK, setPostOK] = useStatePages(false);
  const [ddDay, setDdDay] = useStatePages("3rd");
  const [giftAid, setGiftAid] = useStatePages(false);
  const [confirmOneoff, setConfirmOneoff] = useStatePages(false);
  const [paymentMethod, setPaymentMethod] = useStatePages(null);
  const [inMemory, setInMemory] = useStatePages(false);

  const amount = mode === "monthly" ? "10" : "26";

  function handlePayPal() {
    setPaymentMethod("paypal");
    setTimeout(() => navigate("thanks"), 800);
  }
  function handleApplePay() {
    setPaymentMethod("applepay");
    setTimeout(() => navigate("thanks"), 800);
  }
  function handleGooglePay() {
    setPaymentMethod("googlepay");
    setTimeout(() => navigate("thanks"), 800);
  }

  return (
    <div className="tcs-page-content" data-screen-label={mode === "monthly" ? "Monthly donation" : "One-off donation"}>
      <section className="tcs-form-slice img-portrait-2">
        <a href="#" className="tcs-form-logo" onClick={(e) => { e.preventDefault(); navigate("home"); }} aria-label="The Children's Society — home">
          <img src="assets/logo-white.svg" alt="The Children's Society" />
        </a>
        <div className="tcs-form-panel">
          <h2 className="tcs-form-panel-heading">{mode === "monthly" ? "Monthly donation" : "Your donation"}</h2>
          <p className="tcs-form-context">
            You are making a <strong>{mode === "monthly" ? "monthly donation of " : "donation of "}£{amount}</strong>.{" "}
            <a href="#" className="tcs-form-link-inline" onClick={(e) => { e.preventDefault(); navigate("donate"); }}>Change amount</a>
          </p>

          {mode === "monthly" ? (
            <>
              <NumberedSection number={1} title="Payment method">
                {paymentMethod === "paypal" ? (
                  <p className="tcs-form-section-body"><strong>Redirecting to PayPal…</strong></p>
                ) : paymentMethod === "applepay" ? (
                  <p className="tcs-form-section-body"><strong>Opening Apple Pay…</strong></p>
                ) : paymentMethod === "googlepay" ? (
                  <p className="tcs-form-section-body"><strong>Opening Google Pay…</strong></p>
                ) : (
                  <>
                    <div className="tcs-payment-tiles">
                      <button
                        type="button"
                        className={"payment-tile " + (paymentMethod === "dd" ? "selected" : "")}
                        onClick={() => setPaymentMethod("dd")}
                      >
                        <span className="payment-tile-logo">DIRECT Debit</span>
                      </button>
                      <button type="button" className="payment-tile" onClick={handlePayPal}>
                        <span className="payment-tile-logo pay-paypal">PayPal</span>
                      </button>
                    </div>
                    {paymentMethod === "dd" ? (
                      <a href="#" className="tcs-form-link" onClick={(e) => { e.preventDefault(); setPaymentMethod(null); }}>Change payment method</a>
                    ) : null}
                  </>
                )}
              </NumberedSection>

              {paymentMethod === "dd" ? (
                <>
                  <NumberedSection number={2} title="Set up Direct Debit">
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
                  </NumberedSection>

                  <NumberedSection number={3} title="Your Details">
                    <FormField label="First name" required />
                    <FormField label="Last name" required />
                    <FormField label="Email address" type="email" required hint="So we can email your donation receipt." />
                    {textOK ? (
                      <FormField label="Phone number" type="tel" required hint="So we can text you the occasional update." />
                    ) : null}
                    {postOK ? (
                      <>
                        <FormField label="Postcode" required hint="We'll use this to look up your address." />
                        <a href="#" className="tcs-form-link" onClick={(e) => e.preventDefault()}>Or enter address manually</a>
                      </>
                    ) : null}
                    <div className="tcs-form-tribute">
                      <FormCheck label="This donation is in memory of someone" checked={inMemory} onChange={setInMemory} />
                      {inMemory ? (
                        <div className="tcs-form-tribute-fields">
                          <FormField label="In memory of" hint="Their full name." />
                          <FormField label="Their relationship to you" hint="Optional — e.g. mother, friend, colleague." />
                        </div>
                      ) : null}
                    </div>
                  </NumberedSection>

                  <NumberedSection number={4} title="Gift Aid">
                    <h3 className="tcs-form-section-heading">Make it worth 25% more</h3>
                    <p className="tcs-form-section-body">
                      If you're a UK taxpayer, <strong>Gift Aid</strong> adds 25p to every £1 — at no extra cost to you. Your £{amount} could be worth <strong>£{(parseFloat(amount) * 1.25).toFixed(2)}</strong>.
                    </p>
                    <FormCheck label="Yes, I'm a UK taxpayer — claim Gift Aid on my donation." checked={giftAid} onChange={setGiftAid} />
                  </NumberedSection>

                  <NumberedSection number={5} title="Keep in touch">
                    <p className="tcs-form-section-body">Yes please, I'd like to hear how my support helps young people. Tick any that suit you — uncheck anything you'd rather not get.</p>
                    <FormCheck label="Email updates" checked={emailOK} onChange={setEmailOK} />
                    <FormCheck label="Text updates"  checked={textOK}  onChange={setTextOK} />
                    <FormCheck label="Post updates"  checked={postOK}  onChange={setPostOK} />
                  </NumberedSection>

                  <p className="tcs-form-privacy">
                    You can update your preferences any time. See our <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a> for how we keep your information safe.
                  </p>

                  <div className="tcs-form-commit">
                    <h2 className="tcs-form-commit-heading">Set up your £{amount} monthly donation</h2>
                    <button className="tcs-form-submit" onClick={() => navigate("thanks")}>
                      <span>Complete donation</span>
                      <Icon name="chevron-right" size="sm" />
                    </button>
                  </div>

                  <FormTrustBand />
                </>
              ) : null}
            </>
          ) : (
            <>
              <NumberedSection number={1} title="Payment method">
                {paymentMethod === "paypal" ? (
                  <p className="tcs-form-section-body"><strong>Redirecting to PayPal…</strong></p>
                ) : paymentMethod === "applepay" ? (
                  <p className="tcs-form-section-body"><strong>Opening Apple Pay…</strong></p>
                ) : paymentMethod === "googlepay" ? (
                  <p className="tcs-form-section-body"><strong>Opening Google Pay…</strong></p>
                ) : (
                  <>
                    <div className="tcs-payment-tiles">
                      <button
                        type="button"
                        className={"payment-tile " + (paymentMethod === "card" ? "selected" : "")}
                        onClick={() => setPaymentMethod("card")}
                      >
                        <span className="payment-tile-logo">Pay by card</span>
                      </button>
                      <button type="button" className="payment-tile" onClick={handlePayPal}>
                        <span className="payment-tile-logo pay-paypal">PayPal</span>
                      </button>
                      <button type="button" className="payment-tile pay-tile-applepay" onClick={handleApplePay}>
                        <span className="payment-tile-logo"><span className="glyph"></span>Pay</span>
                      </button>
                      <button type="button" className="payment-tile pay-tile-googlepay" onClick={handleGooglePay}>
                        <span className="payment-tile-logo"><span className="glyph">G</span>Pay</span>
                      </button>
                    </div>
                    {paymentMethod === "card" ? (
                      <a href="#" className="tcs-form-link" onClick={(e) => { e.preventDefault(); setPaymentMethod(null); }}>Change payment method</a>
                    ) : null}
                  </>
                )}
              </NumberedSection>

              {paymentMethod === "card" ? (
                <>
                  <NumberedSection number={2} title="Card details">
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

                  <NumberedSection number={3} title="Your Details">
                    <FormField label="First name" required />
                    <FormField label="Last name" required />
                    <FormField label="Email address" type="email" required hint="So we can email your donation receipt." />
                    {textOK ? (
                      <FormField label="Phone number" type="tel" required hint="So we can text you the occasional update." />
                    ) : null}
                    {postOK ? (
                      <>
                        <FormField label="Postcode" required hint="We'll use this to look up your address." />
                        <a href="#" className="tcs-form-link" onClick={(e) => e.preventDefault()}>Or enter address manually</a>
                      </>
                    ) : null}
                    <div className="tcs-form-tribute">
                      <FormCheck label="This donation is in memory of someone" checked={inMemory} onChange={setInMemory} />
                      {inMemory ? (
                        <div className="tcs-form-tribute-fields">
                          <FormField label="In memory of" hint="Their full name." />
                          <FormField label="Their relationship to you" hint="Optional — e.g. mother, friend, colleague." />
                        </div>
                      ) : null}
                    </div>
                  </NumberedSection>

                  <NumberedSection number={4} title="Gift Aid">
                    <h3 className="tcs-form-section-heading">Make it worth 25% more</h3>
                    <p className="tcs-form-section-body">
                      If you're a UK taxpayer, <strong>Gift Aid</strong> adds 25p to every £1 — at no extra cost to you. Your £{amount} could be worth <strong>£{(parseFloat(amount) * 1.25).toFixed(2)}</strong>.
                    </p>
                    <FormCheck label="Yes, I'm a UK taxpayer — claim Gift Aid on my donation." checked={giftAid} onChange={setGiftAid} />
                  </NumberedSection>

                  <NumberedSection number={5} title="Keep in touch">
                    <p className="tcs-form-section-body">Yes please, I'd like to hear how my support helps young people. Tick any that suit you — uncheck anything you'd rather not get.</p>
                    <FormCheck label="Email updates" checked={emailOK} onChange={setEmailOK} />
                    <FormCheck label="Text updates"  checked={textOK}  onChange={setTextOK} />
                    <FormCheck label="Post updates"  checked={postOK}  onChange={setPostOK} />
                  </NumberedSection>

                  <p className="tcs-form-privacy">
                    You can update your preferences any time. See our <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a> for how we keep your information safe.
                  </p>

                  <div className="tcs-form-commit">
                    <h2 className="tcs-form-commit-heading">Donate £{amount} today</h2>
                    <button className="tcs-form-submit" onClick={() => navigate("thanks")}>
                      <span>Complete donation</span>
                      <Icon name="chevron-right" size="sm" />
                    </button>
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

function StepIndicator({ current }) {
  const steps = ["Amount", "Details", "Payment"];
  return (
    <div className="tcs-form-steps">
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          <div className={"tcs-form-step " + (i < current ? "done" : i === current ? "active" : "")}>
            <span className="dot">{i < current ? "✓" : (i + 1)}</span>
            <span className="label">{s}</span>
          </div>
          {i < steps.length - 1 ? <div className="tcs-form-step-line"></div> : null}
        </React.Fragment>
      ))}
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

function FormTrustBand() {
  return (
    <div className="tcs-form-trust">
      <span className="trust-secure">
        <Icon name="padlock" size="sm" />
        Secure donation
      </span>
      <div className="trust-logos">
        <span className="pay pay-apple"><span className="glyph"></span>Pay</span>
        <span className="pay pay-google"><span className="glyph">G</span>Pay</span>
        <span className="pay pay-visa">VISA</span>
        <span className="pay pay-mc" aria-label="Mastercard"><span className="mc-r"></span><span className="mc-y"></span></span>
        <span className="pay pay-paypal">PayPal</span>
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
  const amount = mode === "monthly" ? "10" : "26";

  return (
    <div className="tcs-page-content" data-screen-label="04 Payment">
      <section className="tcs-form-slice img-portrait-2">
        <a href="#" className="tcs-form-logo" onClick={(e) => { e.preventDefault(); navigate("home"); }} aria-label="The Children's Society — home">
          <img src="assets/logo-white.svg" alt="The Children's Society" />
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

function ThanksPage({ navigate, mode = "monthly", setMode }) {
  const amount = mode === "monthly" ? "10" : "26";
  const name = "Sarah";
  const email = "sarah@example.com";
  const reference = "TCS-2026-04823";
  const firstPaymentDate = "3 June 2026";

  return (
    <div className="tcs-page-content" data-screen-label="05 Confirmation">
      <section className="tcs-thanks-slice img-laughter">
        <a href="#" className="tcs-form-logo" onClick={(e) => { e.preventDefault(); navigate("home"); }} aria-label="The Children's Society — home">
          <img src="assets/logo-white.svg" alt="The Children's Society" />
        </a>
        <div className="tcs-thanks-card">
          <span className="tcs-thanks-eyebrow">Donation confirmed</span>
          <h1 className="tcs-thanks-heading">Thank you, {name}.</h1>
          <p className="tcs-thanks-lead">
            {mode === "monthly" ? (
              <>Your <strong>monthly gift of £{amount}</strong> is set up. Your first payment will leave your account on <strong>{firstPaymentDate}</strong>, and on the same date every month after that.</>
            ) : (
              <>Your <strong>£{amount} donation</strong> went through. Every penny goes straight to support for young people.</>
            )}
          </p>

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

          <p className="tcs-thanks-mode-toggle">
            Previewing the <strong>{mode === "monthly" ? "monthly" : "one-off"}</strong> confirmation. Switch journey via the prototype nav above.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

Object.assign(window, {
  HomePage, DonatePage, DonateSlice, DonateWidget, DonateArticleHeader,
  OtherWaysToGive, DonateDifference, DonateImpactBlock, AccordionSection,
  ShareBlock, RelatedBlock, StoryPage,
  DetailsPage, StepIndicator, FormField, FormCheck, FormTrustBand,
  PaymentPage, ThanksPage,
});
