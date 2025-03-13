"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import elipseload from "@/assets/Ellipsis.svg";
import { NavLink } from "@/components/Nav";
import EmployerTable from "../_components/CompanyTable";

export default function EmpregadorPage() {
  const { data: session, status } = useSession();

  // if (!session?.user.id) return console.log("not authenticated");

  return (
    <main>
      <div className="flex flex-col gap-12 justify-center items-center p-12 ">
        <div className="page-head  ">
          {status === "loading" ? (
            <Image src={elipseload} alt="loading" width={100} height={100} />
          ) : (
            status === "authenticated" && (
              <div className="empregador-header flex items-center justify-between gap-4 p-4">
                <div className="flex gap-4 items-center">
                  <Image
                    src={session?.user.image ?? ""}
                    alt="user"
                    width={30}
                    height={30}
                  />
                  <h4 className="text-lg ">{session?.user.name} </h4>
                </div>
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

        <div className="empregador-details w-full">
          <div className="companies">
            <div className="companies-header flex items-center justify-between gap-4">
              <h3>Empresas</h3>
              <NavLink href="/empresa/new">
                <span className="nav-button-company p-4 ">
                  Registar Empresa
                </span>
              </NavLink>
            </div>
          </div>
        </div>
        <EmployerTable />
      </div>
    </main>
  );
}
