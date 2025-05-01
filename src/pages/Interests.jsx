import React, { useState } from 'react'
import Panel from '../components/Panel'
import PageTemplate from './PageTemplate'

export default function Interests() {
  const [activePanel, setActivePanel] = useState(null)
  
  const panelContent = {
    "Art": ["Art? Where? I'm currently learning and working on it...", "",
      "In the meanwhile, here's some of my favorite artists:",
      `• <a href="https://x.com/chohui94" target="_blank" rel="noopener noreferrer">chohui94</a>`,
      `• <a href="https://x.com/minnnnnnnim" target="_blank" rel="noopener noreferrer">minnnnnnnim</a>`,
      `• <a href="https://x.com/kieed23232" target="_blank" rel="noopener noreferrer">kieed23232</a>`,
      `• <a href="https://x.com/john_kafka02" target="_blank" rel="noopener noreferrer">john_kafka02</a>`,
      `• <a href="https://x.com/Dino_illus" target="_blank" rel="noopener noreferrer">Dino_illus</a>`,
      `• <a href="https://x.com/REDUM4" target="_blank" rel="noopener noreferrer">REDUM4</a>`,
      `• <a href="https://x.com/greypidjun" target="_blank" rel="noopener noreferrer">greypidjun</a>`,
      // `• : <a href="" target="_blank" rel="noopener noreferrer"></a>`,
    ].join('\n'),
    "Gaming": [
      // "Gaming has always been one of my biggest hobbies and passions and is one of the main reasons as to how I got interested in persuing software. Growing up, Minecraft was one of my favorite games and my biggest entry into thinking about how circuits and programming worked. I used to do a lot of redstone contraptions and random command block ideas alongside playing with a bunch of mods and this got me interested in learning more about circuits and how mods were made. I always found it really funny whenever we would get introduced to certain topics in classes and I would realize that I've heard a lot of these terms like gates and latches before in redstone tutorials. ", "",
      // "My favorite genres are RPGs and Roguelikes of which, one large aspect of these sorts of games is generally learning about enemies and their various AI/patterns which has always been one of my favorite parts about these types of games and what sparked my interest in AI. Overall, this hobby in gaming is what inspired my interest in AI, machine learning, and programming in general and as a result, the main reason why I wanted to pursue Computer Engineering at the University of Waterloo as I thought it would be a good opportunity to gain experience in such things both in class and through coops.", "",
      // "Gaming has also been a big influence on my other interests, such as art and the sort of music I listen to, with a large number of music I listen to being soundtracks from games like Arknights, Nier Automata, and Stellar Blade.", "",
      
      "Gaming has always been one of my biggest hobbies and passions and is one of the main reasons as to how I got interested in persuing software.", "",
      "Some of my favorite games are:",
      `• <img src="/w553li.github.io/images/Arknights.jpg" style="max-height: 20px;"/> <a href="https://www.arknights.global/" target="_blank" rel="noopener noreferrer">Arknights</a>`,
      `• <img src="/w553li.github.io/images/Hades.jpg" style="max-height: 20px;"/> <a href="https://www.supergiantgames.com/games/hades/" target="_blank" rel="noopener noreferrer">Hades</a>`,
      `• <img src="/w553li.github.io/images/Minecraft.jpg" style="max-height: 20px;"/> <a href="https://www.minecraft.net/" target="_blank" rel="noopener noreferrer">Minecraft</a>`,
      `• <img src="/w553li.github.io/images/Nier.jpg" style="max-height: 20px;"/> <a href="https://www.niergame.com/en/" target="_blank" rel="noopener noreferrer">Nier Automata</a>`,
      `• <img src="/w553li.github.io/images/SearingExarch.jpg" style="max-width: 20px;"/> <a href="https://www.pathofexile.com/" target="_blank" rel="noopener noreferrer">Path of Exile</a>`,
      `• <img src="/w553li.github.io/images/Terraria.jpg" style="max-width: 20px;"/> <a href="https://terraria.org/" target="_blank" rel="noopener noreferrer">Terraria</a>`,
    ].join('\n'),
    "Reading": [
      "Reading? Reading. I enjoy reading manga and light nodels.", "", 
      "Some of my recent favorites are:",
      // `• Apothecary Diaries`,
      // `• The Ancient Magus' Bride`,
      // `• Blue Box`,
      // `• Delicious in Dungeon`,
      // `• Frieren: Beyond Journey's End`,
      // `• The Girl From the Other Side: Siúil, a Rún`,
      `• <img src="/w553li.github.io/images/ApothecaryDiaries.jpg" style="max-width: 20px;"/> <a href="https://anilist.co/manga/99026/Kusuriya-no-Hitorigoto/" target="_blank" rel="noopener noreferrer">Apothecary Diaries</a>`,
      `• <img src="/w553li.github.io/images/MagusBride.jpg" style="max-width: 20px;"/> <a href="https://anilist.co/manga/85435/Mahoutsukai-no-Yome/" target="_blank" rel="noopener noreferrer">The Ancient Magus' Bride</a>`,
      `• <img src="/w553li.github.io/images/BlueBox.jpg" style="max-width: 20px;"/> <a href="https://anilist.co/manga/132182/Ao-no-Hako/" target="_blank" rel="noopener noreferrer">Blue Box</a>`,
      `• <img src="/w553li.github.io/images/DungeonMeshi.jpg" style="max-width: 20px;"/> <a href="https://anilist.co/manga/86082/Dungeon-Meshi/" target="_blank" rel="noopener noreferrer">Delicious in Dungeon</a>`,
      `• <img src="/w553li.github.io/images/Frieren.jpg" style="max-width: 20px;"/> <a href="https://anilist.co/manga/118586/Frieren-Beyond-Journeys-End/" target="_blank" rel="noopener noreferrer">Frieren: Beyond Journey's End</a>`,
      `• <img src="/w553li.github.io/images/OtherSide.jpg" style="max-width: 20px;"/> <a href="https://anilist.co/manga/86770/Totsukuni-no-Shoujo/" target="_blank" rel="noopener noreferrer">The Girl From the Other Side: Siúil, a Rún</a>`,

      // `• : <a href="" target="_blank" rel="noopener noreferrer"></a>`,
    ].join('\n'),
    "Music": ["I enjoy listening to some beeps and boops and am looking to get into music production for fun.", "",
      "In the meanwhile, here's some of my favorite songs right now:",
      `• <a href="https://www.youtube.com/watch?v=UXV04W0U88k" target="_blank" rel="noopener noreferrer">Arknights EP - Believed Believes Believing</a>`,
      `• <a href="https://www.youtube.com/watch?v=yaE-Yk6OBfM" target="_blank" rel="noopener noreferrer">Arknights - Battleplan Extinguished Sins</a>`,
      `• <a href="https://www.youtube.com/watch?v=gpg2k7qGUDg" target="_blank" rel="noopener noreferrer">Stellar Blade - Silent Street (Type A)</a>`,
      `• <a href="https://www.youtube.com/watch?v=PLG2Uexyi9s" target="_blank" rel="noopener noreferrer">ZUTOMAYO - Hippocampal Pain</a>`,
      `• <a href="https://www.youtube.com/watch?v=E8RMWLoAsa0" target="_blank" rel="noopener noreferrer">ZUTOMAYO - Blues in the Closet</a>`,
    ].join('\n'),
  }

  const handleButtonClick = (buttonName) => {
    setActivePanel(buttonName)
  }

  return (
    <>
      <PageTemplate 
        title="Interests"
        sidebars={["Art", "Gaming", "Reading", "Music"]}
        onSidebarClick={handleButtonClick}
        footer="Some of my interests"
      ></PageTemplate>

      {/* <ButtonPanel buttons={["a", "b", "c", "d", "e", "f", "g", "h", "i", 'j', 'k', 'l', 'm', 'n', 'o', 'p']}></ButtonPanel> */}
      {/* <ButtonPanel buttons={buttonPanels}></ButtonPanel> */}

      {activePanel && (
        <Panel 
          title={activePanel}
          text={panelContent[activePanel]}
        />
      )}
    </>
  )
}
