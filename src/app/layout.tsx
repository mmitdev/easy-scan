import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box, ThemeProvider, Typography } from "@mui/joy";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box sx={{ bgcolor: "primary.softBg", paddingY: "30px" }}>
          <Link href={"/"}><Typography level="h1" textAlign={"center"} >Easy Scan</Typography></Link>
        </Box>
        {children}
      </body>
    </html>
  );
}
