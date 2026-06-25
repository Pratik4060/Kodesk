// components/icons/ArrowIcon.tsx

export default function ArrowIcon() {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2453f5] text-white transition group-hover:scale-105 gradient-card">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          d="M7 17L17 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <path
          d="M9 7h8v8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
