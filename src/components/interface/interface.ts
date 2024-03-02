export default interface INewsData {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    content: string;
    publishedAt: string;
    source: INewsSource;
}

export interface INewsSource {
    id: string;
    name: string;
}

export interface INewsResponse {
    status: string;
    source: INewsSource[];
    
}

export interface INewsArticles {
    articles?: INewsData[] | undefined
}
