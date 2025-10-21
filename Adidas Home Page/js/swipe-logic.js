class TouchEvent {
    static SWIPE_THRESHOLD = 50; // Minimum difference in pixels at which a swipe gesture is detected

    static SWIPE_LEFT   = 1;
    static SWIPE_RIGHT  = 2;
    static SWIPE_UP     = 3;
    static SWIPE_DOWN   = 4;

    constructor(startEvent, endEvent) {
        this.startEvent = startEvent;
        this.endEvent = endEvent || null;
    }

    isSwipeLeft() {
        return this.getSwipeDirection() == TouchEvent.SWIPE_LEFT;
    }

    isSwipeRight() {
        return this.getSwipeDirection() == TouchEvent.SWIPE_RIGHT;
    }

    isSwipeUp() {
        return this.getSwipeDirection() == TouchEvent.SWIPE_UP;
    }

    isSwipeDown() {
        return this.getSwipeDirection() == TouchEvent.SWIPE_DOWN;
    }

    getSwipeDirection() {
        if (!this.startEvent.changedTouches || !this.endEvent.changedTouches) {
            return null;
        }

        let start = this.startEvent.changedTouches[0];
        let end = this.endEvent.changedTouches[0];

        if (!start || !end) {
            return null;
        }

        let horizontalDifference = start.screenX - end.screenX;
        let verticalDifference = start.screenY - end.screenY;

        // Horizontal difference dominates
        if (Math.abs(horizontalDifference) > Math.abs(verticalDifference)) {
            if (horizontalDifference >= TouchEvent.SWIPE_THRESHOLD) {
                return TouchEvent.SWIPE_LEFT;
            } else if (horizontalDifference <= -TouchEvent.SWIPE_THRESHOLD) {
                return TouchEvent.SWIPE_RIGHT;
            }

        // Vertical or no difference dominates
        } else {
            if (verticalDifference >= TouchEvent.SWIPE_THRESHOLD) {
                return TouchEvent.SWIPE_UP;
            } else if (verticalDifference <= -TouchEvent.SWIPE_THRESHOLD) {
                return TouchEvent.SWIPE_DOWN;
            }
        }

        return null;
    }

    setEndEvent(endEvent) {
        this.endEvent = endEvent;
    }
}


// =================== Hero Section ===================
const heroSection = document.getElementById('heroSection');
let heroTouchEvent = null;
let isMouseDownHero = false;

heroSection.addEventListener('touchstart', (event) => {
    heroTouchEvent = new TouchEvent(event);
});

heroSection.addEventListener('touchend', (event) => {
    handleSwipeHero(event);
});

heroSection.addEventListener('mousedown', (event) => {
    isMouseDownHero = true;
    heroTouchEvent = new TouchEvent(fakeTouchEvent(event));
});

heroSection.addEventListener('mouseup', (event) => {
    if (!isMouseDownHero) return;
    isMouseDownHero = false;
    handleSwipeHero(fakeTouchEvent(event));
});

function handleSwipeHero(event) {
    if (!heroTouchEvent) return;
    heroTouchEvent.setEndEvent(event);

    if (heroTouchEvent.isSwipeRight()) {
        goToPrevSlide();
    } else if (heroTouchEvent.isSwipeLeft()) {
        goToNextSlide();
    }

    heroTouchEvent = null;
}

// =================== Body Section ===================
const thumbnailSlider = document.getElementById('thumbnailSlider');
let bodyTouchEvent = null;
let isMouseDownBody = false;

thumbnailSlider.addEventListener('touchstart', (event) => {
    bodyTouchEvent = new TouchEvent(event);
});

thumbnailSlider.addEventListener('touchend', (event) => {
    handleSwipeBody(event);
});

thumbnailSlider.addEventListener('mousedown', (event) => {
    isMouseDownBody = true;
    bodyTouchEvent = new TouchEvent(fakeTouchEvent(event));
});

thumbnailSlider.addEventListener('mouseup', (event) => {
    if (!isMouseDownBody) return;
    isMouseDownBody = false;
    handleSwipeBody(fakeTouchEvent(event));
});

function handleSwipeBody(event) {
    if (!bodyTouchEvent) return;
    bodyTouchEvent.setEndEvent(event);

    if (bodyTouchEvent.isSwipeRight()) {
        bodySliderIndex = (bodySliderIndex - 1 + bodySliderTotalSlides) % bodySliderTotalSlides;
        updateBodySlider();
    } else if (bodyTouchEvent.isSwipeLeft()) {
        bodySliderIndex = (bodySliderIndex + 1) % bodySliderTotalSlides;
        updateBodySlider();
    }

    bodyTouchEvent = null;
}

// ============ Shared Utility =============
function fakeTouchEvent(mouseEvent) {
    return {
        changedTouches: [{
            screenX: mouseEvent.screenX,
            screenY: mouseEvent.screenY
        }]
    };
}