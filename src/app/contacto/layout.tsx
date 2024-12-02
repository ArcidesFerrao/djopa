import AuthButton from "@/components/AuthButton";
import { Nav, NavLink } from "@/components/Nav";

export default function EmpregoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-items-center h-auto gap-16 w-full">
      <Nav>
        <NavLink href="/">Djopa</NavLink>

        <div className="navigators">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/emprego">Emprego</NavLink>
          <NavLink href="/contacto">Contacto</NavLink>
        </div>
        <div className="space-nav"></div>
        <div className="space-nav"></div>
        <div className="last-nav flex gap-1">
          <AuthButton />
        </div>
      </Nav>

      <main>{children}</main>

      <footer>
        <div>footer</div>
        <div>footer</div>
        <div>footer</div>
      </footer>
    </div>
  );
}
