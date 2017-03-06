# 설치

- GitHubSetup
```shell
Github Desktop 설치
https://desktop.github.com/
```

- node.js 설치 (npm)
```shell
https://nodejs.org/ko/
```

- Visual Studio CODE 설치
```shell
https://code.visualstudio.com/?wt.mc_id=DX_841432&utm_source=vscom&utm_medium=ms%20web&utm_campaign=VSCOM%20Home
```

# 프로젝트 시작

- Git Shell 실행

- 작업폴더 이동

- git clone https://github.com/angular/quickstart pages
```shell
(사본을 pages 폴더에 저장)
```

- cd pages

- code 
```shell
(VisualStudio CODE 실행)
```

- npm install

- npm start
```shell
(TypeScript Watch mode,  lite web server 실행, .TS 파일을 수정하면 바로 웹페이지 반영)
```  

- 웹브라우져가 뜨고 "Hello Angular" 가 나오면 준비 끝.

- Visual Studio CODE 화면으로 이동

- src/app 아래에 components, pages 폴더를 만든다.


# 소스구성

```shell
​Home, Page1, Page2, App1 이라는 링크가 나오고 링크를 클릭하면 화면의 Contents (route-outlet 영역) 이 변하는 예제 입니다.

실제 최초 시작은 app.module.ts 이고 bootstrap 으로 지정된 AppComponent 가 최상위 부모가 됩니다.

그 아래로 App1Component 와 각 페이지의 최상위가 되는 Page1, Page2 Module 을 구성했으며 단순하게 Module 과 Component 구조를 이해하시리라 생각합니다.

물론 Component 는 다른 Component 를 포함 할 수 있습니다. 이걸 이용해서 하나의 페이지를 구현할 수 있지만 각 페이지를 Module 로 빼는 것은  각 페이지의 고유한 영역에 대한 분리를 하기 위해 이렇게 구성하고자 합니다.
```  

# 학습정보
- AngularJS 2  60 minute Crash Course

```shell
https://www.youtube.com/watch?v=-zW1zHqsdyc
동영상 내에 Git 관련 프로그램 설치가 있습니다만 Git bash 를 설치할 경우 약간의 충돌이 있을 수 있습니다.
그냥 위에 링크해 드린 gif 만 설치하시고 cmd.exe 를 통해서   git clone , npm install, npm start  등의 명령을 실행하시면 쉽습니다.
```  

- AngulatJS 2 Complete Course
```shell
https://www.youtube.com/watch?v=d6Dp4Dyeke8&list=PL55RiY5tL51olfU2IEqr455EYLkrhmh3n
```  

# git 설정 제거
- https://github.com/angular/quickstart/blob/master/README.md
```shell
rd .git /s /q
rd e2e /s /q
```  
