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
      <section className="mb-8 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h4 className="text-2xl sm:text-3xl font-bold text-[#3affbc] mb-4">Melhorias e Suporte</h4>
          <p className="text-white text-sm sm:text-base">
            <br /> Precisa de ajuda ou tem uma sugestão de melhoria? Entre em contato com um de
            nossos desenvolvedores!
          </p>
        </div>
      </section>

      <div className="flex justify-center items-center px-4">
        <div className="w-full max-w-sm bg-[#201b2c] rounded-lg p-6 sm:p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-[#3affbc] mb-6">Entre em contato</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="desenvolvedor" className="text-[#3affbc] font-semibold mb-2 text-left text-sm">
                  Desenvolvedor responsável
                </label>
                <input
                  list="desenvolvedores"
                  id="desenvolvedor"
                  name="nome"
                  placeholder="Escolha um Desenvolvedor para entrar em contato."
                  autoComplete="off"
                  className="bg-[#322b44] text-white px-3 py-2 rounded border border-[#3affbc] focus:outline-none focus:ring-2 focus:ring-[#9fffdf] placeholder-gray-400 text-sm"
                  required
                />
                <datalist id="desenvolvedores">
                  <option value="augusto.engler@libertyti.com.br">Augusto Engler</option>
                </datalist>
              </div>

              <div className="flex flex-col">
                <label htmlFor="texto" className="text-[#3affbc] font-semibold mb-2 text-left text-sm">
                  Solicitação
                </label>
                <input
                  type="text"
                  id="texto"
                  name="texto"
                  placeholder="Digite em poucas palavras sua dúvida ou solicitação."
                  className="bg-[#322b44] text-white px-3 py-2 rounded border border-[#3affbc] focus:outline-none focus:ring-2 focus:ring-[#9fffdf] placeholder-gray-400 text-sm"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#3affbc] text-black px-6 py-2 rounded font-bold text-sm hover:bg-[#9fffdf] hover:scale-105 transition-all duration-300 mt-4"
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
