
let app = new Vue({
	el: "#app",
	
	data: {
		newValueTodoItem: '',
		todoItems: []
	},
	methods: {
		addItem() {
			let newTodoItem = {
				text: this.newValueTodoItem,
				editMode: false,
				isChecked: false
			};
			this.todoItems.push(newTodoItem);
			this.cleanInput();
		},
		deleteItem(index) {
			console.log(index);
			this.todoItems = this.todoItems.filter((elem, i) => {
				return i !== index;
			});
		},
		editItem(index) {
			this.todoItems.map((el, i) => {
				if (i === index) el.editMode = true;
			});
		},
		saveEditItem(index) {
			this.todoItems.map((el, i) => {
				if (i === index) el.editMode = false;
			});
		},
		cleanInput() {
			this.newValueTodoItem = '';
		}
	},
	filters: {
		
	},
	computed: {
		
	}
});

