import INewsData, { INewsSource } from '../interface/interface';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }
    drawNews(data: { articles?: INewsData[] }) {
        const values: INewsData[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }
    drawSources(data: { sources?: INewsSource[] }) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
