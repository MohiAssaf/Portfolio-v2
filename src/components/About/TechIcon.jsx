const TechIcon = ({ Icon, name }) => (
  <div className="group flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105">
    <div
      className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center
                 rounded-full bg-lightest-navy text-green text-4xl sm:text-5xl
                 shadow-lg transition-all duration-300 ease-in-out
                 group-hover:shadow-green/40 group-hover:shadow-2xl"
      title={name}
    >
      {typeof Icon === "function" ? (
        <Icon />
      ) : (
        <div className="flex space-x-2 text-3xl sm:text-4xl">
          {Icon.map((I, idx) => (
            <I key={idx} />
          ))}
        </div>
      )}
    </div>
    <p
      className="mt-4 text-sm sm:text-base font-medium text-light-slate text-center leading-snug
                 transition-colors duration-300 group-hover:text-green"
    >
      {name}
    </p>
  </div>
);

export default TechIcon;
