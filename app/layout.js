import "./globals.css";

export const metadata = {
  title: "Online Buyer",
  description: "An online e-commerce platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
