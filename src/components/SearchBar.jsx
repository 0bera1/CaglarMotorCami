const SearchBar = ({ onSearch }) => {
    const handleSearch = (e) => {
      if (onSearch) {
        onSearch(e.target.value); // Arama sorgusunu yukarıda tanımlı onSearch fonksiyonuna gönderir
      }
    };
  
    return (
      <label className="input bg-slate-700 flex items-center shadow-lg max-w-md ">
        <input 
          type="text" 
          className="grow px-4 py-2 focus:outline-none  text-yellow-400" 
          placeholder="Ara..." 
          onChange={handleSearch} // Her değişimde arama sorgusunu işler
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-80">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" 
          />
        </svg>
      </label>
    );
  };
  
  export default SearchBar;