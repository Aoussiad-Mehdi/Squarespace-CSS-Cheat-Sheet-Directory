import React from 'react';
// FIX: Changed type-only import to a value import to allow access to enum members.
import { SquarespaceVersion } from '../types';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeVersion: SquarespaceVersion | 'all';
  setActiveVersion: (version: SquarespaceVersion | 'all') => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categories: string[];
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  activeVersion,
  setActiveVersion,
  activeCategory,
  setActiveCategory,
  categories,
}) => {
  // FIX: Used enum members directly to satisfy the `SquarespaceVersion` type, resolving the assignment error for string literals.
  const versionOptions: (SquarespaceVersion | 'all')[] = ['all', SquarespaceVersion.V7_1, SquarespaceVersion.V7_0];

  return (
    <div className="w-full max-w-xl flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        placeholder="Search CSS snippets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow bg-gray-700 text-white placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex gap-2">
        <div className="flex bg-gray-700 rounded-md p-1">
          {versionOptions.map(version => (
            <button
              key={version}
              onClick={() => setActiveVersion(version)}
              className={`px-3 py-1 text-sm font-medium rounded ${
                activeVersion === version
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-600'
              } transition-colors`}
            >
              {version === 'all' ? 'All' : version}
            </button>
          ))}
        </div>
        <select
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
          className="bg-gray-700 text-white rounded-md px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map(category => (
            <option key={category} value={category} className="capitalize">
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
