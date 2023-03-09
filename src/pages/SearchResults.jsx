import { Outlet, useLoaderData } from "react-router-dom";
import ArtworkList from "../components/ArtworkList/Index";

function SearchResults() {
  const data = useLoaderData();

  return (
    <>
      <ArtworkList data={data} />
      {/* <Outlet /> */}
    </>
  );
}

export default SearchResults;

// export async function loader({ request }) {
//   const url = new URL(request.url);
//   const searchTerm = url.searchParams.get("q");

//   console.log(
//     "loader na stronie search results:",
//     "- URL",
//     url,
//     "- Search Term",
//     searchTerm
//   );

//   return "tu są wyniki wyszukiwania";
// }
