import React, { useEffect } from "react";

export const VideoCard = ({ src }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="instagram-media max-w-[540px] w-full m-auto scale-75 border border-black rounded-2xl shadow-xl"
      data-instagram-permalink={src}
      data-instagram-version="24"
    >
      <a href={src} target="_blank" rel="noopener noreferrer"></a>
    </blockquote>
  );
};
