export default function Wordmark({ compact = false, className = "" }) {
  return (
    <div className={`wordmark ${compact ? "wordmark-compact" : ""} ${className}`.trim()}>
      <span className="wordmark-core" aria-label="AXXION">
        <span className="wordmark-letter">A</span>
        <span className="wordmark-x wordmark-x-left">X</span>
        <span className="wordmark-x wordmark-x-right">X</span>
        <span className="wordmark-letter">ION</span>
      </span>
    </div>
  );
}
