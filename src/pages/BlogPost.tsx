
import { useParams, Link } from 'react-router-dom';
import { usePost } from '@/services/wordpressApi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, isError } = usePost(slug || '');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <Link to="/blog" className="inline-flex mb-8">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {isLoading ? (
            <div className="max-w-3xl mx-auto">
              <div className="h-12 bg-gray-200 rounded mb-8 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded mb-4 w-48 animate-pulse"></div>
              <div className="h-64 bg-gray-200 rounded mb-8 animate-pulse"></div>
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          ) : isError ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Unable to load this blog post. It may have been removed or is temporarily unavailable.
              </p>
              <Link to="/blog" className="mt-4 inline-block">
                <Button>Back to Blog</Button>
              </Link>
            </div>
          ) : post ? (
            <article className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display text-brand-blue-600">
                <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </h1>

              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.date)}
                </div>
                {post._embedded?.author?.[0] && (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {post._embedded?.author?.[0]?.name}
                  </div>
                )}
              </div>

              {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                <div className="mb-8 rounded-xl overflow-hidden">
                  <img
                    src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                    alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || 'Featured image'}
                    className="w-full h-auto"
                  />
                </div>
              )}

              <div 
                className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-brand-blue-600"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </article>
          ) : null}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
