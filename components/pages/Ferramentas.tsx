'use client';

import Layout from '@/components/Layout';

const tools = [
  {
    id: 'link-obs',
    href: 'https://cdn-fastly.obsproject.com/downloads/OBS-Studio-31.1.2-Windows-x64-Installer.exe',
    image: '/assets/ícones/obs-icon.png',
    title: 'Captura de Vídeo',
  },
  {
    id: 'printscreen',
    href: 'https://github.com/flameshot-org/flameshot/releases/download/v13.0.0/Flameshot-13.0.0-win64.msi',
    image: '/assets/ícones/flameshot-icon.png',
    title: 'PrintScreen',
  },
  {
    id: 'pentaho',
    href: 'https://drive.google.com/uc?export=download&id=1TrU3A3V_HMOuDAOis930kXYG8M6JTloB',
    image: '/assets/ícones/pentaho-icon.png',
    title: 'Pentaho',
  },
  {
    id: 'postman',
    href: 'https://dl.pstmn.io/download/latest/win64',
    image: '/assets/ícones/postaman-icon.png',
    title: 'Postman',
  },
  {
    id: 'vpn',
    href: 'https://drive.google.com/uc?export=download&id=1VqosEEcyMyz-nNH7VMa3_WbN0bL1ukF8',
    image: '/assets/ícones/open-vpn-icon.png',
    title: 'Open VPN',
  },
  {
    id: 'vpn-2',
    href: 'https://drive.google.com/uc?export=download&id=1PSVKwprx4kzudviDApLXniohAJAaJyES',
    image: '/assets/ícones/forti-client-icon.png',
    title: 'Forti Client VPN',
  },
  {
    id: 'dbeaver',
    href: 'https://dbeaver.io/files/dbeaver-ce-latest-x86_64-setup.exe',
    image: '/assets/ícones/dbeaver-icon.png',
    title: 'Banco de Dados',
  },
  {
    id: 'anydesk',
    href: 'https://anydesk.com/pt/downloads/thank-you?dv=win_exe',
    image: '/assets/ícones/ANYDESK-icon.png',
    title: 'AnyDesk',
  },
  {
    id: 'bitdefender',
    href: 'https://drive.google.com/uc?export=download&id=1TBrnwrSawW4JwDO-6dXyFj0jt_96N49L',
    image: '/assets/ícones/bit-defender-icon.png',
    title: 'Anti-Vírus',
  },
  {
    id: 'adb-config',
    href: 'https://drive.google.com/uc?export=download&id=1d8z0K7i-zRfo6lrFR1zpeYCpJcLqaVjA',
    image: '/assets/ícones/adb-config.png',
    title: 'ADB Config',
  },
];

export default function FerramentasPage() {
  return (
    <Layout>
      <section className="mb-8 md:mb-12 text-center max-w-5xl mx-auto px-4">
        <div>
          <h4 className="text-2xl sm:text-3xl font-bold text-[#3affbc] mb-4">Ferramentas</h4>
          <p className="text-white text-sm sm:text-base">
            <br /> Aqui você encontrará as ferramentas e recursos necessários para facilitar suas
            atividades diárias. Utilize as opções abaixo para baixar as ferramentas necessárias:
          </p>
        </div>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto px-4">
        {tools.map((tool) => (
          <div key={tool.id} className="flex flex-col items-center">
            <a
              href={tool.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              id={tool.id}
              className="hover:scale-110 transition-transform duration-300 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center"
            >
              <img
                className="w-full h-full object-contain" 
                src={tool.image} 
                alt={tool.title}
              />
            </a>
            <h3 className="mt-2 text-center text-[#3affbc] font-semibold text-xs sm:text-sm">{tool.title}</h3>
          </div>
        ))}
      </div>
    </Layout>
  );
}
