import "../styles/globals.css";
// import FramerWrapper from "./FramerWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.JS middleware</title>
      </head>
      <body className="font-Inter">
        {children}
        {/* <FramerWrapper>{children}</FramerWrapper> */}
        <div id="_portal"></div>
      </body>
    </html>
  );
}
