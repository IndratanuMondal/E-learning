document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { id: 1, title: 'Introduction to JavaScript', description: 'Learn the basics of JavaScript.' },
        { id: 2, title: 'Advanced CSS', description: 'Dive deep into advanced CSS techniques.' },
        { id: 3, title: 'HTML5 and Web Design', description: 'Master HTML5 and modern web design principles.' }
    ];

    const profile = {
        name: 'indratanu mondal',
        email: 'mondalindratanu.com'
    };

    const progress = [
        { courseId: 1, percentComplete: 70 },
        { courseId: 2, percentComplete: 50 },
        { courseId: 3, percentComplete: 20 }
    ];

    function renderCourses() {
        const courseList = document.querySelector('.course-list');
        courses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.className = 'course';
            courseElement.innerHTML = `
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <button onclick="enroll(${course.id})">Enroll</button>
            `;
            courseList.appendChild(courseElement);
        });
    }

    function renderProfile() {
        const profileInfo = document.getElementById('profile-info');
        profileInfo.innerHTML = `
            <p><strong>Name:</strong> ${profile.name}</p>
            <p><strong>Email:</strong> ${profile.email}</p>
        `;
    }

    function renderProgress() {
        const progressInfo = document.getElementById('progress-info');
        progressInfo.innerHTML = '<ul>';
        progress.forEach(item => {
            const course = courses.find(c => c.id === item.courseId);
            progressInfo.innerHTML += `
                <li>${course.title}: ${item.percentComplete}% Complete</li>
            `;
        });
        progressInfo.innerHTML += '</ul>';
    }

    function enroll(courseId) {
        alert(`Enrolled in course ${courseId}`);
        
    }

    renderCourses();
    renderProfile();
    renderProgress();
});
