document.addEventListener('DOMContentLoaded', () => {
    // ===== 1. Initialize PageFlip (Book Effect) =====
    const pageFlip = new PageFlip(document.getElementById('scrapbook'), {
        width: 800,
        height: 600,
        size: 'stretch',
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false,
        draggingClass: 'drag-active',
        swipeDistance: 30
    });

    // Load all pages
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    // ===== 2. Initialize Fabric.js Canvases =====
    const canvases = [];
    document.querySelectorAll('.page:not(.page-cover):not(.page-back-cover)').forEach((page, index) => {
        const canvas = new fabric.Canvas(`canvas${index + 1}`, {
            selection: false,
            backgroundColor: '#fff'
        });
        canvases.push(canvas);
    });

    // ===== 3. Add Text Functionality =====
    document.getElementById('addText').addEventListener('click', () => {
        const currentPage = pageFlip.getCurrentPageIndex();
        const text = new fabric.IText('Double-click to edit!', {
            left: 100,
            top: 100,
            fontFamily: 'Arial',
            fill: 'black'
        });
        canvases[currentPage - 1].add(text); // Add to current page
    });

    // ===== 4. Image Upload Functionality =====
    document.getElementById('imageUpload').addEventListener('change', (e) => {
        const currentPage = pageFlip.getCurrentPageIndex();
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            fabric.Image.fromURL(event.target.result, (img) => {
                img.set({ left: 50, top: 50, angle: 0 });
                canvases[currentPage - 1].add(img);
            });
        };
        reader.readAsDataURL(file);
    });

    // ===== 5. Navigation Buttons (Optional) =====
    // Add these buttons to your HTML if needed:
    // <button id="prev-btn">Previous</button>
    // <button id="next-btn">Next</button>
    document.getElementById('prev-btn')?.addEventListener('click', () => {
        pageFlip.flipPrev();
    });
    
    document.getElementById('next-btn')?.addEventListener('click', () => {
        pageFlip.flipNext();
    });
});
