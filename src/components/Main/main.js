import React, {useState, useRef} from 'react';
import { Field, reduxForm } from 'redux-form';
import {Input} from '../../Utils/formControl.js';
import {File} from '../../Utils/formControl.js';
import { Redirect } from 'react-router-dom';
import main from './main.module.css';
import {required , maxLengthCreator, minLengthCreator} from '../../Utils/validator.js';
import microphone from '../../img/microphone.png'
import write from '../../img/edit.png'
import { ReactMic } from 'react-mic';
import rec from '../../img/rec.png';
import MicRecorder from 'mic-recorder-to-mp3';
import download from '../../img/download.png'
import d from './download.module.css'
const maxLength20 = maxLengthCreator(100);
const minLength8 = minLengthCreator(8);

class Main  extends React.Component {
  constructor(props) {
      super(props);
      this.inputRef = React.createRef(null);
      this.divRefFile = React.createRef();
      this.divRefLine = React.createRef();
      this.LineValue = React.createRef();
      }
      state = {
        redirect:0,
        isMusikStr:false,
        isEnteredMessage:false,
        isSendedFile:false
      }
    
/* загрузка строки  */


/* Переключатель на загрузку файла */
handleClickFile = (e) => {

  this.divRefLine.current.classList.remove(main.imgBox1)
  this.divRefFile.current.classList.add(main.imgBox1)
}

/* Переключатель на запсь текста  */
handleClickLine = (e) => {
  e.preventDefault();
  this.divRefFile.current.classList.remove(main.imgBox1)
  this.divRefLine.current.classList.add(main.imgBox1)
}

/* нужно доделать показ ошибки */
//componentDidUpdate(prevProps, prevState) {
//  this.getUserLine();
//  console.log('update');
//}

/* получение строки с инпута , транформация ее и вызов коллбека  для получения данных  */

getUserLine = (e) => {
      e.preventDefault()
      let stringMusik = this.LineValue.current.value.trim();

      /*  проверка если есть строка, если ничего не написно получает правду в орорре и переводит флажки */
      if (stringMusik.length !== 0) {
          let doneStr = stringMusik.replace(/ /g, '%20');
          console.log("fsdfsd")
            //this.props.getMusicFromLyrics(doneStr);
          this.setState({
              isMusikStr: false,
              isEnteredMessage: true
          })

          console.log(this.state.isEnteredMessage)
      } else {
          this.setState({
              isMusikStr: true
          })

      }
}

render() {
  if( this.state.isEnteredMessage ) {
    return <Redirect to="/result-line" />;
   }  

  /* обработка ошибки, но пока не работает  */
 /* let isError = this.state.isMusikStr;
  console.log(isError)
  let error;
  if(isError) {
    error = <div>error</div>
  } else {
    error = null;
  }*/


  return (
    <div className={main.content_main}>
        <section className={main.dws__wrapper}>
      <div className={main.imgBox} ref={this.divRefFile} onClick={this.handleClickFile} id="ef">

        <a>
          <i className={main.fa}>
              <UploadFile  saveFile= {this.props.saveFile} />
            
          </i>
          <img  className={main.ing} src={microphone} alt=""></img>
        </a>
      </div>
    </section>
    <section className={main.dws__wrapper}>
      <div className={main.imgBox} ref={this.divRefLine} onClick={this.handleClickLine} >
      
        <a>
          <i >
            <h1 className={main.login100_form_upload__h1}>Enter song fragment</h1>
            <input type='text'  className={main.string_container__input} ref={this.LineValue} validate={[required, maxLength20]}  name='someStr'  placeholder='String from soung' />
            <button   className={main.button} onClick={this.getUserLine}> Send</button>

          </i>
          <img   className={main.ing} src={write} alt=""></img>
        </a>
      </div>
    </section>
    </div>
  )
 }
}




const MainForm = (props) => {

  return  (
    <div className={main.string_container}>
     <form  onSubmit = {props.handleSubmit}>
         <h1 className={main.login100_form_upload__h1}>Enter song fragment</h1>
         <Field component={Input}  className={main.string_container__input}  validate={[required, maxLength20]}  name={'someStr'}  placeholder='String from soung' />
         <button   className={main.button}> Send</button>
      </form>
    </div>
  )
}

const MainFormRedux = reduxForm({
  form:'postSound'
})(MainForm)




const UploadFile = (props) => {
  /*проверка на начало поиска */
  const [redirect, setRedirect] = useState(false);
  // пока не работает нужно для получания файла 
  const [record, setRecord] = useState(false);
  let chunks = [];
  let mediaOptions;
  let blobObject;
  let inputRef = useRef(null);

  let startRecording = () => {
      setRecord(true)
  }
  
  let stopRecording = () => {
      setRecord(false)
  }
  
  let onData = (recordedBlob) => {
      console.log('chunk of real-time data is: ', recordedBlob);
  }
  
  let onStop = (recordedBlob) => {
      const blob = new Blob(chunks, {type: "audio/webm;codecs=opus"})
      chunks = []
      blobObject = {
        blob,
        stopTime: Date.now(),
        options: mediaOptions,
        blobURL: window.URL.createObjectURL(blob)
      }
      console.log(blobObject)

    //props.saveFile(blobObject);
      setRedirect(true)
  }

 let uploadFile = (e) => {
    e.preventDefault();
    console.log(inputRef.current.files[0])
   props.saveFile(inputRef.current.files[0]);
   setRedirect(true)
 }



  if (redirect) {
      return <Redirect to = "/result-file" / >
  }
  return (
    <>  
      <div className={d.profile__container}>
       <div className={d.profile__images}>
         <h1 className={main.record__container_title}>Record your voice</h1>
         <input type="file" ref={inputRef} className={d.images_button}  />
          <div>
             <img  src={download} className={d.icon} alt="альтернативный текст"></img>
          </div>
         <div className={d.button__container}>
            <button className={main.button} onClick={uploadFile} >send file</button>
         </div>
         
       </div>
     </div>
    </>
  )
}
export default Main;
