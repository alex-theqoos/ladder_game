import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "pages-sections/Components-Sections/SectionPills.js";
import SectionNotifications from "pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
import SectionExamples from "pages-sections/Components-Sections/SectionExamples.js";
import SectionDownload from "pages-sections/Components-Sections/SectionDownload.js";

import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export async function getStaticProps(context) {
  let dev = ['Jay', 'Alex', 'David', "Anderson", "William"]
  let cLevel = ['Sungman', 'Donny']
  let contents = ['Roy', "Amy", 'Jason']
  let planning = ['Mia', 'JB']
  let marketing = ['Peter', 'Thomas', 'Amanda']
  let part = {
    "dev": dev,
    "cLevel": cLevel,
    "contents": contents,
    "planning": planning,
    "marketing": marketing
  }

  let group_1 = []
  let group_2 = []
  let group_3 = []
  let group_4 = []
  let group_5 = []

  let group = {
    "group_1": group_1,
    "group_2": group_2,
    "group_3": group_3,
    "group_4": group_4,
    "group_5": group_5
  }
  return {
    props: {
      part,
      group
    }, // will be passed to the page component as props
  }
}

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const length = 15
  const team_count = 5
  
  let selectedPart = []
  let group_count = 0


  
  function CrateString(data) {
    let result = ''
    data.forEach(element => {
      result += ' ' + element
    });
    return result
  }

  
  function ChooseMember () {
    let temp = JSON.parse(JSON.stringify(props.part))
    if (group_count == 3) {
      selectedPart = []
    }
    for (var part in selectedPart) {
      delete temp[selectedPart[part]]
    }
    let total_count = 0
    for (var part in temp) {
      total_count += temp[part].length
    }
  
    let min = Math.ceil(1)
    let max = Math.floor(total_count)
    let random = Math.floor(Math.random() * (max - min + 1)) + min

    let i = 0
    loop1:
      for (var part in temp) {
        for (var member in temp[part]) {
          if (i == random - 1){
            console.log(temp[part][member])
            for (var group_i in props.group){
              if (props.group[group_i].length < 3 ) {
                selectedPart.push(part)
                group_count += 1

                props.group[group_i].push(props.part[part][member])
                props.part[part].splice(member, 1)
                break
              }
            }
            break loop1
          }
          i += 1
        }
      }
  };

  return (
    <div>
      <Header
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/nextjs_header.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                {/* <h1 className={classes.title}>NextJS Material Kit.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material Kit based on Material-UI and NextJS.
                </h3> */}
                <div className={classes.grid}>
                <h3>C-Level : {CrateString(props.part.cLevel)}<br></br></h3>
                <h3>개발팀 : {CrateString(props.part.dev)}<br></br></h3>
                <h3>마케팅 : {CrateString(props.part.marketing)}<br></br></h3>
                <h3>콘텐츠 : {CrateString(props.part.contents)}<br></br></h3>
                <h3>기획, 디자인 : {CrateString(props.part.planning)}<br></br></h3>
                </div>
                <br></br>
                <div className={classes.grid}>
                <h3>1조 : {CrateString(props.group.group_1)}<br></br></h3>
                <h3>2조 : {CrateString(props.group.group_2)}<br></br></h3>
                <h3>3조 : {CrateString(props.group.group_3)}<br></br></h3>
                <h3>4조 : {CrateString(props.group.group_4)}<br></br></h3>
                <h3>5조 : {CrateString(props.group.group_5)}<br></br></h3>
                </div>
                <Button color="success" onClick={()=>ChooseMember()}>선택</Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      {/* <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link href="/login">
            <a className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </a>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />
      </div> */}
      <Footer />
    </div>
  );
}
