const url="../assets/T.OlsenMay2.pdf";

// Loaded via <script> tag, create shortcut to access PDF.js exports.
var pdfjsLib = window['pdfjs-dist/build/pdf'];

let pdfDoc = null, 
  pageNum = 1,
  pageIsRendering = false,
  pageNumIsPending = null;

const scale = 1,
  canvas = document.querySelector('#pdf-render'),
  ctx = canvas.getContext('2d');

// Render the page info
const renderPage = num => {
  pageIsRendering = true;
  
  // Get page
  pdfDoc.getPage(num).then(page => {
    // Set scale
    const viewport = page.getViewport({ scale })
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderCntx = {
      canvasContext: ctx,
      viewport
    }

    page.render(renderCntx).promise.then(() => {
      pageIsRendering = false;

      if(pageNumIsPending !== null){
        renderPage(pageNumIsPending); 
        pageNumIsPending = null;
      }
    });

    //Output current page
    document.querySelector('#page-num').textContent=num;

  })
}

// Check for pages rendering
const queueRenderPage = num => {
  if(pageIsRendering) {
    pageNumIsPending = num;
  } else{
    renderPage(num)
  }
}

// Show previous page
const showPrevPage = () => {
  if(pageNum <= 1){
    return;
  } 
  pageNum--;
  queueRenderPage(pageNum);
}

// Show next page
const showNextPage = () => {
  if(pageNum >= pdfDoc.numPages){
    return;
  } 
  pageNum++;
  queueRenderPage(pageNum);
}

// Get document
pdfjsLib
  .getDocument(url)
  .promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;

  document.querySelector('#page-count').textContent = pdfDoc.numPages;

  renderPage(pageNum);
})
  .catch(err => {
    // Display eror
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode(err.message));
    document.querySelector('body').insertBefore(div, canvas);
    // remove top bar
    document.querySelector('.top-bar').style.display = 'none';
  });

// Button events
document.querySelector('#prev-page').addEventListener('click', showPrevPage);
document.querySelector('#next-page').addEventListener('click', showNextPage);