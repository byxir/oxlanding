import React from "react";

const WhiteButtonReact = ({
  children,
  className,
  link,
}: {
  children: React.ReactNode;
  className?: string;
  link?: string;
}) => {
  return (
    <>
      {link ? (
        <a href={link} className="">
          <button
            className={`rounded-[10px] py-3 px-4 bg-white text-black hover:-translate-y-1 transition ease-in-out duration-300 ${className}`}
          >
            {children}
          </button>
        </a>
      ) : (
        <div className="">
          <button
            className={`rounded-[10px] py-3 px-4 bg-white text-black hover:-translate-y-1 transition ease-in-out duration-300 ${className}`}
          >
            {children}
          </button>
        </div>
      )}
    </>
  );
};

export default WhiteButtonReact;
