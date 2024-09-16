import GovComponent from '@/app/components/GovComponent';
import { govInterfaces } from '@/app/page';

export default function GovPage({ params }: { params: { id: string } }) {
  const selectedInterface = Object.values(govInterfaces).find(item => item.id === params.id);
  
  if (!selectedInterface) {
    return <div className="container mx-auto px-4 py-8 text-center">Interface not found</div>;
  }

  return <GovComponent defaultPrompt={`Generate a policy for ${selectedInterface.title}`} />;
}