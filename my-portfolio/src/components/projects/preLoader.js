import Spinner from "./Spinner";
import Fetch from "./Fetch";

const PreLoader = (url, colorMode) => {

  const spinner = Spinner(colorMode);

  Fetch(url, spinner).then((res) => {
    return res;
  });
};

export default PreLoader;