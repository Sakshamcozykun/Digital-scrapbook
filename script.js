document.addEventListener('DOMContentLoaded', () => {
    // Initialize canvases with Fabric.js
    const canvases = [];
    for (let i = 1; i <= 2; i++) {
        const canvas = new fabric.Canvas(`canvas${i}`, {
            selection: false,
            backgroundColor: '#fff'
        });
        canvases.push(canvas);
    }

    // Add text on button click
    document.getElementById('addText').addEventListener('click', () => {
        const text = new fabric.IText('Double-click to edit!', {
            left: 100,
            top: 100,
            fontFamily: 'Arial',
            fill: 'black'
        });
        canvases[0].add(text);
    });

    // Upload images
    document.getElementById('imageUpload').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            fabric.Image.fromURL(event.target.result, (img) => {
                img.set({ left: 50, top: 50, angle: 0 });
                canvases[0].add(img);
            });
        };
        reader.readAsDataURL(file);
    });

    // Initialize page flip (simplified)
    new PageFlip(document.getElementById('scrapbook'), {
        width: 800,
        height: 600,
        showCover: true
    }).loadFromHTML(document.querySelectorAll('.page'));
});
