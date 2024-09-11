import React, { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      atOptions = {
        'key' : '25d22ec63d632ade6e85ee12dc8c7aa2',
        'format' : 'iframe',
        'height' : 300,
        'width' : 160,
        'params' : {}
      };
    `;
    document.getElementById('ad-container').appendChild(script);

    const scriptSrc = document.createElement('script');
    scriptSrc.type = 'text/javascript';
    scriptSrc.src = '//www.topcreativeformat.com/25d22ec63d632ade6e85ee12dc8c7aa2/invoke.js';
    document.getElementById('ad-container').appendChild(scriptSrc);

    return () => {
      document.getElementById('ad-container').removeChild(script);
      document.getElementById('ad-container').removeChild(scriptSrc);
    };
  }, []);

  return (
    <div>
      <div id="ad-container" style={{ width: '160px', height: '300px' }}></div>
    </div>
  );
};

export default AdComponent;
