import { useEffect, useState } from "react";

interface LoadingScreenProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingScreen = ({ setIsLoading }: LoadingScreenProps) => {
  const [greeting, setGreeting] = useState("");
  const fullGreeting = "<Hello World />";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      const partialGreeting = fullGreeting.substring(0, index);
      setGreeting(partialGreeting);
      index++;

      if (index > fullGreeting.length + 1) {
        clearInterval(interval);

        setTimeout(() => {
          setIsLoading(true);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [setIsLoading]);

  return (
    <div className=" min-w-[1200px] min-h-screen flex flex-col justify-center items-center gap-1">
      <div className=" text-2xl">
        {greeting}
        <span className="animate-blink ">|</span>
      </div>
      <div className="ml-2 w-[75px] h-[2px] bg-gray-500 overflow-hidden">
        <div className="h-full w-[40%] bg-amber-500 animate-loading-bar "></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
