import "./FreeStyles.css";
import blocks from "../../../public/images/blocks.png";

const FreeWelcome = () => {
  return (
    <div className="bplg-wrap">
      <div className="bplg-shell">
        {/* HERO */}
        <div className="bplg-hero">
          <div className="bplg-top">
            <div className="bplg-brand">
              <div className="bplg-mark">
                <img
                  style={{
                    width: 55,
                    height: 55,
                    display: "inline-block",
                    borderRadius: 3,
                  }}
                  src="https://ps.w.org/video-gallery-block/assets/icon-128x128.png"
                  alt="Video Gallery Block"
                />
              </div>
              <div className="bplg-title">
                <h1>Welcome to Video Gallery Block</h1>
                <p>
                  Create clean, responsive video galleries in WordPress — fast,
                  lightweight, and Gutenberg-friendly.
                </p>
              </div>
            </div>

            <div className="bplg-actions">
              {/* Replace href values with your real links */}
              <a
                className="bplg-btn bplg-btn-primary"
                href="https://bplugins.com"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = "#/pricing";
                }}
                target="_blank"
                rel="noopener noreferrer">
                Upgrade to Pro
              </a>

              <a
                className="bplg-btn bplg-btn-ghost"
                href="https://bblockswp.com/docs/video-gallery-block/"
                target="_blank"
                rel="noopener noreferrer">
                Documentation
              </a>
              <a
                className="bplg-btn"
                href="https://bplugins.com/support/"
                target="_blank"
                rel="noopener noreferrer">
                Get Support
              </a>
              <a
                className="bplg-btn"
                href="https://wordpress.org/support/plugin/video-gallery-block/reviews/"
                target="_blank"
                rel="noopener noreferrer">
                Review
              </a>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="bplg-grid">
            {/* LEFT: PRO VALUE */}
            <div className="bplg-card">
              <div className="bplg-card-head">
                <div>
                  <h2>Go Pro and unlock 8 premium blocks</h2>
                  <p>
                    Video Gallery Block Pro gives you more layouts, more
                    controls, and more ways to build beautiful galleries that
                    match your brand — without writing CSS.
                  </p>
                </div>
                <div className="bplg-badge">PRO ✨ 8 New Blocks</div>
              </div>

              <div className="bplg-card-body">
                <div className="bplg-feature-grid">
                  <div className="bplg-feature">
                    <div className="bplg-ico">▦</div>
                    <div>
                      <h3>More layouts & blocks</h3>
                      <p>
                        Build grids, modern galleries, and more with 8 powerful
                        Pro blocks.
                      </p>
                    </div>
                  </div>

                  <div className="bplg-feature">
                    <div className="bplg-ico">🎛</div>
                    <div>
                      <h3>Advanced styling controls</h3>
                      <p>
                        Fine-tune spacing, columns, typography, hover effects,
                        and overlays.
                      </p>
                    </div>
                  </div>

                  <div className="bplg-feature">
                    <div className="bplg-ico">🖼</div>
                    <div>
                      <h3>Better thumbnails & UI</h3>
                      <p>
                        Enhanced thumbnail options, play icons, and cleaner
                        viewer experience.
                      </p>
                    </div>
                  </div>

                  <div className="bplg-feature">
                    <div className="bplg-ico">⚡</div>
                    <div>
                      <h3>Optimized & responsive</h3>
                      <p>
                        Designed to look great on mobile and keep pages fast and
                        smooth.
                      </p>
                    </div>
                  </div>

                  <div className="bplg-feature">
                    <div className="bplg-ico">🔄</div>
                    <div>
                      <h3>Multiple video sources</h3>
                      <p>
                        Use YouTube, Vimeo, or self-hosted videos together in
                        one gallery.
                      </p>
                    </div>
                  </div>

                  <div className="bplg-feature">
                    <div className="bplg-ico">🧩</div>
                    <div>
                      <h3>Block patterns ready</h3>
                      <p>
                        Insert pre-designed video gallery layouts with one
                        click.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bplg-mini">
                  <span className="bplg-pill">
                    <span className="bplg-dot"></span> 15-day money-back
                    guarantee
                  </span>
                  <span className="bplg-pill">
                    <span className="bplg-dot bplg-dot-warn"></span> Priority
                    support
                  </span>
                  <span className="bplg-pill">No coding required</span>
                </div>

                <div
                  style={{
                    marginTop: "14px",
                    // display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}>
                  <a
                    style={{
                      width: "100%",
                    }}
                    className="bplg-btn bplg-btn-primary"
                    href="https://bplugins.com"
                    target="_blank"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.hash = "#/pricing";
                    }}
                    rel="noopener noreferrer">
                    Upgrade to Pro
                  </a>
                  <a
                    style={{ width: "100%", marginTop: "20px" }}
                    className="bplg-btn"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.hash = "#/filter-demos";
                    }}>
                    See Pro Demos
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: SCREENSHOT / PREVIEW */}
            <div className="bplg-card bplg-shot">
              <div className="bplg-shot-top">
                <div>
                  <h2>What you can build</h2>
                  {/* <p>
                    Add a screenshot here to show Pro layouts & blocks in
                    action.
                  </p> */}
                </div>
              </div>

              <div className="bplg-shot-media">
                <div className="bplg-shot-frame">
                  {/* Option A: Use an actual screenshot */}
                  {/* <img src="YOUR_SCREENSHOT_URL_HERE" alt="Video Gallery Block Pro preview" /> */}

                  {/* Option B: Placeholder UI until you add the image */}
                  <div className="bplg-shot-placeholder">
                    {/* <strong>Screenshot placeholder</strong>
                    <br />
                    Replace this area with your Pro gallery screenshot
                    (recommended: 1200×700). */}
                    <img
                      src={blocks}
                      alt="Video Gallery Block Pro Screenshot"
                    />
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "12px",
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}>
                  <a
                    className="bplg-btn bplg-btn-primary"
                    href="https://bplugins.com"
                    target="_blank"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.hash = "#/pricing";
                    }}
                    rel="noopener noreferrer">
                    Get Pro + 8 Blocks
                  </a>
                  <a
                    className="bplg-btn"
                    href="https://bblockswp.com/docs/video-gallery-block/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Getting Started Guide
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bplg-footer">
            <div>
              Tip: Start by adding the <strong>Video Gallery Block</strong> from
              the block inserter → customize layout in the sidebar.
            </div>
            <div>
              Need help?
              <a
                href="https://bplugins.com/contact/"
                target="_blank"
                rel="noopener noreferrer">
                Contact support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeWelcome;
