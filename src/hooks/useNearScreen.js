import { useEffect, useState } from "react";

const marginObserver = "1000px";

export default function useNearScreen({ externalRef, once = true } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false);

  useEffect(() => {
    let observer;
    const onChangeObserver = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setIsNearScreen(true);
        once && observer.disconnect();
      } else {
        !once && setIsNearScreen(false);
      }
    };

    observer = new IntersectionObserver(onChangeObserver, {
      rootMargin: marginObserver,
    });

    if (externalRef) observer.observe(externalRef.current);

    return () => observer && observer.disconnect();
  });

  return { isNearScreen };
}
