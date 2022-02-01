import News from "./News";

function PageForEachMenu({ nowPage }) {
  if (nowPage === "장기 소식") {
    return <News />;
  }
  return <div></div>;
}

export default PageForEachMenu;
