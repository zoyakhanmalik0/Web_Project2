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
    color: '#BFF747',
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
    backgroundColor: '#BFF747',
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
    backgroundColor: showServices ? '#BFF747' : '#222',
    color: showServices ? '#222' : '#fff',
    border: showServices ? '2px solid #BFF747' : '2px solid #333',
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s, border 0.2s',
    outline: 'none',
    boxShadow: showServices ? '0 0 0 2px #BFF74755' : 'none',
  };

  return (
    <div style={sidebarStyle}>
      {/* Debug info */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        backgroundColor: 'white',
        color: 'black',
        padding: '8px',
        fontSize: '12px',
        zIndex: 10000,
      }}>
        Sidebar Open: {open ? 'YES' : 'NO'}
      </div>
      
      {/* Close Button */}
      <button
        onClick={onClose}
        style={closeButtonStyle}
        aria-label="Close Contact Sidebar"
      >
        ✕
      </button>

      <div style={contentStyle}>
        {/* Services Toggle Button */}
        <button
          style={servicesButtonStyle}
          onClick={() => setShowServices((s) => !s)}
          aria-expanded={showServices}
          aria-controls="sidebar-services-list"
        >
          SERVICES
        </button>
        {/* Services List */}
        {showServices && (
          <ul id="sidebar-services-list" style={{
            background: '#222',
            borderRadius: '16px',
            padding: '12px 0',
            marginBottom: '16px',
            listStyle: 'none',
            boxShadow: '0 2px 8px #0002',
          }}>
            {SERVICES.map((service) => (
              <li key={service} style={{
                color: '#fff',
                fontWeight: 500,
                fontSize: '15px',
                padding: '8px 24px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}>{service}</li>
            ))}
          </ul>
        )}

        {/* Phone */}
        <div style={sectionStyle}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#BFF747" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <div style={titleStyle}>Phone</div>
          <div style={infoStyle}>(309) 8855–314</div>
        </div>

        <hr style={{ width: '100%', border: '1px solid #666', margin: '8px 0' }} />

        {/* Email */}
        <div style={sectionStyle}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#BFF747" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="3"/>
            <polyline points="3,6 12,13 21,6"/>
          </svg>
          <div style={titleStyle}>Email</div>
          <div style={infoStyle}>contact@acciobyte.com</div>
        </div>

        <hr style={{ width: '100%', border: '1px solid #666', margin: '8px 0' }} />

        {/* Address */}
        <div style={sectionStyle}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#BFF747" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="10" r="3"/>
            <path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.5 11 9 11s9-5.75 9-11c0-4.97-4.03-9-9-9z"/>
          </svg>
          <div style={titleStyle}>Address</div>
          <div style={infoStyle}>123 Creative Lane London, SW1A 1AA United Kingdom</div>
        </div>

        <hr style={{ width: '100%', border: '1px solid #666', margin: '8px 0' }} />

        {/* Stay Connected */}
        <div style={sectionStyle}>
          <div style={titleStyle}>Stay Connected</div>
          <div style={socialStyle}>
            <a href="https://www.facebook.com/share/1B7PYddHGv/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" style={socialButtonStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'black' }}>
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/astrivix/" target="_blank" rel="noopener noreferrer" style={socialButtonStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'black' }}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://www.instagram.com/acciobyte?igsh=MnA0eWo0NzkzbHE5" target="_blank" rel="noopener noreferrer" style={socialButtonStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'black' }}>
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 