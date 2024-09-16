import { notFound } from 'next/navigation';
import Link from 'next/link';
import GovComponent from '@/components/GovComponent';

const govInterfaces = {
  economic: { title: 'Economic Policy', prompt: 'Discuss economic policies and their impacts.' },
  social: { title: 'Social Welfare', prompt: 'Explore social welfare programs and their effects.' },
  environmental: { title: 'Environmental', prompt: 'Analyze environmental policies and sustainability efforts.' },
  education: { title: 'Education', prompt: 'Examine education systems and potential improvements.' },
  healthcare: { title: 'Healthcare', prompt: 'Discuss healthcare policies and public health initiatives.' },
  infrastructure: { title: 'Infrastructure', prompt: 'Explore infrastructure development and urban planning.' },
};

export default function GovPage({ params }: { params: { id: string } }) {
  const interface = govInterfaces[params.id as keyof typeof govInterfaces];

  if (!interface) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          &larr; Back to Main Menu
        </Link>
        <h1 className="text-3xl font-bold mb-6">{interface.title} GovAI Interface</h1>
        <GovComponent defaultPrompt={interface.prompt} />
      </div>
    </div>
  );
}