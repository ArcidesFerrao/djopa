"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import elipseload from "@/assets/Ellipsis.svg";

export default function EmpregadorPage() {
  const { data: session, status } = useSession();

  return (
    <main>
      <div className="flex flex-col gap-4 justify-center items-center p-2 ">
        <div className="page-head">
          {status === "loading" ? (
            <Image src={elipseload} alt="loading" width={100} height={100} />
          ) : (
            status === "authenticated" && (
              <div className="empregador-header flex items-center justify-center gap-4">
                <Image
                  src={session?.user.image ?? ""}
                  alt="user"
                  width={30}
                  height={30}
                />
                <h4>{session?.user.name} </h4>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className=""
                >
                  Sign Out
                </button>
              </div>
            )
          )}
          {status === "unauthenticated" && <div>Login to your account</div>}
        </div>

        <div className="empregador-details"></div>
      </div>
    </main>
  );
}
