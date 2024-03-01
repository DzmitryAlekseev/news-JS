import AppController from '../controller/controller';
import INewsData from '../interface/interface';
import { INewsSource } from '../interface/interface';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data) => this.view.drawNews(data as { articles?: INewsData[] }))
        );

        this.controller.getSources((data) => this.view.drawSources(data as { sources?: INewsSource[] }));
    }
}

export default App;
