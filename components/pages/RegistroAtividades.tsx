'use client';

import Layout from '@/components/Layout';
import { useState, useRef } from 'react';

interface FormField {
  descricao: string;
  status: string;
  card?: string;
}

const autoResizeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 150) + 'px';
};

export default function RegistroAtividadesPage() {
  const [prioridades, setPrioridades] = useState<FormField[]>([
    { descricao: '', status: '', card: '' },
  ]);
  const [chamados, setChamados] = useState<FormField[]>([
    { descricao: '', status: '', card: '' },
  ]);
  const [chamadosRecebidos, setChamadosRecebidos] = useState<FormField[]>([
    { descricao: '', status: '', card: '' },
  ]);
  const [paineis, setPaineis] = useState<
    Array<{ modelo: string; localizacao: string; status: string; anydesk: string; chamador: string }>
  >([{ modelo: '', localizacao: '', status: '', anydesk: '', chamador: '' }]);

  const addRow = (
    type: 'prioridades' | 'chamados' | 'chamadosRecebidos' | 'paineis'
  ) => {
    if (type === 'prioridades') {
      setPrioridades([...prioridades, { descricao: '', status: '', card: '' }]);
    } else if (type === 'chamados') {
      setChamados([...chamados, { descricao: '', status: '', card: '' }]);
    } else if (type === 'chamadosRecebidos') {
      setChamadosRecebidos([...chamadosRecebidos, { descricao: '', status: '', card: '' }]);
    } else if (type === 'paineis') {
      setPaineis([
        ...paineis,
        { modelo: '', localizacao: '', status: '', anydesk: '', chamador: '' },
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Formulário enviado! Geração de PDF em desenvolvimento.');
  };

  return (
    <Layout>
      <section className="mb-10 max-w-5xl mx-auto px-4">
        <div className="rounded-xl border-b-2 border-[#3affbc] bg-gradient-to-r from-[#322b44] to-[#201b2c] px-5 sm:px-8 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <h4 className="text-2xl sm:text-3xl font-bold text-[#3affbc] mb-3 text-left">Registro de Atividades In Loco</h4>
          <p className="text-white text-sm sm:text-base text-left max-w-3xl">
            Preencha os campos abaixo para registrar as atividades da visita técnica.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto bg-[#2f2841] border-2 border-white/20 rounded-2xl p-5 sm:p-7 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.35)] mx-4">
        <form onSubmit={handleSubmit} id="registro-form">
          <h2 className="text-xl sm:text-2xl font-bold text-[#3affbc] mb-6 uppercase tracking-wide">Informações da Visita</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="unidade" className="text-[#3affbc] font-semibold mb-2 text-sm">Unidade:</label>
                <input 
                  type="text" 
                  id="unidade" 
                  className="bg-[#322b44] text-white px-3 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc] text-sm"
                  required 
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="responsavel" className="text-[#3affbc] font-semibold mb-2">Técnico:</label>
                <input 
                  type="text" 
                  id="responsavel" 
                  className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc]"
                  required 
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="data" className="text-[#3affbc] font-semibold mb-2">Data:</label>
                <input 
                  type="date" 
                  id="data" 
                  className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc]"
                  required 
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="ponto-focal-chegada" className="text-[#3affbc] font-semibold mb-2">Nome do Ponto Focal:</label>
                <input 
                  type="text" 
                  id="ponto-focal-chegada" 
                  className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc]"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="horario-chegada" className="text-[#3affbc] font-semibold mb-2">Horário de Chegada:</label>
                <input 
                  type="time" 
                  id="horario-chegada" 
                  className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc]"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="horario-saida" className="text-[#3affbc] font-semibold mb-2">Horário de Saída:</label>
                <input 
                  type="time" 
                  id="horario-saida" 
                  className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc]"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold text-[#3affbc] mb-2 uppercase tracking-wide">Prioridades da Unidade</h2>
            <p className="text-white text-sm mb-2 text-justify">
              Ao chegar na unidade o técnico deve verificar com os pontos focais se existe alguma
              demanda prioritária a ser tratada, todas essas ações devem ser inseridas no registro
            </p>
            <div id="prioridades-container" className="space-y-3">
              {prioridades.map((_, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <textarea
                    name="prioridade_descricao"
                    placeholder="Descrição"
                    className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc] resize-none"
                    onChange={autoResizeInput}
                    style={{ minHeight: '40px', lineHeight: '20px' }}
                  />
                  <input
                    type="text"
                    name="prioridade_status"
                    placeholder="Status"
                    className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc]"
                  />
                  <input
                    type="text"
                    name="prioridade_card"
                    placeholder="Card"
                    className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc]"
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              className="bg-[#3affbc] text-black px-4 py-2 rounded font-semibold uppercase tracking-wide hover:bg-[#9fffdf] transition-all hover:-translate-y-0.5"
              onClick={() => addRow('prioridades')}
            >
              Adicionar Prioridade
            </button>
          </div>

          <div className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold text-[#3affbc] mb-2 uppercase tracking-wide">Chamados da Unidade (GLPI/JIRA)</h2>
            <p className="text-white text-sm mb-2 text-justify">
              Ao chegar na unidade o técnico deve abrir o GLPI e o JIRA e consultar todos os
              chamados abertos na unidade, esses chamados devem ser repassados para o ponto focal
              responsável para acompanhamento
            </p>
            <div id="chamados-container" className="space-y-3">
              {chamados.map((_, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    type="text"
                    name="chamado_glpi"
                    placeholder="GLPI/JIRA"
                    className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc]"
                  />
                  <textarea
                    name="chamado_descricao"
                    placeholder="Descrição"
                    className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc] resize-none"
                    onChange={autoResizeInput}
                    style={{ minHeight: '40px', lineHeight: '20px' }}
                  />
                  <input
                    type="text"
                    name="chamado_status"
                    placeholder="Status"
                    className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc]"
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              className="bg-[#3affbc] text-black px-4 py-2 rounded font-semibold uppercase tracking-wide hover:bg-[#9fffdf] transition-all hover:-translate-y-0.5"
              onClick={() => addRow('chamados')}
            >
              Adicionar Chamado
            </button>
          </div>

          <div className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold text-[#3affbc] mb-2 uppercase tracking-wide">Chamados Recebidos</h2>
            <p className="text-white text-sm mb-2 text-justify">
              Durante as rondas e/ou enquanto estiver na unidade o técnico receberá pedido de
              apoio dos profissionais da unidade, essas solicitações devem ser descritas e
              assinadas pelos solicitantes com uma resolução ou encaminhadas para resolução
            </p>
            <div id="chamados-recebidos-container" className="space-y-3">
              {chamadosRecebidos.map((_, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <textarea
                    name="recebido_descricao"
                    placeholder="Descrição"
                    className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc] resize-none"
                    onChange={autoResizeInput}
                    style={{ minHeight: '40px', lineHeight: '20px' }}
                  />
                  <input
                    type="text"
                    name="recebido_status"
                    placeholder="Status"
                    className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc]"
                  />
                  <input
                    type="text"
                    name="recebido_card"
                    placeholder="Card"
                    className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc]"
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              className="bg-[#3affbc] text-black px-4 py-2 rounded font-semibold uppercase tracking-wide hover:bg-[#9fffdf] transition-all hover:-translate-y-0.5"
              onClick={() => addRow('chamadosRecebidos')}
            >
              Adicionar Chamado Recebido
            </button>
          </div>

          <div className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold text-[#3affbc] mb-2 uppercase tracking-wide">Painéis</h2>
            <p className="text-white text-sm mb-2 text-justify">
              A atualização dos painéis é de responsabilidade do técnico, durante a visita na
              unidade o técnico deve tirar foto dos painéis e atualizar as informações na ficha da
              unidade
            </p>
            <div id="paineis-container" className="space-y-3">
              {paineis.map((_, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  <input
                    type="text"
                    name="painel_modelo"
                    placeholder="Modelo"
                    className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc]"
                  />
                  <input
                    type="text"
                    name="painel_localizacao"
                    placeholder="Localização"
                    className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc]"
                  />
                  <input
                    type="text"
                    name="painel_status"
                    placeholder="Status"
                    className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc]"
                  />
                  <input
                    type="text"
                    name="painel_anydesk"
                    placeholder="Anydesk"
                    className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc]"
                  />
                  <input
                    type="text"
                    name="painel_chamador"
                    placeholder="Local Chamador"
                    className="bg-[#322b44] text-white px-4 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#3affbc]"
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              className="bg-[#3affbc] text-black px-4 py-2 rounded font-semibold uppercase tracking-wide hover:bg-[#9fffdf] transition-all hover:-translate-y-0.5"
              onClick={() => addRow('paineis')}
            >
              Adicionar Painel
            </button>
          </div>

          <button 
            type="submit" 
            className="mt-10 w-full bg-[#3affbc] text-black px-6 py-3 rounded font-bold text-lg uppercase tracking-wide shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-[#9fffdf] hover:scale-105 transition-all duration-300"
          >
            Gerar PDF
          </button>
        </form>
      </div>
    </Layout>
  );
}
