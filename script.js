// script.js - FULL REPLACEMENT
document.addEventListener('DOMContentLoaded', function() {
    // Initialize PageFlip
    const pageFlip = new PageFlip(document.getElementById('scrapbook'), {
        width: 800,
        height: 600,
        showCover: true,
        maxShadowOpacity: 0.5,
        mobileScrollSupport: false
    }).loadFromHTML(document.querySelectorAll('.page'));

    // Initialize Fabric.js canvases
    const canvases = [];
    document.querySelectorAll('.page:not(.page-cover):not(.page-back-cover)').forEach((page, index) => {
        const canvas = new fabric.Canvas(`canvas${index + 1}`, {
            selection: false,
            backgroundColor: '#fff'
        });
        canvases.push(canvas);
    });

    // Add text button
    document.getElementById('addText').addEventListener('click', function() {
        const text = new fabric.IText('Double-click to edit!', {
            left: 100,
            top: 100,
            fontFamily: 'Arial',
            fill: 'black'
        });
        canvases[pageFlip.getCurrentPageIndex() - 1].add(text);
    });

    // Image upload
    document.getElementById('imageUpload').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function(event) {
            fabric.Image.fromURL(event.target.result, function(img) {
                img.set({ left: 50, top: 50, angle: 0 });
                canvases[pageFlip.getCurrentPageIndex() - 1].add(img);
            });
        };
        reader.readAsDataURL(file);
    });
});
