document.addEventListener("DOMContentLoaded", function () {
  // Add the new course code filter element
  const courseCodeFilter = document.getElementById("courseCodeFilter");
  const searchInput = document.getElementById("searchInput");
  const levelFilter = document.getElementById("levelFilter");
  const semesterFilter = document.getElementById("semesterFilter");
  const statusFilter = document.getElementById("statusFilter");
  const universityFilter = document.getElementById("universityFilter");
  const campusFilter = document.getElementById("campusFilter");
  const noCoursesMessage = document.getElementById("noCoursesMessage");
  const courseGrid = document.getElementById("courseGrid");

  function filterCourses() {
    const searchValue = searchInput.value.toLowerCase();
    const courseCodeValue = courseCodeFilter.value;  // Add this line
    const levelValue = levelFilter.value;
    const semesterValue = semesterFilter.value;
    const statusValue = statusFilter.value;
    const universityValue = universityFilter.value;
    const campusValue = campusFilter.value;

    const courses = document.querySelectorAll(".course-card");
    let visibleCount = 0;

    courses.forEach((course) => {
      const title = course.getAttribute("data-title").toLowerCase();
      const code = course.getAttribute("data-code");  // No toLowerCase() here since we want exact match
      const description = course.getAttribute("data-description").toLowerCase();
      const level = course.getAttribute("data-level");
      const semester = course.getAttribute("data-semester");
      const status = course.getAttribute("data-status");
      const university = course.getAttribute("data-university");
      const campus = course.getAttribute("data-campus");

      const matchesSearch =
        title.includes(searchValue) || 
        code.toLowerCase().includes(searchValue) || 
        description.includes(searchValue);
        
      // Add course code matching
      const matchesCourseCode = courseCodeValue === "all" || code === courseCodeValue;
      
      const matchesLevel = levelValue === "all" || level === levelValue;
      const matchesSemester = semesterValue === "all" || semester === semesterValue;
      const matchesStatus = statusValue === "all" || status === statusValue;
      const matchesUniversity = universityValue === "all" || university === universityValue;
      const matchesCampus = campusValue === "all" || campus === campusValue;

      if (matchesSearch && 
          matchesCourseCode &&    // Add this condition
          matchesLevel && 
          matchesSemester && 
          matchesStatus && 
          matchesUniversity && 
          matchesCampus) {
        course.classList.remove("hidden");
        visibleCount++;
      } else {
        course.classList.add("hidden");
      }
    });

    noCoursesMessage.classList.toggle("hidden", visibleCount > 0);
    courseGrid.classList.toggle("hidden", visibleCount === 0);
  }

  // Add the new event listener
  courseCodeFilter.addEventListener("change", filterCourses);
  
  // Existing event listeners
  searchInput.addEventListener("keyup", filterCourses);
  levelFilter.addEventListener("change", filterCourses);
  semesterFilter.addEventListener("change", filterCourses);
  statusFilter.addEventListener("change", filterCourses);
  universityFilter.addEventListener("change", filterCourses);
  campusFilter.addEventListener("change", filterCourses);
});