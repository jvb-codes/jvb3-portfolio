import { PropsWithChildren, useEffect, useRef } from "react";
import "../index.css";

const RevealOnScroll = ({ children }: PropsWithChildren) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  });

  return (
    <div className="reveal" ref={ref}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
