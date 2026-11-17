import { showTime, loadReviews, renderReviews } from './this.mjs';

showTime();
setInterval(function () {
	showTime();
}, 1000);

// ---------- Contact form ----------
var contactForm = document.getElementById('contactForm');
var contactMessage = document.getElementById('contactMessage');

contactForm.addEventListener('submit', function (event) {
	event.preventDefault();

	var isStudent = document.getElementById('unlvStudent').checked;
	var phone = document.getElementById('phone').value.trim();
	var email = document.getElementById('email').value.trim();

	if (phone === '' && email === '') {
		contactMessage.style.color = '#B10202';
		contactMessage.textContent = 'Please enter a phone number or email so we can reach you.';
		return;
	}

	var requests = JSON.parse(localStorage.getItem('contactRequests') || '[]');
	requests.push({
		unlvStudent: isStudent,
		phone: phone,
		email: email,
		submittedAt: new Date().toISOString()
	});
	localStorage.setItem('contactRequests', JSON.stringify(requests));

	contactMessage.style.color = '#666666';
	contactMessage.textContent = 'Thanks! Your info was submitted and we will reach out to you.';
	contactForm.reset();
});

// ---------- Reviews ----------
var reviewForm = document.getElementById('reviewForm');
var reviewText = document.getElementById('reviewText');
var reviewList = document.getElementById('reviewList');

reviewForm.addEventListener('submit', function (event) {
	event.preventDefault();

	var text = reviewText.value.trim();
	if (text === '') {
		return;
	}

	var reviews = loadReviews();
	reviews.push({ text: text, submittedAt: new Date().toISOString() });
	localStorage.setItem('appReviews', JSON.stringify(reviews));

	reviewForm.reset();
	renderReviews(reviewList);
});

renderReviews(reviewList);
