import { getCollection } from "astro:content";

export const getAllFilesFromSubGuides = async (
  subDirectory: string,
  delimiter?: string
) => {
  const guidesEntries = await getCollection("guides");
  return guidesEntries
    .filter(
      (entry) => !entry.slug.startsWith("index") && entry.slug !== subDirectory
    )
    .map((entry) => ({
      params: {
        slug: entry.slug.replace(
          delimiter ? delimiter + subDirectory : subDirectory + "/",
          ""
        ),
      },
      props: { entry },
    }));
};
