export default function Delivery({ className = "", size = 24, color = "currentColor" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 64 64" 
      className={className}
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 37h12M5 21h8v12H5z"></path>
      <circle cx="13" cy="49" r="6"></circle>
      <circle cx="51" cy="49" r="6"></circle>
      <path d="M1 36h2v2H1M45 49H19"></path>
      <path d="M7 49H5a4 4 0 0 1-4-4V17a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4m38 24h2a4 4 0 0 0 4-4V13a4 4 0 0 0-4-4H23a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h22a10 10 0 0 1 12 0z"></path>
      <path d="M57 49h6V37"></path>
    </svg>
  );
} 