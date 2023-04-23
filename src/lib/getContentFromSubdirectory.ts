import { getCollection } from "astro:content";

export const getAllFilesFromSubDir = async (
  subDirectory: string,
  subDirectoryPrefix: string,
  delimiter?: string
) => {
  const subDirContent = await getCollection(subDirectory as any);
  return subDirContent
    .filter(
      (entry) =>
        !entry.slug.startsWith("index") && entry.slug !== subDirectoryPrefix
    )
    .map((entry) => ({
      params: {
        slug: entry.slug.replace(
          delimiter ? delimiter + subDirectoryPrefix : subDirectoryPrefix + "/",
          ""
        ),
      },
      props: { entry },
    }));
};
