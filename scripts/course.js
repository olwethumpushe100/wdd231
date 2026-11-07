// Course list for the Web and Computer Programming certificate.
// Change "completed" to true for every course you have finished.
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

const courseList = document.querySelector("#course-list");
const totalCredits = document.querySelector("#total-credits");
const filterButtons = document.querySelectorAll(".filter-button");

// Build one card for every course in the array it receives
function displayCourses(courseArray) {
  courseList.innerHTML = "";

  courseArray.forEach(course => {
    const item = document.createElement("li");
    item.classList.add("course-card");
    if (course.completed) {
      item.classList.add("completed");
    }

    const code = document.createElement("h3");
    code.textContent = `${course.subject} ${course.number}`;

    const title = document.createElement("p");
    title.classList.add("course-title");
    title.textContent = course.title;

    const credits = document.createElement("p");
    credits.classList.add("course-credits");
    credits.textContent = `${course.credits} credits`;

    item.append(code, title, credits);

    if (course.completed) {
      const status = document.createElement("p");
      status.classList.add("course-status");
      status.textContent = "✓ Completed";
      item.append(status);
    }

    courseList.appendChild(item);
  });

  // The total only counts the courses currently displayed
  const total = courseArray.reduce((sum, course) => sum + course.credits, 0);
  totalCredits.textContent = total;
}

function filterCourses(filter) {
  if (filter === "all") {
    return courses;
  }
  return courses.filter(course => course.subject === filter);
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(other => other.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    displayCourses(filterCourses(button.dataset.filter));
  });
});

// Show every course when the page first loads
displayCourses(courses);
