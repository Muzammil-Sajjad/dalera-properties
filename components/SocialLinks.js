import { site, whatsappHref } from "@/lib/data";

const icons = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.6V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.4H7.6V13h2.7v8z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.9 9.2H3.8V20h3.1zM5.4 4a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6zM20.2 20v-6c0-3-1.6-4.9-4.2-4.9-1.5 0-2.5.8-2.9 1.4V9.2H10V20h3.1v-5.8c0-1.5.8-2.5 2.1-2.5 1.2 0 1.9.9 1.9 2.5V20z" />
    </svg>
  ),
  WhatsApp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 20.5l1.4-4.3A8.5 8.5 0 1 1 8 19.3z" />
      <path d="M9.2 8.6c-.3 2.9 3.2 6.4 6.1 6.1l1.1-1.4-2.1-1.1-.9.7c-.9-.4-1.8-1.3-2.2-2.2l.7-.9-1.1-2.1z" />
    </svg>
  ),
};

export default function SocialLinks() {
  const links = [
    ["Instagram", site.social.instagram],
    ["Facebook", site.social.facebook],
    ["LinkedIn", site.social.linkedin],
    ["WhatsApp", whatsappHref],
  ];
  return (
    <ul className="social" aria-label="Social media">
      {links.map(([name, href]) => {
        const real = href && href !== "#";
        return (
          <li key={name}>
            <a
              href={real ? href : "#"}
              aria-label={`Dalera Properties on ${name}`}
              {...(real ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {icons[name]}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
