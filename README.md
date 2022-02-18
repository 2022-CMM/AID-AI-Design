# AID | AI-Design

<div>
    <p align = "center">
	    <img width = "70" src = "./readmeimg/logo.svg">
    </p>
</div>

## Overview
<b>AID는 국내 에코 크리에이터들과 소비자를 이어주는 1:1 온라인 맞춤형 서비스 입니다.</b>
- 배경

    우리나라에서는 매년 소각, 폐기되는 의류의 양은 2190만톤의 이산화탄소를 발생시킵니다.

    막대한 폐의류를 처리하는 데 배출되는 탄소의 줄이기 위하여 `폐의류 업사이클링`을 제안합니다.

- 시장 현황 분석

    현재 국내 업사이클링 시장 규모는 17년 기준으로 전체 폐기물 시장 5조원 중 약 40억원으로 0.08%에 불과할 정도로 국내 업사이클링 시장은 걸음마 단계라고 할 수 있습니다.

    '지속가능', '업사이클링' 관련 검색량은 20년대비 10배 가까이 증가할 정도로 업사이클에 대한 대중의 관심은 증가하고 있습니다.

    `ESG 경영의` 필요성이 증가하면서, 향후 업사이클링의 주목도는 더욱 올라가며 높은 가치를 가질 것으로 예상합니다.

    국내 업사이클 제품 유통 비율과 디자이너 수는 수도권에 80~90%로 특정 지역에 집중적으로 분포되어 있습니다. 이에 반해, 비수도권은 약 10%로 유통이 미진한 것으로 보입니다.

- 문제 및 해결 방안

    저희는 업사이클링 시장의 고충과 특성인 업사이클러의 불안정한 소재 수급이 불안정한 점, 대부분 5인 이하의 영세 규모인 점을 해결하기 위한 솔루션을 제시합니다.    

- AI 활용안

    소비자가 가진 폐의류의 스타일을 반영하고, 디자이너의 이미지를 AI를 이용해 합성하여 해당 폐의류의 업사이클링 디자인 예상도를 미리 제안합니다.

## 기능 소개
---
>앱 영상을 gif로 넣기
## 기대 효과
---
- 업사이클링 시장에 안정적인 재료 수급과 판로 제공
- 디자이너가 다양한 디자인을 선보일 수 있는 기회의 창을 제공
- 업사이클링 소재 데이터 확보를 통해 업사이클 가능 여부를 판별하는 AI가 발전할 수 있고, 에코크리에이터-폐기물 배출기관과의 소통 문제도 해결 기대

## How to Execute
---
- Django Backend API
```
[settings]
Request conf.yaml from Administartor
Move conf.yaml to directory 'CMMApi/'

[Terminal]
pip install -r requiements.txt
python manage.py runserver
```

## API
- User Manage
```
[login]
/rest-auth/login/

[register]
/rest-auth/register/

[logout]
/rest-auth/logout/
```
