type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 9h2.5V6H14c-1.93 0-3.5 1.57-3.5 3.5V11H8.5v3H10.5v6h3v-6h2.4l.6-3H13.5V9.7c0-.43.27-.7.7-.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PinterestIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5c-4.7 0-8.5 3.5-8.5 8 0 3.3 1.9 5.3 3 6-.1-.5-.4-1.8 0-2.9.4-1.4 2.5-9.8 2.5-9.8s-.6-1.3-.6-3.1c0-2.9 1.7-3.8 2.9-3.8 1.4 0 2.4.9 2.4 2.6 0 1.6-1 4-1.6 6.2-.4 1.9.9 3.4 2.7 3.4 3.3 0 5.5-3.6 5.5-7.8 0-3.2-2.2-5.6-6.2-5.6a7 7 0 0 0-7.3 6.9c0 1.3.4 2.2 1.1 2.9.3.3.3.4.2.8l-.3 1c-.1.4-.4.5-.8.3-2-.9-2.9-3.2-2.9-5.8 0-4.3 3.6-9.4 10.9-9.4 5.8 0 9.7 4.2 9.7 8.7 0 5.9-3.4 10.4-8.4 10.4-1.7 0-3.3-.9-3.8-1.9l-1 4c-.4 1.3-1.2 2.7-1.9 3.7.6.2 1.2.3 1.9.3 4.7 0 8.5-3.9 8.5-8.7 0-4.5-3.8-8-8.5-8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsappIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2.5A9.5 9.5 0 0 0 3.6 17l-1.1 4.5 4.6-1.2A9.5 9.5 0 1 0 12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.3 8.4c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .5.4.2.5.7 1.6.7 1.7.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.6.8 1.9 1 .3.1.5.2.5.3.1.3.1.9-.2 1.5-.3.6-1.5 1.2-2.1 1.3-.6.1-1.1.2-3.5-.8-2.9-1.2-4.8-4.2-4.9-4.4-.1-.2-1.1-1.5-1.1-2.9 0-1.4.7-2 1-2.3Z"
        fill="currentColor"
      />
    </svg>
  );
}
