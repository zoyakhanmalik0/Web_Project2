"use client";
import React from "react";

interface ContactSidebarProps {
  open: boolean;
  onClose: () => void;
}

const SERVICES = [
  'Website Development',
  'Android & iOS Development',
  'Digital Marketing',
  'Graphic Designing',
  'Social Media Marketing',
  'Content Writing',
  'Search Engine Optimization',
  'Software Development',
  'Cyber Security',
  'E-Commerce',
  'Illustrations',
];

export default function ContactSidebar({ open, onClose }: ContactSidebarProps) {
  const [showServices, setShowServices] = React.useState(false);
  const sidebarStyle = {
    position: 'fixed' as const,
    top: 0,
    right: open ? 0 : '-100vw',
    width: '100vw',
    maxWidth: '350px',
    height: '100vh',
    backgroundColor: '#ef4444', // Red background for visibility
    zIndex: 9999,
    transition: 'right 0.3s ease-in-out',
    boxShadow: '-2px 0 24px rgba(0,0,0,0.7)',
    display: 'flex',
    flexDirection: 'column' as const,
    padding: '20px',
    overflowY: 'auto', // <-- Make sidebar scrollable
  };

  const closeButtonStyle = {
    position: 'absolute' as const,
    top: '20px',
    right: '20px',
    width: '40px',
    height: '40px',
    border: '1px solid #666',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const contentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '32px',
    paddingTop: '80px',
    color: 'white',
    paddingBottom: '20px',
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '8px',
    width: '100%',
    textAlign: 'center' as const,
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '8px',
  };

  const infoStyle = {
    color: '#EF4444',
    fontSize: '16px',
    fontWeight: '600',
    textAlign: 'center' as const,
    wordBreak: 'break-word' as const,
    maxWidth: '100%',
  };

  const socialStyle = {
    display: 'flex',
    gap: '16px',
    marginTop: '8px',
    justifyContent: 'center',
  };

  const socialButtonStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: '#EF4444',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };

  const servicesButtonStyle = {
    width: '100%',
    padding: '12px 0',
    marginBottom: '12px',
    borderRadius: '9999px',
    fontWeight: 700,
    fontSize: '16px',
    backgroundColor: showServices ? '#EF4444' : '#222',
    color: showServices ? '#222' : '#fff',
    border: showServices ? '2px solid #EF4444' : '2px solid #333',
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s, border 0.2s',
    outline: 'none',
    boxShadow: showServices ? '0 0 0 2px #EF444455' : 'none',
  };

  return (
    <div style={sidebarStyle}>
      {/* Close Button */}
      <button
        onClick={onClose}
        style={closeButtonStyle}
        aria-label="Close Contact Sidebar"
      >
        ✕
      </button>

      <div style={{
        ...contentStyle,
        justifyContent: 'flex-start',
        paddingTop: '60px',
        gap: '36px',
      }}>
        {/* Phone */}
        <div style={{ ...sectionStyle, marginTop: '24px', marginBottom: '8px' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#BFF747" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <div style={{ ...titleStyle, color: '#fff', marginTop: '12px' }}>Phone</div>
          <div style={{ color: '#fff', fontSize: '15px', fontWeight: 400, marginTop: '2px' }}>(309) 8855–314</div>
        </div>

        <hr style={{ width: '100%', border: '1px solid #222', margin: '18px 0 8px 0' }} />

        {/* Email */}
        <div style={sectionStyle}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#BFF747" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="3"/>
            <polyline points="3,6 12,13 21,6"/>
          </svg>
          <div style={{ ...titleStyle, color: '#fff', marginTop: '12px' }}>Email</div>
          <div style={{ color: '#fff', fontSize: '15px', fontWeight: 400, marginTop: '2px', wordBreak: 'break-all' }}>contact@acciobyte.com</div>
        </div>

        <hr style={{ width: '100%', border: '1px solid #222', margin: '18px 0 8px 0' }} />

        {/* Address */}
        <div style={sectionStyle}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#BFF747" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="10" r="3"/>
            <path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.5 11 9 11s9-5.75 9-11c0-4.97-4.03-9-9-9z"/>
          </svg>
          <div style={{ ...titleStyle, color: '#fff', marginTop: '12px' }}>Address</div>
          <div style={{ color: '#fff', fontSize: '15px', fontWeight: 400, marginTop: '2px', wordBreak: 'break-word' }}>123 Creative Lane London, SW1A 1AA United Kingdom</div>
        </div>

        <hr style={{ width: '100%', border: '1px solid #222', margin: '18px 0 8px 0' }} />

        {/* Stay Connected */}
        <div style={{ ...sectionStyle, marginTop: '12px' }}>
          <div style={{ ...titleStyle, color: '#fff', marginTop: '0', fontWeight: 700, fontSize: '22px', letterSpacing: '0.5px', marginBottom: '18px' }}>Stay Connected</div>
          <div style={{ display: 'flex', gap: '24px', marginTop: '0', justifyContent: 'center' }}>
            {/* Facebook */}
            <a href="https://www.facebook.com/share/1B7PYddHGv/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" style={{ width: '52px', height: '52px', borderRadius: '50%', border: '2.5px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', background: 'black', transition: 'border 0.2s' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/acciobyte?igsh=MnA0eWo0NzkzbHE5" target="_blank" rel="noopener noreferrer" style={{ width: '52px', height: '52px', borderRadius: '50%', border: '2.5px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', background: 'black', transition: 'border 0.2s' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/astrivix/" target="_blank" rel="noopener noreferrer" style={{ width: '52px', height: '52px', borderRadius: '50%', border: '2.5px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', background: 'black', transition: 'border 0.2s' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 