
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '@/services/wordpressApi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = usePosts(currentPage, 9);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const createExcerpt = (html: string) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    const text = div.textContent || '';
    return text.length > 150 ? text.substring(0, 150) + '...' : text;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display text-brand-blue-600">
            Latest Weight Loss Insights
          </h1>
          <p className="text-xl text-gray-600">
            Expert advice, tips, and success stories to help you on your journey
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg h-80"></div>
            ))}
          </div>
        ) : isError ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              Unable to load blog posts at this time. Please try again later.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data?.posts.map((post) => (
                <Card key={post.id} className="flex flex-col hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                      <div className="aspect-video mb-4 overflow-hidden rounded-md">
                        <img
                          src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                          alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardTitle className="text-xl">
                      <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.date)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4 flex-grow">
                    <p className="text-gray-600">{createExcerpt(post.excerpt.rendered)}</p>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/blog/${post.slug}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Read More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {data?.totalPages > 1 && (
              <div className="flex justify-center mt-12 gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                <div className="flex items-center px-4">
                  Page {currentPage} of {data.totalPages}
                </div>
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, data.totalPages))}
                  disabled={currentPage === data.totalPages}
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
