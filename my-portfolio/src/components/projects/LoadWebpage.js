import axios from "axios";
import PreLoader from './preLoader';


const LoadWebpage = async (url) => {
  const spinner = PreLoader();
  url = `https://${url}`;
  let success = false;
  let error;
  let data;
  let tab = window.open("about:blank");
  tab.document.write(spinner);
  try {
    let res = await axios.get(url, {});
    setTimeout(() => {
      tab.location = url;
      tab.focus();
      data = res.data;
      return success = true;
    }, 200);
  } catch (e) {
    if (e.response.readyState === 4) {
      console.log(e.response.readyState);
      setTimeout(() => {
        tab.location = url;
        tab.focus();
        return success = true;
      }, 200);
    } else {
      error = e.message + " " + e.code + "Please try again later";
      tab.alert(error);
      return success = false;
    }
  }
};

export default LoadWebpage;
