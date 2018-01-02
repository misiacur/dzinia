class GlobalService {
    static get ID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    static getItemByKey(arrayObject, key) {
        return arrayObject.find(x => x.key == key);
    }

    static getIndexByKey(arrayObject, key) {
        let item = GlobalService.getItemByKey(arrayObject, key);
        return arrayObject.indexOf(item);
    }

    static getItemTypeEmoji(type) {
        return (type == ItemType.STUFF) ? '🍴' : '🍱';
    }

}