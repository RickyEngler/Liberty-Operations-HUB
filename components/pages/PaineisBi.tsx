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
      <section className="mb-10 md:mb-14 text-center max-w-5xl mx-auto px-4">
        <div>
          <h4 className="text-2xl sm:text-3xl font-bold text-[#3affbc] mb-4">Painéis BI</h4>
          <p className="text-white text-sm sm:text-base">
            <br /> Acompanhe em tempo real todos os painéis de análise de negócio da nossa
            organização.
          </p>
        </div>
      </section>

      <div className="flex flex-wrap justify-center gap-10 px-2 sm:px-4 max-w-6xl mx-auto">
        {painelCards.map((card) => (
          <article
            key={card.id}
            className="relative mt-9 mb-14 rounded-[1.75rem] overflow-hidden cursor-default transition-transform duration-500 ease-out hover:-translate-y-1 hover:scale-[1.01]"
            style={{
              width: '300px',
              aspectRatio: '9 / 15.5',
              maxHeight: '90vh',
              backgroundImage: `url('${card.backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 0 0 2px rgba(102, 255, 209, 0.4), 0 0 25px 8px rgba(102, 255, 194, 0.15)',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease-out, background-size 1.5s ease-out',
            }}
          >
            <div className="absolute inset-0 pointer-events-none transition-[box-shadow] duration-300 ease-out hover:shadow-[0_0_0_3px_rgba(102,255,199,0.6),0_0_35px_12px_rgba(102,255,230,0.25)]"></div>

            <div
              className="absolute inset-[14px] rounded-[1.375rem] pointer-events-none z-10"
              style={{
                boxShadow:
                  'inset 0.5px 0.5px 1.5px rgba(56, 255, 189, 0.6), inset -1px -1px 1px rgba(56, 255, 189, 0.5), inset 3px 3px 6px rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(56, 255, 189, 0.1)',
              }}
            ></div>

            <div className="absolute inset-[14px] rounded-[1.375rem] overflow-hidden flex flex-col justify-end z-[5] bg-gradient-to-t from-black/70 via-black/5 to-transparent">
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-[rgba(56,255,189,0.85)] text-[#064232] text-xs font-semibold rounded-full px-3 py-2 shadow-lg border border-white/30 z-20">
                <span className="inline-flex items-center justify-center w-4 h-4 bg-[#064232] text-[10px] text-white rounded-full">
                  •
                </span>
                Elevado
              </div>

              <div className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-[rgba(10,10,10,0.9)] via-[rgba(10,10,10,0.65)] to-transparent pointer-events-none z-10"></div>

              <div className="relative z-20 px-6 pb-6 text-center text-slate-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                <h2 className="text-xl font-bold text-[#3affbc] mb-2 flex items-center justify-center gap-2">
                  {card.title}
                </h2>
                <p className="text-slate-200 text-sm">{card.description}</p>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#422006] w-[85%] min-w-[190px] max-w-[85%] mx-auto rounded-full px-6 py-3 shadow-[inset_2px_2px_4px_rgba(56,255,189,0.6),inset_-2px_-2px_4px_rgba(255,245,200,0.5),0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-105 hover:shadow-[inset_2px_2px_5px_rgba(56,255,189,0.5),inset_-2px_-2px_5px_rgba(255,245,200,0.6),0_2px_4px_rgba(0,0,0,0.15)]"
                  style={{
                    background: 'linear-gradient(145deg, #47fdc3, #9b15fa)',
                  }}
                >
                  Acompanhe
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
          </article>
        ))}
      </div>
    </Layout>
  );
}
