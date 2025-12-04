import React, { useEffect, useState } from "react";
import "./App.css";

const FEATURES = [
  "Secure Login & Signup (email verification)",
  "Real-time Chatting & Group Chats",
  "Create & Share Posts (images, video, text)",
  "Dynamic Duo / Special-One features",
  "Profile Customization & Themes",
  "In-app Store (avatars, themes)",
  "Commenting, Reactions & Notifications",
  "Find People Nearby & Discovery tools",
  "Password Recovery & 24/7 Support",
  "Friend Limit (100) and Privacy Controls",
];

const COMING_SOON_FEATURES = [
  "Subscription Screen",
  "User Personal Chat Gallery Access",
  "Story Feature",
  "New Duo Cards",
  "Bug Fixes & New Features",
];

export default function App() {
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlicker(true);
      setTimeout(() => setFlicker(false), 350);
    }, 150); 

    const id = setInterval(() => {
      setFlicker(true);
      setTimeout(() => setFlicker(false), 350);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-inner">
          <h1 className={`brand ${flicker ? "flicker" : ""}`}>PNTVERSE</h1>
          <p className="tagline">
            Be Real • <span className="highlight">Be Rare</span> • Become the
            Verse
          </p>
        </div>

        <div aria-hidden="true" className="light-stripes" />
      </header>

      <main className="main">
        <section className="intro-card">
          <h2>About the App</h2>
          <p>
            PNTVERSE is a secure, social ecosystem for connecting, sharing and
            discovering. Built with privacy and speed in mind — features include secure
            login, real-time chat, posts & uploads, profile customization, and
            special Dynamic Duo features.
          </p>

          <div className="cta-row">
            <a
              className="cta insta"
              href="https://instagram.com/pnt_verse"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow @pnt_verse
              <svg
                className="cta-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="3.2" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </a>
            <button
              className="cta primary"
              onClick={() => alert("Thanks — signup flow coming soon!")}
            >
              Join Waitlist
            </button>
          </div>
        </section>

        <section className="features">
          <h3 className="section-title">All Features — Filled & Ready</h3>

          <div className="features-grid">
            {FEATURES.map((t, i) => (
              <article key={i} className="feature-card">
                <div className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v20" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 7h14" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-body">
                  <h4>{t}</h4>
                  <p className="feature-sub">Polished, tested and ready for users.</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        
        <section className="features coming-soon-updates">
          <h3 className="section-title">Upcoming Updates & Features</h3>
          <div className="features-grid">
            {COMING_SOON_FEATURES.map((t, i) => (
              <article key={i} className="feature-card">
                 <div className="feature-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div className="feature-body">
                  <h4>{t}</h4>
                  <p className="feature-sub">Actively under development.</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="notes">
          <h4>Technical Notes</h4>
          <ul>
            <li>Mobile-first CSS — looks clean on phones by design.</li>
            <li>No images used — pure CSS components & icons for speed.</li>
            <li>Ready to connect to Supabase/Firebase for auth & updates.</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} PNTVERSE - All Rights Reserved</div> 
      </footer>
    </div>
  );
}