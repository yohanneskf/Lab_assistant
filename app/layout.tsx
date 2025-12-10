import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lab Schedule",
  description: "Created with v0",
  generator: "v0.app",
};

// 1. Combine the class names and variables into a single string.
// GeistSans.className applies the base font-family.
// GeistSans.variable and GeistMono.variable expose the CSS variables.
const fontClasses = `${GeistSans.className} ${GeistSans.variable} ${GeistMono.variable}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. Remove <head> and <style> tags entirely.
    // 3. Apply the combined class string directly to the <html> element.
    <html lang="en" className={fontClasses}>
      <body>{children}</body>
    </html>
  );
}
