const app = Vue.createApp({
	data() {
		return {
			likedPosts: [3],
			posts: [
				{
					"id": 10,
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
					"id": 22,
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
			],
		}
	},
	methods: {
		getNameInitials(name) {
			// Pinco Rossi ------> PR
			return name.split(' ').reduce((initials, namePart) => initials + namePart[0].toUpperCase(), '');
		},
		formatIsoToItalianDate(isoString) {
			// 2021-06-25    ----> 25/06/2021
			return isoString.split('-').reverse().join('/');
		},
		manageLike(objPost) {
			let variation;
			if (this.likedPosts.includes(objPost.id)) {
				// se hai il like toglierlo (quindi decrementare il numero di likes nell'ogetto che rappresenta il post)
				const indexPost = this.likedPosts.indexOf(objPost.id);
				this.likedPosts.splice(indexPost, 1);
				variation = -1;
			} else {
				// altrimenti aggiungere il like (quindi incrementare il numero di likes nell'ogetto che rappresenta il post)
				this.likedPosts.push(objPost.id);
				variation = 1;
			}

			objPost.likes += variation;
		},
	},
	created() {
		console.log("Io vengo da ((created)) cioè il momento in cui l'applicazione viene creata come variabile in memoria");
	},
	mounted() {
		console.log("Io vengo da ((mounted)) cioè il momento in cui l'applicazione viene aggiunta al DOM");
	},
	updated() {
		console.log("Io vengo da ((updated)) cioè il momento in cui l'applicazione viene aggiornata a causa di una modifica dei dati");
	}
});

app.mount('#container');
