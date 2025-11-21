import React, { Suspense } from 'react';
import SubBanner from '@/components/section/SectionHero';
import SectionRecentBlog from '@/components/section/SectionRecentBlog';
import { getData } from '@/utils/api';
import { CATEGORY_TYPES } from '@/constants/category_type';


export const metadata = {
  title: "Blogs | Anhas Web",
  description: "Explore our insights & stories. Dive into a world of ideas, tips, and updates crafted to inspire and inform. Stay connected with our latest posts!",
  keywords: "Anhas Web blogs, web development insights, technology tips, industry updates, software development articles"
};

export default async function BlogsPage() {
  let category = null;
  let blogs = null;
  const category_type = CATEGORY_TYPES.BLOG;
  try {
    const result = await getData(`categories?category_type=${category_type}`);
    category = result.data;

    const resultBlogs = await getData(`blogs?category_type=${category_type}`);
    blogs = resultBlogs.data;

  } catch (error) {
    console.error("Error fetching blogs data:", error);
  };

  return (
    <>
      <SubBanner
        title="Explore Our Insights & Stories"
        description="Dive into a world of ideas, tips, and updates crafted to inspire and inform. Stay connected with our latest posts!"
        image="/images/about/banner.jpg"
        alt="Our Blogs"
      />
      {blogs == null || category == null ? (
        <p>No blogs found</p>
      ) : (
        <SectionRecentBlog category={category} blogs={blogs} allBlog={true} />
      )}
    </>
  );
}
