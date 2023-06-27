'use client';
import { useState, useEffect } from 'react';
import LoadingPage from './loading';
import Link from 'next/link';
import Courses from './components/Courses';
import CourseSearch from './components/CourseSearch';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }


  return (
    <>
      <h1>Welcome to Daniel's HomePage.</h1>
      <h2>Here are some of my courses:</h2>
      <CourseSearch getSearchResults={(results) => setCourses(results)}/>
      <Courses courses={courses} />
    </>
  )
}

export default HomePage