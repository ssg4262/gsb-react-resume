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

const Timeline = () => {
  return (
    <div id="history">
      <div className="items-container">
        <h1>프로젝트 경력</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{background: 'white', color: 'rgb(39, 40, 34)'}}
              contentArrowStyle={{borderRight: '7px solid  white'}}
              date="(2022.09 - 2023.01)"
              iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
          >
            <h3 className="vertical-timeline-element-title">삼성 모니모 App. </h3>
            <h4 className="vertical-timeline-element-subtitle">(2022.09 - 2023.01)</h4>
            <p><strong> 기술 스텍 </strong></p>
            <p><strong>Front : Vue.Js <VueIconSvg/> | Vuex </strong></p>
            <p><strong>Back : Spring Boot <SpringBootIconSvg/>/ Mabatis <MaBatisIconSvg/></strong></p>
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
              date="2020 - 2022"
              iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Frontend Development, Backend Development, User Experience, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - 2021"
              iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
          >
            <h3 className="vertical-timeline-element-title">Staff Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Full-stack Development, API Development, User Experience
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2020 - 2020"
              iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;