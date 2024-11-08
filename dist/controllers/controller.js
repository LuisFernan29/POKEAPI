"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const getData = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    return data;
};
exports.getData = getData;
