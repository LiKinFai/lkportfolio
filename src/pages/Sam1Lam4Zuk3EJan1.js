import '.././stylesheets/Sam1Lam4Zuk3EJan1.css'

export function Sam1Lam4Zuk3EJan1() {
  return <div className='detail-body'>
  <div className='detail-description'>
    <img className='detail-photo' alt="Sam1Lam4Zuk3EJan1" src={require(`../images/sam1lam4zuk3ejan1.png`)}></img>
    <article className='detail-article'>
      <span className='detail-title'>Sam1Lam4Zuk3EJan1</span><br></br>
      My first ever <b>Javascript</b> project or even first ever <b>Javascript</b> code. 
      This school group project contains two parts: a login page, which is coded by my three other groupmates. 
      And a real-time multi-player Hide-n-Seek game (more like a game of tag to be precise). The game was built 
      with <b>p5.js</b> for the game mechanics, and <b>SocketIO</b> and <b>Express</b> for server-client communication. 
      <br></br>
      In the game, players can either be the Hiders or the Seeker, which the latter one can catch the former one by simply 
      colliding with them. There are also coins, quest items and revival items for the Hiders to pick up.
    </article>
  </div>
  <div className='detail-info'>
    <span className='feature'>Features: </span><span className='listoffeatures'><b>real-time multiplayer</b>, <b>client-server</b> ...etc</span><br></br>
    <span className='related'>Related Tech: </span><span className='techs'>HTML, Javascript, p5.js, Express, SocketIO</span>
  </div>
  <br></br>
  <div className='sources'>
      <a href='https://github.com/LiKinFai/csci3100project_2022_C7' target={'_blank'} rel="noreferrer" ><img className='source-images' alt="GitHub" src={require(`../images/github.png`)}/></a>
      <a href='https://github.com/LiKinFai/EditedPDF/blob/main/editedreport.pdf' target={'_blank'} rel="noreferrer" ><img className='source-images' alt="PDF" src={require(`../images/link.png`)}/></a>
  </div>
</div>

}