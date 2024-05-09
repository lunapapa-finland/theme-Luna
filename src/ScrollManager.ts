export class ScrollManager {
    constructor() {
        this.addEventListeners();
    }

    private addEventListeners(): void {
        window.addEventListener('beforeunload', this.saveScrollPosition.bind(this));
        window.addEventListener('DOMContentLoaded', this.restoreScrollPosition.bind(this));
    }

    private saveScrollPosition(): void {
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    }

    private restoreScrollPosition(): void {
        const scrollPosition = sessionStorage.getItem('scrollPosition');
        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition, 10));
        }
    }
}
