'use client';

import Layout from '@/components/Layout';

export default function SuportePage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const desenvolvedor = formData.get('nome');
    const texto = formData.get('texto');

    // Construir email link
    const subject = `Solicitude de Suporte/Melhoria: ${texto}`;
    const body = `Solicitação: ${texto}\n\nPor favor, envie sua resposta aqui.`;
    const mailtoLink = `mailto:${desenvolvedor}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <Layout>
      <section className="mb-10 max-w-5xl mx-auto px-4">
        <div className="rounded-xl border-b-2 border-[#3affbc] bg-gradient-to-r from-[#322b44] to-[#201b2c] px-5 sm:px-8 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <h4 className="text-2xl sm:text-3xl font-bold text-[#3affbc] mb-3 text-left">Melhorias e Suporte</h4>
          <p className="text-white text-sm sm:text-base text-left max-w-3xl">
            Precisa de ajuda ou tem uma sugestão de melhoria? Entre em contato com um de nossos desenvolvedores!
          </p>
        </div>
      </section>

      <div className="flex justify-center items-center px-4">
        <div className="w-full max-w-md bg-[#2f2841] rounded-2xl p-8 sm:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.35)] border border-[#3affbc]/25">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-[#3affbc] mb-6 uppercase tracking-wide">Entre em contato</h3>
            <form onSubmit={handleSubmit} className="space-y-5 suport-form">
              <div className="flex flex-col items-start">
                <label htmlFor="desenvolvedor" className="text-[#3affbc] font-semibold mb-2 text-sm">
                  Desenvolvedor responsável
                </label>
                <input
                  list="desenvolvedores"
                  id="desenvolvedor"
                  name="nome"
                  placeholder="Escolha um Desenvolvedor para entrar em contato."
                  autoComplete="off"
                  className="w-full bg-[#4c4363] text-white px-3 py-3 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-[#3affbc] placeholder-gray-400 text-sm font-semibold"
                  required
                />
                <datalist id="desenvolvedores">
                  <option value="augusto.engler@libertyti.com.br">Augusto Engler</option>
                </datalist>
              </div>

              <div className="flex flex-col items-start">
                <label htmlFor="texto" className="text-[#3affbc] font-semibold mb-2 text-sm">
                  Solicitação
                </label>
                <input
                  type="text"
                  id="texto"
                  name="texto"
                  placeholder="Digite em poucas palavras sua dúvida ou solicitação."
                  className="w-full bg-[#4c4363] text-white px-3 py-3 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-[#3affbc] placeholder-gray-400 text-sm font-semibold"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#3affbc] text-black px-6 py-3 rounded font-bold text-sm uppercase tracking-wide shadow-[10px_10px_20px_#000000bd] hover:bg-[#9fffdf] hover:scale-105 transition-all duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
