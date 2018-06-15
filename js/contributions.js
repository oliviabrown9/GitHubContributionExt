// (function() {
//
//   const Util = {}
//
//   /* Handles attempting to render an entry. Displays the entry if possible
//   or handles the error if necessary. Requires the entryElement element, the
//   entry to render if exists, and the error when rendering if exists. */
//   Util.renderWithError = (entryElement, entry, error) => {
//     if (error) {
//       const errorDiv = document.querySelector('div.error')
//       errorDiv.innerHTML = error
//     } else {
//       entryElement.removeChild(entryElement.lastChild)
//       EntryView.render(entryElement, entry)
//     }
//   }
//   window.Util = Util
// })()
