import "./NavMenu.css";

function NavMenu() {
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
            <button>대국시작</button>
          </li>
          <li>
            <button>장기 소식</button>
          </li>
          <li>
            <button>복기</button>
          </li>
          <li>
            <button>장기 강의</button>
          </li>
          <li>
            <button>박보</button>
          </li>
          <li>
            <button>규칙설명</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavMenu;
