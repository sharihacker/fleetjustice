import { getArticles } from '../../../lib/articles-data';

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map(article => ({ slug: article.slug }));
}

const ArticlePage = ({ params }) => {
  const { slug } = params;
  // Fetch the article based on slug
  const article = getArticles().find(a => a.slug === slug);

  return (
    <article className="prose prose-invert">
      <h1>{article.title}</h1>
      <div>{article.content}</div>
    </article>
  );
};

export default ArticlePage;
