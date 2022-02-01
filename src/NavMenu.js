import "./NavMenu.css";

function NavMenu({ nowPage, getNowPage }) {
  function inPage(e) {
    getNowPage(e.target.textContent);
  }

  return (
    <div id="nav">
      <div id="navTop">
        <h2>
          <span id="logIn">로그인</span> <span id="signUp">회원가입</span>
        </h2>
      </div>
      <div id="navMiddle">
        <h1>장 기</h1>
      </div>
      <div id="navBottom">
        <ul>
          <li>
            <button onClick={inPage}>대국 시작</button>;
          </li>
          <li>
            <button onClick={inPage}>장기 소식</button>
          </li>
          <li>
            <button onClick={inPage}>복기</button>
          </li>
          <li>
            <button onClick={inPage}>장기 강의</button>
          </li>
          <li>
            <button onClick={inPage}>박보</button>
          </li>
          <li>
            <button onClick={inPage}>규칙 설명</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavMenu;
