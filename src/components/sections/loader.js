import { TailSpin } from "react-loader-spinner";
const Loader = () => {
    return (
        <TailSpin
            height="80"
            width="80"
            color="#212529"
            ariaLabel="tail-spin-loading"
            radius="0"
            strokeWidth="3"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    );
};  
export default Loader;