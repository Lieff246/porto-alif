import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-4 h-4" }: TechIconProps) {
  const normalized = name.toLowerCase().trim();

  // 1. Languages
  if (normalized.includes("typescript")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M11.5 13.8v-1.6h-2.1V7.5h-1.8v4.7H5.5v1.6h6zm2.3 2.7c1.3 0 2.2-.4 2.8-1.2.6-.8.9-1.9.9-3.2 0-1.4-.3-2.4-.9-3.2-.6-.8-1.5-1.2-2.8-1.2-.8 0-1.4.1-1.9.4-.5.3-.9.7-1.1 1.2l1.6.8c.2-.4.4-.7.7-.9.3-.2.7-.3 1.1-.3.7 0 1.2.2 1.6.7.4.5.6 1.3.6 2.4 0 1.1-.2 1.9-.6 2.4-.4.5-.9.7-1.6.7-.4 0-.8-.1-1.1-.3-.3-.2-.5-.5-.7-.9l-1.6.8c.2.5.6.9 1.1 1.2.5.3 1.1.5 1.9.5z"
          fill="#FFFFFF"
        />
        <path
          d="M13.8 16.5c-.8 0-1.4-.2-1.9-.5-.5-.3-.9-.7-1.1-1.2l1.6-.8c.2.4.4.7.7.9.3.2.7.3 1.1.3.7 0 1.2-.2 1.6-.7.4-.5.6-1.3.6-2.4 0-1.1-.2-1.9-.6-2.4-.4-.5-.9-.7-1.6-.7-.4 0-.8.1-1.1.3-.3.2-.5.5-.7.9l-1.6-.8c.2-.5.6-.9 1.1-1.2.5-.3 1.1-.4 1.9-.4 1.3 0 2.2.4 2.8 1.2.6.8.9 1.9.9 3.2 0 1.4-.3 2.4-.9 3.2-.6.8-1.5 1.2-2.8 1.2z"
          fill="#FFFFFF"
          className="hidden"
        />
        <text
          x="12"
          y="16.5"
          fill="#FFFFFF"
          fontSize="11"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          TS
        </text>
      </svg>
    );
  }

  if (normalized.includes("javascript")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <text
          x="12"
          y="16.5"
          fill="#000000"
          fontSize="11"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          JS
        </text>
      </svg>
    );
  }

  if (normalized.includes("php")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#777BB4" />
        <ellipse cx="12" cy="12" rx="10" ry="6" fill="#4F5B93" />
        <text
          x="12"
          y="14.5"
          fill="#FFFFFF"
          fontSize="7"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          PHP
        </text>
      </svg>
    );
  }

  if (normalized.includes("go") || normalized.includes("golang")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00ACD7" />
        <path
          d="M4.5 11.5c0-1.9 1.3-3.5 3.2-3.5 1.5 0 2.5 1 2.8 2.2h-1.6c-.2-.5-.7-.8-1.2-.8-1 0-1.6.8-1.6 2.1 0 1.3.6 2.1 1.6 2.1.6 0 1.1-.3 1.3-.9H7.5v-1.3h3.1v3.2H9.3l-.2-.7c-.4.5-1 .8-1.8.8-1.9 0-3.3-1.6-3.3-3.5zm7.3.2c0-1.9 1.4-3.5 3.4-3.5 2 0 3.4 1.6 3.4 3.5 0 1.9-1.4 3.5-3.4 3.5-2 0-3.4-1.6-3.4-3.5zm5.2 0c0-1.1-.7-2-1.8-2s-1.8.9-1.8 2c0 1.1.7 2 1.8 2s1.8-.9 1.8-2z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  if (normalized.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3l.01 1.4h2.9v.4H6.1S4 4.9 4 8c0 3.1 1.8 3 1.8 3h1.1v-1.5c0-1.7 1.4-1.6 1.4-1.6h2.9c1.4 0 1.4-1.3 1.4-1.3V3.3S12.9 2 11.9 2zm-.8 1c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.2-.5.5-.5z"
          fill="#3776AB"
        />
        <path
          d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3l-.01-1.4H12.1v-.4h5.8s2.1.2 2.1-2.9c0-3.1-1.8-3-1.8-3h-1.1v1.5c0 1.7-1.4 1.6-1.4 1.6h-2.9c-1.4 0-1.4 1.3-1.4 1.3v3.3s-.3 1.3.7 1.3zm.8-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  if (normalized.includes("dart")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 14.5L9.5 20H15L7.5 12.5 4 14.5z" fill="#01579B" />
        <path d="M4 9.5L14.5 20H20L9.5 9.5 4 9.5z" fill="#0288D1" />
        <path d="M4 9.5L9.5 4H15L4 15V9.5z" fill="#29B6F6" />
        <path d="M9.5 4L20 14.5V9.5L14.5 4H9.5z" fill="#00B0FF" />
      </svg>
    );
  }

  if (normalized.includes("kotlin")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id="kt" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7F52FF" />
            <stop offset="50%" stopColor="#C711E1" />
            <stop offset="100%" stopColor="#E4485D" />
          </linearGradient>
        </defs>
        <path d="M22 2H2v20l10-10L22 2z" fill="url(#kt)" />
        <path d="M2 12l10 10H2V12z" fill="#7F52FF" />
      </svg>
    );
  }

  if (normalized.includes("c++")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00599C" />
        <text
          x="12"
          y="15.5"
          fill="#FFFFFF"
          fontSize="9"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          C++
        </text>
      </svg>
    );
  }

  if (normalized.includes("sql") && !normalized.includes("mysql") && !normalized.includes("sqlite")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    );
  }

  // 2. Frameworks & Web
  if (normalized.includes("laravel")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M19.4 6.2l-6.7-3.8c-.4-.2-.9-.2-1.3 0L4.6 6.2c-.4.2-.6.6-.6 1.1v7.6c0 .4.2.9.6 1.1l6.7 3.8c.2.1.4.2.7.2.2 0 .5-.1.7-.2l6.7-3.8c.4-.2.6-.6.6-1.1V7.3c0-.5-.2-.9-.6-1.1zM12 4l5.3 3-2.6 1.5L9.4 5.5 12 4zm-1.1 14.5l-5.3-3v-5.6l5.3 3v5.6zm1.1-7.2L6.7 8.3l2.6-1.5 5.3 3-2.6 1.5zm6.4 4.2l-5.3 3v-5.6l2.6-1.5v2.2c0 .4.2.7.5.9.3.2.7.2 1.1 0l1.1-.6v1.6z"
          fill="#FF2D20"
        />
      </svg>
    );
  }

  if (normalized.includes("react") && !normalized.includes("react-leaflet")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="3" ry="8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="3" ry="8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="3" ry="8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
      </svg>
    );
  }

  if (normalized.includes("next.js") || normalized.includes("nextjs")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#000000" />
        <path d="M15.5 8.5v7l-6-7.5H8v8h1.5v-6l6 7.5h1.5v-9h-1.5z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (normalized.includes("flutter")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M14.3 2.5L4 12.8l3.2 3.2L19.5 3.7h-5.2z" fill="#42A5F5" />
        <path d="M14.3 12.3L9.1 17.5l3.2 3.2 5.2-5.2h-3.2l-3.2-3.2z" fill="#0D47A1" />
        <path d="M12.3 20.7l2-2 5.2 5.2h-5.2l-2-3.2z" fill="#01579B" />
        <path d="M9.1 17.5l3.2-3.2 3.2 3.2-3.2 3.2-3.2-3.2z" fill="#29B6F6" />
      </svg>
    );
  }

  if (normalized.includes("chi")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00ACD7" />
        <path d="M6 12h12M14 8l4 4-4 4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (normalized.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2-.9 3-.4.6.3 1 .7 1.4 1.2C12.6 11.2 13.5 12 15 12c2.4 0 3.9-1.2 4.5-3.6-1 .8-2 .9-3 .4-.6-.3-1-.7-1.4-1.2C14.4 6.8 13.5 6 12 6zm-6 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2-.9 3-.4.6.3 1 .7 1.4 1.2C6.6 17.2 7.5 18 9 18c2.4 0 3.9-1.2 4.5-3.6-1 .8-2 .9-3 .4-.6-.3-1-.7-1.4-1.2C8.4 12.8 7.5 12 6 12z"
          fill="#06B6D4"
        />
      </svg>
    );
  }

  if (normalized.includes("vite")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M19.8 4.2L12.5 21.8c-.2.5-.9.5-1.1 0L4.2 4.2c-.3-.7.3-1.4 1-.1l6.8 3.5 6.8-3.5c.7-.4 1.3.3 1 .1z" fill="#BD34FE" />
        <path d="M15.5 3.2L9.2 14.8l2.8.5-1.2 4.2 6.5-10.2-3.2-.5 1.4-5.6z" fill="#FFD62E" />
      </svg>
    );
  }

  if (normalized.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l8.7 5v10L12 22l-8.7-5V7L12 2z"
          fill="#5FA04E"
        />
        <text
          x="12"
          y="15"
          fill="#FFFFFF"
          fontSize="8"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          JS
        </text>
      </svg>
    );
  }

  // 3. Geospatial & Spatial Data
  if (normalized.includes("react-leaflet")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1E293B" />
        <path d="M7 17C7 17 8 10 14 7c0 0 3 6-3 10H7z" fill="#22C55E" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    );
  }

  if (normalized.includes("leaflet")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M7 19c0-1.8 1.4-8 9-14 0 0 4 8-4 14H7z"
          fill="#199900"
        />
        <path d="M16 5c-4 5-6 10-6 14" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (normalized.includes("geojson")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <polygon points="4,7 12,3 20,7 18,17 10,21 4,14" fill="#0284C7" opacity="0.2" stroke="#0284C7" strokeWidth="1.6" />
        <circle cx="12" cy="3" r="1.5" fill="#0284C7" />
        <circle cx="20" cy="7" r="1.5" fill="#0284C7" />
        <circle cx="18" cy="17" r="1.5" fill="#0284C7" />
        <circle cx="10" cy="21" r="1.5" fill="#0284C7" />
        <circle cx="4" cy="14" r="1.5" fill="#0284C7" />
        <circle cx="4" cy="7" r="1.5" fill="#0284C7" />
      </svg>
    );
  }

  if (normalized.includes("qgis")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#589632" />
        <path d="M12 4a7 7 0 0 0-7 7 7 7 0 0 0 10.8 5.8L18 19l1.5-1.5-2.2-2.2A7 7 0 0 0 19 11a7 7 0 0 0-7-7zm0 2.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (normalized.includes("arcgis")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0079C1" />
        <circle cx="12" cy="12" r="7" stroke="#FFFFFF" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="3.5" ry="7" stroke="#FFFFFF" strokeWidth="1.2" />
        <line x1="5" y1="12" x2="19" y2="12" stroke="#FFFFFF" strokeWidth="1.2" />
      </svg>
    );
  }

  if (normalized.includes("buffer")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" fill="#06B6D4" />
        <circle cx="12" cy="12" r="6" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    );
  }

  // 4. AI, Vision & Embedded
  if (normalized.includes("gemini")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1BA1E3" />
            <stop offset="50%" stopColor="#5B62EE" />
            <stop offset="100%" stopColor="#9C44E8" />
          </linearGradient>
        </defs>
        <path
          d="M12 2C12 7.5 7.5 12 2 12c5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10z"
          fill="url(#geminiGrad)"
        />
      </svg>
    );
  }

  if (normalized.includes("mediapipe") || normalized.includes("facemesh")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0F172A" />
        <circle cx="8" cy="10" r="1.5" fill="#38BDF8" />
        <circle cx="16" cy="10" r="1.5" fill="#38BDF8" />
        <circle cx="12" cy="13" r="1" fill="#818CF8" />
        <path d="M8 15q4 2 8 0" stroke="#818CF8" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M5 8a7 7 0 0 0 14 0" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    );
  }

  if (normalized.includes("opencv")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="4" stroke="#EA4335" strokeWidth="2" />
        <circle cx="7" cy="15" r="4" stroke="#34A853" strokeWidth="2" />
        <circle cx="17" cy="15" r="4" stroke="#4285F4" strokeWidth="2" />
      </svg>
    );
  }

  if (normalized.includes("esp32")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="5" y="4" width="14" height="16" rx="2" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
        <circle cx="12" cy="10" r="3" fill="#334155" stroke="#38BDF8" strokeWidth="1" />
        <circle cx="12" cy="10" r="1" fill="#38BDF8" />
        <rect x="7" y="15" width="4" height="3" fill="#D97706" />
        <line x1="14" y1="16" x2="17" y2="16" stroke="#94A3B8" strokeWidth="1.5" />
      </svg>
    );
  }

  if (normalized.includes("arduino")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00979D" />
        <path
          d="M8.5 9A3 3 0 0 0 6 12a3 3 0 0 0 4.5 2.6L12 13.5l1.5 1.1A3 3 0 0 0 18 12a3 3 0 0 0-2.5-3 3 3 0 0 0-2 1L12 11.2 10.5 10A3 3 0 0 0 8.5 9z"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        <text x="7.8" y="13" fill="#FFFFFF" fontSize="4" fontWeight="bold">-</text>
        <text x="14.8" y="13" fill="#FFFFFF" fontSize="4" fontWeight="bold">+</text>
      </svg>
    );
  }

  if (normalized.includes("cad") || normalized.includes("stl")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.6">
        <path d="M12 2l8 4.5v9l-8 4.5-8-4.5v-9L12 2z" />
        <path d="M12 11v9M12 11l8-4.5M12 11L4 6.5" />
      </svg>
    );
  }

  // 5. Tools & DevOps
  if (normalized.includes("github")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#181717">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    );
  }

  if (normalized.includes("git")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M21.7 10.7L13.3 2.3c-.4-.4-1-.4-1.4 0L9.6 4.6l2.3 2.3c.4-.1.9 0 1.2.3.5.5.5 1.3 0 1.8l2.2 2.2c.5 0 .9.2 1.2.5.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.6-1.3-.2-1.9L11.7 10v4.7c.3.2.5.5.5.9 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.6.3-1 .7-1.3V8.8c-.4-.2-.7-.7-.7-1.3 0-.6.3-1.1.8-1.3L7.3 3.8 2.3 8.8c-.4.4-.4 1 0 1.4l8.4 8.4c.4.4 1 .4 1.4 0l9.6-9.6c.4-.4.4-1 0-1.4z"
          fill="#F05032"
        />
      </svg>
    );
  }

  if (normalized.includes("mysql")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00758F" />
        <path
          d="M17.5 14c-.6-.2-1.3-.4-2-.4-1.5 0-2.5.8-3.2 1.8-.5-.8-1.3-1.3-2.3-1.3-1.2 0-2.2.8-2.6 2h1.6c.3-.5.7-.7 1.1-.7.7 0 1.1.5 1.1 1.2v.2c-.4 0-.8.1-1.3.2-1.6.4-2.5 1.2-2.5 2.4 0 1.2.9 2 2.2 2 1 0 1.7-.5 2.1-1.2v1h1.5v-4.6c0-1.1.6-1.6 1.4-1.6.5 0 .9.2 1.3.4l.6-1.4z"
          fill="#F29111"
        />
        <text x="12" y="10" fill="#FFFFFF" fontSize="6" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
          MySQL
        </text>
      </svg>
    );
  }

  if (normalized.includes("supabase")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M13.4 22c-.6.8-1.8.4-1.9-.6l-1-9h10.2c1 0 1.5 1.2.8 1.9L13.4 22z"
          fill="#3ECF8E"
        />
        <path
          d="M10.6 2c.6-.8 1.8-.4 1.9.6l1 9H3.3c-1 0-1.5-1.2-.8-1.9L10.6 2z"
          fill="#249361"
        />
      </svg>
    );
  }

  if (normalized.includes("firebase")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4.5 17.5l2-12.8c.1-.4.6-.5.8-.2l3.4 6.3-6.2 6.7z" fill="#FFA000" />
        <path d="M12.5 2.2c-.2-.4-.8-.4-.9 0L9.4 6.7l2.2 4.1 4.7-8.6h-3.8z" fill="#F57C00" />
        <path d="M19.5 17.5L16.2 3.8c-.1-.4-.6-.5-.8-.2l-8.9 14 6.9 3.9c.7.4 1.5.4 2.2 0l3.9-4z" fill="#FFCA28" />
      </svg>
    );
  }

  if (normalized.includes("sqlite")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#003B57" />
        <text
          x="12"
          y="15.5"
          fill="#00ADEF"
          fontSize="7"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          SQLite
        </text>
      </svg>
    );
  }

  if (normalized.includes("postman")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#FF6C37" />
        <path
          d="M16.5 10.5c-.4-.4-1-.5-1.5-.3l-3 1.2-1.5-.7c-.3-.1-.6 0-.8.2l-2 2c-.2.2-.2.6 0 .8l2 2c.2.2.6.2.8 0l1.2-1.2 3.2.8c.2 0 .4 0 .6-.2l1.5-1.5c.3-.3.3-.8 0-1.1l-.5-.2z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  if (normalized.includes("laragon")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0E5E9C" />
        <path d="M6 16c0-4 3-7 7-7s6 2 6 5-2 4-5 4H8a2 2 0 0 1-2-2z" fill="#FFFFFF" />
        <circle cx="15.5" cy="12.5" r="1" fill="#0E5E9C" />
      </svg>
    );
  }

  if (normalized.includes("vs code") || normalized.includes("vscode")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M17.5 2.5l-9.2 7-4.2-3.2c-.4-.3-1-.1-1.1.4L2 18.5l4-3 11.5 6c.5.2 1.1-.1 1.2-.6l2.3-16.8c.1-.6-.4-1.1-.9-1.2l-.6-.4z" fill="#0065A9" />
        <path d="M17.5 2.5L7.2 12l10.3 9.5V2.5z" fill="#007ACC" />
        <path d="M17.5 2.5l-4.5 4.2 4.5 4.3V2.5z" fill="#1F9CF0" />
      </svg>
    );
  }

  if (normalized.includes("android")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M6 10h12v7c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-7z" fill="#3DDC84" />
        <path d="M7 9a5 5 0 0 1 10 0H7z" fill="#3DDC84" />
        <circle cx="9.5" cy="6.5" r="0.8" fill="#FFFFFF" />
        <circle cx="14.5" cy="6.5" r="0.8" fill="#FFFFFF" />
        <line x1="8" y1="4" x2="6.5" y2="2" stroke="#3DDC84" strokeWidth="1" strokeLinecap="round" />
        <line x1="16" y1="4" x2="17.5" y2="2" stroke="#3DDC84" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }

  // Fallback: Minimal Clean Tech Terminal Badge
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#71717A" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M7 9l3 3-3 3M13 15h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
