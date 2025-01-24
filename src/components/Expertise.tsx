import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact, faDocker, faPython, faVuejs, faMixcloud} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React.js",
    "Vue.js (2,3)",
    "Spring Boot",
    "Mybatis",
    "Spring JPA",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "Kubernetes (K8s)",
    "Redii",
    "Jenkins",
];

const labelsThird = [
    "Oracle",
    "MySql",
    "PostGre Sql"
];

const Expertise = ()=> {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <FontAwesomeIcon icon={faVuejs} size="3x"/>
                    <h3>안녕하세요 풀스택 개발자 고승범 입니다.</h3>
                    <p>프로젝트 경력과 같이 프론트앤드 백엔드를 동시에 개발하는 업무를 주로 맡았었습니다.
                       프론트엔드 에서는 React.js , Vue.js 2,3버전를 활용하여 개발하였고 Axios 재정의,Vite 프로젝트로 
                       직접 프론트 아키텍처 설계, 공통 컴포넌트 개발 등 개발외에 아키텍쳐 적인 요소 또한 실무에서 설계할 정도로 사용가능합니다. 
                       백엔드 에서는 Spring Boot , MyBatis , JPA 를 실무에서 다뤘으며 데이터 베이스 설계와 연동,API 개발, 그리고
                       비즈니스 로직 구현에 이르기까지 다양한 역할을 경험하며 전반적인 시스템 개발 프로세스에 깊이 있는 이해를 갖추게 되었습니다.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Git , Docker , Kubernetes (K8s), Redii ,Jenkins 등 클라우드 환경에서 직접 파이프라인 설정 또한 실무에서 운영을 직접하며 경험이있고 사용가능합니다.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMixcloud} size="3x"/>
                    <h3>Data Extraction And Analysis</h3>
                    <p>실무에서 다양한 업무에서 직접 쿼리 개발 , 데이터 모델링을한 경험이 있고 운영을 하며 고객의 통계 요청으로
                        통계 데이터 분석 및 주요 인사이트를 도출하여 고객및 팀에게 명확하고 유용한 정보를 전달가능합니다.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;