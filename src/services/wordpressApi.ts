
import { useQuery } from '@tanstack/react-query';

export interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  slug: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
      avatar_urls: {
        [key: string]: string;
      };
    }>;
  };
}

// Base URL for the WordPress site - replace with your actual WordPress site URL
const WP_API_URL = 'https://glpone.com/cms/wp-json/wp/v2';

export const fetchPosts = async (page = 1, perPage = 10) => {
  const response = await fetch(
    `${WP_API_URL}/posts?_embed=author,wp:featuredmedia&page=${page}&per_page=${perPage}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return {
    posts: await response.json() as WordPressPost[],
    totalPages: parseInt(response.headers.get('X-WP-TotalPages') || '1'),
  };
};

export const fetchPostBySlug = async (slug: string) => {
  const response = await fetch(
    `${WP_API_URL}/posts?slug=${slug}&_embed=author,wp:featuredmedia`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  
  const posts = await response.json() as WordPressPost[];
  
  if (posts.length === 0) {
    throw new Error('Post not found');
  }
  
  return posts[0];
};

export const usePosts = (page = 1, perPage = 10) => {
  return useQuery({
    queryKey: ['posts', page, perPage],
    queryFn: () => fetchPosts(page, perPage),
  });
};

export const usePost = (slug: string) => {
  return useQuery({
    queryKey: ['post', slug],
    queryFn: () => fetchPostBySlug(slug),
    enabled: !!slug,
  });
};
