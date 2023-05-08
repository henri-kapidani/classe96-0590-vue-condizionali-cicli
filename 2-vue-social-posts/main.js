const likedPosts = [3];
const posts = [
	{
		"id": 1,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/300?image=171",
		"author": {
			"name": "Phil Mangione",
			"image": "https://unsplash.it/300/300?image=15"
		},
		"likes": 80,
		"created": "2021-06-25"
	},
	{
		"id": 2,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/400?image=112",
		"author": {
			"name": "Sofia Perlari",
			"image": "https://unsplash.it/300/300?image=10"
		},
		"likes": 120,
		"created": "2021-09-03"
	},
	{
		"id": 3,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/400?image=234",
		"author": {
			"name": "Chiara Passaro",
			"image": "https://unsplash.it/300/300?image=20"
		},
		"likes": 78,
		"created": "2021-05-15"
	},
	{
		"id": 4,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/400?image=24",
		"author": {
			"name": "Luca Formicola",
			"image": null
		},
		"likes": 56,
		"created": "2021-04-03"
	},
	{
		"id": 5,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/400?image=534",
		"author": {
			"name": "Alessandro Sainato",
			"image": "https://unsplash.it/300/300?image=29"
		},
		"likes": 95,
		"created": "2021-03-05"
	}
];

const eleContainer = document.querySelector('#container');
renderPosts(posts, eleContainer);



/* FUNCTION DEFINITIONS */

function renderPosts(arrPosts, eleContainer) {
	eleContainer.innerHTML = arrPosts.reduce((postsHtml, objPost) => postsHtml + generatePostHtml(objPost), '');

	// aggiungiamo gli event listeners ai bottoni dei like
	const listLikeButtons = eleContainer.querySelectorAll('.like-button');
	listLikeButtons.forEach(likeButton => likeButton.addEventListener('click', manageLike));
}

function generatePostHtml(objPost) {
	return `
		<div class="post">
			<div class="post__header">
				<div class="post-meta">
					<div class="post-meta__icon">
						${objPost.author.image ? getProfileImageHtml(objPost) : getNameInitials(objPost.author.name)}
					</div>
					<div class="post-meta__data">
						<div class="post-meta__author">${objPost.author.name}</div>
						<div class="post-meta__time">${formatIsoToItalianDate(objPost.created)}</div>
					</div>
				</div>
			</div>
			<div class="post__text">${objPost.content}</div>
			<div class="post__image">
				<img src="${objPost.media}" alt="">
			</div>
			<div class="post__footer">
				<div class="likes js-likes">
					<div class="likes__cta">
						<a class="like-button ${manageClassLike(objPost)} js-like-button" data-postid="${objPost.id}">
							<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
							<span class="like-button__label">Mi Piace</span>
						</a>
					</div>
					<div class="likes__counter">
						Piace a <b id="like-counter-${objPost.id}" class="js-likes-counter">${objPost.likes}</b> persone
					</div>
				</div>
			</div>
		</div>
	`;
}

function manageLike() {
	// vedere se il post ha gia' il like
	const postId = parseInt(this.dataset.postid);

	let variation;
	if (likedPosts.includes(postId)) {
		// se hai il like toglierlo (quindi decrementare il numero di likes nell'ogetto che rappresenta il post)
		const indexPost = likedPosts.indexOf(postId);
		likedPosts.splice(indexPost, 1);
		variation = -1;
	} else {
		// altrimenti aggiungere il like (quindi incrementare il numero di likes nell'ogetto che rappresenta il post)
		likedPosts.push(postId);
		variation = 1;
	}

	const objPost = posts.find(post => post.id == postId);
	objPost.likes += variation;

	console.log(likedPosts);

	// aggiornare l'interfaccia
	renderPosts(posts, eleContainer);
}

function manageClassLike(objPost) {
	return likedPosts.includes(objPost.id) ? 'like-button--liked' : '';
}

function formatIsoToItalianDate(isoString) {
	// 2021-06-25    ----> 25/06/2021
	return isoString.split('-').reverse().join('/');
}

function getNameInitials(name) {
	// Pinco Rossi ------> PR
	return name.split(' ').reduce((initials, namePart) => initials + namePart[0].toUpperCase(), '');
}

function getProfileImageHtml(objPost) {
	return `<img class="profile-pic" src="${objPost.author.image}" alt="${objPost.author.name}">`;
}
