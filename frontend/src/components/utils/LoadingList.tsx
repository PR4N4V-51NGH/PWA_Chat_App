import { Skeleton } from "@mui/material";

interface Props {
  listOf: string;
  dpRadius: string;
  count: number;
}

const LoadingList = ({ listOf, dpRadius, count }: Props) => {
  const skeletonStyle = { backgroundColor: "#999" };
  return (
    <>
      {[...Array(count)].map((e, i) => (
        <div key={`loadingListOf${listOf + i}`} className="loadingListItem row">
          <Skeleton
            variant="circular"
            className="loadingDp rounded-circle"
            style={{ ...skeletonStyle, width: dpRadius, height: dpRadius }}
          />
          <Skeleton
            variant="rectangular"
            className="loadingTitle col-5"
            style={skeletonStyle}
          />
          <Skeleton
            variant="rectangular"
            className="loadingDesc col-7"
            style={skeletonStyle}
          />
        </div>
      ))}
    </>
  );
};

export default LoadingList;
