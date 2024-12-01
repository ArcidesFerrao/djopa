"use client";

import { signIn, useSession } from "next-auth/react";
import elipseload from "@/assets/Ellipsis.svg";
import Image from "next/image";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Image className="loading" src={elipseload} alt={"loading"} />;
  }

  if (!session) {
    console.log("You're not logged in");
  }

  return (
    <div>
      {session?.user ? (
        <p>Welcome, {session?.user?.name}!</p>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            signIn("google");
          }}
        >
          Sign In
        </button>
      )}
    </div>
  );
}
