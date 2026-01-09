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
      <section className="mb-8 md:mb-12 text-center max-w-5xl mx-auto px-4">
        <div>
          <h4 className="text-2xl sm:text-3xl font-bold text-[#3affbc] mb-4">Bem-vindo(a), ao Operações HUB!</h4>
          <p className="text-white text-sm sm:text-base">
            <br /> Aqui você encontrará as ferramentas e recursos necessários para facilitar suas
            atividades diárias.
            <br /> Utilize as opções abaixo para acessar sistemas, relatórios e serviços:
          </p>
        </div>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto px-4">
        {links.map((link) => (
          <div key={link.id} className="flex flex-col items-center">
            <a
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              id={link.id}
              className="hover:scale-110 transition-transform duration-300 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center"
            >
              <img
                className="w-full h-full object-contain" 
                src={link.image} 
                alt={link.title}
              />
            </a>
            <h3 className="mt-2 text-center text-[#3affbc] font-semibold text-xs sm:text-sm">{link.title}</h3>
          </div>
        ))}
      </div>
    </Layout>
  );
}
