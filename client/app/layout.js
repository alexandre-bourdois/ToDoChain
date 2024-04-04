import "./globals.css";

export const metadata = {
  title: "ToDoChain ",
  description: "A To Do List on Ethereum Blockchain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
