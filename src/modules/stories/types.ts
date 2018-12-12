export interface IStory {
    comments: any;
    commentsCount: number;
    date: Date;
    id: number;
    score: number;
    text: string;
    title: string;
    url: string;
    user: string;
}

export type StoryList = IStory[];
