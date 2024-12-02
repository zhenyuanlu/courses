// Create this as a new file: assets/js/layout-debug.js

class LayoutDebugger {
    constructor() {
        this.measurements = [];
        this.setupObserver();
        this.setupResizeListener();
    }

    setupObserver() {
        // Watch for DOM changes that might affect layout
        const observer = new MutationObserver(() => this.measureLayout());
        observer.observe(document.body, { 
            childList: true, 
            subtree: true,
            attributes: true 
        });
    }

    setupResizeListener() {
        // Track window resize events
        let timeout;
        window.addEventListener('resize', () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => this.measureLayout(), 100);
        });
    }

    measureLayout() {
        // Measure key containers
        const containers = document.querySelectorAll('.max-w-7xl, .content-wrapper');
        containers.forEach((container, index) => {
            const rect = container.getBoundingClientRect();
            const styles = window.getComputedStyle(container);
            
            const measurement = {
                timestamp: Date.now(),
                element: container.tagName + (container.className ? '.' + container.className : ''),
                width: rect.width,
                left: rect.left,
                right: rect.right,
                marginLeft: styles.marginLeft,
                marginRight: styles.marginRight,
                position: styles.position,
                display: styles.display,
                transform: styles.transform
            };
            
            this.measurements.push(measurement);
            this.logMeasurement(measurement);
        });
    }

    logMeasurement(measurement) {
        console.log(
            `Layout Measurement [${new Date(measurement.timestamp).toISOString()}]:\n`,
            `Element: ${measurement.element}\n`,
            `Width: ${measurement.width}px | Left: ${measurement.left}px | Right: ${measurement.right}px\n`,
            `Margins: ${measurement.marginLeft} | ${measurement.marginRight}\n`,
            `Position: ${measurement.position} | Display: ${measurement.display}\n`,
            `Transform: ${measurement.transform}\n`,
            '-------------------'
        );
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.layoutDebugger = new LayoutDebugger();
});