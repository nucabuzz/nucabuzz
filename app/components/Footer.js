
function SocialIcon({ type, size = 18 }) {
  const icons = {
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),

    tiktok: (
      <path
        d="M19.6 6.2a5.2 5.2 0 0 1-3.5-3.7V2h-3.6v13.8a2.7 2.7 0 1 1-2.7-2.7c.4 0 .8.1 1.1.2V9.6a6.4 6.4 0 1 0 5.2 6.2V9.1a8.7 8.7 0 0 0 3.5.8V6.2Z"
        fill="currentColor"
        stroke="none"
      />
    ),

    spotify: (
      <>
        <circle cx="12" cy="12" r="10" fill="currentColor" stroke="none" />
        <path
          d="M5.5 9.2c4.5-1.4 9.7-.9 13.2 1.2M6.5 12.3c3.8-1.1 8.1-.6 11.1 1.1M7.5 15.2c3.1-.8 6.4-.4 8.9 1"
          stroke="#09090b"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </>
    ),

    youtube: (
      <>
        <path
          d="M23 7a3 3 0 0 0-2.1-2.1C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7a31 31 0 0 0-.5 5 31 31 0 0 0 .5 5 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5A3 3 0 0 0 23 17a31 31 0 0 0 .5-5 31 31 0 0 0-.5-5Z"
          fill="currentColor"
          stroke="none"
        />
        <path d="m10 15 5-3-5-3v6Z" fill="#09090b" stroke="none" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}

function SocialLink({ type, url, label }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="text-zinc-500 hover:text-blue-400 transition-colors duration-200"
    >
      <SocialIcon type={type} />
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      className="
        relative
        mt-16
        border-t
        border-zinc-800
        overflow-hidden
      "
    >
      {/* Glow */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-blue-500/[0.02]
          via-transparent
          to-transparent
          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-7">

          {/* Left: Brand */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-sm md:text-base font-semibold tracking-wide text-zinc-200">
              NUCA STREAMS
            </h3>

            <p className="text-xs text-zinc-500">
              © 2026 by nucabuzz
            </p>
          </div>

          {/* Right: Social Media */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">

            {/* NUCA */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-medium tracking-widest text-zinc-600">
                NUCA
              </span>

              <div className="flex items-center gap-4">
                <SocialLink
                  type="instagram"
                  url="https://www.instagram.com/drunuca02?cplk=cGI3cTIwZjRnczhl"
                  label="NUCA Instagram"
                />

                <SocialLink
                  type="tiktok"
                  url="https://www.tiktok.com/@rajagiannuca?_r=1&_t=ZS-9B5B604DAGq"
                  label="NUCA TikTok"
                />

                <SocialLink
                  type="spotify"
                  url="https://open.spotify.com/artist/5x3nSujruZLuB6xBicI6Ai?si=kk5B-Qa5SW2L2kCXE8vBIg&utm_source=copy-link"
                  label="NUCA Spotify"
                />

                <SocialLink
                  type="youtube"
                  url="https://youtube.com/@nuca.official?si=qq6wLVJyt38X3WUx"
                  label="NUCA YouTube"
                />
              </div>
            </div>

            {/* NUCA BUZZ */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-medium tracking-widest text-zinc-600">
                nucabuzz
              </span>

              <div className="flex items-center gap-4">
                <SocialLink
                  type="instagram"
                  url="https://www.instagram.com/nucabuzz?vrfl=bmFlandpamw2ZGFs"
                  label="NUCA BUZZ Instagram"
                />

                <SocialLink
                  type="tiktok"
                  url="https://www.tiktok.com/@nucabuzz?_r=1&_t=ZS-9B5BFe0Ta4q"
                  label="NUCA BUZZ TikTok"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
