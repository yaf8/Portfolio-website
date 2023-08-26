import React from "react";

const NavigationDots = ({ active }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item, index) => (
          <a
            key={item + index}
            href={`#${item}`}
            className="app__navigation-dots"
            style={active == true : item ? {backgroundColor: '#313BAC'} : {}}
          >
            {item}
          </a>
        )
      )}
    </div>
  );
};

export default NavigationDots;
