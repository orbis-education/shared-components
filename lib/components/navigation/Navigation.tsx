import { useState } from "react";
import { isEmpty, isEmptyArray } from "shared-functions";
import NavigationDropdown from "./NavigationDropdown";
import { NavigationItem } from "../types/Navigation";

type NavigationProps = {
  navigationItems: NavigationItem[];
  componentToLoad: string;
};

const Navigation = ({
  navigationItems = [],
  componentToLoad = ""
}: NavigationProps) => {


  const returnActiveClass = (componentName: string, classList?: string) => {

    let newClassList = !isEmpty(classList) ? classList : "";

    newClassList += componentToLoad === componentName ? " active" : "";

    return newClassList;

  };

  return (
    <nav className="sub-header-nav">
      <ul>
        {!isEmptyArray(navigationItems) ?

          <>

            {navigationItems.map((navigationItem: NavigationItem, index: number) => {
              return (
                <li key={index}>
                  {navigationItem.type === "dropdown" ?
                    <NavigationDropdown
                      navigationItem={navigationItem}
                      returnActiveClass={returnActiveClass}
                    />
                    :
                    <button
                      type="button"
                      role="link"
                      className={returnActiveClass(navigationItem.componentName)}
                    >
                      {navigationItem.name}
                    </button>
                  }
                </li>
              );
            })}

          </>

          : null}

      </ul>
    </nav>
  );
};

export default Navigation;