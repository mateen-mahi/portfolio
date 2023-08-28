import React from 'react';
import "./Location.css";

const Location = () => {
  return (
    <div className='map-con'>
      <iframe
        title="Location Map"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Muhammadia,%20Ahmadpur%20Sial,%20Jhang,%20Punjab,%20Pakistan+(InnovX%20Solutions)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        style={{ width: '100%', height: '100%', border: '0' }}
        loading="lazy"
      >
        {/* Fallback content for non-iframe supporting browsers */}
        <a href="https://www.maps.ie/population/">Calculate population in area</a>
      </iframe>
    </div>
  );
};

export default Location;
