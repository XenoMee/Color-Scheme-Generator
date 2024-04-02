const copyToClipboard = (value) => {
  navigator.clipboard.writeText(value);
  alert(`Color hex value ${value} copied to clipboard!`);
};

export default copyToClipboard;
