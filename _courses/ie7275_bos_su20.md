---
layout: course
slug: "ie7275-bos-su20"
title: "Data Mining in Engineering" 
subtitle: "Introduction to data mining and machine learning."
campus: "Boston"
university: "Northeastern University"
course_code: "IE7275"
semester: "Summer 2020"
level: "Graduate"
status: "past"
schedule: "Tue 1:20pm – 03:00pm ET"
dates: "05/04/2020 – 06/25/2020"
location: "Room 409, 225 Terry Ave, or Zoom"
credits: 4
description: "This course covers the theory and applications of data mining in engineering. It reviews fundamentals and key concepts of data mining, discusses important data mining techniques, and presents algorithms for implementing these techniques."

schedule_file: "ie7275_bos_su20"

technologies:
  - r
  - python

course_platform:
  - name: "Canvas"
    url: "https://canvas.northeastern.edu"
  - name: "Piazza"
    url: "https://piazza.com"

instructors:
  - zhenyuan_lu


course_materials:
  - title: "Data Mining and Analysis: Fundamental Concepts and Algorithms <b>(DMA)</b>"
    files:
      - description: "Author: Mohammed J. Zaki and Wagner Meira Jr."
        url: "https://www.cambridge.org/us/academic/subjects/computer-science/pattern-recognition-and-machine-learning/data-mining-and-analysis-fundamental-concepts-and-algorithms?format=HB"
        type: "url"
        importance: "recommended"
  - title: "Introduction to Data Mining <b>(IDM)</b>"
    files:
      - description: "Author: Pang-Ning Tan, Michael Steinbach, and Vipin Kumar"
        url: "https://www.pearson.com/store/p/introduction-to-data-mining/P100000000000292000"
        type: "url"
        importance: "recommended"
  - title: "Data Mining for Business Analytics: Concepts, Techniques, and Applications in R <b>(DMBA)</b>"
    files:
      - description: "Author: Galit Shmueli, et al."
        url: "https://shiny.rstudio.com/tutorial/"
        type: "url"
        importance: "additional"
  - title: "An Introduction to Statistical Learning <b>(ISL)</b>"
    files:
      - description: "Authors: Gareth James, Daniela Witten, Trevor Hastie, and Robert Tibshirani"
        url: "https://www.statlearning.com/"
        type: "url"
        importance: "additional"
  - title: "The Elements of Statistical Learning <b>(ESL)</b>"
    files:
      - description: "Authors: Trevor Hastie, Robert Tibshirani, and Jerome Friedman"
        url: "https://web.stanford.edu/~hastie/ElemStatLearn/"
        type: "url"
        importance: "additional"
  - title: "Machine Learning <b>(ML)</b>"
    files:
      - description: "Author: Tom M. Mitchell"
        url: "http://www.cs.cmu.edu/~tom/mlbook.html"
        type: "url"
        importance: "recommended"
  - title: "Deep Learning <b>(DL)</b>"
    files:
      - description: "Authors: Ian Goodfellow, Yoshua Bengio, and Aaron Courville"
        url: "http://www.deeplearningbook.org/"
        type: "url"
        importance: "recommended"
  - title: "Linear Algebra"
    files:
      - description: "Author: G. Strang. Introduction to Linear Algebra. Wellesley-Cambridge Press, 2009. Ch 1-4."
        url: "https://math.mit.edu/~gs/linearalgebra/ila5/indexila5.html"
        type: "url"
        importance: "supplementary"
  - title: "R Markdown <b>(RMD)</b>"
    files:
      - description: "Author: Xie, Yihui, et al."
        url: "https://bookdown.org/yihui/rmarkdown/"
        type: "url"
        importance: "supplementary"
  - title: "R for Data Science <b>(R4DS)</b>"
    files:
      - description: "Author: Hadley Wickham and Garrett Grolemund"
        url: "https://r4ds.had.co.nz/"
        type: "url"
        importance: "supplementary"

  

---




<!-- Polices-->
{% capture polices %}
Plagiarism, cheating, and any form of unauthorized collaboration will not be tolerated and will be handled in accordance with University policies described in the Student Handbook. For additional information on Northeastern University’s [Academic Integrity Policy](http://www.northeastern.edu/osccr/academic-integrity-policy/){:target="_blank"}.
{% endcapture %}

{% include shared/course_section_gen.html title="Polices" content=polices %}


<div class="mb-8">
<h3 class="text-2xl font-bold mb-4">Course Goals</h3>
  <div class="bg-white rounded-xl p-6 shadow-sm">
  <div class="flex flex-col items-center">
  <img src="{{ '/assets/images/ie7275/goal.png' | relative_url }}" alt="Course Goals" class="max-w-full mb-4 rounded-lg" style="max-height: 400px;">
  <p class="text-gray-700 text-base">Data Mining Work Flowl.</p>
  </div>
  </div>
</div>

<!-- Accomodation -->
{% capture accomodation %}
If you have a disability, I encourage you to contact the [Disability Resource Center](http://www.northeastern.edu/drc/about-the-drc/){:target="_blank"} to register and request accommodations. Also, please discuss your needs with me as early in the semester as possible.
{% endcapture %}
{% include shared/course_section_gen.html title="Accommodations for Students with Disabilities" content=accomodation %}


<!-- Wecare -->
{% capture wecare %}
Eating healthy food, having regular exercise, avoiding alcohol and drugs, getting adequate sleep, and taking time to relax will help you achieve your goals and manage stress.

If you have difficulty keeping up with any materials or homework for personal reasons, please let me know early. If you or your friends/classmates appear to be struggling or having trouble coping with stress, we strongly encourage you to seek support at the [We Care](https://studentlife.northeastern.edu/we-care/){:target="_blank"} program at NEU. At Northeastern, a student is never alone when struggling with a demanding situation.

{% endcapture %}
{% include shared/course_section_gen.html title="Taking Care of Yourself" content=wecare %}

<!-- Homework -->
{% capture homework %}
There are 6 individual homework assignments. Due day will be posted with the homework. Late submission would not be accepted. Please let me know 72 hours in advance before the due day if you need extensions with a reasonable justification.
Requests for regrades in writing will only be accepted no less than 10 days after receiving grade. Please send the instructor your NUID, and name with title “Request for regrade: HW+number” via email. The new grade may be lower than the original one.

Please feel free to refer to any materials from my slides. You may discuss homework with your classmates, but all the assignments are supposed to completed by your own. Sharing of completed solutions will not be tolerated. Plagiarism will be considered, if solutions and project documentations with a very high degree of similarity with other student’s or materials online. Such academic dishonesty will be handled in accordance with university policies.
{% endcapture %}
{% include shared/course_section_gen.html title="Homework" content=homework %}

{% capture projects %}
More details will be posted later in the semester.
{% endcapture %}
{% include shared/course_section_gen.html title="Projects" content=projects %}

<!-- Course Grading-->
<div class="mb-8">
<h3 class="text-2xl font-bold mb-4">Grading</h3>
  <div class="max-w-md bg-white rounded-xl pt-1.5 pb-1.5 pl-8 pr-8 shadow-sm" markdown='1'>
  | Component             | Percentage |
  |-----------------------|------------|
  | **Homework**          | 35%        |
  | **Midterm Exam**     | 20%        |
  | **Final Exam**   | 20%        |
  | **Project** | 15%        |
  | **Class Participation** | 10%       |

  *This course does not have any quizzes or exams.*
  </div>
</div>