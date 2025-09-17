import { BGVideo } from "../bg-video/bgVideo";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <BGVideo />
      <div className="relative  z-[20]">
        {children}
      </div>
    </div>
  );
};
