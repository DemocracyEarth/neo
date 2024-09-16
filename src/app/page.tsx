import Link from 'next/link';

export const govInterfaces = {
  economic: { id: 'economic', title: 'Economic Policy', icon: '💰' },
  social: { id: 'social', title: 'Social Welfare', icon: '🤝' },
  environmental: { id: 'environmental', title: 'Environmental', icon: '🌳' },
  education: { id: 'education', title: 'Education', icon: '🎓' },
  healthcare: { id: 'healthcare', title: 'Healthcare', icon: '🏥' },
  infrastructure: { id: 'infrastructure', title: 'Infrastructure', icon: '🏗️' },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">GovAI Interfaces</h1>
        <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(govInterfaces).map((item) => (
            <Link href={`/gov/${item.id}`} key={item.id} className="block">
              <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                <p className="text-5xl mb-4">{item.icon}</p>
                <h2 className="text-xl font-semibold">{item.title}</h2>
              </article>
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
}