import { Suspense } from 'react';
import { getTeamData } from '@/lib/teamData';
import SmartHeader from './SmartHeader';
import MemberContent from './MemberContent';
import Loading from './loading';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const teamData = await getTeamData();
  const member = teamData.find(m => m.slug === slug);

  if (!member) {
    return {
      title: 'Member Not Found',
      description: 'The requested team member could not be found.'
    };
  }

  return {
    title: `${member.name} - ${member.role} | Portfolio`,
    description: member.description || `Professional portfolio of ${member.name}, a ${member.role} with expertise in modern web technologies.`,
    keywords: ['portfolio', 'developer', 'full-stack', 'web development', 'React', 'Next.js', 'MERN stack'],
    authors: [{ name: member.name }],
    openGraph: {
      title: `${member.name} - ${member.role}`,
      description: member.description || `Professional portfolio of ${member.name}`,
      type: 'website',
      images: [
        {
          url: member.image,
          width: 800,
          height: 600,
          alt: member.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${member.name} - ${member.role}`,
      description: member.description || `Professional portfolio of ${member.name}`,
      images: [member.image],
    },
  };
}

export default async function MemberLayout({ children, params }) {
  const { slug } = await params;
  const teamData = await getTeamData();
  const member = teamData.find(m => m.slug === slug);

  if (!member) {
    return <div>Member not found</div>;
  }

  const navItems = ['Home', 'Services', 'Skills', 'Projects', 'About', 'Contact'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <SmartHeader slug={slug} navItems={navItems} contact={member.contact} />
      <main className="pt-16 xs:pt-20 sm:pt-24 min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </main>
    </div>
  );
}
