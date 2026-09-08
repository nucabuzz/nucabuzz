import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Nuca Streams",
  description: "Nuca Spotify Statistics Tracker by nucabuzz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}