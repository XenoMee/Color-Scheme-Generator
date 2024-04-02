const colorSchemeContainer = document.querySelector('.color-scheme');
const getColorScheme = (colorHex, colorMode) => {
  const colorSchemeUrl = `https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${colorMode}`;
  fetch(colorSchemeUrl)
    .then((res) => res.json())
    .then((data) => {
      colorSchemeContainer.innerHTML = '';

      const schemeColorElements = data.colors
        .map((color) => {
          colorHex = color.hex.value;
          return `
              <div class='color-element flex flex-col gap-2'>
                  <div class='generated-color bg-[${colorHex}]'></div>
                  <p class='generated-code text-center'>${colorHex}</p>
              </div>
            `;
        })
        .join('');

      colorSchemeContainer.innerHTML = schemeColorElements;
      colorSchemeContainer.classList.add('py-2');
    });
};
