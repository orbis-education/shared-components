import { Component, useState, useEffect } from "react";
import { isEmpty } from "shared-functions";

export const useNativeClickListener = (element, initialState) => {

  Component.displayName = "useNativeClickListener";

  const [isActive, setIsActive] = useState(initialState);


  useEffect(() => {

    const globalClickHandler = (event) => {

      if (isEmpty(element.current) === false && !element.current.contains(event.target)) {

        setIsActive(!isActive);

      };

    };

    if (isActive === true) {

      window.addEventListener("click", globalClickHandler);

    };

    return () => {

      window.removeEventListener("click", globalClickHandler);

    };

  }, [isActive, element]);

  return [isActive, setIsActive];

};

export default useNativeClickListener;