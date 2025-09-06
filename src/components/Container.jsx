const Container = ({
  children,
  className = '',
  fullHeight = false,
  centered = false,
  title = '',
}) => {
  const containerClasses = `
    max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
    ${fullHeight ? 'min-h-screen' : ''}
    ${centered ? 'flex flex-col items-center justify-center' : ''}
    ${className}
  `;

  return (
    <div className={containerClasses}>
      <h1 className="text-3xl mb-16 font-bold text-center md:text-4xl">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default Container;
