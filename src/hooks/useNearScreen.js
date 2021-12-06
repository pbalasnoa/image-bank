import { useEffect, useState } from "react";

export default function useNearScreen({ externalRef, once = true } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false);

  useEffect(() => {
    let observer;
    const onChangeObserver = (entries, observer) => {
      const el = entries[0];
      // console.log(el);
      if (el.isIntersecting) {
        setIsNearScreen(true);
        once && observer.disconnect();
      } else {
        !once && setIsNearScreen(false);
      }
    };

    observer = new IntersectionObserver(onChangeObserver, {
      rootMargin: "500px",
    });

    if (externalRef) observer.observe(externalRef.current);

    return () => observer && observer.disconnect();
  });

  return { isNearScreen };
}
