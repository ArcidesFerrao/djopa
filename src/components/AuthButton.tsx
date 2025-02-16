"use client";

import { signIn, useSession } from "next-auth/react";
import elipseload from "@/assets/Ellipsis.svg";
import Image from "next/image";
import { useState } from "react";
import { NavLink } from "./Nav";

export default function AuthButton() {
  const { data: session, status } = useSession();

  const [roleMenu, setRoleMenu] = useState(false);

  const [loading, setLoading] = useState(false);

  if (status === "loading") {
    return <Image className="loading" src={elipseload} alt="loading" />;
  }

  if (!session) {
    console.log("You're not logged in");
  }

  return (
    <div>
      {session?.user ? (
        <div className="flex gap-1">
          {session.user.role === "EMPLOYER" ? (
            <NavLink href="/emprego/vaga">Recrutar</NavLink>
          ) : (
            ""
          )}
          <p>
            Welcome,
            <NavLink
              href={
                session.user.role === "EMPLOYER"
                  ? "/emprego/vaga"
                  : "/candidato"
              }
            >
              {session?.user?.name?.split(" ")[0]}!
            </NavLink>
          </p>
        </div>
      ) : (
        <div className="">
          <button
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              setRoleMenu(true);
            }}
          >
            {loading ? "loading..." : "Sign In/ Sign Up"}
          </button>

          {roleMenu && (
            <div className="menu">
              <div className="menu-content">
                <h4>Select your role</h4>
                <button
                  disabled={loading}
                  onClick={() => {
                    setLoading(true);
                    signIn("google", { role: "EMPLOYER" });
                  }}
                >
                  Empregador
                </button>
                <button
                  disabled={loading}
                  onClick={async () => {
                    setLoading(true);
                    try {
                      signIn("google", { role: "SEEKER" });
                    } catch (error) {
                      console.error("Sign in failed: ", error);
                    }
                  }}
                >
                  Candidato
                </button>
                <button
                  className="bg-smooth"
                  onClick={() => setRoleMenu(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
