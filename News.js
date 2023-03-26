import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      source: { id: "news24", name: "News24" },
      author: "Heinz Schenk",
      title:
        "Lanky Jansen deadpans fine Proteas start and ICC nomination: 'Haven't really thought about it'",
      description:
        "Marco Jansen, like he has been all his life, has been so focused on establishing himself as an international cricketer that he hasn't even taken much notice of the ICC award he's up for.",
      url: "https://www.news24.com/sport/cricket/proteas/lanky-jansen-deadpans-fine-proteas-start-and-icc-nomination-havent-really-thought-about-it-20230102",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/1112/fc2eb7528a2f472f9ece55aa1a2cf1db.jpg",
      publishedAt: "2023-01-02T20:12:19+00:00",
      content:
        "<ul><li>Marco Jansen says he didn't really notice being nominated as one of the ICC's emerging players of 2022.</li><li>The young Proteas star has made a superb start to Test cricket and admits \"thin… [+3332 chars]",
    },
    {
      source: { id: "abc-news-au", name: "ABC News (AU)" },
      author: "Kerrin Thomas",
      title:
        "Gippsland women's cricket bat maker Clare Johnston providing options for female athletes",
      description:
        "When women go searching for a cricket bat, they often find they have fewer options than their male counterparts, but Gippsland bat maker Clare Johnston hopes to change that.",
      url: "http://www.abc.net.au/news/2023-01-02/gippsland-women-cricket-bat-maker-clare-johnston-options-females/101781648",
      urlToImage:
        "https://live-production.wcms.abc-cdn.net.au/9c2cd914655eed53f20bb3885f17b3e5?impolicy=wcms_crop_resize&cropH=2268&cropW=4032&xPos=0&yPos=378&width=862&height=485",
      publishedAt: "2023-01-02T06:03:09Z",
      content:
        "When women go searching for a cricket bat, they often find they have fewer options than their male counterparts, but a Gippsland bat maker hopes to change that.\r\nClare Johnston has played cricket sin… [+4093 chars]",
    },

    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    console.log("i am a constructer from news component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <>
        <h1>NewsMonkey - Top Headlines</h1>
        <div style={{display: "flex" , flexWrap :"wrap"}}>
        {this.state.articles.map((element) => {
          return (
            <div style={{}} key={element.url}>
              <Newsitem
                title={element.title}
                description={element.description}
                imageurl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          );
        })}</div>
      </>
    );
  }
}

export default News;
