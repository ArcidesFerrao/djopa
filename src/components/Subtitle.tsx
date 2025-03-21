import React from "react";

export default function Subtitle() {
  return (
    <div className="subtitle-header flex  p-2  items-center justify-between">
      <div>
        <h2 className="font-bold text-center ">
          Conectando talentos <br />
          às melhores oportunidades
        </h2>
      </div>
      <div className="home_description flex flex-col gap-4 w-4/12">
        <p className="font-thin ">
          Plataforma inovadora que conecta empresas a talentos locais de forma
          rápida e eficiente.
        </p>

        {/* <p className="font-thin ">
          Ideal para empregadores que buscam profissionais qualificados.
        </p> */}

        {/* <p className="font-thin ">
          e para
          candidatos que procuram oportunidades de trabalho.
        </p> */}

        <p className="font-thin ">Simplificamos o processo de recrutamento.</p>
        <p className="font-thin ">
          Promovendo o desenvolvimento econômico em Moçambique.
        </p>
      </div>
    </div>
  );
}
