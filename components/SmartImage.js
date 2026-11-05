"use client";

import { useEffect, useRef, useState } from "react";

// Shows the real photo when the file exists, otherwise a neutral branded placeholder.
export default function SmartImage({ src, alt, className = "", label = "Photo coming soon", ...rest }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setFailed(false);
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [src]);

  if (failed) {
    return (
      <div className={`img-fallback ${className}`} role="img" aria-label={alt}>
        <img src="/images/icon.png" alt="" width="56" height="50" />
        <span>{label}</span>
      </div>
    );
  }
  return <img ref={ref} src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} {...rest} />;
}
