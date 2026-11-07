// Footer: current year and the date this document was last modified
const yearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
