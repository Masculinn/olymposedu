import { Card } from "./Card";

export const CardHolder = ({ data }) => {
  return (
    <div className="lg:min-h-screen w-full bg-transparent items-center justify-center flex flex-col lg:mb-12 mb-4">
      {data.map((d, i) => (
        <Card key={i} idx={i} {...d} />
      ))}
    </div>
  );
};
