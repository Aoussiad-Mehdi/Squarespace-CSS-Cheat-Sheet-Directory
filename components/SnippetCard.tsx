import React from 'react';
import type { Snippet } from '../types';
import { SquarespaceVersion } from '../types';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { CheckIcon } from './icons/CheckIcon';
import { SnippetPreview } from './SnippetPreview';

interface SnippetCardProps {
  snippet: Snippet;
}

export const SnippetCard: React.FC<SnippetCardProps> = ({ snippet }) => {
  const [isCopied, copyToClipboard] = useCopyToClipboard();

  const handleCopy = () => {
    copyToClipboard(snippet.code.trim());
  };

  const versionBgColor = snippet.version === SquarespaceVersion.V7_1 ? 'bg-green-600/20 text-green-300' : 'bg-purple-600/20 text-purple-300';
  
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full border border-gray-700 transition-shadow hover:shadow-blue-500/20">
      <div className="p-5 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white pr-4">{snippet.title}</h3>
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap ${versionBgColor}`}>
            v{snippet.version}
          </span>
        </div>
        <p className="text-gray-400 mb-4 text-sm">{snippet.description}</p>
        <div className="flex flex-wrap gap-2">
          {snippet.categories.map(category => (
            <span key={category} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
              {category}
            </span>
          ))}
        </div>
        {snippet.previewHtml && (
          <SnippetPreview html={snippet.previewHtml} css={snippet.code} />
        )}
      </div>
      <div className="relative group bg-gray-900 mt-auto">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 bg-gray-700 rounded-md text-gray-300 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Copy code to clipboard"
        >
          {isCopied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <ClipboardIcon className="w-5 h-5" />}
        </button>
        <pre className="overflow-x-auto text-sm !bg-transparent !border-none !shadow-none !m-0 !p-5">
          <code className="language-css">
            {snippet.code.trim()}
          </code>
        </pre>
      </div>
    </div>
  );
};
