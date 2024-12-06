---
layout: course
slug: "ie6600-sea-sp23"
title: "Computation and Visualization for Analytics" 
subtitle: "Introduction to data visualization using R and Shiny"
campus: "Boston"
university: "Northeastern University"
course_code: "IE6600"
semester: "Spring 2023"
level: "Graduate"
status: "past"
schedule: "Tue, Fri 09:50am - 11:30am PT"
dates: "01/09/2023 – 04/14/2023"
location: "Room 305, 225 Terry Ave "
credits: 4
description: "This course covers basic of the R, and R Shiny for data preprocessing, and visualization. It introduces students to static and interactive visualization, dashboard, and platform that reveal information, patterns, interactions, and comparisons by paying attention to details such as color encoding, a shape selection, spatial layout, and annotation. Based on these fundamentals of analytical and creative thinking, the course then focuses on data visualization techniques and the use of the most current popular software tools that support data exploration, analytics-based storytelling and knowledge discovery, and decision-making in engineering, healthcare operations, manufacturing, and related applications."

schedule_file: "ie6600_sea_sp23"

technologies:
  - r
  - shiny
  - tableau

course_platform:
  - name: "Canvas"
    url: "https://canvas.northeastern.edu"
  - name: "Piazza"
    url: "https://piazza.com"


instructors:
  - zhenyuan_lu
teaching_assistants:
  - sharayu_thosar
  - wenwei_li


course_materials:
  - title: "R For Data Science (<b>R4DS</b>)"
    files:
      - description: "Author: Wickham, Hadley, and Garrett Grolemund"
        url: "https://r4ds.had.co.nz/"
        type: "url"
        importance: "required"
  - title: "Shiny Tutorial"
    files:
      - description: "RStudio Shiny Tutorial"
        url: "https://shiny.rstudio.com/tutorial/"
        type: "url"
        importance: "additional"
  - title: "Tableau Public Knowledge Base"
    files:
      - description: "Tableau Public Knowledge Base"
        url: "http://kb.tableau.com/"
        type: "url"
        importance: "additional"
  - title: "R For Everyone <b>(RFE)</b>"
    files:
      - description: "Author: Lander, Jared P."
        url: "https://onesearch.library.northeastern.edu/permalink/f/365rt0/NEU_ALMA51284955070001401"
        type: "url"
        importance: "additional"
  - title: "R Markdown <b>(RMD)</b>"
    files:
      - description: "Author: Xie, Yihui, et al."
        url: "https://bookdown.org/yihui/rmarkdown/"
        type: "url"
        importance: "recommended"
  - title: "R Graphics Cookbook <b>(RGC)</b>"
    files:
      - description: "Author: Chang, Winston"
        url: "https://r-graphics.org/"
        type: "url"
        importance: "additional"
  - title: "Advanced R <b>(ADR)</b>" 
    files:
      - description: "Author: Wickham, Hadley"
        url: "http://adv-r.had.co.nz/"
        type: "url"
        importance: "recommended"
  - title: "R Packages <b>(RPK)</b>" 
    files:
      - description: "Author: Wickham, Hadley"
        url: "http://r-pkgs.had.co.nz/"
        type: "url"
        importance: "additional"
  - title: "Text Mining with R <b>(TM)</b>" 
    files:
      - description: "Authors: Silge, Julia, and David Robinson"
        url: "https://www.tidytextmining.com/"
        type: "url"
        importance: "recommended"
  


grading:
  categories:
    - name: "Homework"
      percentage: 42
      items: ["6 homework assignments", "No late submissions"]
    - name: "Final Project"
      percentage: 50
      items: ["Proposal: 10%", "Presentation: 40%"]
    - name: "Class Participation"
      percentage: 8
      items: ["Class discussions", "Piazza participation"]


---




<!-- Polices-->
{% capture polices %}
Plagiarism, cheating, and any form of unauthorized collaboration will not be tolerated and will be handled in accordance with University policies described in the Student Handbook. For additional information on Northeastern University’s [Academic Integrity Policy](http://www.northeastern.edu/osccr/academic-integrity-policy/){:target="_blank"}.
{% endcapture %}

{% include course_section_gen.html title="Polices" content=polices %}


<div class="mb-8">
<h3 class="text-2xl font-bold mb-4">Course Goals</h3>
  <div class="bg-white rounded-xl p-6 shadow-sm">
  <div class="flex flex-col items-center">
  <img src="{{ '/assets/images/ie6600/goal.png' | relative_url }}" alt="Course Goals" class="max-w-full mb-4 rounded-lg" style="max-height: 400px;">
  <p class="text-gray-700 text-base">R For Data Science, Wickham, Hadley, and Garrett Grolemund</p>
  </div>
  </div>
</div>

<!-- Accomodation -->
{% capture accomodation %}
If you have a disability, I encourage you to contact the [Disability Resource Center](http://www.northeastern.edu/drc/about-the-drc/){:target="_blank"} to register and request accommodations. Also, please discuss your needs with me as early in the semester as possible.
{% endcapture %}
{% include course_section_gen.html title="Accommodations for Students with Disabilities" content=accomodation %}


<!-- Wecare -->
{% capture wecare %}
Eating healthy food, having regular exercise, avoiding alcohol and drugs, getting adequate sleep, and taking time to relax will help you achieve your goals and manage stress.

If you have difficulty keeping up with any materials or homework for personal reasons, please let me know early. If you or your friends/classmates appear to be struggling or having trouble coping with stress, we strongly encourage you to seek support at the [We Care](https://studentlife.northeastern.edu/we-care/){:target="_blank"} program at NEU. At Northeastern, a student is never alone when struggling with a demanding situation.

{% endcapture %}
{% include course_section_gen.html title="Taking Care of Yourself" content=wecare %}

<!-- Homework -->
{% capture homework %}
There are 6 individual homework assignments. Due day will be posted with the homework. Late submission would not be accepted. Please let me know 72 hours in advance before the due day if you need extensions with a reasonable justification.
Requests for regrades in writing will only be accepted no less than 10 days after receiving grade. Please send the instructor your NUID, and name with title “Request for regrade: HW+number” via email. The new grade may be lower than the original one.

Please feel free to refer to any materials from my slides. You may discuss homework with your classmates, but all the assignments are supposed to completed by your own. Sharing of completed solutions will not be tolerated. Plagiarism will be considered, if solutions and project documentations with a very high degree of similarity with other student’s or materials online. Such academic dishonesty will be handled in accordance with university policies.
{% endcapture %}
{% include course_section_gen.html title="Homework" content=homework %}

{% capture projects %}
More details will be posted later in the semester.
{% endcapture %}
{% include course_section_gen.html title="Projects" content=projects %}

<!-- Course Grading-->
<div class="mb-8">
<h3 class="text-2xl font-bold mb-4">Grading</h3>
  <div class="max-w-md bg-white rounded-xl pt-1.5 pb-1.5 pl-8 pr-8 shadow-sm" markdown='1'>
  | Component             | Percentage |
  |-----------------------|------------|
  | **Homework**          | 42%        |
  | **Final Project**     | 50%        |
  | &nbsp;&nbsp;&nbsp;&nbsp;Proposal   | 10%        |
  | &nbsp;&nbsp;&nbsp;&nbsp;Presentation | 40%        |
  | **Class Participation** | 8%       |

  *This course does not have any quizzes or exams.*
  </div>
</div>