class Array_h {

    constructor(length) {
        this.array = length === undefined ? [] : new Array(length)
    }

    /**
     * 返回数组长度
     *
     * @return {Number} length [数组长度]
     */
    length() {
        return this.array.length;
    }

    at(index) {
        return this.array[index];
    }

    set(index, obj) {
        this.array[index] = obj;
    }

    /**
     * 向数组的末尾添加一个或多个元素，并返回新的长度。
     *
     * @param  {*} obj [description]
     * @return {Number} length [新数组的长度]
     */
    push(obj) {
        return this.array.push(obj);
    }

    /**
     * 返回数组中选定的元素
     *
     * @param  {Number} start [开始索引值]
     * @param  {Number} end [结束索引值]
     * @return {Array} newArray  [新的数组]
     */
    slice(start, end) {
        return this.array = this.array.slice(start, end);
    }

    concat(array) {
        this.array = this.array.concat(array);
    }

    remove(index, count) {
        count = count === undefined ? 1 : count;
        this.array.splice(index, count);
    }

    join(separator) {
        return this.array.join(separator);
    }

    clear() {
        this.array.length = 0;
    }
}


/**
 * 先进先出队列 (First Input First Output)
 *
 * 一种先进先出的数据缓存器
 */

export default class Queue {
    
    constructor() {
        this._array_h = new Array_h()
        this._index = 0
    }
    /**
     * 排队
     *
     * @param  {Object} obj [description]
     * @return {[type]}     [description]
     */
    push(obj) {
        this._array_h.push(obj);
    }

    /**
     * 出队
     *
     * @return {Object} [description]
     */
    pop() {
        var ret = null;
        if (this._array_h.length()) {
            ret = this._array_h.at(this._index);
            if (++this._index * 2 >= this._array_h.length()) {
                this._array_h.slice(this._index);
                this._index = 0;
            }
        }
        return ret;
    }

    /**
     * 返回队列中头部(即最新添加的)的动态对象
     *
     * @return {Object} [description]
     */
    head() {
        var ret = null, len = this._array_h.length();
        if (len) {
            ret = this._array_h.at(len - 1);
        }
        return ret;
    }

    /**
     * 返回队列中尾部(即最早添加的)的动态对象
     *
     * @return {Object} [description]
     */
    tail() {
        var ret = null, len = this._array_h.length();
        if (len) {
            ret = this._array_h.at(this._index);
        }
        return ret;
    }

    /**
     * 返回数据队列长度
     *
     * @return {Number} [description]
     */
    length() {
        return this._array_h.length() - this._index;
    }

    /**
     * 队列是否为空
     *
     * @return {Boolean} [description]
     */
    empty() {
        return (this._array_h.length() === 0);
    }

    clear() {
        this._array_h.clear();
    }

}

