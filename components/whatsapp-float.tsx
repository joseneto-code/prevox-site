import { WHATSAPP_URL } from "./reveal"

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com a Prevox no WhatsApp"
      className="fixed bottom-6 right-6 z-[1000] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="relative"
      >
        <path
          d="M23.4 19.6c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.1-.7.1-.2.3-.7.9-1 1.1-.2.2-.4.2-.7.1-1.9-.8-3.2-2-4.2-3.7-.1-.2-.1-.4.1-.6.3-.3.6-.6.8-.9.2-.2.2-.4.1-.6-.1-.2-.7-1.8-1-2.5-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.6.1-.9.4-.3.4-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.1 3.3 5.2 4.5 2.6 1 3.1.8 3.6.8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.4Z"
          fill="#fff"
        />
        <path
          d="M16 3.5A12.5 12.5 0 0 0 5.2 22.3L3.8 28l5.8-1.5A12.5 12.5 0 1 0 16 3.5Zm0 22.8c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.4.9.9-3.3-.2-.4a10.4 10.4 0 1 1 8.4 4.4Z"
          fill="#fff"
        />
      </svg>
    </a>
  )
}
