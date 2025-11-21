import React, { Suspense } from 'react';
import Home from './Home';
import { getData } from '@/utils/api';
import { CATEGORY_TYPES } from '@/constants/category_type';

export default async function HomePage() {
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
  }
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Home category={category} blogs={blogs} />
      </Suspense>
    </>
  );
}