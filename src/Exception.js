class Exception {
    constructor(value) {
        this.value = value;
        this.message = 'Exception has occured';
    }

    toString() {
        return `${this.value} ${this.message}`;
    };
     
}