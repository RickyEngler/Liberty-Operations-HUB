import DefaultPage from '@/components/pages/DefaultPage';

export const metadata = {
  title: 'Erro 404 - Portal Liberty',
};

export default function NotFound() {
  return (
    <DefaultPage title="Página não encontrada">
      <p>A página que você está procurando não existe ou foi removida.</p>
      <p>
        <a href="/">Voltar para a página inicial</a>
      </p>
    </DefaultPage>
  );
}
