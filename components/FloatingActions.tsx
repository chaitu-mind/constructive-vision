import { site, telLink, waLink } from "@/lib/site";

/** Always-visible WhatsApp and call buttons. Plain links, no JavaScript. */
export default function FloatingActions() {
  return (
    <div className="fab">
      <a className="fab__btn fab__btn--call" href={telLink()} aria-label={`Call ${site.name}`}>
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4.2 1.6 6 4.9 4.7 6.4a8.6 8.6 0 0 0 4.9 4.9L11.1 10l3.3 1.8-.6 2.5c-.2.6-.7 1-1.4 1A12 12 0 0 1 .7 3.6c0-.7.4-1.2 1-1.4l2.5-.6Z" fill="currentColor" /></svg>
      </a>
      <a className="fab__btn fab__btn--wa" href={waLink(`Hello ${site.name}, I would like an estimate.`)}
        target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.5c-5.2 0-9.5 3.9-9.5 8.8 0 2.2.9 4.2 2.4 5.7L4 21.5l4.700-1.9c1.1.3 2.2.5 3.3.5 5.200 0 9.5-3.900 9.5-8.8S17.200 2.500 12 2.500Z" /></svg>
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
