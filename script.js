body {
    margin: 0;
    font-family: Arial;
    background: #f0e6ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

#scrapbook {
    width: 800px;
    height: 600px;
    margin: 20px auto;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
}

.page {
    background: white;
    padding: 20px;
    height: 100%;
}

.page-cover {
    background: linear-gradient(135deg, #6e48aa, #9d50bb);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.page-back-cover {
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
}

.controls {
    margin-top: 20px;
    display: flex;
    gap: 10px;
}

button, input {
    padding: 8px 15px;
    border: none;
    border-radius: 4px;
}

canvas {
    width: 100%;
    height: 100%;
    border: 1px dashed #ccc;
}
