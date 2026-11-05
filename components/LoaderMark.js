export default function LoaderMark({ label = "Loading" }) {
  return (
    <div className="loader-mark" role="status" aria-live="polite">
      <div className="loader-icon">
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="56" className="loader-track" />
          <circle cx="60" cy="60" r="56" className="loader-arc" />
        </svg>
        <img src="/images/icon.png" alt="" width="64" height="57" />
      </div>
      <span className="loader-word">Dalera Properties</span>
      <span className="visually-hidden">{label}</span>
    </div>
  );
}
