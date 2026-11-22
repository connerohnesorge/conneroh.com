import { getCollection, render } from "astro:content";

/** Groups in display order, each with its featured projects. Fails the build on an empty group. */
export async function groupsWithProjects() {
  const [groups, projects] = await Promise.all([getCollection("groups"), getCollection("projects")]);
  return groups
    .sort((a, b) => a.data.order - b.data.order)
    .map((g) => {
      const items = projects
        .filter((p) => p.data.featured && p.data.groups.some((r) => r.id === g.id))
        .sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
      if (items.length === 0) throw new Error(`Group "${g.id}" has no featured projects. Tag a project with it or remove it from groups.yaml.`);
      return { id: g.id, summary: g.data.summary, items };
    });
}

export async function experience() {
  return (await getCollection("experience")).sort((a, b) => a.data.order - b.data.order);
}

export async function posts() {
  return (await getCollection("posts")).sort((a, b) => b.data.created.valueOf() - a.data.created.valueOf());
}

export { render };

export const ym = (d: Date) => d.toISOString().slice(0, 7);
export const ymd = (d: Date) => d.toISOString().slice(0, 10);
