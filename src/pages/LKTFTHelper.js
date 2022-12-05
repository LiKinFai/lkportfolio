import '.././stylesheets/LKTFTHelper.css'

export function LKTFTHelper() {
  return <div>
    <div className='detail-body'>
      <div className='detail-description'>
        <img className='detail-photo' alt="LK's TFT Helper" src={require(`../images/lktfthelper2.png`)}></img>
        <article className='detail-article'>
          <span className='detail-title'>LK's TFT Helper</span><br></br>
          This project contains four pages: <b>1.</b> Home page. <b>2.</b> Player Search Page, which allows users to search for a player's information, 
          and a dedicated proxy server built with <b>Express</b> to handle API requests. <b>3.</b> Odds page, which stores the chances of rolling for every 
          level in the game TFT. <b>4.</b> Rolling Cost Calculator page, which takes input from users and calculate the cost for rolling for the users
          in real time.
        </article>
      </div>
      <div className='detail-info'>
        <span className='feature'>Features: </span><span className='listoffeatures'><b>proxy server</b>, <b>hamburger menu</b>, <b>loading spinner</b>, <b>mobile responsive</b>, <b>API fetching</b> ...etc</span><br></br>
        <span className='related'>Related Tech: </span><span className='techs'>HTML, CSS, Javascript, React, Express</span>
      </div>
      <br></br>
      <div className='sources'>
          <a href='https://github.com/LiKinFai/lktfthelper' target={'_blank'} rel="noreferrer" ><img className='source-images' alt="GitHub" src={require(`../images/github.png`)}/></a>
          <a href='https://likinfai.github.io/lktfthelper/#/' target={'_blank'} rel="noreferrer" ><img className='source-images' alt="Page" src={require(`../images/link.png`)}/></a>
      </div>
    </div>
    <div className='contact' id='contact'>
    <div className='contact-body'>
      <header className='contact-header'>Contact Me</header>
      <div className='contact-buttons'>
        <a href='https://github.com/LiKinFai' target={'_blank'} rel="noreferrer" ><img className='contact-images' alt="GitHub" src={require(`../images/github.png`)}/></a>
        <a href='https://www.linkedin.com/in/%E5%81%A5%E8%BC%9D-%E6%9D%8E-195845259/' target={'_blank'} rel="noreferrer" ><img className='contact-images' alt="LinkedIn" src={require(`../images/linkedin.png`)}/></a>
        <a href="mailto: likinfaiemail@gmail.com" target={'_blank'} rel="noreferrer" ><img className='contact-images' alt="Email" src={require(`../images/email.png`)}/></a>
      </div>
    </div>
  </div>
</div>

}