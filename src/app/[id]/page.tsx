import { notFound } from 'next/navigation';
import GovComponent from '@/app/components/GovComponent';
import { govInterfaces } from '@/app/page';

export default function GovPage({ params }: { params: { id: string } }) {
  const selectedInterface = govInterfaces[params.id as keyof typeof govInterfaces];
  
  if (!selectedInterface) {
    notFound();
  }

  return <GovComponent defaultPrompt={`Generate a policy for ${selectedInterface.title}`} />;
}