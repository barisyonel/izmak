import React from 'react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/905321347819"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      title="WhatsApp ile iletişime geçin"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#25D366"/>
        <path d="M23.5 20.5C22.8333 21.5 21.5 22.5 19.5 22.5C17.5 22.5 15.5 21.5 13.5 19.5C11.5 17.5 10.5 15.5 10.5 13.5C10.5 11.5 11.5 10.1667 12.5 9.5C13.5 8.83333 14.5 8.5 15.5 8.5C16.5 8.5 17.5 8.83333 18.5 9.5C19.5 10.1667 20.5 11.5 20.5 13.5C20.5 15.5 19.5 17.5 17.5 19.5C15.5 21.5 13.5 22.5 11.5 22.5C9.5 22.5 8.16667 21.5 7.5 20.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
} 