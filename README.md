# Zenlu  Jekyll Theme (course/event version)

Well, this is a Jekyll theme that I actually have created for my own courses and educational website working with ChatGPT and claude. I named it **Zenlu-course/event** as an educational, event-based, and course-focused theme. Whether you're an instructor managing multiple classes, a conference organizer listing sessions, or a university department showcasing courses. If you like it feel free to use it.

This theme heavily built on Tailwind CSS styling. You can:
- Present courses, workshops, or lectures with rich metadata.
- Manage event schedules and sessions using YAML data files for easy updates.
- Highlight instructors, TAs, and guest speakers in an organized, searchable manner.

## Prerequisites

Before setting up the project, ensure you have the following installed on your system:

- **Ruby:** Version 3.3.0  
  [Download Ruby](https://www.ruby-lang.org/en/downloads/)

- **Bundler:** Latest version  
  Install Bundler if not already installed:
  ```bash
  gem install bundler
  ```

- **Node.js and npm:** Version 14.x.x or higher  
  [Download Node.js](https://nodejs.org/)  
  Verify installation:
  ```bash
  node -v
  npm -v
  ```

- **Git:** For version control and cloning the repository  
  [Download Git](https://git-scm.com/downloads)

## Installation

### 1. Clone the Repository

Clone the repository to your local machine:
```bash
git clone https://github.com/yourusername/course-directory.git
cd course-directory
```

### 2. Install Ruby Gems

Install the project's Ruby dependencies using Bundler:
```bash
bundle install
```

### 3. Install Node.js Dependencies

Navigate to the project root and install the necessary npm packages:
```bash
npm install
```

## Building Tailwind CSS

Tailwind CSS is used for styling the website. To build the Tailwind CSS, use the following npm scripts:

- **For Production Build:**
  ```bash
  npm run build:css
  ```

- **For Development (Watch Mode):**
  ```bash
  npm run watch:css
  ```

### Available Scripts in `package.json`

```json
{
  "scripts": {
    "build:css": "npx tailwindcss -i ./assets/css/styles.css -o ./assets/css/styles.css --minify",
    "watch:css": "npx tailwindcss -i ./assets/css/styles.css -o ./assets/css/styles.css --watch"
  }
}
```

## Serving the Site

After building the Tailwind CSS, you can serve the Jekyll site locally.

### 1. Serve with Jekyll

Run the following command to build and serve the site:
```bash
bundle exec jekyll serve
```
By default, the site will be accessible at `http://localhost:4000`.

### 2. Development Workflow (Optional)

To streamline the development process by running both Tailwind's watch and Jekyll's serve concurrently, you can use a tool like `concurrently`.

#### a. Install `concurrently`
```bash
npm install concurrently --save-dev
```

#### b. Update `package.json` Scripts

Add the following script to your `package.json`:
```json
{
  "scripts": {
    "build:css": "npx tailwindcss -i ./assets/css/styles.css -o ./assets/css/styles.css --minify",
    "watch:css": "npx tailwindcss -i ./assets/css/styles.css -o ./assets/css/styles.css --watch",
    "serve": "bundle exec jekyll serve",
    "dev": "concurrently \"npm run watch:css\" \"npm run serve\""
  }
}
```

#### c. Run the Development Server

Start both the Tailwind CSS watcher and the Jekyll server with:
```bash
npm run dev
```
Your site will be accessible at `http://localhost:4000`, and Tailwind CSS will automatically rebuild when you make changes to your CSS files.


### Description of Key Directories and Files

- **`_config.yml`**: Jekyll configuration file.
- **`_data/`**: Contains YAML files with data for courses, instructors, TAs, and guest lecturers.
- **`_includes/`**: Reusable components like navigation bar and course cards.
- **`_layouts/`**: Layout templates for different page types.
- **`_pages/`**: Markdown files for individual pages like the homepage and course pages.
- **`assets/`**:
  - **`css/`**: Tailwind CSS styles.
  - **`js/`**: JavaScript files for additional functionality.
  - **`images/`**: Image assets used throughout the site.
- **`postcss.config.js`**: Configuration for PostCSS.
- **`tailwind.config.js`**: Configuration for Tailwind CSS.
- **`package.json`**: Node.js dependencies and scripts.
- **`Gemfile`**: Ruby gems dependencies.
- **`README.md`**: Project documentation.

## Acknowledgements

Special thanks to **ChatGPT** and **Claude** for refining all the code.

---

## Troubleshooting

### Common Issues

1. **Jekyll Serve Stuck at Configuration File:**
   - **Solution:** Ensure that all plugins are correctly configured and that there are no syntax errors in `_config.yml`. Run Jekyll in verbose mode to identify issues:
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


