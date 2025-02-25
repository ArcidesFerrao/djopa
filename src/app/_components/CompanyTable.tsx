import db from "@/db/db";
import { useSession } from "next-auth/react";

export const EmployerTable = () => {
  const { data: session } = useSession();

  const user = session?.user.id;

  //   const companies = db.company.findMany({
  //     where: {
  //       userId: user,
  //     },
  //   });

  if (!user) return console.log("user not found");

  const list = getCompanies(user);
console.log(list)
  //   if (!companies) return <p>Nenhuma empresa encontrada</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Devhub</td>
          <td>devhub.com</td>
        </tr>
      </tbody>
    </table>
  );
};

const getCompanies = ({ user }: { user: string }) => {
  const companies = db.company.findMany({
    where: {
      userId: user,
    },
  });

  return companies;
};
