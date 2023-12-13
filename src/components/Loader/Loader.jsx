import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <Oval
        justifyContent="center"
        height={80}
        width={80}
        color="#303f9f"
        wrapperStyle={{ justifyContent: 'center' }}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#303f9f"
        strokeWidth={8}
        strokeWidthSecondary={8}
      />
    </>
  );
};
