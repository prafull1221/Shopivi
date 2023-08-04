<div>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style dangerouslySetInnerHTML={{__html: "\n* {box-sizing: border-box;}\nbody {font-family: Verdana, sans-serif;}\n.mySlides {display: none;}\nimg {vertical-align: middle;}\n\n/* Slideshow container */\n.slideshow-container {\n  max-width: 1000px;\n  position: relative;\n  margin: auto;\n}\n\n/* Caption text */\n.text {\n  color: #f2f2f2;\n  font-size: 15px;\n  padding: 8px 12px;\n  position: absolute;\n  bottom: 8px;\n  width: 100%;\n  text-align: center;\n}\n\n/* Number text (1/3 etc) */\n.numbertext {\n  color: #f2f2f2;\n  font-size: 12px;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n/* The dots/bullets/indicators */\n.dot {\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.active {\n  background-color: #717171;\n}\n\n/* Fading animation */\n.fade {\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@keyframes fade {\n  from {opacity: .4} \n  to {opacity: 1}\n}\n\n/* On smaller screens, decrease text size */\n@media only screen and (max-width: 300px) {\n  .text {font-size: 11px}\n}\n" }} />
  <h2>Automatic Slideshow</h2>
  <p>Change image every 2 seconds:</p>
  <div className="slideshow-container">
    <div className="mySlides fade">
      <div className="numbertext">1 / 3</div>
      <img src="img_nature_wide.jpg" style={{width: '100%'}} />
      <div className="text">Caption Text</div>
    </div>
    <div className="mySlides fade">
      <div className="numbertext">2 / 3</div>
      <img src="img_snow_wide.jpg" style={{width: '100%'}} />
      <div className="text">Caption Two</div>
    </div>
    <div className="mySlides fade">
      <div className="numbertext">3 / 3</div>
      <img src="img_mountains_wide.jpg" style={{width: '100%'}} />
      <div className="text">Caption Three</div>
    </div>
  </div>
  <br />
  <div style={{textAlign: 'center'}}>
    <span className="dot" /> 
    <span className="dot" /> 
    <span className="dot" /> 
  </div>
</div>
