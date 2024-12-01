"use client";

import { signIn, useSession } from "next-auth/react";
import elipseload from "@/assets/Ellipsis.svg";
import Image from "next/image";
import { useState } from "react";

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
        <p>Welcome, {session?.user?.name}!</p>
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
                  onClick={() => {
                    setLoading(true);
                    signIn("google", { role: "SEEKER" });
                  }}
                >
                  Candidato
                </button>
                <button onClick={() => setRoleMenu(false)}>Cancelar</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
