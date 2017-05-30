"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (reactions) {
    var dislikes = reactions.filter(function (reaction) { return reaction.type === 'dislike'; }).length;
    var likes = reactions.filter(function (reaction) { return reaction.type === 'like'; }).length;
    if (likes > 0 && dislikes === 0) {
        return 'likes-only';
    }
    else if (likes === 0 && dislikes > 0) {
        return 'dislikes-only';
    }
    return 'mixed';
};
//# sourceMappingURL=getTypeForReactions.js.map