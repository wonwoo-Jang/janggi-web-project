import { useState } from "react";
import NavMenu from "./NavMenu";
import PageForEachMenu from "./PageForEachMenu";

function App() {
  const [nowPage, setNowPage] = useState("home");
  function getNowPage(page) {
    setNowPage(page);
    console.log(page);
  }

  return (
    <div>
      <NavMenu nowPage={nowPage} getNowPage={getNowPage} />
      <PageForEachMenu nowPage={nowPage} getNowPage={getNowPage} />
    </div>
  );
}

export default App;
