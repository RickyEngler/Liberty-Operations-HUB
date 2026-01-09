# Portal Liberty - Portal de Integração da Empresa

> Versão 2.0 - Migrada para Next.js + React

O **Portal de Integração da Empresa** é uma solução desenvolvida para otimizar o trabalho diário dos colaboradores, centralizando todos os links essenciais e as integrações/automação criadas pela equipe de desenvolvimento.

## 🚀 Características

- ✅ **Moderno**: Construído com React 18 e Next.js 14
- ✅ **Responsivo**: Design mobile-first totalmente responsivo
- ✅ **Rápido**: Otimizado para performance com Next.js
- ✅ **Fácil manutenção**: Componentes reutilizáveis e estrutura clara
- ✅ **Hospedado em Netlify**: Deployable diretamente na Netlify

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn

## 🛠️ Instalação e Uso

### Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para Produção

```bash
# Criar build otimizado
npm run build

# Iniciar servidor de produção
npm start
```

## 📁 Estrutura do Projeto

```
.
├── app/                      # Rotas do Next.js (App Router)
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página inicial
│   ├── globals.css          # Estilos globais
│   ├── ferramentas/         # Página de ferramentas
│   ├── registro-atividades/ # Página de registro de atividades
│   ├── paineis-bi/          # Página de painéis BI
│   ├── suporte/             # Página de suporte
│   └── not-found.tsx        # Página 404
├── components/              # Componentes React reutilizáveis
│   ├── Layout.tsx           # Componente de layout
│   ├── Header.tsx           # Cabeçalho
│   ├── Menu.tsx             # Menu de navegação
│   ├── Footer.tsx           # Rodapé
│   ├── pages/               # Componentes de páginas
│   └── *.module.css         # Estilos com CSS Modules
├── public/                  # Arquivos estáticos (imagens, ícones, etc)
│   ├── assets/
│   │   ├── images/
│   │   └── ícones/
│   └── database/
├── package.json             # Dependências do projeto
├── next.config.js           # Configuração do Next.js
├── tsconfig.json            # Configuração do TypeScript
└── netlify.toml             # Configuração para deploy na Netlify
```

## 🎨 Customização

### Cores e Estilos

Os estilos principais estão em:
- `app/globals.css` - Estilos globais
- `components/*.module.css` - Estilos dos componentes

Cores principais:
- Fundo: `#201b2c`
- Secundário: `#322b44`
- Destaque: `#3affbc` (Cyan/Teal)
- Hover: `#9fffdf`

### Adicionar Novas Páginas

1. Crie um novo arquivo em `app/[nome-da-página]/page.tsx`
2. Importe o componente Layout
3. Use o padrão de rotas do Next.js

Exemplo:
```tsx
import Layout from '@/components/Layout';

export default function NovaPage() {
  return (
    <Layout>
      <h1>Minha Nova Página</h1>
    </Layout>
  );
}
```

## 🚀 Deploy

### Netlify

O projeto está configurado para deploy automático na Netlify:

1. Conecte seu repositório no Netlify
2. As configurações estão em `netlify.toml`
3. Build e deploy ocorrem automaticamente

```bash
# Preview de produção localmente
npm run build
npm start
```

## 📱 Responsividade

O projeto suporta:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🔗 Links de Integração

O portal integra com:
- Tangerino (Ponto)
- Outlook (Email)
- Jira (Quadro N2)
- Confluence (Wiki)
- Liberty Health
- Vault
- ToLife
- GLPI
- Moodle

## 📝 Versioning

- **v2.0**: Migração para Next.js + React (Atual)
- **v1.0**: Express.js + HTML estático (Legacy - veja LEGACY.md)

## 📄 Licença

ISC

## 👨‍💻 Autor

Augusto Engler
- GitHub: [RickyEngler](https://github.com/RickyEngler)

---

**Desenvolvido com ❤️ para Liberty TI**
