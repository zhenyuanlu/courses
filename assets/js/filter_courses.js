document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const levelFilter = document.getElementById("levelFilter");
    const semesterFilter = document.getElementById("semesterFilter");
    const statusFilter = document.getElementById("statusFilter");
    const noCoursesMessage = document.getElementById("noCoursesMessage");
    const courseGrid = document.getElementById("courseGrid");
  
    function filterCourses() {
      const searchValue = searchInput.value.toLowerCase();
      const levelValue = levelFilter.value;
      const semesterValue = semesterFilter.value;
      const statusValue = statusFilter.value;
  
      const courses = document.querySelectorAll(".course-card");
      let visibleCount = 0;
  
      courses.forEach((course) => {
        const title = course.getAttribute("data-title").toLowerCase();
        const code = course.getAttribute("data-code").toLowerCase();
        const description = course.getAttribute("data-description").toLowerCase();
        const level = course.getAttribute("data-level");
        const semester = course.getAttribute("data-semester");
        const status = course.getAttribute("data-status");
  
        const matchesSearch =
          title.includes(searchValue) || code.includes(searchValue) || description.includes(searchValue);
        const matchesLevel = levelValue === "all" || level === levelValue;
        const matchesSemester = semesterValue === "all" || semester === semesterValue;
        const matchesStatus = statusValue === "all" || status === statusValue;
  
        if (matchesSearch && matchesLevel && matchesSemester && matchesStatus) {
          course.classList.remove("hidden");
          visibleCount++;
        } else {
          course.classList.add("hidden");
        }
      });
  
      noCoursesMessage.classList.toggle("hidden", visibleCount > 0);
      courseGrid.classList.toggle("hidden", visibleCount === 0);
    }
  
    // Attach event listeners
    searchInput.addEventListener("keyup", filterCourses);
    levelFilter.addEventListener("change", filterCourses);
    semesterFilter.addEventListener("change", filterCourses);
    statusFilter.addEventListener("change", filterCourses);
  });
  