import { Reaction } from '../_models/index';

export default (reactions: Reaction[]): string => {
  const dislikes = reactions.filter((reaction: Reaction) => reaction.type === 'dislike').length;
  const likes = reactions.filter((reaction: Reaction) => reaction.type === 'like').length;

  if (likes > 0 && dislikes === 0) {
    return 'likes-only';
  } else if (likes === 0 && dislikes > 0) {
    return 'dislikes-only';
  }

  return 'mixed';
}
