import React from 'react';

interface MaintenanceProps {
  className?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactText?: string;
  logo?: string;
  statusMessage?: string;
  title?: string;
}

export function Maintenance({
  className,
  contactEmail,
  contactPhone,
  contactText,
  logo,
  statusMessage,
  title,
}: MaintenanceProps) {
  return (
    <div className={className}>
      <h1>{title || 'Maintenance Mode'}</h1>
      {statusMessage && <p>{statusMessage}</p>}
      {contactEmail && <p>Email: {contactEmail}</p>}
      {contactPhone && <p>Phone: {contactPhone}</p>}
      {contactText && <p>{contactText}</p>}
    </div>
  );
}

