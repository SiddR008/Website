import { useState } from 'react';
import { motion } from 'framer-motion';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts..."
          className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          🔍
        </button>
      </div>
    </form>
  );
} 