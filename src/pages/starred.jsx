import { useQuery } from '@tanstack/react-query';
import { getShowsByIds } from '../Api/tvmaze';
import { useStarredShows } from '../Lib/useStarredShows';
import ShowGrid from '../components/shows/ShowGrid';

const Starred = () => {
  const [starredShowsIds] = useStarredShows;

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  console.log({ starredShows });

  if (starredShows?.length === 0) {
    return <div>No shows were starred</div>;
  }

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }

  if (starredShowsError) {
    return <div>Error occured: {starredShowsError.message}</div>;
  }

  return <div>Shows are loading..</div>;
};

export default Starred;
