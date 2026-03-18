import { Head } from "~/layouts/head"
import { NavBar } from "~/components/navbar"
import { Footer } from "~/components/footer"

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}