"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroCover({ src }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setFailed(false);
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [src]);

  return (
    <div className="pdx-cover" aria-hidden="true">
      {failed ? (
        <div className="pdx-cover-fallback"><img src="/images/icon.png" alt="" /></div>
      ) : (
        <img ref={ref} src={src} alt="" className="pdx-cover-img" onError={() => setFailed(true)} />
      )}
    </div>
  );
}