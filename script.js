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
import { PageFlip } from 'page-flip';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize PageFlip
  const pageFlip = new PageFlip(document.getElementById('scrapbook'), {
    width: 800,     // Base width
    height: 600,    // Base height
    size: 'stretch', // Fit to container
    maxShadowOpacity: 0.5, // Realistic shadow
    showCover: true,
    mobileScrollSupport: false // Disable on mobile (better for touch)
  });

  // Load pages
  pageFlip.loadFromHTML(document.querySelectorAll('.page'));

  // Optional: Add Fabric.js canvases (for drawing)
  const canvases = [];
  document.querySelectorAll('.page:not(.page-cover):not(.page-back-cover)').forEach((page, index) => {
    const canvas = new fabric.Canvas(`canvas${index + 1}`, {
      selection: false,
      backgroundColor: '#fff'
    });
    canvases.push(canvas);
  });
});
// In the PageFlip config:
const pageFlip = new PageFlip(document.getElementById('scrapbook'), {
  // ... previous settings ...
  draggingClass: 'drag-active', // Class added during drag
  swipeDistance: 30             // Minimum swipe distance to flip
});

// Flip on button clicks (optional)
document.getElementById('next-btn').addEventListener('click', () => {
  pageFlip.flipNext();
});

document.getElementById('prev-btn').addEventListener('click', () => {
  pageFlip.flipPrev();
});
