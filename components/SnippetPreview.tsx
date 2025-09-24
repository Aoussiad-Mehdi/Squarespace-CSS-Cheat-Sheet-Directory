import React from 'react';

interface SnippetPreviewProps {
  html: string;
  css: string;
}

export const SnippetPreview: React.FC<SnippetPreviewProps> = ({ html, css }) => {
  // A basic theme for the iframe to make it look decent.
  // Tailwind isn't available inside the iframe, so we need some manual styles.
  const srcDoc = `
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
        <style>
          :root {
            --bg-color: #F9FAFB; /* gray-50 */
            --text-color: #1F2937; /* gray-800 */
            --primary-color: #3b82f6; /* blue-500 */
          }
          body { 
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin: 0;
            padding: 1rem;
            box-sizing: border-box;
            height: 100%;
            overflow: hidden;
          }
          /* The snippet's CSS */
          ${css}
        </style>
      </head>
      <body>
        <div>${html}</div>
      </body>
    </html>
  `;

  return (
    <div className="mt-4">
      <h4 className="text-sm font-semibold text-gray-400 mb-2">Preview</h4>
      <div className="bg-gray-50 rounded-md border border-gray-600 overflow-hidden h-40">
        <iframe
          srcDoc={srcDoc}
          title="CSS Snippet Preview"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
          className="border-0 w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
};
