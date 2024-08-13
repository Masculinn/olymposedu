import React from "react";
import { Inter } from "next/font/google";

const font = Inter({
  subsets: ["latin"],
});

export const Blog = ({ data }) => {
  return (
    <main className="mx-auto px-4 lg:px-0 max-w-4xl bg-transparent h-auto text-start justify-center mt-12">
      {Object.entries(data).map(([title, content], idx) => (
        <React.Fragment key={idx}>
          <h1
            className={`  ${
              idx === 0
                ? "text-4xl font-extrabold"
                : "text-2xl font-bold tracking-tight"
            }`}
          >
            {title}
          </h1>
          <p className={`py-8 tracking-tighter text-lg ${font.className}`}>
            {content}
          </p>
        </React.Fragment>
      ))}
    </main>
  );
};
