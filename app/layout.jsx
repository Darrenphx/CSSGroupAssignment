import "./css/globals.css";
import Navbar from "./navbar/navbar";
import SnowfallClient from "./snowflake/snowflake";
import CreepyMusic from "./components/CreepyMusic";

export const metadata = {
  title: "Haunted Atlas",
  description: "A collection of haunted places and paranormal tools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CreepyMusic />

        <Navbar />
        <SnowfallClient />

        <main>{children}</main>
      </body>
    </html>
  );
}


