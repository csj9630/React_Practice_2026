//책에서는 클래스형 컴포넌트를 쓰지만 현재는 함수형 컴포넌트를 쓰는 게 맞는다고 하니 고쳐가면서 써보겠다.
import { useState, useEffect } from "react";
function App() {
  //state 대신 useState 사용
  const [isLoading, setIsLoading] = useState(true);

  //componentDidMount 대신 useEffect 사용
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      console.log("로딩 완료!");
    }, 2000);

    // Clean-up: 컴포넌트가 사라질 때 예약된 타이머를 취소합니다.
    return () => {
      clearTimeout(timer);
    };
  }, []); //useEffect //빈 배열 -> mount 시점에서 한번만 실행하기.
  return (
    <div className="App">
      {/* 조건부 렌더링: isLoading이 true면 앞부분, false면 뒷부분 출력 */}
      {isLoading ? "loading.." : "Ready!"}
      <p> className Test React at 2026</p>
    </div>
  );
}

export default App;
