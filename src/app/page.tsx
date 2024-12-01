import Header from "@/components/Header";
import { Nav, NavLink } from "@/components/Nav";
import SearchBar from "@/components/SearchBar";
import Subtitle from "@/components/Subtitle";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  const { data: session } = useSession();

  const [account, setAccount] = useState(false);

  if (session) {
    setAccount(true);
  }

  return (
    <div className="flex flex-col items-center justify-items-center h-auto gap-16 ">
      <Nav>
        <div className="nav-logo">
          <NavLink href="/">Djopa</NavLink>
        </div>
        <div className="navigators">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/emprego">Emprego</NavLink>
          <NavLink href="/contacto">Contacto</NavLink>
        </div>
        <div className="nav-space"></div>
        <div className="nav-space"></div>
        <div className="nav-account">
          {account && <NavLink href="/">Account</NavLink>}
          {!account && (
            <button onClick={() => signIn("google")}>Sign In</button>
          )}
        </div>
      </Nav>
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center px-4 ">
        <Subtitle />
        <SearchBar />
      </main>
      <footer className="h-32 w-full row-start-3 flex flex-col gap-6 flex-wrap items-center justify-center px-4">
        <div className="h-8 w-full flex ">
          <NavLink href="/">footer</NavLink>
        </div>
        <div className="h-8 w-full flex ">
          <NavLink href="/">footer</NavLink>
        </div>
        <div className="h-8 w-full flex ">
          <NavLink href="/">footer</NavLink>
        </div>
      </footer>
    </div>
  );
}
