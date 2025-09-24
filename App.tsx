import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { snippets } from './data/snippets';
import type { Snippet, SquarespaceVersion } from './types';
import { SearchBar } from './components/SearchBar';
import { SnippetCard } from './components/SnippetCard';

declare var Fuse: any;
declare var Prism: any;

const BATCH_SIZE = 18; // Number of items to load at a time (multiple of 3 for the grid)

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeVersion, setActiveVersion] = useState<SquarespaceVersion | 'all'>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const [displayedSnippets, setDisplayedSnippets] = useState<Snippet[]>([]);
  const [hasMore, setHasMore] = useState(false);
  // FIX: Initialize useRef with null. Calling useRef<T>() without an argument can cause an error with some TypeScript/React type versions.
  const observer = useRef<IntersectionObserver | null>(null);

  const fuse = useMemo(() => {
    return new Fuse(snippets, {
      keys: ['title', 'description', 'categories', 'version'],
      threshold: 0.3,
      includeScore: true,
    });
  }, []);

  const categories = useMemo(() => {
    const allCategories = new Set<string>();
    snippets.forEach(snippet => {
      snippet.categories.forEach(category => allCategories.add(category));
    });
    return ['all', ...Array.from(allCategories).sort()];
  }, []);

  const filteredSnippets = useMemo(() => {
    if (!searchTerm.trim() && activeVersion === 'all' && activeCategory === 'all') {
      return snippets;
    }

    let results: Snippet[] = snippets;

    if (searchTerm.trim()) {
      results = fuse.search(searchTerm).map((result: any) => result.item);
    }

    if (activeVersion !== 'all') {
      results = results.filter(snippet => snippet.version === activeVersion);
    }

    if (activeCategory !== 'all') {
      results = results.filter(snippet => snippet.categories.includes(activeCategory));
    }

    return results;
  }, [searchTerm, activeVersion, activeCategory, fuse]);
  
  // Effect to reset and load initial batch when filters change
  useEffect(() => {
    const initialBatch = filteredSnippets.slice(0, BATCH_SIZE);
    setDisplayedSnippets(initialBatch);
    setHasMore(filteredSnippets.length > BATCH_SIZE);
  }, [filteredSnippets]);

  const loadMoreSnippets = useCallback(() => {
    if (!hasMore) return;
    const currentLength = displayedSnippets.length;
    const nextBatch = filteredSnippets.slice(currentLength, currentLength + BATCH_SIZE);
    setDisplayedSnippets(prevSnippets => [...prevSnippets, ...nextBatch]);
    if (currentLength + BATCH_SIZE >= filteredSnippets.length) {
      setHasMore(false);
    }
  }, [displayedSnippets.length, filteredSnippets, hasMore]);

  const lastSnippetElementRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreSnippets();
      }
    });
    if (node) observer.current?.observe(node);
  }, [hasMore, loadMoreSnippets]);

  useEffect(() => {
    // Re-run Prism highlighting whenever the displayed snippets change
    Prism.highlightAll();
  }, [displayedSnippets]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800/80 backdrop-blur-sm sticky top-0 z-10 py-6 border-b border-gray-700">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-white">Squarespace CSS Cheat Sheet</h1>
              <p className="text-gray-400 mt-1">Your go-to resource for Squarespace 7.0 & 7.1 snippets.</p>
            </div>
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              activeVersion={activeVersion}
              setActiveVersion={setActiveVersion}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              categories={categories}
            />
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 md:px-8 py-8">
        {displayedSnippets.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedSnippets.map(snippet => (
                <SnippetCard key={snippet.id} snippet={snippet} />
              ))}
            </div>
            {hasMore && (
              <div ref={lastSnippetElementRef} className="text-center py-10">
                <p className="text-gray-400">Loading more snippets...</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-white">No Snippets Found</h2>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
          </div>
        )}
      </main>
      
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        <p>Built for the Squarespace community.</p>
      </footer>
    </div>
  );
};

export default App;