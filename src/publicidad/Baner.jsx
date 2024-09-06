import React, { useEffect } from 'react';

const AdsterraAd = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.innerHTML = `
      atOptions = {
        'key' : 'ed735d7f0ab06d3ab64cb158e02cff93',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
      };
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = '//www.topcreativeformat.com/ed735d7f0ab06d3ab64cb158e02cff93/invoke.js';
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div style={{ width: '320px', height: '50px' }}>
      <iframe
        title="Adsterra Ad"
        style={{ border: 'none', width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
};

export default AdsterraAd;
