"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderEventTemplate = void 0;
const Mustache = require("mustache");
exports.renderEventTemplate = ({ template, partials }) => {
    const output = Mustache.render(template, partials);
    return output;
};
//# sourceMappingURL=index.js.map