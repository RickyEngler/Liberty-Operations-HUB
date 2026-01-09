'use client';

import Layout from '@/components/Layout';

const links = [
  {
    id: 'link-ponto',
    href: 'https://app.tangerino.com.br/Tangerino/pages/baterPonto/wicket:pageMapName/wicket-1',
    image: '/assets/ícones/sollides ponto.png',
    title: 'Registro de Ponto',
  },
  {
    id: 'email',
    href: 'https://outlook.office.com/mail/',
    image: '/assets/ícones/outlook.png',
    title: 'Email Corporativo',
  },
  {
    id: 'jira',
    href: 'https://libertyti.atlassian.net/jira/servicedesk/projects/N2/boards/122',
    image: '/assets/ícones/jira-icon.png',
    title: 'Quadro N2',
  },
  {
    id: 'confluence',
    href: 'https://libertyti.atlassian.net/wiki/home',
    image: '/assets/ícones/confluencia.png',
    title: 'Confluence',
  },
  {
    id: 'liberty',
    href: 'https://www.libertyhealth.com.br/',
    image: '/assets/ícones/liberty-logo.png',
    title: 'Liberty',
  },
  {
    id: 'vault',
    href: 'https://vault.libertyti.cloud/ui/vault/dashboard',
    image: '/assets/ícones/vault-icon.png',
    title: 'Vault',
  },
  {
    id: 'ToLife',
    href: 'https://gpa.tolife.app/',
    image: '/assets/ícones/ToLife-icon.png',
    title: 'ToLife',
  },
  {
    id: 'glpi',
    href: 'http://10.46.118.66/',
    image: '/assets/ícones/glpi-icon.png',
    title: 'GLPI',
  },
  {
    id: 'moodle',
    href: 'https://universidade.libertyti.com.br/',
    image: '/assets/ícones/liberty-university-icon.png',
    title: 'Moodle',
  },
];

export default function HomePage() {
  return (
    <Layout>
      <section className="mb-8 md:mb-12 max-w-6xl mx-auto px-4">
        <div className="rounded-xl border-b-2 border-[#3affbc] bg-gradient-to-r from-[#322b44] to-[#201b2c] px-5 sm:px-8 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <h4 className="text-2xl sm:text-3xl font-bold text-[#3affbc] mb-3 text-left">Bem-vindo(a), ao Operações HUB!</h4>
          <p className="text-white text-sm sm:text-base text-left max-w-3xl">
            Aqui você encontrará as ferramentas e recursos necessários para facilitar suas atividades diárias.
            Utilize as opções abaixo para acessar sistemas, relatórios e serviços:
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {links.map((link) => (
          <div
            key={link.id}
            className="flex flex-col items-center rounded-xl bg-[rgba(58,255,188,0.06)] border border-transparent hover:border-[#3affbc] hover:shadow-[0_10px_30px_rgba(58,255,188,0.2)] transition-all duration-300 px-4 py-5"
          >
            <a
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              id={link.id}
              className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <img
                className="w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" 
                src={link.image} 
                alt={link.title}
              />
            </a>
            <h3 className="mt-3 text-center text-[#3affbc] font-semibold text-xs sm:text-sm hover:text-[#9fffdf] transition-colors">
              {link.title}
            </h3>
          </div>
        ))}
      </div>
    </Layout>
  );
}
