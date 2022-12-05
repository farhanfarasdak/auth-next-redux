import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../components/button'
import { loadingAction } from '../redux/reducer/loading'
import style from '../styles/LandingPage.module.css'
import { firebaseLogin, firebaseRegister } from '../util/auth'

const LandingPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [regEmail, setRegEmail] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [regAge, setRegAge] = useState('')
  const [regJob, setRegJob] = useState('')
  const [regMsg, setRegMsg] = useState('')

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginMsg, setLoginMsg] = useState('')

  const submitRegister = async () => {
    const resp = await firebaseRegister(regEmail, regPassword, regJob, regAge)
    if(resp.status === 'ERROR'){
      setRegMsg(resp.message)
    }else{
      setRegMsg('SUCCESS')
      router.push('/profile')
    }
  }

  const submitLogin = async () => {
    dispatch( loadingAction.toggleLoadingStatus() )
    const resp = await firebaseLogin(loginEmail, loginPassword)
    if(resp.status === 'SUCCESS'){
      dispatch( loadingAction.toggleLoadingStatus() )
      router.push('/profile')
    }else{
      dispatch( loadingAction.toggleLoadingStatus() )
      setLoginMsg(resp.message)
    }
  }

  return(
    <div>
      <div className={style.container}>
        <div className={style.box}>
          <h2>Login PAGE TEST</h2>
          <input
            placeholder='email'
            onChange={(e) => setLoginEmail(e.target.value)}
            />
          <input 
            placeholder='password'
            type='password'
            onChange={(e) => setLoginPassword(e.target.value)}
            />
          <p>{loginMsg}</p>
          <Button title='Login' onClick={submitLogin}/>
        </div>
        <div className={style.box}>
          <h2>Register</h2>
          <input 
            placeholder='email'
            onChange={(e) => setRegEmail(e.target.value)}
            />
          <input 
            placeholder='password'
            type='password'
            onChange={(e) => setRegPassword(e.target.value)}
            />
          <input 
            placeholder='job'
            onChange={(e) => setRegJob(e.target.value)}
            />
          <input 
            placeholder='age'
            onChange={(e) => setRegAge(e.target.value)}
            />
          <p>{regMsg}</p>
          <Button onClick={submitRegister} title='Register' color='yellow'/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage