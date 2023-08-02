import { ThreeDots } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="100"
        width="100"
        radius="9"
        color="#5CD3A8"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrapper>
  );
};
