/**
 * http://www.notforme.kr/archives/1682
 * Angular2에서는 상태정보를 Component의 멤버변수로 선언하여 
 * 이를 체크박스의 체크 상태와 자동으로 연결해 준다는 것입니다. 
 * 이로 인해 우리는 DOM API나, jQuery와 같이 직접 DOM에 접근해서 상태정보를 읽는 노력을 할 필요가 없습니다.
 * Component안에서 상태정보를 직접 관리할 수 있습니다.
 */

// 클래스에 angular에게 Component라는 것을 알려주기 위한 Decorator를 사용하기 위해 import 한 것입니다.
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'page5',

    //  Component의 뷰를 구성하는 마크업 정보
    templateUrl: `page5.component.html`
})

export class Page5Component  {
    // 클래스에 멤버 변수로 isChecked라는 변수를 선언
    isChecked: boolean;
    
    // 클래스의 constructor 메서드 안에 isChecked를 true로 초기화 
    constructor(){
        this.isChecked = true;
    }

    // 버튼의  click 이벤트 시 호출할 메서드
    confirmMe() {
        alert('동의 여부: ' + this.isChecked);
    }
}
