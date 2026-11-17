
export function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}

export function loadReviews() {
	return JSON.parse(localStorage.getItem('appReviews') || '[]');
}

export function renderReviews(reviewList) {
	reviewList.innerHTML = '';
	loadReviews().forEach(function (review) {
		var item = document.createElement('h3');
		item.className = 'reviews';
		item.textContent = review.text + ' - Anonymous';
		reviewList.appendChild(item);
	});
}
