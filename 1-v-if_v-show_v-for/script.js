const app = Vue.createApp({
	data() {
		return {
			varBooleana: true,
			varBooleana2: true,

			arrStrings: [
				'ciao',
				'a',
				'tutti',
				'quanti',
			],
		};
	},
	methods: {
		toggleVariable() {
			this.varBooleana = !this.varBooleana;
		},
		pushItem() {
			this.arrStrings.push('ciao');
		}
	},
});

app.mount('#root');
