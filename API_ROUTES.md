# API Routes para Backend

Este arquivo documenta as API routes criadas para o projeto Next.js.

## Estrutura

```
app/
  api/
    [sua-rota]/
      route.ts
```

## Exemplos de Uso

### GET Request
```tsx
// app/api/users/route.ts
export async function GET(request: Request) {
  return Response.json({ users: [] });
}
```

### POST Request
```tsx
// app/api/users/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  return Response.json({ success: true });
}
```

## Autenticação

Se precisar de autenticação:
```tsx
// Exemplo com NextAuth
import { getServerSession } from "next-auth/next";

export async function GET(request: Request) {
  const session = await getServerSession();
  
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }
  
  return Response.json({ data: "..." });
}
```

## Banco de Dados

Se tinha banco SQLite no Express.js, migre para:
- **Prisma** (recomendado)
- **TypeORM**
- **Drizzle**

### Exemplo com Prisma
```bash
npm install @prisma/client
npm install -D prisma
npx prisma init
```

---

Para mais informações: [Next.js API Routes Docs](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
