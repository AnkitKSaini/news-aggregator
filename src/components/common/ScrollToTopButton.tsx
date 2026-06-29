import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage = (scrollTop / height) * 100;

      setProgress(percentage);

      setVisible(scrollTop > 250);
    }

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }

  if (!visible) return null;

  const radius = 26;
  const stroke = 4;

  const normalizedRadius = radius - stroke;

  const circumference =
    normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference -
    (progress / 100) * circumference;

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-8 right-8 z-50 group"
    >
      <div
        className="
          relative
          w-16
          h-16
          rounded-full

          bg-white/20
          dark:bg-gray-900/40

          backdrop-blur-xl

          border
          border-white/20

          shadow-2xl

          hover:scale-110
          transition-all
          duration-300
        "
      >
        <svg
          className="absolute inset-0 -rotate-90"
          width="64"
          height="64"
        >
          <circle
            cx="32"
            cy="32"
            r={normalizedRadius}
            stroke="rgba(255,255,255,.15)"
            strokeWidth={stroke}
            fill="transparent"
          />

          <circle
            cx="32"
            cy="32"
            r={normalizedRadius}
            stroke="#2563eb"
            strokeWidth={stroke}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">

          <ArrowUp
            size={24}
            className="
              text-blue-600
              dark:text-blue-400

              group-hover:-translate-y-1

              transition-all
            "
          />

        </div>
      </div>
    </button>
  );
}

export default ScrollToTopButton;