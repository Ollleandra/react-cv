import React, { Component } from 'react';
import avatar from './img/avatar.png';
import './css/app.css';

const SKILLS = [
    { name: "HTML5", level: 8},
    { name: "CSS3", level: 5},
    { name: "JavaScript", level: 10},
    { name: "ReactJS", level: 8 },
    { name: "AngularJS", level: 8 },
];
const CX = [ 10, 40, 70, 100, 130, 160, 190, 220, 250, 280];
class AppHeader extends Component {
  render() {
    return (
      <header className="AppHeader">
          <nav id="home">
              <div className="header-logo">
                  <a className="logo" href="#">&#60;&#47;&#62;</a>
              </div>
              <ul className="navbar-nav">
                  <li><a className="active" href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </nav>
          <h1>Name Surname</h1>
          <p className="desc">Front-end Developer</p>
      </header>
    );
  }
}
class AppAbout extends Component {
    render() {
        return (
            <section className="AppAbout" id="about">
                <h2>About</h2>
                <div>
                    <dl>
                        <dt>Goals</dt>
                        <dd>
                            Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum.
                        </dd>
                    </dl>
                    <img src={avatar} alt="avatar" />
                    <dl>
                            <dt>Dreams</dt>
                            <dd>
                                Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum.
                            </dd>
                    </dl>
                </div>
            </section>
        );
    }
}
class SkillLevel extends Component {
    render() {
        return (
            <dl className="SkillLevel">
                <dt>{this.props.name}</dt>
                <dd>
                    <svg width="290" height="20">
                        <g>
                            {
                                CX.map((elem,id)=>{
                                    return (
                                        <circle fill={id<this.props.level ? "Gray" : "LightGray"}  key={id} r="10" cx={elem} cy="10"/>
                                    );})
                            }
                        </g>
                    </svg>
                </dd>
            </dl>
        );
    }
}
class AppSkills extends Component {
    render() {
        return (
            <section className="AppSkills" id="skills">
                <h2>Skills</h2>
                <div className="Skills">
                    {
                        SKILLS.map(function(el) {
                            return <SkillLevel
                                key={el.id}
                                name={el.name}
                                level={el.level}
                            />;
                        })
                    }
                </div>
            </section>
        );
    }
}
class InputName extends Component {
  constructor() {
        super();
        this.state = {myValue: ''};
    }
  handleNameInput(event) {
        this.setState({myValue: event.target.value});
        console.log("Input Name: " + event.target.value);
  }
  render() {
    return (
        <input type="text" placeholder="Name" value={this.state.myValue} onChange={this.handleNameInput.bind(this)} />
    );
  }
}
class InputEmail extends Component {
    constructor() {
        super();
        this.state = {EValue: ''};
    }
    handleEmailInput(event) {
        this.setState({EValue: event.target.value});
        console.log("Input Email: " + event.target.value);
    }
    render() {
        return (
            <input type="email" placeholder="Email" value={this.state.EValue} onChange={this.handleEmailInput.bind(this)} />
        );
    }
}
class InputText extends Component {
    constructor() {
        super();
        this.state = {TValue: ''};
    }
    handleTextInput(event) {
        this.setState({TValue: event.target.value});
        console.log("Input Text: " + event.target.value);
    }
    render() {
        return (
            <textarea cols="30" rows="10" placeholder="Send a message" value={this.state.TValue} onChange={this.handleTextInput.bind(this)}></textarea>
        );
    }
}
class AppContact extends Component {
    render() {
        return (
            <section className="AppContact" id="contact">
                <h2>Contact</h2>
                <div>
                    <div className="section-contacts">
                        <dl>
                            <dt>Phone number:</dt>
                            <dd><a href="tel:+380666666666">+38066-66-66-666</a></dd>
                        </dl>
                        <dl>
                            <dt>Email:</dt>
                            <dd><a href="mailto:mail@gmail.com">mail@gmail.com</a></dd>
                        </dl>
                        <dl>
                            <dt>Skype:</dt>
                            <dd><a href="skype:mySkypeAcc?call">mySkypeAcc</a></dd>
                        </dl>
                    </div>
                    <form action="">
                        <InputName></InputName><br/>
                        <InputEmail></InputEmail><br/>
                        <InputText></InputText><br/>
                        <button>Send</button>
                    </form>
                </div>
            </section>
        );
    }
}
class AppFooter extends Component {
    render() {
        return (
            <footer className="AppFooter">
                <nav>
                    <div className="footer-contacts">
                        <p><a href="tel:+380666666666">+38066-66-66-666</a></p>
                        <p><a href="mailto:mail@gmail.com">mail@gmail.com</a></p>
                        <p><a href="skype:mySkypeAcc?call">mySkypeAcc</a></p>
                    </div>
                    <div className="footer-logo">
                        <a className="logo" href="#home">&#60;&#47;&#62;</a>
                    </div>
                </nav>
            </footer>
        );
    }
}
class App extends Component {
    render() {
        return (
            <main className="App">
                    <AppHeader></AppHeader>
                    <AppAbout></AppAbout>
                    <AppSkills></AppSkills>
                    <AppContact></AppContact>
                    <AppFooter></AppFooter>
            </main>
        );
    }
}
export default App;