import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import VueIconSvg from "../assets/svg/VueIconSvg";
import SpringBootIconSvg from "../assets/svg/SpringBootIconSvg";
import MaBatisIconSvg from "../assets/svg/MaBatisIconSvg";
import ReactIconSvg from "../assets/svg/ReactIconSvg";
import GitHubIconSvg from "../assets/svg/GitHubIconSvg";
import KubenetesIconSvg from "../assets/svg/KubenetesIconSvg";
import DockerIconSvg from "../assets/svg/DockerIconSvg";

const Timeline = () => {
  return (
    <div id="history">
      <div className="items-container">
        <h1>프로젝트 경력 (2022.08 ~ )</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{background: 'white', color: 'rgb(39, 40, 34)'}}
              contentArrowStyle={{borderRight: '7px solid  white'}}
              date="2022.09 - 2023.01"
              iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
          >
            <h3 className="vertical-timeline-element-title">삼성 모니모 App. </h3>
            <h4 className="vertical-timeline-element-subtitle">2022.09 - 2023.01</h4>
            <p><h4>역할 : Front Engineer | BackAnd Engineer</h4></p>
            <p><h4> 기술 스텍 </h4></p>
            <p><strong>Front : Vue.Js <VueIconSvg/> | Vuex </strong></p>
            <p><strong>Back : Spring Boot <SpringBootIconSvg/>/ Mybatis <MaBatisIconSvg/></strong></p>
            <br/>
            <p><strong>형상관리 : SVN </strong></p>
            <br/>
            <p><strong>개발 목록 🔨</strong></p>
            <ul>
              <li><strong>1. </strong> 보험 거래내역 조회,보험 가입 확인,보험 계약 대출 정액분할 상환 컴포넌트 개발,백엔드 로직 개발</li>
              <li><strong>2. </strong>삼성 내부 공용 API를 호출하여 (보험 가입 확인) 페이지 추가개발</li>
              <li><strong>3. </strong>소득 세액 공제 납입 증명서 출력 백엔드 로직 개발</li>
              <li><strong>4. </strong>연금 수령개시 신청 , 보험 자동 송금 신청해지 , 중도인출 신청 API 개발</li>
            </ul>
            <br/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2023.02 - 2023.05"
              iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
          >
            <h3 className="vertical-timeline-element-title">한진 훗타운 배송대행 파트 구축.</h3>
            <h4 className="vertical-timeline-element-subtitle">2023.02 - 2023.05</h4>
            <p><h4>역할 : Front Engineer | BackAnd Engineer</h4></p>
            <p><h4> 기술 스텍 </h4></p>
            <p><strong>Front : Vue.Js3 (Composition API)<VueIconSvg/> | Vuex </strong></p>
            <p><strong>Back : Spring Boot <SpringBootIconSvg/>/ Mybatis <MaBatisIconSvg/></strong></p>
            <br/>
            <p><strong>형상관리 : Git LAB , AWS</strong></p>
            <br/>
            <p><strong>개발 목록 🔨</strong></p>
            <ul>
              <li><strong>1. </strong>배송 대행 탭 내 배송대행 현황 파트 컴포넌트,백엔드 API 개발</li>
              <li><strong>2. </strong>사줘요,팔아요 파트와 연계하여 배송대행 현황 , 상세페이지 프론트,백엔드 로직 개발</li>
              <li><strong>3. </strong>소득 세액 공제 납입 증명서 출력 백엔드 로직 개발</li>
              <li><strong>4. </strong>화면 상품 (추가,수정) ,옵션수정(추가서비스, 배송비 결제옵션) , 수취인 정보 수정 , 상품폐기페이지 프론트,백엔드
                로직 개발
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2023.05 - 2023.07"
              iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
          >
            <h3 className="vertical-timeline-element-title">라임 컴퍼니 His 병원 내부 개발 솔루션 .</h3>
            <h4 className="vertical-timeline-element-subtitle">2023.05 - 2023.07</h4>
            <p><h4>역할 : Front Engineer</h4></p>
            <p><h4> 기술 스텍 </h4></p>
            <p><strong>Front : React.Js <ReactIconSvg/> | Recoil </strong></p>
            <p><strong>Back : Spring Boot <SpringBootIconSvg/>/ Mybatis <MaBatisIconSvg/></strong></p>
            <br/>
            <p><strong>형상관리 : Git Hub <GitHubIconSvg/></strong></p>
            <br/>
            <p><strong>개발 목록 🔨</strong></p>
            <ul>
              <li><strong>1. </strong>접수,진료대기,예약대기,환자정보,문진및 바이탈 팝업,진단서 등록 팝업</li>
              <li><strong>2. </strong>공통 컴포넌트(파일업로드)</li>
              <li><strong>3. </strong>모바일용 페이지(환자 접수 화면) 개발</li>
              <li><strong>3. </strong>App.js 의 라우터등 설정 , 토큰인증 관련 네비게이션 가드 프론트 처리 경험 , 토큰 , 예외처리 Axios 재정의 경험</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2023.08 - 2023.09"
              iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
          >
            <h3 className="vertical-timeline-element-title">라임 컴퍼니 HR(인사) 관리시스템 웹&앱 플랫폼 개발.</h3>
            <h4 className="vertical-timeline-element-subtitle">2023.08 - 2023.09</h4>
            <p><h4>역할 : Front Engineer | BackAnd Engineer</h4></p>
            <p><h4> 기술 스텍 </h4></p>
            <p><strong>Front : React.Js <ReactIconSvg/> | Recoil </strong></p>
            <p><strong>Back : Spring Boot <SpringBootIconSvg/>/ Mybatis <MaBatisIconSvg/></strong></p>
              <br/>
              <p><strong>형상관리 : Git Hub <GitHubIconSvg/></strong></p>
              <br/>
            <p><strong>개발 목록 🔨</strong></p>
            <ul>
              <li><strong>1. </strong>토큰을 활용해 Axios 재정의 , Router 네비게이션 가드 (토큰 확인)정의 경험</li>
              <li><strong>2. </strong>React 에서 공통 컴포넌트(input,popup,modal,번역 컴포넌트,파일업로드),공통 무한스크롤(infinity
                scroll) 개발
              </li>
              <li><strong>3. </strong>관리자용 페이지:공지사항,번역 컴포넌트,공통 컨펌창 개발</li>
              <li><strong>4. </strong>팀원 일정 조율 , 개발 리더 경험</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2023.09 - 2023.12"
              iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
          >
            <h3 className="vertical-timeline-element-title">SK Discovery HR Profile 시스템 구축 1차 .</h3>
            <h4 className="vertical-timeline-element-subtitle">2023.09 - 2023.12</h4>
            <p><h4>역할 : Front Engineer | BackAnd Engineer</h4></p>
            <p><h4> 기술 스텍 </h4></p>
            <p><strong>Front : Vue.Js3 (Composition API)<VueIconSvg/> | Pinia </strong></p>
            <p><strong>Back : Spring Boot <SpringBootIconSvg/>/ JPA</strong></p>
            <br/>
            <p><strong>형상관리 : Git Hub <GitHubIconSvg/>, AWS</strong></p>
            <br/>
            <p><strong>개발 목록 🔨</strong></p>
            <ul>
              <li><strong>1. </strong>sk에 Vue.Js 관련 아키텍처가 없어 직접 vue/vite 프로젝트 생성,설정 경험</li>
              <li><strong>2. </strong>Axios 관련 토큰 인증 재정의 , vite config 를 직접 적용하며 라이브러리,커스텀</li>
              <li><strong>3. </strong>공통 컴포넌트(input,popup,modal), 모바일용 공통 무한스크롤(infinity scroll) 개발</li>
              <li><strong>4. </strong>내부 사원 관리용 사용자 프로필 등록 시스템 페이지 개발</li>
              <li><strong>5. </strong>Hirachy 구조를 가진 수평형,수직형 조직도 컴포넌트 개발</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2023.12 - 2025.01"
              iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
          >
            <h3 className="vertical-timeline-element-title">삼성디스플레이 대사우 시스템 RPA 포털 운영.</h3>
            <h4 className="vertical-timeline-element-subtitle">2023.12 - 2025.01</h4>
            <p><h4>역할 : Front Engineer | BackAnd Engineer</h4></p>
            <p><h4> 기술 스텍 </h4></p>
            <p><strong>Front : Vue.Js2,Vue.Js3 (Composition API)<VueIconSvg/> | Vuex </strong></p>
            <p><strong>Back : Spring Boot <SpringBootIconSvg/>/ MyBatis <MaBatisIconSvg/></strong></p>
            <br/>
            <p><strong>형상관리 : Git Hub <GitHubIconSvg/></strong></p>
            <p><strong>클라우드 : Docker <DockerIconSvg/> , Kubernetes(K8s) <KubenetesIconSvg/> , Redii , Jenkins</strong></p>
            <br/>
            <p><strong>개발 목록 🔨</strong></p>
            <ul>
              <li><strong>1. </strong>삼성디스플레이 내 RPA 포털 추가 개발,유지보수,서버관리,DBA</li>
              <li><strong>2. </strong>RPA 포털 전체 유지보수(프론트,백엔드)</li>
              <li><strong>3. </strong>추가 개발건,오류 수정</li>
              <li><strong>4. </strong>내부 사원 관리용 사용자 프로필 등록 시스템 페이지 개발</li>
              <li><strong>5. </strong>클라우드 기반 서버관리</li>
              <li><strong>6. </strong>스프링 시큐리티 provider 에서 권한 예외처리 추가 경험</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;