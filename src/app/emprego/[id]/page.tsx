// interface EmpregoProps {
//   params: Promise<{ id: number }>;
// }

// export default async function EmpregoPage({ params }: EmpregoProps) {
//   const { id } = await params;

//   return <main>Vaga Id: {id}</main>;
// }
"use client";

import { useParams } from "next/navigation";

export default function page() {
  const params = useParams();
  const id = params?.id;

  return <main>{id}</main>;
}
