import { LOCAL_STORAGE_KEY, ROUTE_WORDS_CATEGORY } from "@constants";
import { Link, generatePath } from "react-router-dom";
import { TermsSetCard } from "@components";
import { allCardSets } from "@data/index";

// styles
import "./Layout.scss";
import { useEffect } from "react";

export const Layout = () => {
  // Always clear the state on initial render render.
  useEffect(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }, []);

  return (
    <div className='card-sets-67th d-flex align-items-center justify-content-center flex-wrap gap-4'>
      {allCardSets.map((cardSet: Record<string, any>) => {
        const cardSetPath = generatePath(ROUTE_WORDS_CATEGORY, {
          category: cardSet.id,
        });

        return (
          <Link to={cardSetPath} key={cardSet.id}>
            <TermsSetCard
              totalTerms={cardSet.totalTerms}
              thumbnail={cardSet.thumbnail}
              title={cardSet.title}
            />
          </Link>
        );
      })}
    </div>
  );
};
