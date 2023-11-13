import Search from "@/components/Search";

export default function Layout({ children }) {
  return (
    <section>
      <Search />

      {children}
    </section>
  );
}
