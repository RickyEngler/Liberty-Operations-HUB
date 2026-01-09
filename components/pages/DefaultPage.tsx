'use client';

import Layout from '@/components/Layout';

interface PageProps {
  title: string;
  children: React.ReactNode;
}

export default function DefaultPage({ title, children }: PageProps) {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3affbc] mb-6 md:mb-8">{title}</h1>
        <div className="text-white">{children}</div>
      </div>
    </Layout>
  );
}
