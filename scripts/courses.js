const courses = [
    { code: "CSE 110", name: "Programming Building Blocks", credits: 3, completed: false },
    { code: "CSE 111", name: "Programming with Functions", credits: 3, completed: false },
    { code: "CSE 210", name: "Programming with Classes", credits: 3, completed: false },
    { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: false },
    { code: "WDD 131", name: "Web Frontend Development I", credits: 3, completed: false },
    { code: "WDD 231", name: "Web Frontend Development II", credits: 3, completed: false }
];

function filterCourses(filter = 'all') {
    const filteredCourses = filter === 'all' 
        ? courses 
        : courses.filter(course => course.code.startsWith(filter));
    
    displayCourses(filteredCourses);
    updateCredits(filteredCourses);
}

function displayCourses(coursesToShow) {
    const container = document.getElementById('course-container');
    container.innerHTML = '';
    
    coursesToShow.forEach(course => {
        const card = document.createElement('div');
        card.className = `course-card ${course.completed ? 'completed' : ''}`;
        card.textContent = course.code;
        container.appendChild(card);
    });
}

function updateCredits(coursesToCount) {
    const totalCredits = coursesToCount.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('total-credits').textContent = totalCredits;
}

// Add event listeners to filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => 
            btn.classList.remove('active'));
        
        // Add active class to clicked button
        e.target.classList.add('active');
        
        // Filter courses
        filterCourses(e.target.dataset.filter);
    });
});

// Initial display
filterCourses();