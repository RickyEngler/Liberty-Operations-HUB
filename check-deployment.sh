#!/bin/bash

# Script de verificação pré-deploy
# Verifica se o projeto está pronto para produção

echo "🔍 Verificando projeto Liberty Portal v2.0..."
echo ""

# Verificar Node.js
if command -v node &> /dev/null; then
    echo "✅ Node.js: $(node --version)"
else
    echo "❌ Node.js não encontrado"
    exit 1
fi

# Verificar npm
if command -v npm &> /dev/null; then
    echo "✅ npm: $(npm --version)"
else
    echo "❌ npm não encontrado"
    exit 1
fi

echo ""
echo "📦 Verificando dependências..."

# Verificar se node_modules existe
if [ -d "node_modules" ]; then
    echo "✅ Dependências instaladas"
else
    echo "⚠️ Dependências não instaladas. Execute: npm install"
fi

echo ""
echo "📁 Verificando estrutura de arquivos..."

# Verificar arquivos críticos
files_to_check=(
    "package.json"
    "next.config.js"
    "tsconfig.json"
    "netlify.toml"
    "app/layout.tsx"
    "app/page.tsx"
    "components/Layout.tsx"
    "components/Header.tsx"
    "components/Menu.tsx"
    "components/Footer.tsx"
)

all_files_exist=true
for file in "${files_to_check[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (FALTANDO)"
        all_files_exist=false
    fi
done

echo ""

if [ "$all_files_exist" = true ]; then
    echo "🚀 Projeto pronto para deploy!"
    echo ""
    echo "Próximos passos:"
    echo "1. npm install (se ainda não fez)"
    echo "2. npm run build"
    echo "3. npm start (para testar)"
    echo "4. Fazer push para Git"
    echo "5. Deploy automático na Netlify"
else
    echo "⚠️ Alguns arquivos estão faltando!"
    exit 1
fi
