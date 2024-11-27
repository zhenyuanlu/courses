Certainly! Below is a comprehensive `README.md` tailored to your Jekyll-based GitHub Pages project with Tailwind CSS. This README will guide users through understanding, setting up, and contributing to your course webpage project.

---

# Course Directory

![Course Directory Banner](assets/images/banner.jpg)

Welcome to the **Course Directory**! This project is a Jekyll-based website enhanced with Tailwind CSS, designed to showcase a comprehensive directory of courses, including detailed information about each course, instructors, teaching assistants, and guest lecturers. Hosted on GitHub Pages, this site provides an interactive and user-friendly interface for students and faculty alike.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Adding Content](#adding-content)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Responsive Design:** Built with Tailwind CSS for a modern and responsive user interface.
- **Dynamic Course Listings:** Filter and search through courses based on various criteria.
- **Detailed Course Pages:** Each course has its own dedicated page with comprehensive details.
- **Instructor Profiles:** Showcase information about instructors, teaching assistants, and guest lecturers.
- **Markdown & YAML Integration:** Easily manage content with Markdown for pages and YAML for data-driven content.
- **Accessible:** Designed with accessibility in mind, ensuring a better experience for all users.
- **Hosted on GitHub Pages:** Free and reliable hosting directly from your GitHub repository.

## Project Structure

```
.
├── _config.yml
├── _data
│   ├── courses.yml
│   ├── instructors.yml
│   ├── teaching_assistants.yml
│   └── guest_lecturers.yml
├── _includes
│   ├── course_card.html
│   └── filter_button.html
├── _layouts
│   ├── default.html
│   ├── course.html
│   └── home.html
├── _pages
│   ├── index.md
│   └── courses
│       └── cs5800.md
├── assets
│   ├── css
│   │   └── styles.css
│   └── images
│       ├── banner.jpg
│       ├── course_cs5800.jpg
│       ├── instructor_zhenyuan_lu.jpg
│       ├── ta_john_smith.jpg
│       └── guest_alice_chen.jpg
├── postcss.config.js
├── tailwind.config.js
├── package.json
├── Gemfile
└── README.md
```

## Prerequisites

Before setting up the project, ensure you have the following installed on your system:

- **Ruby:** Version 3.3.0
- **Bundler:** Latest version
- **Node.js:** Version 14.x.x or higher
- **npm:** Version 6.x.x or higher
- **Git:** For version control and cloning the repository

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/course-directory.git
cd course-directory
```

### 2. Install Ruby Gems

Ensure you have Bundler installed. If not, install it using:

```bash
gem install bundler
```

Then, install the project's Ruby dependencies:

```bash
bundle install
```

### 3. Install Node.js Dependencies

Navigate to the project root and install the necessary npm packages:

```bash
npm install
```

### 4. Configure Tailwind CSS

Tailwind CSS is already configured in the project. Ensure `tailwind.config.js` and `postcss.config.js` are present and correctly set up.

### 5. Build Tailwind CSS

Build the Tailwind CSS using npm scripts:

- **For Production:**

  ```bash
  npm run build:css
  ```

- **For Development (Watch Mode):**

  ```bash
  npm run watch:css
  ```

## Usage

### Serving the Site Locally

To serve the Jekyll site locally, ensuring that Tailwind CSS is built and watched for changes, you can use the following npm script which runs both Tailwind's watch and Jekyll's serve concurrently:

1. **Install `concurrently`:**

   ```bash
   npm install concurrently --save-dev
   ```

2. **Update `package.json` Scripts:**

   Add the following script to your `package.json`:

   ```json
   "scripts": {
     "build:css": "npx tailwindcss -i ./assets/css/styles.css -o ./assets/css/styles.css --minify",
     "watch:css": "npx tailwindcss -i ./assets/css/styles.css -o ./assets/css/styles.css --watch",
     "serve": "bundle exec jekyll serve",
     "dev": "concurrently \"npm run watch:css\" \"npm run serve\""
   }
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   ```

   This will start both the Tailwind CSS watcher and the Jekyll server. Your site will be accessible at `http://localhost:4000`.

## Adding Content

### 1. Adding a New Course

1. **Update `courses.yml`:**

   Add your new course details in `_data/courses.yml`:

   ```yaml
   - id: 2
     code: "CS5801"
     title: "Advanced Data Structures"
     description: "In-depth exploration of complex data structures and their applications."
     term: "Fall 2024"
     level: "Graduate"
     department: "Computer Science"
     enrollment_count: 80
     image: "/assets/images/course_cs5801.jpg"
     status: "Active"
     schedule: "Tue/Thu 2:00 PM - 3:50 PM"
     location: "West Village H 120"
     prerequisites: "CS4800 - Data Structures"
     objectives:
       - "Understand advanced data structures"
       - "Implement efficient algorithms using complex structures"
       - "Analyze performance and optimization techniques"
     textbooks:
       - title: "Data Structures and Algorithm Analysis"
         authors: "Mark Allen Weiss"
         edition: "4th Edition"
         required: true
     schedule_weeks:
       - week_num: 1
         topic: "Introduction to Advanced Data Structures"
         description: "Overview and importance of advanced data structures."
         materials:
           - "Lecture Slides 1"
           - "Weiss Chapter 1"
         assignments: "HW1 Released"
       # Add more weeks as needed
   ```

2. **Create a Course Page:**

   Create a new Markdown file for the course in `_pages/courses/`, e.g., `_pages/courses/cs5801.md`:

   ```markdown
   ---
   layout: course
   title: "CS5801 - Advanced Data Structures"
   permalink: "/courses/cs5801"
   course:
     {% for course in site.data.courses %}
     {% if course.code == "CS5801" %}
     {{ course | jsonify }}
     {% endif %}
     {% endfor %}
   ---
   ```

### 2. Adding an Instructor

1. **Update `instructors.yml`:**

   Add new instructors in `_data/instructors.yml`:

   ```yaml
   - name: "Dr. Jane Doe"
     role: "Co-Instructor"
     image: "/assets/images/instructor_jane_doe.jpg"
     email: "jane.doe@northeastern.edu"
     office: "177 Huntington Ave, Boston"
     office_hours: "Wednesday 10-12 AM"
     links:
       github: "https://github.com/janedoe"
       linkedin: "https://linkedin.com/in/janedoe"
   ```

### 3. Adding a Teaching Assistant

1. **Update `teaching_assistants.yml`:**

   Add new TAs in `_data/teaching_assistants.yml`:

   ```yaml
   - name: "Emily Clark"
     role: "Teaching Assistant"
     image: "/assets/images/ta_emily_clark.jpg"
     email: "emily.clark@northeastern.edu"
     office_hours: "Friday 1-3 PM"
     section: "Section 2"
   ```

### 4. Adding a Guest Lecturer

1. **Update `guest_lecturers.yml`:**

   Add guest lecturers in `_data/guest_lecturers.yml`:

   ```yaml
   - name: "Dr. Michael Brown"
     title: "Lead Data Scientist, Amazon"
     topic: "Machine Learning in Industry"
     date: "April 20, 2024"
     image: "/assets/images/guest_michael_brown.jpg"
     description: "Insights into the application of machine learning techniques in real-world scenarios."
   ```

## Deployment

This project is set up to be hosted on GitHub Pages. Follow these steps to deploy your site:

1. **Push to GitHub:**

   Ensure your local repository is pushed to GitHub.

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Configure GitHub Pages:**

   - Go to your repository on GitHub.
   - Navigate to **Settings** > **Pages**.
   - Under **Source**, select the branch you want to deploy (e.g., `main`) and the folder (`/root` or `/docs`).
   - Click **Save**.

3. **Set Up GitHub Actions (Optional):**

   To automate the build and deployment process, you can set up GitHub Actions. Refer to the [GitHub Pages Documentation](https://docs.github.com/en/pages) for detailed instructions.

## Troubleshooting

### Common Issues

1. **Jekyll Serve Stuck at Configuration File:**

   - **Solution:** Ensure that all plugins are correctly configured and that there are no syntax errors in `_config.yml`. Running Jekyll in verbose mode can help identify issues.

   ```bash
   bundle exec jekyll serve --verbose
   ```

2. **Tailwind CSS Not Applying:**

   - **Solution:** Make sure that Tailwind CSS is correctly built and linked in your layout files. Verify that `postcss.config.js` and `tailwind.config.js` are properly configured.

   - **Rebuild CSS:**

     ```bash
     npm run build:css
     ```

3. **Missing Dependencies:**

   - **Solution:** Ensure all Ruby gems and npm packages are installed.

   ```bash
   bundle install
   npm install
   ```

4. **Image Not Displaying:**

   - **Solution:** Verify that image paths in your YAML and HTML files are correct and that images are placed in the `assets/images/` directory.

### Further Assistance

If you encounter issues not covered here, consider the following resources:

- **Jekyll Documentation:** [https://jekyllrb.com/docs/](https://jekyllrb.com/docs/)
- **Tailwind CSS Documentation:** [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **GitHub Pages Help:** [https://docs.github.com/en/pages](https://docs.github.com/en/pages)
- **Community Forums:** Engage with communities on [Stack Overflow](https://stackoverflow.com/questions/tagged/jekyll) or the [Jekyll Talk Forum](https://talk.jekyllrb.com/).

## Contributing

Contributions are welcome! Whether it's reporting bugs, suggesting features, or improving documentation, your input is valuable.

### How to Contribute

1. **Fork the Repository:**

   Click the **Fork** button on the repository's GitHub page to create your own copy.

2. **Clone Your Fork:**

   ```bash
   git clone https://github.com/yourusername/course-directory.git
   cd course-directory
   ```

3. **Create a New Branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes and Commit:**

   ```bash
   git add .
   git commit -m "Add feature XYZ"
   ```

5. **Push to Your Fork:**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request:**

   Navigate to your fork on GitHub and click **Compare & pull request**. Provide a clear description of your changes.

### Code of Conduct

Please adhere to the [Code of Conduct](CODE_OF_CONDUCT.md) when contributing to this project.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or feedback, feel free to reach out:

- **Email:** [zh.lu@northeastern.edu](mailto:zh.lu@northeastern.edu)
- **GitHub:** [https://github.com/zhenyuanlu](https://github.com/zhenyuanlu)
- **LinkedIn:** [https://linkedin.com/in/zhenyuanlu](https://linkedin.com/in/zhenyuanlu)

---

Thank you for using the **Course Directory**! We hope this tool enhances your teaching and learning experience.