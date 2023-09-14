import { BlogSection, ContactSection, HeaderSection, ProjectSection } from "@/components/home";
import { i18n, Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { page } = await getDictionary(lang);
  return (
    <>
      <pre>{JSON.stringify(page, null, 2)}</pre>
      <HeaderSection />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
