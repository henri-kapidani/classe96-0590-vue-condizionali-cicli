const app = Vue.createApp({
	data() {
		return {
			activeIndex: 0,
			arrImages: [
				'img/01.jpg',
				'img/02.jpg',
				'img/03.jpg',
				'img/04.jpg',
				'img/05.jpg',
				'https://www.freecodecamp.org/news/content/images/2022/08/pexels-antonio-batinic--4164418--1-.jpg'
			],
		};
	},
	methods: {
		showPrevSlide() {
			// settiamo il nuovo valore di active index
			this.activeIndex--;
			if (this.activeIndex < 0) {
				this.activeIndex = this.arrImages.length - 1;
			}
		},
		showNextSlide() {
			// settiamo il nuovo valore di active index
			this.activeIndex++;
			if (this.activeIndex >= this.arrImages.length) {
				this.activeIndex = 0;
			}
		}
	},
});

app.mount('.carousel');