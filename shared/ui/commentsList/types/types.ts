type Image = {
  src: string;
  alt: string;
};

export interface IComment {
  authorName: string;
  dateCreate: string;
  commentText: string;
  authorAvatar: Image;
  likeValue: number;
  isLiked: boolean;
}
