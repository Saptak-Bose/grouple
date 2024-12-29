import { ReactNode } from "react";
import LandingPageNavbar from "./_components/navbar";

export default function LandingPageLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return (
    <div className="flex flex-col container relative">
      <LandingPageNavbar />
      {children}
    </div>
  );
}
