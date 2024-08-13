import { useInView, useTrail, a } from "@react-spring/web";
import { Children } from "react";

export const Trailed = (props) => {
  const { isOpen, children, wrapperStyle, noBounce } = props;
  const [ref, inView] = useInView();
  const items = Children.toArray(children);

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translateX(-25px)" },
    to: {
      opacity: isOpen && inView ? 1 : 0,
      transform: isOpen && inView ? "translateX(0px)" : "translateX(-25px)",
    },
    config: !noBounce ? { mass: 4, friction: 24, tension: 280 } : null,
  });

  return (
    <div className={` ${wrapperStyle}`} ref={ref}>
      {trail.map((style, idx) => (
        <a.div key={idx} style={style}>
          {items[idx]}
        </a.div>
      ))}
    </div>
  );
};
