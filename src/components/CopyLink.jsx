import React from 'react';

function CopyLink({ link }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy the link: ', err);
      });
  };

  return (
    <img
      src="/src/assets/copy.svg"
      alt="Copy Link"
      className="copy"
      onClick={copyToClipboard}
      style={{ cursor: 'pointer' }} // Adds a pointer cursor to indicate it's clickable
    />
  );
}

export default CopyLink;
