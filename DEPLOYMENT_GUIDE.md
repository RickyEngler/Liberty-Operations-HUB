# 🚀 Guia de Deployment - Portal Liberty v2.0

## ✅ Pré-requisitos

- Node.js 18+
- npm ou yarn
- Conta Netlify conectada ao repositório GitHub

## 📋 Passos de Deployment

### 1️⃣ **Instalar Dependências**

```bash
npm install
```

Isso irá instalar:
- Next.js 14
- React 18
- Todas as dependências necessárias

### 2️⃣ **Testar Localmente**

```bash
# Desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) e teste todas as páginas.

```bash
# Build para produção (teste local)
npm run build
npm start
```

### 3️⃣ **Fazer Push para Git**

```bash
git add .
git commit -m "Migração para Next.js v2.0"
git push origin main
```

### 4️⃣ **Deploy Automático no Netlify**

**Opção A: Já conectado ao GitHub**
1. Netlify detectará o push automaticamente
2. Build iniciará (confira em Netlify → Deploys)
3. Site será publicado em alguns minutos

**Opção B: Conectar repositório**
1. Vá para [Netlify](https://netlify.com)
2. Clique em "New site from Git"
3. Selecione GitHub e o repositório
4. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - Node version: 18
5. Clique em "Deploy site"

## ⚙️ Variáveis de Ambiente (Netlify)

Se tiver variáveis de ambiente:

1. Vá para **Site settings** → **Build & deploy** → **Environment**
2. Clique em **Edit variables**
3. Adicione suas variáveis:

```env
NEXT_PUBLIC_API_URL=https://seu-dominio.com
```

## 🔧 Configuração do netlify.toml

O arquivo `netlify.toml` já está configurado com:

```toml
[build]
  command = "npm run build"
  functions = "api"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[dev]
  command = "npm run dev"
  port = 3000

[build.environment]
  NODE_VERSION = "18"
```

## 🧪 Checklist Pré-Deploy

- [ ] `npm install` executado
- [ ] `npm run build` sem erros
- [ ] `npm start` rodando localmente
- [ ] Todas as rotas funcionando
- [ ] Links de integração abrindo corretamente
- [ ] Responsividade testada em mobile
- [ ] Variáveis de ambiente configuradas (se necessário)
- [ ] Git push realizado
- [ ] Build no Netlify completado com sucesso

## 📊 Monitorar Deploy

1. Acesse [Netlify Dashboard](https://app.netlify.com)
2. Selecione seu site
3. Vá para **Deploys**
4. Verifique o status do build

### Logs de Build
Se o build falhar:
1. Clique no deploy com erro
2. Vá para **Deploy log**
3. Procure por mensagens de erro
4. Corrija e faça push novamente

## 🔄 Atualizar o Site

Toda vez que fizer push para `main`:

```bash
# Sua alteração local
git add .
git commit -m "Descrição da mudança"
git push origin main

# Netlify detecta automaticamente e faz deploy
```

## 🌐 Domínio Customizado

1. Vá para **Site settings** → **Domain management**
2. Clique em **Add custom domain**
3. Siga as instruções para configurar DNS
4. HTTPS será ativado automaticamente

## 🆘 Troubleshooting

### ❌ Build falha com "Module not found"
```bash
# Limpe cache e reinstale
rm -rf node_modules package-lock.json
npm install
npm run build
```

### ❌ Imagens não carregam
- Verifique se estão em `public/assets/`
- Use caminho relativo: `/assets/imagens/...`

### ❌ Rotas retornam 404
- Verifique se a página existe em `app/[rota]/page.tsx`
- Netlify pode precisar de rebuild

### ❌ Variáveis de ambiente não funcionam
- Redeploy site no Netlify
- Aguarde 2-3 minutos após configurar variáveis
- Verifique que usa `process.env.NOME_VAR` corretamente

## 📱 Testar em Diferentes Dispositivos

```bash
# Durante npm run dev, acesse de outro dispositivo
http://192.168.x.x:3000
```

Ou use:
- Chrome DevTools (F12 → Device Toggle)
- Responsively App
- Actual Device (mesmo WiFi)

## 🚀 Performance

Após deploy, teste em:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## 📞 Suporte

Se tiver problemas:

1. Confira [Next.js Docs](https://nextjs.org/docs)
2. Confira [Netlify Docs](https://docs.netlify.com)
3. Abra uma issue no repositório

---

**Versão**: 2.0.0  
**Framework**: Next.js 14 + React 18  
**Host**: Netlify  
**Última atualização**: January 9, 2026
