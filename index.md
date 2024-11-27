---
layout: home
title: "Course Directory"
---

<!-- Tailwind CSS integration -->
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@^3/dist/tailwind.min.css" rel="stylesheet">

<div class="min-h-screen bg-gray-50">
  <!-- Instructor Hero Section -->
  <section class="bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 py-16">
      <div class="flex flex-col md:flex-row gap-12 items-center">
        <div class="relative w-40 h-40 md:w-48 md:h-48">
          <img src="/assets/img/instructor.jpg" alt="Instructor Image" class="rounded-full object-cover shadow-lg ring-4 ring-gray-50">
        </div>
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">Course Directory</h1>
          <p class="text-xl text-gray-600 mb-6">
            AI/ML Adjunct Faculty at Northeastern University. Teaching computer science and data science courses with a focus on algorithms, machine learning, and AI applications.
          </p>
          <div class="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="mailto:zh.lu@northeastern.edu" class="inline-flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200" aria-label="Send email">
              <svg class="w-4 h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 13L2 6.76V18a1 1 0 001 1h18a1 1 0 001-1V6.76L12 13z"></path><path d="M22 6H2l10 7 10-7z"></path></svg>
              Email
            </a>
            <a href="#" class="inline-flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200" aria-label="View GitHub profile">
              <svg class="w-4 h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-3.16 19.48c.5.09.68-.22.68-.5v-1.77c-2.77.6-3.36-1.34-3.36-1.34-.46-1.17-1.11-1.49-1.11-1.49-.91-.62.07-.61.07-.61a2.5 2.5 0 011.82 1.21 2.55 2.55 0 003.51.99 2.55 2.55 0 01.76-1.6c-2.22-.25-4.56-1.11-4.56-4.95A3.88 3.88 0 017.55 7.1a3.6 3.6 0 01.1-3.01s.83-.27 2.73 1.04a9.27 9.27 0 015 0c1.89-1.31 2.72-1.04 2.72-1.04a3.61 3.61 0 01.1 3.01 3.88 3.88 0 011.07 2.68c0 3.85-2.34 4.7-4.57 4.95.36.31.69.91.69 1.85v2.73c0 .27.18.58.68.49A10 10 0 0012 2z"></path></svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Course Listing Section -->
  <section class="py-12">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Search and Filters -->
      <div class="mb-8 space-y-4">
        <div class="relative">
          <input type="text" placeholder="Search courses..." class="w-full px-12 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" aria-label="Search courses">
          <svg class="absolute left-4 top-3.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 21l-6-6"></path><circle cx="11" cy="11" r="8"></circle></svg>
        </div>
      </div>

      <!-- Course Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" role="list" aria-label="Course list">
        {% for course in site.data.courses %}
        <article class="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100 hover:border-gray-200" role="article" aria-labelledby="course-title-{{ course.id }}">
          <div class="relative h-48 overflow-hidden">
            <img src="{{ course.image }}" alt="{{ course.title }} course thumbnail" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300">
            <div class="absolute top-4 right-4">
              <span class="px-3 py-1 rounded-full text-sm font-medium {% if course.status == 'Active' %}bg-green-100 text-green-800{% else %}bg-gray-100 text-gray-800{% endif %}">
                {{ course.status }}
              </span>
            </div>
          </div>
          <div class="p-6">
            <div class="mb-4">
              <div class="text-sm font-medium text-gray-500 mb-1">{{ course.code }}</div>
              <h3 id="course-title-{{ course.id }}" class="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{{ course.title }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-2">{{ course.description }}</p>
            </div>

            <div class="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"></circle></svg>
                {{ course.term }}
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 21l-6-6"></path></svg>
                {{ course.level }}
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="8"></circle></svg>
                {{ course.enrollmentCount }} students
              </div>
            </div>
            <a href="/courses/{{ course.code | downcase }}" class="inline-flex items-center text-blue-600 hover:text-blue-800 group" aria-label="View details for {{ course.title }}">
              View Course Details
              <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18l6-6-6-6"></path></svg>
            </a>
          </div>
        </article>
        {% endfor %}
      </div>

      <!-- Empty State -->
      {% if site.data.courses.size == 0 %}
      <div class="text-center py-12">
        <p class="text-gray-600">No courses found matching your criteria. Try adjusting your filters.</p>
      </div>
      {% endif %}
    </div>
  </section>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.2/alpine.min.js"></script>
