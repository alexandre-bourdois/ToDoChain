import "./globals.css";

export const metadata = {
  title: "ToDoChain ",
  description: "A To Do List an Ethereum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
