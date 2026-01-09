'use client';

import Layout from '@/components/Layout';

const painelCards = [
  {
    id: 'central-suporte',
    title: 'Central de Suporte',
    description: 'Realize o acompanhamento do painel BI da nossa Central de Atendimento.',
    backgroundImage: 'https://i.postimg.cc/yd9RYhqk/CENTRAL-DE-SUPORTE-N1.png',
    href: 'https://bi.libertyti.com.br/Organization/7493a5dd-2dab-4282-9784-fc4a852306ce/Report/3897b43b-de37-4759-b27a-88e792b9ddc5',
  },
  {
    id: 'operacoes',
    title: 'Operações',
    description: 'Realize o acompanhamento do painel BI da nossa equipe de operações.',
    backgroundImage: 'https://i.postimg.cc/0NHg2mGR/OPERA-ES-N2.png',
    href: 'https://bi.libertyti.com.br/Organization/7493a5dd-2dab-4282-9784-fc4a852306ce/Report/d31ff5ec-81ce-4ff7-821d-90ec853e842f',
  },
  {
    id: 'escala',
    title: 'Escala',
    description: 'Realize o acompanhamento da escala dos técnicos da equipe de operações.',
    backgroundImage: 'https://i.postimg.cc/d0928mHp/ESCALA-N2.png',
    href: 'https://bi.libertyti.com.br/Organization/7493a5dd-2dab-4282-9784-fc4a852306ce/Report/ab26ea86-a9c9-40e2-b85a-7b2145684999',
  },
  {
    id: 'institucionalizacao',
    title: 'Institucionalização',
    description: 'Realize o acompanhamento do painel BI da equipe de Institucionalização.',
    backgroundImage: 'https://i.postimg.cc/hGGL1QkG/INSTITUCIONALIZA-O.png',
    href: 'https://bi.libertyti.com.br/Organization/7493a5dd-2dab-4282-9784-fc4a852306ce/Report/a0ed823c-8fd9-4a68-8526-1243cfd62770',
  },
];

export default function PaineisBIPage() {
  return (
    <Layout>
      <section className="mb-8 md:mb-12 text-center max-w-5xl mx-auto px-4">
        <div>
          <h4 className="text-2xl sm:text-3xl font-bold text-[#3affbc] mb-4">Painéis BI</h4>
          <p className="text-white text-sm sm:text-base">
            <br /> Acompanhe em tempo real todos os painéis de análise de negócio da nossa
            organização.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto px-4">
        {painelCards.map((card) => (
          <div
            key={card.id}
            className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-2xl group cursor-pointer"
            style={{
              backgroundImage: `url('${card.backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>

            <div className="absolute inset-0 border-2 border-[#3affbc] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

              <div className="relative z-10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#3affbc] mb-2">{card.title}</h2>
                <p className="text-white text-xs sm:text-sm">{card.description}</p>
              </div>

              <a
                href={card.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative z-10 self-start inline-flex items-center gap-2 bg-[#3affbc] text-black px-4 sm:px-6 py-2 rounded-lg font-bold text-xs sm:text-sm hover:bg-[#9fffdf] hover:scale-105 transition-all duration-300"
              >
                Acompanhe
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5l7 7-7 7"></path>
                  <path d="M5 12h14"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
