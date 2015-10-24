module.exports = {
	setOptions: function (options) {
		for (var key in options) {
			if (this.hasOwnProperty(key)) {
				this[key] = options[key];
			}
		}
	}
};
