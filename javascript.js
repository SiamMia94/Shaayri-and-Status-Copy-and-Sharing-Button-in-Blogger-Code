 document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll("blockquote");
    blocks.forEach((block, index) => {
      const text = block.innerText;
      const encodedText = encodeURIComponent(text);
      const encodedURL = encodeURIComponent(window.location.href);
      // Create wrapper div
      const wrapper = document.createElement("div");
      wrapper.className = "custom-blockquote";
      // Create Copy Button
      const copyBtn = document.createElement("button");
      copyBtn.innerText = "Copy Button";
      copyBtn.className = "copy-btn";
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(text);
        copyBtn.innerText = "Copied!";
        setTimeout(() => (copyBtn.innerText = "Copy Button"), 2000);
      };
      // Share Buttons
      const fb = `<a href="https://www.facebook.com/sharer/sharer.php?u=${encodedURL}&quote=${encodedText}" target="_blank" class="share-btn fb">Facebook</a>`;
      const wa = `<a href="https://wa.me/?text=${encodedText}%20${encodedURL}" target="_blank" class="share-btn wa">Whatsapp</a>`;
      const tg = `<a href="https://t.me/share/url?url=${encodedURL}&text=${encodedText}" target="_blank" class="share-btn tg">Telegram</a>`;

      // Build HTML
      wrapper.innerHTML = `

        <div class="quote-text">${block.innerHTML}</div>
        Share on : <div class="quote-actions">
          ${fb}
          ${wa}
          ${tg}
        </div>
      `;
      wrapper.appendChild(copyBtn);
      // Replace original blockquote
      block.replaceWith(wrapper);

    });
  });
  

