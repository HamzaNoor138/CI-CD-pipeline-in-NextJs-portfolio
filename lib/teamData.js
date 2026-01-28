import teamData from '../app/data/team.json';

export async function getTeamData() {
  // In a real app, this could fetch from an API or database
  // For now, we'll return the static data
  return teamData;
}

export async function getMemberBySlug(slug) {
  const teamData = await getTeamData();
  return teamData.find(member => member.slug === slug);
}
