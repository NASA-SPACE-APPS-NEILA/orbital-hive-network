const HexBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" width="100" height="87" patternUnits="userSpaceOnUse">
            <polygon
              points="50,0 93.3,25 93.3,62 50,87 6.7,62 6.7,25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-secondary"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
};

export default HexBackground;
